import { Card } from "./Card"
import PropTypes from "prop-types"

export const CardContainer = (props) => {
  const { data } = props
  return (
    <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
      {data.map((item, index) => {
        return <Card data={item} key={index} />
      })}
    </div>
  )
}

CardContainer.propTypes = {
  data: PropTypes.array,
}
