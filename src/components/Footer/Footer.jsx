import { Link } from 'react-router-dom';
import { logo } from '../../assets/index.js';
import { Button } from "../index.js";
import { SectionWrapper } from "../../hoc";

const Footer = () => {
  return (
    <section className="relative overflow-hidden py-10 bg-[#f5f5f5] border border-t-2 border-t-[#03a9f4]">
      <div className="flex flex-wrap justify-between items-center px-4">
        <div className="mb-2 flex gap-2 justify-center items-center">
          <img src={logo} className="w-9 h-9 object-contain" />
          <p className='text-xl text-cyan-500 font-bold cursor-pointer flex'>Spectacles</p>
        </div>
        <div className='space-y-5'>
          <h3 className="font-mono text-center font-bold uppercase">
            Support
          </h3>
          <Link
            className=" text-base font-medium text-gray-900 hover:text-gray-700"
            to="/"
          >
            <Button>Give us star</Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default SectionWrapper(Footer)