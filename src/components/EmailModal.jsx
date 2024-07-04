import "../modal.css";
import PropTypes from "prop-types";
import Button from "./molecules/Button";
import { AiOutlineClose } from "react-icons/ai";
import { StyledTextInfo } from "./StyledTextInfo";
import { BiPhone } from "react-icons/bi";

const EmailModal = ({ modalOpen, setModalOpen, email }) => {
	const closeModal = () => {
		setModalOpen(false);
	};
	const stopPropagation = (e) => {
		e.stopPropagation();
	};

	if (!modalOpen) return null;

	return (
		<div
			id='myModal'
			className='modal fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center transition-all duration-300 ease-in-out'
			onClick={closeModal}
		>
			<div
				className='modal-content w-[90%] md:w-[50%] shadow-lg rounded-lg bg-slate-800 text-slate-50 p-5 md:p-10'
				onClick={stopPropagation}
			>
				<div className='flex justify-between border-b border-slate-500'>
					<p className='text-2xl font-semibold pb-2 '>Send Email</p>
					<AiOutlineClose
						size={30}
						className='inline text-right text-slate-50 hover:text-slate-800 hover:bg-slate-100 rounded-lg cursor-pointer transition-all duration-300 ease-in-out'
						onClick={() => setModalOpen(!modalOpen)}
					/>
				</div>

				<p className='py-2 text-lg text-pretty'>
					Would you like to include the{" "}
					<span className='italic'>
						Bangladesh Bank Complaints Email
					</span>{" "}
					in the cc field? Including this address often leads to
					improved responsiveness from the bank when filing a
					complaint.
					<p className='p-1 text-md'>
						Bangladesh Bank Complaint Hotline:{" "}
						<StyledTextInfo
							data='16236'
							type={"phone"}
							prependIcon={<BiPhone />}
						/>
					</p>
				</p>
				<div className='flex flex-row-reverse'>
					<Button
						type={"primary"}
						text={"No, don't cc"}
						email={email}
					/>
					<Button
						type={"secondary"}
						text={"Yes, add them to cc"}
						email={email}
					/>
				</div>
			</div>
		</div>
	);
};

EmailModal.propTypes = {
	modalOpen: PropTypes.bool,
	setModalOpen: PropTypes.func,
	email: PropTypes.string,
};

export default EmailModal;
