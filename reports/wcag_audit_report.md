# WCAG 2.1 Accessibility Audit Report

This report outlines the web accessibility audit conducted on the portfolio application. The evaluation was performed against the **WCAG 2.1 Level A & AA** standards.

## Executive Summary
While the visual layout of the portfolio is modern and premium, several static structure issues violate standard accessibility guidelines. Key issues include **empty interactive elements** (icon buttons with no text names), **non-semantic button constructs** (using `<div>` for clickable navigation targets), **unstructured heading structures**, and **missing labels** for form inputs.

Additionally, a critical layout styling issue was discovered: several components on the showcase pages utilize custom colors (such as `char`, `cream`, `ember`, and `sand`) that are **not configured in your Tailwind configuration**, resulting in undefined styling defaults.

---

## 🚨 Critical Issues (Must Fix)

### 1. Interactive Elements Lacking Accessible Names (WCAG 2.1 4.1.2 - Name, Role, Value)
Screen readers rely on text names to announce interactive elements. Icon-only buttons with no textual content are announced as empty or "button", making them completely unusable for visually impaired visitors.

*   **Chat Voice & Video Call Header Buttons** (`ChatPage.jsx:L122`, `ChatPage.jsx:L128`):
    *   *Violation:* The "Call" (`IoCallOutline`) and "Video Call" (`IoVideocamOutline`) buttons only render icons and have no `aria-label`.
    *   *Fix:* Add `aria-label="Start voice call"` and `aria-label="Start video call"`.
*   **Chat Input Send Button** (`message-input.jsx:L14`):
    *   *Violation:* The message submit button wraps the `<IoSend />` icon without an accessible name.
    *   *Fix:* Add `aria-label="Send message"`.
*   **Call Modal Action Buttons** (`OutgoingCall.jsx:L60`, `OutgoingCall.jsx:L64`, `OutgoingCall.jsx:L68`, `OutgoingCall.jsx:L102`):
    *   *Violation:* Mute (`BsMicMute`), camera toggles (`BsCameraVideoOff`), end call (`MdOutlineCallEnd`), and chat switch buttons (`FaMessage`) lack `aria-label` tags.
    *   *Fix:* Add descriptive labels (e.g. `aria-label="Mute microphone"`, `aria-label="End call"`).
*   **Social Bars & Footer Links** (`socal-bar.jsx:L35`, `Footer.jsx:L32`):
    *   *Violation:* The social link icons (GitHub, LinkedIn, Instagram, Facebook) wrap raw icons inside `<a>`/`<Link>` tags with no text content. Screen readers will read the empty link or the raw URL.
    *   *Fix:* Add `aria-label={link.name}` to the links.

### 2. Non-Semantic Clickable Elements (WCAG 2.1 2.1.1 - Keyboard & 4.1.2 - Name, Role, Value)
Interactive elements should use semantic HTML tags. Using generic elements like `<div>` for click events prevents keyboard focus and breaks document outline semantics.

*   **Desktop Showcase "See More" Button** (`DemoBtn.jsx:L29`):
    *   *Violation:* The button is constructed using a `<div onClick={handleClick}>` element. It is not in the keyboard focus order (missing `tabIndex={0}`), cannot be focused using `Tab`, has no role of `button`, and does not handle standard keyboard activation (`Enter` / `Space`).
    *   *Fix:* Convert the wrapping `<div>` to a semantic `<button>` element.

---

## ⚠️ High/Medium Issues (Should Fix)

### 3. Invalid Heading Hierarchy (WCAG 2.1 1.3.1 - Info and Relationships)
Headings structure the page layout. Missing heading tags or skipping levels disorients keyboard and screen-reader users navigating the page.

*   **Main Page Heading Order:**
    *   *Violation:* The Hero section contains an `<h1>` (name) and an `<h2>` (subtitle). The subsequent sections skip `<h2>` entirely:
        *   Projects section (`Projects.jsx:L9`) uses an `<h3>` ("My Latest Works").
        *   Contact section (`Contact.jsx:L17`) uses an `<h3>` ("Get To Know Me Better").
        *   Skills section (`Skills.jsx:L104`) uses a plain paragraph tag `<p>` styled to look like a title.
    *   *Fix:* Change the major section headings for **Projects**, **Skills**, and **Contact** to `<h2>` tags. If subsections are needed within them, they can follow with `<h3>`.

### 4. Orphaned Form Input Fields (WCAG 2.1 1.3.1 - Info and Relationships & 3.3.2 - Labels or Instructions)
Every input element must have a corresponding `<label>` or accessible label associated with it to declare its purpose.

*   **Name & Message Inputs** (`contact-sidebar.jsx:L24`, `message-input.jsx:L7`):
    *   *Violation:* Both inputs have placeholders but no associated `<label>` tag, nor do they have an `aria-label` or `aria-labelledby` property. Placeholders disappear when text is typed and are not standard substitutes for labels.
    *   *Fix:* Add `aria-label="Your Name"` and `aria-label="Type a message"` to the `<input>` elements.

---

## 🎨 Styling & Color Contrast Check

### 5. Broken Theme Colors & Typos
*   **Showcase Colors Configuration:**
    *   *Violation:* Throughout `ShalPhyokeShowcase.jsx` and `RoadmapNode.jsx`, class names like `text-char`, `bg-cream`, `text-ember`, `bg-ember`, and `bg-sand` are used. However, **none of these colors exist in tailwind.config.js or globals.css**.
    *   *Result:* Because they are not defined, Tailwind does not compile them. The background colors default to standard white/transparent, and the text colors default to black, which breaks the intended aesthetic and could cause low color contrast violations.
    *   *Fix:* Extend your Tailwind configuration with these custom colors or replace them with standard utility colors:
        ```javascript
        // In tailwind.config.js extend.colors:
        char: "#1c1917", // Charcoal
        cream: "#faedcd", // Cream
        ember: "#e76f51", // Burnt Amber/Orange
        sand: "#f4a261"  // Sandy gold
        ```

### 6. Color Contrast Ratios (WCAG 2.1 1.4.3 - Contrast)
*   **`--color-primary-light` (`#8b5dff`) on `#fff7d1` (Background):**
    *   *Contrast Ratio:* **3.82:1**
    *   *Status:* **Fails AA for normal body text** (requires 4.5:1). It only passes for large, bold text.
    *   *Recommendation:* Avoid using `--color-primary-light` for body text or small copy. Use `--color-primary` (`#6a42c2`, which has a **6.29:1** ratio) instead for normal-sized text.

---

## 📝 Implementation Action Checklist

- [ ] Add `aria-label` to all icon-only buttons (`OutgoingCall.jsx`, `ChatPage.jsx`, `message-input.jsx`).
- [ ] Add `aria-label` to social links in `socal-bar.jsx` and `Footer.jsx`.
- [ ] Refactor `DemoBtn.jsx` from a `<div>` to a `<button>`.
- [ ] Adjust homepage headings (`Projects`, `Skills`, `Contact`) to follow a clean `<h1>` -> `<h2>` hierarchy.
- [ ] Add `aria-label` to inputs in `contact-sidebar.jsx` and `message-input.jsx`.
- [ ] Add the missing custom colors (`char`, `cream`, `ember`, `sand`) to `tailwind.config.js` to fix the broken showcase layouts.
