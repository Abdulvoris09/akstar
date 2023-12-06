import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='md:w-full items-center container  bg-blue-800 p-5 md:mt-[110px] text-white'>
      <ul className="md:ml-16 grid grid-rows-1 space-y-5 mt-5 md:grid md:grid-cols-3">
        <li className="space-x-10">
          <h2 className='md:mt-[27px] mb-5'>
            <img src="../src/assets/img/akstar.png" alt="akstar" />
          </h2>
          <div className="">
            <p className="-ml-10 text-white md:mt-[45px] mb-5 md:mb-[15px] text-2xl font-bold font-['Raleway']">Сообщество магазина</p>
            <div className="flex -ml-10 gap-2">
              <NavLink to='dokon'>
                <div className="flex gap-3">
                  <img className="w-[31.15px] h-[31.15px]" src="../src/assets/img/Subtract.svg" />
                  <img className="w-[31.15px] h-[31.15px]" src="../src/assets/img/Subtract (1).svg" />
                  <img className="w-[31.15px] h-[31.15px]" src="../src/assets/img/Subtract (2).svg" />
                  <img className="w-[31.15px] h-[31.15px]" src="../src/assets/img/Subtract (3).svg" />
                  <img className="w-[31.15px] h-[31.15px]" src="../src/assets/img/Subtract (4).svg" />
                  <img className="w-[31.15px] h-[31.15px]" src="../src/assets/img/Subtract (5).svg" />
                </div>
              </NavLink>
            </div>
          </div>
        </li>

        <li>
          <div className="space-x-5">
            <div className="md:ml-12">
              <p className="text-white text-2xl font-bold font-['Raleway']">Служба поддержки</p>
              <p className="mt-[10px] text-white text-xl font-medium font-['Raleway']">+7 (499) 286 87 10</p>
              <p className="text-white mt-[10px] text-xl font-medium font-['Raleway']">akstar.help@gmail.com</p>
              <button>
                <button className="w-[165px] h-10 mt-[10px] px-9 pb-2.5 bg-white hover:bg-blue-800 rounded-[10px] items-center flex">
                  <div className="text-zinc-900 mt-[10px] text-base font-semibold font-['Raleway'] leading-normal">Обратиться</div>
                </button>
              </button>
              <div className="pb-5">
                <p className="mt-[10px] text-white text-base font-normal font-['Raleway']">Политика конфиденциальности</p>
                <p className="mt-[10px] text-white text-base font-normal font-['Raleway']">Обработка персональных данных</p>
              </div>
            </div>
          </div>
        </li>

        <li className=''>

          <div className='hidden sm:block flex-col'>

            <NavLink to='Dokon'>
              <h1 className="text-white hover:text-black hover:duration-500 text-3xl font-bold font-['Raleway']">Меню</h1>
            </NavLink>

            <NavLink to='Dokon'>
              <h1 className=" mt-[15px] hover:text-black hover:duration-500 text-white text-2xl font-normal font-['Raleway']">Главная</h1>
            </NavLink>

            <NavLink to='Blog'>
              <h1 className="w-[66px] hover:text-black hover:duration-500 text-white text-2xl mt-[15px] font-normal font-['Raleway']">Блог</h1>
            </NavLink>


          </div>

        </li>

      </ul>

    </footer>
  )
}

export default Footer