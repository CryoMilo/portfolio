"use client";

import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

const IncomingMsg = ({ text }) => (
	<div className="flex items-start gap-4">
		<div className="bg-white p-3 rounded-lg shadow-sm max-w-md">
			<Markdown remarkPlugins={[remarkGfm]}>{text}</Markdown>
		</div>
	</div>
);

export default IncomingMsg;
