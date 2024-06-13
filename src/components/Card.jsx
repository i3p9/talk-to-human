import { BiPhone } from "react-icons/bi"
import PropTypes from "prop-types"
import { TbArrowNarrowRight } from "react-icons/tb"

export const Card = (props) => {
  const { data } = props
  return (
    <section className='transition ease-in-out delay-10 hover:-translate-y-0.5 hover:scale-102 hover:bg-hover-gradient duration-500 p-4 flex flex-col shadow-lg rounded-lg bg-slate-800 text-slate-50 font-medium'>
      <div className='flex items-center'>
        <img
          className='w-12 h-12 rounded-lg mr-2 bg-stone-50'
          src={data.logo}
          alt='Rounded logo'
        />
        <span className='font-bold text-lg stretch-90'>
          {data.name}
        </span>
      </div>
      <div className='mt-2'>
        <BiPhone style={{ display: "inline" }} />
        <a
          href={`tel:${data.phone_primary}`}
          className='pl-2 font-mono text-slate-200 hover:underline'
        >
          {data.phone_primary}
        </a>
      </div>
      <div>
        <BiPhone style={{ display: "inline" }} />
        <a
          href={`tel:${data.phone_secondary}`}
          className='pl-2 font-mono font-medium text-slate-200 hover:underline'
        >
          {data.phone_secondary ? data.phone_secondary : "n/a"}
        </a>
      </div>

      <div className='border-t border-slate-500 pt-2 mt-2'>
        <span className='stretch-90'>reach human:</span>
        {data.human_code.map((number, index) => {
          return (
            <span key={index}>
              <span
                key={index}
                className='p-1 px-2 m-1 rounded-lg font-mono font-semibold bg-slate-100 text-slate-900'
              >
                {number}
              </span>
              <span>
                {data.human_code.length - 1 !== index && (
                  <TbArrowNarrowRight style={{ display: "inline" }} />
                )}
              </span>
            </span>
          )
        })}
      </div>
    </section>
  )
}

Card.propTypes = {
  data: PropTypes.any,
}
