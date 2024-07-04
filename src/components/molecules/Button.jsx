import PropTypes from "prop-types";

const Button = ({ type, text, email }) => {
	if (type === "primary") {
		return (
			<>
				<a href={`mailto:${email}`} className='inline-block'>
					<button
						className='font-medium bg-slate-300 text-slate-900 p-2 px-6 shadow-lg rounded-lg m-1 border
                hover:bg-slate-700 hover:text-slate-300 hover:border hover:border-slate-300
                transition-all duration-300 ease-in-out'
					>
						{text}
					</button>
				</a>
			</>
		);
	} else if (type === "secondary") {
		return (
			<>
				<a
					href={`mailto:${email}?cc=bb.cipc@bb.org.bd`}
					className='inline-block'
				>
					<button
						className='font-medium bg-slate-900 text-slate-300 p-2 px-6 shadow-lg rounded-lg border border-slate-400 m-1
                hover:bg-slate-600 hover:text-slate-300 hover:border hover:border-slate-300
                transition-all duration-300 ease-in-out'
					>
						{text}
					</button>
				</a>
			</>
		);
	} else {
		return (
			<>
				<button className='font-medium bg-slate-300 text-slate-900 p-2 px-6 shadow-lg rounded-lg m-1'>
					{text}
				</button>
			</>
		);
	}
};

Button.propTypes = {
	type: PropTypes.string,
	text: PropTypes.string,
	email: PropTypes.string,
};

export default Button;
