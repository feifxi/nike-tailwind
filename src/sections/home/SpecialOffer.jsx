import offerImg from "../../assets/images/offer.svg";
import Button from "../../components/Button";
  

const SpecialOffer = () => {
  return (
    <section className="px-8 py-12 sm:px-16 sm:py-24">
      <div className="flex flex-col-reverse xl:flex-row justify-between items-center gap-10 mx-auto max-w-screen-wide">
        <div className="flex flex-1">
          <img
            src={offerImg}
            alt="Shoe Promotion"
            width={773}
            height={687}
            className="object-contain "
          />
        </div>

        <div className="flex-1 flex flex-col">
          <h2 className="font-palanquin font-bold text-4xl">
            <span className="text-coral-red">Special</span> Offer
          </h2>
          <p className="mt-4 font-montserrat text-lg text-slate-gray leading-7">
            Embark on a shopping journey that redefines your experience with
            unbeatable deals. From premier selections to incredible savings, we
            offer unparalleled value that sets us apart.
          </p>
          <p className="mt-6 font-montserrat text-lg text-slate-gray leading-7">
            Navigate a realm of possibilities designed to fulfill your unique
            desires, surpassing the loftiest expectations. Your journey with us
            is nothing short of exceptional.
          </p>

          <div className="flex flex-wrap gap-5 mt-10">
            <Button 
              label={'Shop now'} 
              iconName={"material-symbols:arrow-circle-right-rounded"}
            />
            <Button 
              label={'Learn more'}
              style="secondary" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
