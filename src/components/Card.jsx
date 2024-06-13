import { BiPhone } from "react-icons/bi"
import PropTypes from "prop-types"
import { TbArrowNarrowRight } from "react-icons/tb"

export const Card = (props) => {
  const { data } = props
  return (
    <section className='p-4 flex flex-col shadow-lg rounded-lg bg-emerald-600 text-zinc-100 font-medium'>
      <div className='flex items-center'>
        <img
          className='w-16 h-16 rounded-full mr-2 bg-stone-50'
          src={data.logo}
          alt='Rounded avatar'
        />
        <span className='font-bold text-lg stretch-90'>
          {data.name}
        </span>
      </div>
      <div className='mt-2'>
        <BiPhone style={{ display: "inline" }} />
        <a
          href={`tel:${data.phone_primary}`}
          className='pl-2 font-mono'
        >
          {data.phone_primary}
        </a>
      </div>
      <div>
        <BiPhone style={{ display: "inline" }} />
        <a
          href={`tel:${data.phone_secondary}`}
          className='pl-2 font-mono font-medium'
        >
          {data.phone_secondary}
        </a>
      </div>

      <div className='border-t border-zinc-100 pt-2 mt-2'>
        <span className='stretch-90'>reach human:</span>
        {data.human_code.map((number, index) => {
          return (
            <span key={index}>
              <span
                key={index}
                className='p-1 px-2 m-1 rounded-lg font-mono font-semibold bg-zinc-100 text-zinc-900'
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
