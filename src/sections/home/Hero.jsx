import { useState } from "react";
import Button from "../../components/Button";
import { statistics, shoes } from "../../constants";
import ShoeCard from '../../components/ShoeCard'

const Hero = () => {
  const firstShoe = shoes[0].bigShoe
  const [bigShoeImg, setBigShoeImg ] = useState(firstShoe)

  return (
      <section
        id="hero"
        className="flex xl:flex-row flex-col gap-10 mx-auto pb-12 sm:pb-24 max-w-screen-wide"
        >
        {/* Title */}
        <div className="flex flex-col justify-center items-start px-8 sm:px-16 xl:py-5 w-full xl:w-[40%] space-y-10">
          <p className="mt-5 font-montserrat text-xl text-coral-red">
            Our Summer collections
          </p>

          <h1 className="font-palanquin text-[72px] font-bold max-sm:leading-[82px] sm:text-8xl">
            <span className="relative z-10 pr-10 xl:bg-white xl:whitespace-nowrap">
              The New Arrival
            </span>
            <br />
            <span className="text-coral-red inline-block mt-3">Nike</span> Shoes
          </h1>

          <p className="font-normal text-xl text-slate-gray leading-8 sm:max-w-sm">
            Discover stylish Nike arrivals, quality comfort, and innovation for
            your active life.
          </p>

          <Button
            label={"Shop now"}
            iconName={"material-symbols:arrow-circle-right-rounded"}
          />

          <div className="flex justify-start items-start flex-wrap gap-16">
            {statistics.map((stat, index) => (
              <div key={index}>
                <p className="font-palanquin font-bold text-4xl">
                  {stat.value}
                </p>
                <p className="font-montserrat text-slate-gray leading-7">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
        {/* Shoe Image */}
        <div className="relative flex-1 flex justify-center items-center bg-hero bg-cover bg-center max-xl:py-40">
          <img
            src={bigShoeImg}
            alt="shoe collection"
            width={510}
            height={402}
            className="object-contain relative z-10"
          />

          <div className="absolute -bottom-[5%] sm:left-[10%] flex items-center gap-4 sm:gap-6 max-sm:px-6">
              {shoes.map((img, index)=>(
                <ShoeCard 
                  key={index}
                  imgURL={img}
                  changeBigShoeImage={setBigShoeImg}
                  currentBigShoe={bigShoeImg}
                />
              ))

              }
          </div>
        </div>
      </section>
  );
};

export default Hero;
