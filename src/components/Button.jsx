import { Icon } from "@iconify/react/dist/iconify.js";

const Button = ({ label , iconName, style = 'primary', className='' }) => {
  return (
    <button className={`flex justify-center items-center gap-2 px-7 py-3 font-montserrat text-lg leading-normal rounded-full ${ className } ${
      style === 'primary' ? 'bg-coral-red text-white' : 'bg-white border border-slate-gray text-slate-gray'
    }`}>
        <span>{ label }</span>
        { iconName && <Icon icon={iconName} width="25" height="25" />}
    </button>
    

  )
}

export default Button
