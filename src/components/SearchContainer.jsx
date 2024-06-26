import PropTypes from "prop-types"

export const SearchContainer = (props) => {
  const { searchTerm, setSearchTerm } = props
  return (
    <section className='mb-4 w-full shadow-lg'>
      <form className=''>
        <label
          htmlFor='default-search'
          className='mb-2 text-sm font-medium text-slate-900 sr-only'
        >
          Search
        </label>
        <div className='relative'>
          <div className='absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none'>
            <svg
              className='w-4 h-4 text-slate-100'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 20 20'
            >
              <path
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z'
              />
            </svg>
          </div>
          <input
            type='search'
            id='default-search'
            className='block w-full p-2 ps-10 text-sm text-slate-50 border border-slate-500 rounded-lg bg-slate-800 focus:outline-none'
            placeholder='search for names, categories...'
            onChange={(e) => setSearchTerm(e.target.value)}
            value={searchTerm}
            required
          />
          {/* <button
            type='submit'
            className='text-white absolute end-2.5 bottom-2.5 bg-emerald-600 hover:bg-emerald-800 focus:outline-none font-medium rounded-lg text-sm px-4 py-2'
          >
            Search
          </button> */}
        </div>
      </form>
    </section>
  )
}

SearchContainer.propTypes = {
  searchTerm: PropTypes.string,
  setSearchTerm: PropTypes.func,
}
