import Button from "../../components/Button";


const Subscribe = () => {
  return (
    <section className="px-8 py-16 sm:px-16 sm:py-32">
      <div className="flex flex-col lg:flex-row gap-10 justify-between items-center mx-auto max-w-screen-wide">
        <h2 className="font-palanquin font-bold text-4xl leading-[68px] lg:max-w-md">
          Sign Up for <span className="text-coral-red"> Updates </span>& Newsletter
        </h2>
        
        <div className="flex items-center max-sm:flex-col gap-5 p-2.5 w-full lg:max-w-[40%] sm:border sm:border-slate-gray rounded-full">
          <input 
            type="text"
            placeholder={'subscribe@nike.com'}
            className="flex-1 pl-5 text-base leading-normal text-slate-gray outline-none max-sm:p-5 max-sm:w-full max-sm:border max-sm:border-slate-gray max-sm:rounded-full"
          />
          <div className="max-sm:w-full">
            <Button label={'Sign Up'} className="w-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
