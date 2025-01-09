import { Icon } from "@iconify/react/dist/iconify.js";

const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
  return (
    <div className="flex flex-col items-center">
      <img 
        src={imgURL} 
        alt='customer' 
        className='rounded-full object-cover w-[120px] h-[120px]'
      />
      <p className="mt-4 max-w-sm font-montserrat text-lg text-slate-gray leading-7 text-center">
        {feedback}
      </p>
      
      <div className="flex items-center gap-2.5 mt-3">
        <Icon 
          icon="material-symbols:star-rate-rounded" 
          width="35" 
          height="35" 
          className="text-coral-red" 
        />
        <p className="font-montserrat text-xl text-slate-gray">
          { rating }
        </p>
      </div>

      <h3 className="mt-1 font-palanquin font-bold text-3xl text-center">
        { customerName }
      </h3>
    </div>
  );
};

export default ReviewCard;
