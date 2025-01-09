import { Icon } from "@iconify/react/dist/iconify.js"

const ProductCard = ({ imgURL, name, price}) => {
  return (
    <div>
      <img 
        src={imgURL}
        alt={name}
        className="w-[282px] h-[282px]" 
      />
      <div className="flex items-center gap-1 mt-5">
        <Icon icon="material-symbols:star-rate-rounded" width="35" height="35" className="text-coral-red" />
        <p className="font-montserrat text-slate-gray text-xl leading-normal">
          { "(4.5)"}
        </p>
      </div>
      <p className="mt-2 font-palanquin font-semibold text-2xl leading-normal">{ name }</p>
      <p className="mt-2 font-montserrat font-semibold text-2xl leading-normal text-coral-red">{ price }</p>
    </div>
  )
}

export default ProductCard
