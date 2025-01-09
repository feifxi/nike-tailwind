import Button from "../../components/Button"
import shoe8 from "../../assets/images/shoe8.svg";

const SuperQuality = () => {
  return (
    <section className="px-8 py-12 sm:px-16 sm:py-24 " id="about-us">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-10 mx-auto w-full max-w-screen-wide">
        
        <div className="flex-1 flex flex-col">
          <h2 className="font-palanquin font-bold text-4xl xl:max-w-lg">
            We Provide You <span className="text-coral-red">Super Quality</span> Shoes
          </h2>
          <p className="mt-4 font-montserrat text-lg text-slate-gray leading-7 xl:max-w-lg">
            Ensuring premium comfort and style, our meticulously crafted footwear is designed to elevate your experience, providing you with unmatched quality, innovation, and a touch of elegance.
          </p>
          <p className="mt-6 font-montserrat text-lg text-slate-gray leading-7 xl:max-w-lg">
            Our dedication to detail and excellence ensures your satisfaction
          </p>
          <div className="mt-11">
            <Button label={'View details'} />
          </div>
        </div>

        <div className="flex-1 flex justify-center items-center">
          <img 
            src={shoe8}
            alt='product detail'
            width={570}
            height={522}
            className='object-contain'
          />
        </div>
      </div>
    </section>
  )
}

export default SuperQuality
