import React, { useState } from 'react'

const Products = ({ like, deletCart }) => {
  return (
    <div>
      <div className={`sm:w-full sm:max-w-7xl sm:mx-auto sm:my-auto sm:px-[7px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full gap-5 mx-8 ml-16 list-none ${like.length === 0 ? 'hidden' : 'inline-block'}`}>
        {
          like.map((e) => {
            return (
              <li className="mt-[90px] sm:w-full sm:max-w-7xl sm:mx-auto sm:my-auto sm:px-[7px]">
                <img className="rounded-[15px] h-[200px] sm:rounded-[15px]" src={e.img} alt="" />
                <span className="text-zinc-400 text-sm font-medium font-['Raleway']">{e.akys}</span>
                <p className="text-zinc-900 text-base font-bold font-['Raleway']">{e.title}</p>
                <p className="text-blue-800 text-lg font-extrabold font-['Raleway']">{e.puli}</p>
                <button onClick={() => deletCart(e.id)} className="w-[210px] h-9 px-9 rounded-md border border-red-800 justify-center items-center inline-flex text-red-800 text-base font-semibold font-['Raleway'] leading-normal">Ochirish</button>
              </li>
            )

          })
        }
      </div>
      <div className={`${like.length === 0 ? 'inline-block mt-[90px]' : 'hidden mt-[90px]'}`}>
        <div className="block mt-[25px]">
          <img className='ml-[450px]' src="https://asaxiy.uz/custom-assets/images/heart-bubble.svg" alt="" />
          <h1 className="text-4xl mb-3 font-medium font-['Raleway'] ml-[370px]">Sevimli mahsulotlar yo'q</h1>
          <span className="text-2xl ml-[650px] font-black font-['Raleway']">Mahsulotga❤️belgi qo'shing</span>
        </div>
      </div>
    </div>
  )
}

export default Products
      {/* <div className="ml-5 mt-[140px] absolute flex-col justify-start items-start gap-[15px] inline-flex">
          <div className="text-white text-2xl font-bold font-['Raleway']">Bizni internet sahifalarimiz</div>
          <div className="opacity-80 w-[257.39px] h-[31.15px] relative">
            <a href="https://web.telegram.org">
              <img className="w-[31.15px] h-[31.15px] ml-[0px] mt-0 absolute" src="../src/assets/img/Subtract.svg" />
            </a>
            <a href="https://www.instagram.com/">
              <img className="w-[31.15px] h-[31.15px] ml-[40px] mt-0 absolute" src="../src/assets/img/Subtract (1).svg" />
            </a>
            <a href="https://youtube.com/">
              <img className="w-[31.15px] h-[31.15px] ml-[80px] mt-0 absolute" src="../src/assets/img/Subtract (2).svg" />
            </a>
            <a href="https://www.tiktok.com/">
              <img className="w-[31.15px] h-[31.15px] ml-[120px] mt-0 absolute" src="../src/assets/img/Subtract (3).svg" />
            </a>
            <a href="ok.ru">
              <img className="w-[31.15px] h-[31.15px] ml-[160px] mt-0 absolute" src="../src/assets/img/Subtract (4).svg" />
            </a>
            <a href="https://vk.com/">
              <img className="w-[31.15px] h-[31.15px] ml-[200px] mt-0 absolute" src="../src/assets/img/Subtract (5).svg" />
            </a>
          </div>
        </div> */}