import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "../constants";

const DropDownMenu = ({ showDropDown, setShowDropDown }) => {
  return (
    <div>
      {showDropDown && (
        <AnimatePresence>
          <div
            className="absolute button-0 left-0 w-full h-screen lg:hidden"
            onClick={() => {
              setShowDropDown(false);
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
            >
              <div className="mx-auto p-10 bg-black">
                <ul className="flex flex-col divide-y-2 font-normal text-lg text-white">
                  {navLinks.map((item, index) => (
                    <li className="py-3 hover:text-coral-red" key={index}>
                      <a href={item.link}>{item.label}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </AnimatePresence>
      )}
    </div>
  );
};

export default DropDownMenu;
