import Button from "../components/Button"
import { arrowRight } from "../assets/icons"
import { offer } from "../assets/images"

const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div>
        <img src={offer} alt="Offer Image" />
      </div>
      
      <div>
        <h2 className="text-4xl font-bold font-palanquin "> <span className="text-coral-red">Special </span>Offer</h2>
        <p className="mt-8 text-lg font-montserrat lg:max-w-lg leading-loose font-light"> Embark on a shopping journey that redefines your experience with unbeatable deals. From premier selections to incredible savings, we offer unparalleled value that sets us apart.</p>
        <p className="mt-5 mb-7 font-montserrat lg:max-w-lg text-lg font-light leading-loose">Navigate a realm of possibilities designed to fulfill your unique desires, surpassing the loftiest expectations. Your journey with us is nothing short of exceptional.</p>
        <div className="flex max-lg:flex-col flex-row gap-5 justify-start">
          <button className='flex justify-center items-center gap-2 px-7 py-4 font-montserrat text-lg leading-none bg-coral-red rounded-full text-white cursor-pointer'>Shop Now<img src={arrowRight} alt='Arrow' className='ml-2 rounded-full w-5 h-5' />
          </button>
          <button className='flex border border-slate-500 justify-center items-center gap-2 px-7 py-4 font-montserrat text-lg leading-none bg-slate-50 rounded-full text-black font-light cursor-pointer'>
            Learn More </button>
        </div>
      </div>
      
    </section>
  )
}

export default SpecialOffer
