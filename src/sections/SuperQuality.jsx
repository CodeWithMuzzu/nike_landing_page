import { shoe8 } from "../assets/images"

const SuperQuality = () => {
  return (
    <section id="about-us" className="flex max-lg:flex-col justify-between gap-10 w-full max-container">
      <div>
        <h2 className="text-4xl font-bold font-palanquin ">We Provide You <span className="text-coral-red">Super <br /> Quality</span> Shoes</h2>
        <p className="mt-8 text-lg font-montserrat lg:max-w-lg leading-loose font-light"> Ensuring premium comfort and style, our meticulously crafted footwear is designed to elevate your experience, providing you with unmatched quality, innovation, and a touch of elegance.</p>
        <p className="mt-5 font-montserrat lg:max-w-lg text-lg font-light leading-loose">Our dedication to detail and excellence ensures your satisfaction</p>
        <button className=' mt-8 px-7 py-4 font-montserrat text-lg leading-none bg-coral-red rounded-full text-white cursor-pointer'>
          View Details
        </button>
      </div>

      <div>
        <img src={shoe8} alt="" />
      </div>
    </section>
  )
}

export default SuperQuality
