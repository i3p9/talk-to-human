import PropTypes from "prop-types"
import { TbArrowNarrowRight } from "react-icons/tb"
import { PiTimer } from "react-icons/pi"

export const WaitTImeBlock = ({ duration }) => {
  return (
    <>
      <span
        title={`wait ${duration}s then press`}
        className='p-1 px-2 m-1 rounded-lg font-mono font-semibold bg-slate-800 text-slate-100 border border-slate-500'
      >
        <PiTimer style={{ display: "inline", paddingRight: "2px" }} />
        {duration}s
      </span>
      <TbArrowNarrowRight style={{ display: "inline" }} />
    </>
  )
}

WaitTImeBlock.propTypes = {
  duration: PropTypes.number,
}
