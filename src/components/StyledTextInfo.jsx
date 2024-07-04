import { cloneElement, useEffect } from "react";
import { useState } from "react";
import PropTypes from "prop-types";
import { LuCopy } from "react-icons/lu";

export const StyledTextInfo = ({
	data,
	prependIcon,
	canCopy = false,
	copyIcon = <LuCopy />,
	className = "",
	type,
	onClick,
}) => {
	const [showCopied, setShowCopied] = useState(false);

	const handleCopyToClipboard = (dataToCopy) => {
		navigator.clipboard
			.writeText(dataToCopy)
			.then(() => {
				console.log("Phone number copied to clipboard");
				setShowCopied(true);
			})
			.catch((err) => {
				console.error("Failed to copy: ", err);
			});
	};
	useEffect(() => {
		if (showCopied) {
			const timer = setTimeout(() => {
				setShowCopied(false);
			}, 800);
			return () => clearTimeout(timer);
		}
	}, [showCopied]);

	const getTextData = () => {
		switch (type) {
			case "text":
				return (
					<p className='pl-2 font-mono text-slate-200 hover:underline'>
						{data ? data : "N/A"}
					</p>
				);
			case "phone":
				return (
					<a
						href={`tel:${data}`}
						className='pl-2 font-mono text-slate-200 hover:underline'
					>
						{data ? data : "N/A"}
					</a>
				);
			case "email":
				return (
					<a
						href={`mailto:${data}`}
						onClick={() => onClick()}
						className='pl-2 font-mono text-slate-200 hover:underline'
					>
						{data ? data : "N/A"}
					</a>
				);
			default:
				return (
					<p className='pl-2 font-mono text-slate-200 hover:underline'>
						{data ? data : "N/A"}
					</p>
				);
		}
	};

	return (
		<div className={`group flex items-center ${className}`}>
			{prependIcon &&
				cloneElement(prependIcon, {
					style: { display: "inline" },
				})}
			{getTextData()}
			{canCopy && (
				<button
					onClick={() => handleCopyToClipboard(data)}
					className='inline-block ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 cursor-pointer
        p-1 rounded-lg flex'
					aria-label='Copy to clipboard'
					title='click to copy'
				>
					{cloneElement(copyIcon)}
					<span
						className={`ml-2 text-sm text-zinc-300 transition-opacity duration-300 ${
							showCopied ? "opacity-100" : "opacity-0"
						}`}
					>
						Copied!
					</span>
				</button>
			)}
		</div>
	);
};

StyledTextInfo.propTypes = {
	data: PropTypes.string.isRequired,
	prependIcon: PropTypes.element,
	canCopy: PropTypes.bool,
	copyIcon: PropTypes.element,
	className: PropTypes.string,
	type: PropTypes.string,
	onClick: PropTypes.func,
};

StyledTextInfo.default = {
	canCopy: false,
	copyIcon: <LuCopy />,
	className: "",
	type: "text",
};
