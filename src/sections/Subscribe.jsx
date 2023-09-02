
const Subscribe = () => {
  return (
    <section className="max-container flex justify-between items-center max-lg:flex-col gap-10" id="contact-us">
      <h3 className="text-4xl text-center leading-[68px] lg:max-w-lg font-palanquin font-bold">Sign up form <span className="text-coral-red"> Updates </span> & Newsletter </h3>
      <div className="flex flex-1 max-lg:flex-row max-sm:flex-col max-sm:border-none flex-col w-full justify-between items-center gap-5 max-lg:rounded-full max-lg:border max-lg:border-slate-700" >
        <input type="text" placeholder="subscribe@nike.com" className="min-w-fit max-sm:rounded-full max-sm:border max-sm:border-slate-700 max-sm:w-full max-sm:pl-5 ml-7 py-5 w-[55%] pl-0  text-lg font-montserrat lg:rounded-full lg:border lg:border-slate-700 lg:w-[480px] lg:pl-5 " />
        <div className="flex items-center justify-center">
          <button className='max-w-full mr-2 px-7 py-4 font-montserrat text-lg leading-none bg-coral-red rounded-full text-white cursor-pointer'>
            Sign Up
          </button>
        </div>
      </div>
    </section>
  )
}

export default Subscribe
