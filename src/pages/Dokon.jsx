import Katalog from './Katalog'
import { guitar } from '../assets/data'
import S21 from "../assets/img/s21ultra.jpg";
import React, { useRef, } from 'react';


const Dokon = ({ addCart, addLike, deletCart }) => {
  
  return (
    <div>
      <div className="flex container">
      <div className="hidden sm:block">
        <img src={S21} alt="s23" className="w-[517px] h-[185px] rounded-xl" />
        <img src={S21} alt="s23" className="w-[517px] h-[185px] mt-[30px] rounded-xl" />
      </div>
      <div className="ml-[30px]">
      <img className="w-[740px] h-[400px] rounded-3xl" src={S21} alt='s23ultra' />
      </div>
      </div>

      {/* Bizning telegram */}
      <div className="sm:w-full shadow-2xl mb-[50px] mt-[50px] h-[46px] bg-blue-800 bg-opacity-10 justify-center items-center flex">
        <a href="#">
          <div className="self-stretch justify-start items-center gap-[15px] inline-flex">
            <div className="text-zinc-900 text-base font-semibold font-['Raleway'] uppercase">Bizning Telegram kanalimiz</div>
            <img className="w-[31.15px] rounded-full h-[31.15px] bg-black" src="../src/assets/img/socials.svg" alt='telegram' />
          </div>
        </a>
        
      </div>


      <ul className='container sm:text-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full gap-5'>
        {
          guitar.map((e) => (
            <Katalog addCart={addCart} addLike={addLike} deletCart={deletCart} e={e} />
          ))
        }
      </ul>
    </div>
  )
}

export default Dokon