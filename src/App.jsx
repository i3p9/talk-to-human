import { useState } from "react"
import { CardContainer } from "./components/CardContainer"
import { SearchContainer } from "./components/SearchContainer"
import { data } from "./data/data"
import { useEffect } from "react"
import Fuse from "fuse.js"
import { Footer } from "./components/Footer"

function App() {
  const [searchTerm, setSearchTerm] = useState("")
  const [items, setItems] = useState(data)
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

  console.log("items: ", items)

  return (
    <main className='container mx-auto p-10'>
      <div className='flex flex-col lg:flex-row gap-2 items-center mb-4'>
        <section className='basis-full flex flex-col'>
          <h1 className='font-bold text-4xl stretch-125'>
            talk2human fast
          </h1>
          <p className='text-md break-all'>
            easily reach real customer service agents and save time.
            find customer care numbers and bypass endless hotline
            menus with ease
          </p>
        </section>
        <SearchContainer
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />
      </div>
      <CardContainer data={items} />
      <Footer />
    </main>
  )
}

export default App
