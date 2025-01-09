
const ServiceCard = ({ imgURL, label, subtext }) => {
  return (
    <div className="flex-1 py-16 px-10 rounded-3xl shadow-3xl"> 
      <div className="flex justify-center items-center w-11 h-11 bg-coral-red rounded-full">
        <img src={imgURL} alt={label} />
      </div>
      <h3 className="mt-5 font-palanquin font-bold text-3xl leading-normal">
        {label}
      </h3>
      <p className="mt-3 font-montserrat text-lg text-slate-gray leading-normal">
        {subtext}
      </p>
    </div>
  );
};

export default ServiceCard;
