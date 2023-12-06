import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Button1 from './button'
import { useState } from 'react'


const Header = ({ dokon, like }) => {

    let [open, setOpen] = useState(false)

    return (
        <div>
            <header className="container">
                <div className="md:flex md:justify-between mg:pb-0 pb-12">
                    <Link to="dokon">
                        <h1 className="text-blue-800 text-[40.34px] font-normal font-['Russo One'] uppercase tracking-wide">AKsTAR</h1>
                    </Link>
                    <button onClick={() => setOpen(!open)} className="text-3xl absolute right-8 top-2 bg-white cursor-pointer md:hidden">
                        <img src="../src/assets/img/menu.png" alt="menu" />
                    </button>

                    <ul className={`absolute items-center w-full h-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in md:static left-0 md:flex md:space-x-4 md:items-center hidden`}>
                        <NavLink to='dokon'>
                            <span className="text-lg hover:text-blue-500 hover:duration-500 font-semibold font-['Raleway']">Главная</span>
                        </NavLink>
                        <NavLink to='blog'>
                            <span className=" hover:text-blue-500 hover:duration-500 text-lg font-semibold font-['Raleway']">Блог</span>
                        </NavLink>
                        <NavLink to='tovar'><img src="../src/assets/img/bag.svg" alt="korzinka" /><span className='md:flex justify-center md:items-center md:absolute md:top-1.5 md:right-[76.1px] hidden bg-blue-500 md:rounded-3xl xl:hidden text-white md:w-5 md:h-5  md:text-center'>{dokon.length}</span></NavLink>
                        <NavLink to='yurak'><img className='w-[24px] h-[24px] mr-10' src="../src/assets/img/yurak.png" alt="yurak" /><span className='md:flex justify-center md:items-center hidden md:absolute md:top-1.5 md:right-[35px] xl:hidden bg-red-500 md:rounded-3xl  text-white md:w-5 md:h-5 md:text-center'>{like.length}</span></NavLink>
                    </ul>
                    {
                        open &&
                        <ul className={`absolute items-center w-full h-full bg-white md:w-auto md:pl-0 pl-9 md:hidden transition-all duration-500 ease-in md:static z-10 left-0 md:space-x-4 md:items-center ${open ? 'top-20' : 'top-[-490px]'}`}>
                            <NavLink to='dokon'>
                                <li className='mb-[20px]'>
                                    <Link className="text-5xl hover:text-blue-500 hover:duration-500 font-semibold font-['Raleway']">Главная</Link>
                                </li>
                            </NavLink>
                            <NavLink to='blog'>
                                <li className='mb-[20px]'>
                                    <Link className=" hover:text-blue-500 hover:duration-500 text-5xl font-semibold font-['Raleway']">Блог</Link>
                                </li>
                            </NavLink>
                            <NavLink to='tovar'><img className='w-[50px]' src="../src/assets/img/bag.svg" alt="korzinka" /><span className='md:flex justify-center md:items-center md:absolute md:top-1.5 md:right-[76.1px] hidden bg-blue-500 md:rounded-3xl text-white md:w-5 md:h-5  md:text-center'>{dokon.length}</span></NavLink>
                            <NavLink to='yurak'><img className='md:w-[24px] sm:ml-0 w-[50px] md:h-[24px] sm:mr-10' src="../src/assets/img/yurak.png" alt="yurak" /><span className='md:flex justify-center md:items-center hidden md:absolute md:top-1.5 md:right-[35px] bg-red-500 md:rounded-3xl  text-white md:w-5 md:h-5 md:text-center'>{like.length}</span></NavLink>
                        </ul>
                    }
                </div>
            </header>
            {/* <marquee behavior="smooth" direction="left" className='hidden uppercase bg-blue-700 text-white p-3 mt-3'>akstar akstar akstar akstar akstar akstar akstar akstar akstar akstar akstar akstar akstar akstar akstar akstar akstar akstar akstar akstar akstar akstar akstar akstar akstar akstar akstar akstar akstar akstar akstar akstar akstar akstar akstar akstar akstar akstar akstar akstar akstar akstar akstar akstar akstar akstar akstar akstar akstar akstar akstar akstar akstar akstar akstar akstar akstar akstar akstar akstar akstar akstar akstar akstar akstar akstar akstar akstar akstar akstar akstar akstar akstar akstar akstar akstar akstar akstar akstar akstar akstar akstar akstar akstar akstar akstar akstar akstar akstar akstar akstar akstar akstar akstar akstar akstar  akstar akstar akstar akstar akstar akstar akstar akstar akstar akstar akstar akstar akstar akstar akstar akstar akstar akstar akstar akstar akstar akstar akstar akstar akstar akstar akstar akstar akstar akstar akstar akstar akstar akstar akstar akstar akstar akstar akstar akstar akstar akstar akstar akstar akstar akstar akstar akstar akstar akstar akstar akstar akstar akstar akstar akstar akstar akstar akstar akstar akstar akstar akstar akstar akstar akstar akstar akstar akstar akstar akstar akstar akstar akstar akstar akstar akstar akstar akstar akstar akstar akstar akstar akstar akstar akstar akstar akstar akstar akstar akstar akstar akstar akstar akstar akstar akstar akstar akstar akstar akstar akstar akstar akstar akstar akstar akstar akstar akstar akstar akstar akstar akstar akstar akstar akstar akstar akstar akstar akstar akstar akstar akstar akstar akstar akstar akstar akstar akstar akstar akstar akstar akstar akstar akstar akstar akstar akstar akstar akstar akstar akstar akstar akstar </marquee> */}
        </div>
    )
}

export default Header
{/* <span className='md:flex justify-center md:items-center md:absolute md:top-0 md:right-[188px] bg-red-500 md:rounded-3xl hidden text-white md:w-5 md:h-5 md:text-center'>{like.length}</span>  */ }
{/* <span className='md:flex justify-center md:items-center md:absolute md:top-0 md:right-[235px] bg-blue-500 hidden md:rounded-3xl text-white md:w-5 md:h-5 md:text-center'>{dokon.length}</span> */ }