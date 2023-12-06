import React from 'react'
import { blog } from '../assets/data'
import { NavLink } from 'react-router-dom'

const Blog = () => {
  return (
    <div className=''>
      <div className="sm:mt-[90px] grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 w-full gap-5 sm:w-full sm:max-w-7xl sm:mx-auto sm:my-auto sm:px-[7px]">
        {
          blog.map((e) => {
            return (
              <div className="">
                <NavLink to='/Filter'>
                  <div className="w-[380px] h-[474px] sm:p-[15px] bg-white rounded-xl shadow flex-col justify-start items-start sm:gap-[15px] sm:inline-flex">
                    <img className="self-stretch h-[243px] rounded-xl" src={e.img} />
                    <div className="self-stretch pt-2 h-[164px] flex-col justify-start items-start gap-2.5 flex">
                      <div className="self-stretch justify-between items-start inline-flex">
                        <div className="text-zinc-400 text-sm font-normal font-['Raleway']">01.07.2023</div>
                        <div className="justify-start items-start gap-[5px] flex">
                          <div className="inline-flex relative text-zinc-400 text-sm font-normal sm:flex gap-1 font-['Raleway']"><img src={e.koz} alt="koz" />1257</div>
                        </div>
                      </div>
                      <div className="self-stretch text-neutral-800 text-2xl font-bold font-['Raleway']">{e.title}</div>
                      <div className="self-stretch text-neutral-800 text-sm font-normal font-['Raleway'] leading-[18px]">{e.gitara}</div>
                    </div>
                  </div>
                </NavLink>
              </div>
            )
          })
        }
      </div>
    </div >
  )
}

export default Blog