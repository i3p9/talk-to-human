export const Header = () => {
  return (
    <nav className='px-4 lg:px-24 py-4 border-b-2 border-dashed border-slate-500 flex flex-row justify-between items-center'>
      <h1 className='font-bold text-2xl lg:text-4xl stretch-125 bg-gradient-to-r from-slate-400 via-slate-200 to-slate-500 inline-block text-transparent bg-clip-text'>
        talk2human
      </h1>
      <section className='flex gap-2'>
        <a
          className='hover:underline stretch-90'
          target='_blank'
          href='https://docs.google.com/forms/d/e/1FAIpQLScg1NLbsNqz9btj09o7SixOhrxe8fo46mY5XGEzD2Ir_-8Xog/viewform?usp=sf_link'
        >
          missing item?
        </a>
        {/* <a
          href='mailto:hello@ffaisal.com'
          className='hover:underline'
        >
          contact
        </a> */}
      </section>
    </nav>
  )
}
