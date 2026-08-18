# Performance Audit & Deep Doctor Report

## 1. The "Long White Screen" Mystery
You mentioned the website stays on a white screen for a long time when it loads. I investigated your component tree and found exactly why this is happening.

**The Culprit: The Splash Screen + Hydration Delay**
In `src/app/components/Hero/Hero.jsx`, you have this div:
```jsx
<div id="splash" className="fixed inset-0 bg-white z-[60] flex items-center justify-center pointer-events-none"></div>
```
This white `div` covers the entire screen on initial load. Your GSAP animation is responsible for fading it out, but that animation lives inside a `useEffect` hook. 

**Why is it so slow?**
`useEffect` only executes **after** React has finished downloading, parsing, and hydrating your JavaScript bundle. Because your page's JavaScript bundle is currently massive (2.71 MB), hydration takes a very long time, especially on mobile devices or slower networks. During this entire period, the browser is frozen on that white `div`.

**How to fix it:**
1. **Use an Inline Script:** Add a tiny, blocking inline `<script>` in your `layout.js` inside the `<head>` or `<body>`. This script can check `sessionStorage.getItem("heroAnimationPlayed")` and immediately set `display: none` on the splash screen before React even downloads.
2. **CSS Animations:** For initial splash screens, CSS animations are vastly superior to JS animations because they don't wait for React hydration.

---

## 2. Massive First Load JS (2.71 MB)
I ran a production build (`npm run build`) and found that your homepage (`/`) ships with **2.71 MB** of JavaScript. A healthy Next.js page should typically be under 200 KB. This massive size is destroying your performance and SEO scores.

**Why is it so large?**
1. **Everything is a Client Component:** Almost every major section in your app (`Hero.jsx`, `Skills.jsx`, `Projects.jsx`, `Contact.jsx`, `Footer.jsx`, `Navbar.jsx`) has `"use client"` at the very top. This defeats the purpose of Next.js App Router. By making top-level layouts client components, you force Next.js to ship the code for *all* their children to the browser.
2. **Heavy Icon Libraries:** In `src/app/components/utils/getTechSkills.js`, you are importing icons from `devicons-react`. Because this file is imported by `Skills.jsx` and `Projects.jsx` (which are both client components), these SVG icons are being compiled into your JavaScript bundle instead of being rendered statically as HTML.
3. **GSAP & Framer Motion:** You are shipping two heavy animation libraries (`gsap` and `framer-motion`) to the client on the very first load.

**How to fix it:**
1. **Push `"use client"` down the tree:** Remove `"use client"` from your main layout sections (e.g., `Skills.jsx`). Let them be Server Components. If you need GSAP to animate a specific div, extract just that specific div into a small `<AnimatedWrapper>` client component, and pass the static content as `children`.
2. **Render Icons on the Server:** If icons are imported in Server Components, they are rendered as plain SVG strings in the HTML and add **zero bytes** to your JavaScript bundle.
3. **Lazy Load Below-the-Fold Components:** Use `next/dynamic` to lazy-load components like `Footer` or `Contact` so they aren't downloaded until the user scrolls near them.

---

## 3. SEO and Core Web Vitals
- **Largest Contentful Paint (LCP):** Your LCP is severely penalized by the white splash screen blocking the main content from rendering until JS executes. 
- **Interaction to Next Paint (INP):** Parsing 2.71 MB of JavaScript locks up the main thread. If a user tries to click a button or scroll while React is hydrating all those Client Components, the page will feel unresponsive and jittery.

## Immediate Action Plan
If you want to drastically improve the performance, I recommend we do the following refactor:
1. **Refactor `Hero.jsx`:** Move the splash screen logic out of `useEffect` or implement a raw inline script in `layout.jsx` to handle the `sessionStorage` check instantly.
2. **Server Component Migration:** Go through `Skills.jsx`, `Projects.jsx`, and `Contact.jsx` and remove `"use client"`. Extract only the specific GSAP/hover interactions into smaller, isolated client components.
3. **Audit `getTechSkills.js`:** Ensure icons are only rendered inside Server Components.
