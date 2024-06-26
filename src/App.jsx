import { useState } from "react"
import { CardContainer } from "./components/CardContainer"
import { SearchContainer } from "./components/SearchContainer"
import { data, sortedData } from "./data/data"
import { useEffect } from "react"
import Fuse from "fuse.js"
// import { Footer } from "./components/Footer"
import { Header } from "./components/Header"

function App() {
  const [searchTerm, setSearchTerm] = useState("")
  const [items, setItems] = useState(sortedData)
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favorites"))
      ? JSON.parse(localStorage.getItem("favorites"))
      : []
  )

  const fuse = new Fuse(data, {
    keys: ["name", "category"],
    includeScore: true,
    threshold: 0.4,
  })

  useEffect(() => {
    if (searchTerm) {
      const result = fuse.search(searchTerm.toLowerCase())
      const filteredData = result.map((item) => item.item)
      setItems(filteredData)
    } else {
      setItems(data)
    }
    //eslint-disable-next-line
  }, [searchTerm])

  return (
    <>
      <Header />

      <main className='container mx-auto p-4 lg:p-10'>
        {/* <div className='flex flex-col lg:flex-row gap-2 items-center mb-4'>
        <section className='basis-full flex flex-col'>
          <h1 className='font-bold text-4xl stretch-125 text-slate-50'>
            talk2human
          </h1>
          <p className='text-md break-all text-slate-300'>
            easily reach real customer service agents and save time.
            find customer care numbers and bypass endless hotline
            menus with ease
          </p>
        </section>
        <SearchContainer
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />
      </div> */}
        <SearchContainer
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />

        <CardContainer
          data={items}
          favorites={favorites}
          setFavorites={setFavorites}
        />
      </main>
      {/* <Footer /> */}
    </>
  )
}

export default App
