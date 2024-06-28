import { useState } from "react"
import { BiPhone, BiMailSend } from "react-icons/bi"
import PropTypes from "prop-types"
import { TbArrowNarrowRight } from "react-icons/tb"
import { StyledTextInfo } from "./StyledTextInfo"
import { WaitTImeBlock } from "./molecules/WaitTimeBlock"
// import { useEffect } from "react"
// import { getImageColorsInHex } from "../utils/utils"

export const Card = (props) => {
  const { data } = props

  const [isHovered, setIsHovered] = useState(false)
  const [gradientPosition, setGradientPosition] = useState({
    x: 50,
    y: 50,
  })

  //   function getGradientDirection(x, y) {
  //     if (x > 50 && y > 50) return "to bottom right"
  //     if (x > 50 && y < 50) return "to top right"
  //     if (x < 50 && y > 50) return "to bottom left"
  //     return "to top left"
  //   }

  //   const gradientDirection = getGradientDirection(
  //     gradientPosition.x,
  //     gradientPosition.y
  //   )

  const handleMouseMove = (e) => {
    const section = e.currentTarget
    const { left, top, width, height } =
      section.getBoundingClientRect()
    const x = ((e.clientX - left) / width) * 100
    const y = ((e.clientY - top) / height) * 100
    setGradientPosition({ x, y })
  }
  const handleMouseEnter = () => setIsHovered(true)
  const handleMouseLeave = () => setIsHovered(false)

  // on hover -- use image colors from extractImageColors
  // const [imageColors, setImageColors] = useState([])

  // useEffect(() => {
  //   if (imageColors.length === 0) {
  //     getImageColorsInHex(data.logo)
  //       .then((colors) => {
  //         //   console.log(colors) // array of hex colors
  //         setImageColors(colors)
  //       })
  //       .catch((error) => {
  //         console.error(error)
  //       })
  //   }
  // }, [data.logo])

  // console.log("image colors: ", imageColors)

  return (
    <section
      className={`relative transition-all ease-in-out delay-10
      hover:-translate-y-0.5 hover:scale-102 duration-500 p-4 flex
      flex-col shadow-lg rounded-lg bg-slate-800 text-slate-50 font-medium
      overflow-hidden border border-slate-500 hover:border-slate-300
      hover:shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_3px_#64748B,0_0_9px_#64748B,0_0_15px_#64748B]`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className='absolute inset-0 bg-gradient-to-r from-transparent to-transparent transition-opacity duration-500'
        style={{
          backgroundImage: isHovered
            ? `radial-gradient(circle at ${gradientPosition.x}% ${gradientPosition.y}%, #0F172A, #334155)`
            : "none",
        }}
        // style={{
        //   backgroundImage: isHovered
        //     ? `radial-gradient(circle at ${gradientPosition.x}% ${gradientPosition.y}%, ${imageColors[0]}, ${imageColors[1]})`
        //     : "none",
        // }}
        // style={{
        //   backgroundImage: isHovered
        //     ? `linear-gradient(${gradientDirection}, ${data.color_scheme[0]}, ${data.color_scheme[1]}, ${data.color_scheme[2]})`
        //     : "none",
        // }}
      ></div>
      <div className='relative'>
        <div className='flex items-center'>
          <img
            loading='lazy'
            className={`w-12 h-12 rounded-lg mr-2 bg-stone-50`}
            src={data.logo}
            alt={`logo of ${data.name}`}
          />
          <span className='font-bold text-lg stretch-90'>
            {data.name}
          </span>
        </div>
        <StyledTextInfo
          type={"phone"}
          data={data.phone_primary}
          prependIcon={<BiPhone />}
          canCopy={true}
          className={"mt-2"}
        />
        <StyledTextInfo
          type={"phone"}
          data={data.phone_secondary}
          prependIcon={<BiPhone />}
          canCopy={true}
        />
        <StyledTextInfo
          type={"email"}
          data={data.email}
          prependIcon={<BiMailSend />}
          canCopy={true}
        />

        <div className='border-t border-slate-500 pt-2 mt-2'>
          <span className='stretch-90'>reach human:</span>
          {data?.waiting_time_before_input && (
            <WaitTImeBlock
              duration={data.waiting_time_before_input}
            />
          )}
          {data?.human_code.map((number, index) => (
            <span key={index}>
              <span className='p-1 px-2 m-1 rounded-lg font-mono font-semibold bg-slate-800 text-slate-100 border border-slate-500'>
                {number}
              </span>
              {data.human_code.length - 1 !== index && (
                <TbArrowNarrowRight style={{ display: "inline" }} />
              )}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

Card.propTypes = {
  data: PropTypes.any,
}
