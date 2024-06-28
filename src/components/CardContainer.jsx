import { Card } from "./Card"
import PropTypes from "prop-types"

export const CardContainer = (props) => {
  const { data, favorites, setFavorites } = props

  const sortedData = [...data].sort((a, b) => {
    const aIsFavorite = favorites.includes(a.id)
    const bIsFavorite = favorites.includes(b.id)
    if (aIsFavorite && !bIsFavorite) return -1
    if (!aIsFavorite && bIsFavorite) return 1
    return 0
  })

  return (
    <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
      {sortedData.map((item, index) => {
        return (
          <Card
            data={item}
            key={item.id || index}
            favorites={favorites}
            setFavorites={setFavorites}
            style={{
              transition: "all 1s ease-in-out",
              position: "relative",
              top: 0,
              left: 0,
            }}
          />
        )
      })}
    </div>
  )
}

CardContainer.propTypes = {
  data: PropTypes.array,
  favorites: PropTypes.array,
  setFavorites: PropTypes.func,
}
