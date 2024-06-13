export const Footer = () => {
  return (
    <footer className='fixed bottom-0 left-0 z-10 w-full p-2 bg-white border-t border-gray-200 shadow flex items-center justify-between p-2'>
      <span className='text-sm text-gray-500 sm:text-center dark:text-gray-400'>
        2024,{" "}
        <a href='https://ffaisal.com/' className='hover:underline'>
          fahim
        </a>
      </span>
      <ul className='flex flex-wrap items-center text-sm font-medium text-gray-500 sm:mt-0'>
        <li>
          <a
            target='_blank'
            href='https://docs.google.com/forms/d/e/1FAIpQLScg1NLbsNqz9btj09o7SixOhrxe8fo46mY5XGEzD2Ir_-8Xog/viewform?usp=sf_link'
            className='hover:underline me-4 md:me-6'
          >
            missing an entry?
          </a>
        </li>
        <li>
          <a
            href='mailto:hello@ffaisal.com'
            className='hover:underline'
          >
            contact
          </a>
        </li>
      </ul>
    </footer>
  )
}
