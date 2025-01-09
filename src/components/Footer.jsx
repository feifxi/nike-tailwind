import { footerLinks, socialMedia } from "../constants"
import footerLogo from "../assets/images/footer-logo.svg"
import { copyrightSign } from "../assets/icons";


const Footer = () => {
  return (
    <footer className="px-8 pt-12 pb-4 sm:px-16 sm:pt-24 sm:pb-8 bg-black text-white">
      <div className="mx-auto max-w-screen-wide">
        {/* Footer Links */}
        <div className="flex gap-20 max-lg:flex-col">
          <div className="">
            <img 
              src={footerLogo} 
              alt="logo" 
              width={150}
              height={46}
            />
            <p className="mt-6 max-w-sm font-montserrat text-base text-white-400 leading-7">
              Get shoes ready for the new term at your nearest Nike store. Find Your perfect Size In Store. Get Rewards
            </p>
            <div className="flex items-center gap-5 mt-8">
              {socialMedia.map((icon, index)=>(
                <div className="flex justify-center items-center bg-white w-12 h-12 rounded-full">
                  <img src={icon.src} alt={icon.alt} width={24} height={24} />
                </div>
              ))}
            </div>
          </div>

          <div className="flex-1 flex justify-between flex-wrap gap-20 lg:gap-10">
            {footerLinks.map((section, index)=>(
              <div>
                <h3 className="mb-6 font-montserrat font-medium text-2xl leading-normal">
                  { section.title }
                </h3>
                <ul className="">
                  {section.links.map((link, index)=>(
                      <li
                        key={index}
                        className="mt-3 font-montserrat text-base text-white-400 leading-normal hover:text-slate-gray"
                      >
                        <a href={ link.link }> { link.name }</a>
                      </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        {/* Copy-right & Term */}
        <div className="flex justify-between items-center max-sm:flex-col mt-24">
          <div className="flex items-center gap-2">
            <img src={copyrightSign} alt="" />
            <a className="font-montserrat text-base text-white-400 leading-normal">
              Copyright. All rights reserved.
            </a>
          </div>

          <a 
            href="/"
            className="font-montserrat text-base text-white-400 leading-normal"
          >
            Terms & Conditions
          </a>
        </div>
      </div>      
    </footer>
  )
}

export default Footer
