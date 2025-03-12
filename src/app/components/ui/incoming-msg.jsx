"use client";

import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

const IncomingMsg = ({ text }) => (
	<div className="flex items-start gap-4">
		<div className="bg-white p-3 rounded-lg shadow-sm max-w-md">
			<Markdown
				remarkPlugins={[remarkGfm]}
				components={{
					a: ({ href, children }) => (
						<a
							href={href}
							className="text-blue-500 underline"
							target="_blank"
							rel="noopener noreferrer">
							{children}
						</a>
					),
				}}>
				{text}
			</Markdown>
		</div>
	</div>
);

export default IncomingMsg;
