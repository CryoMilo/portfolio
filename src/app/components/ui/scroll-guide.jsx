import { LuChevronsDown } from "react-icons/lu";

const ScrollGuide = ({ text }) => {
	return (
		<div className="flex items-center flex-col gap-1">
			<p>{text}</p>
			<LuChevronsDown className="text-2xl animate-custom-pulse" />
		</div>
	);
};

export default ScrollGuide;
