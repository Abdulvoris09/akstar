import React, { useState } from 'react'
import { guitar } from '../assets/data'
import { NavLink } from 'react-router-dom'

const Kards = ({ addCart, addLike, deletCart, e }) => {
    const [like, setLike] = useState(false)
    const toggle = (i) => {
        setLike(!like)
        if (!like) {
            addLike(i)
        }
        else {
            deletCart(i)
        }
    }
    return (
        <li className="max-w-7xl mx-auto my-auto px-[7px] sm:ml-3 ml-16">
            <NavLink to='filter'>
            <img className="rounded-[15px] h-[200px] sm:rounded-[15px]" src={e.img} alt="" />
            </NavLink>
            <span className="text-zinc-400 text-sm font-medium font-['Raleway']">{e.akys}</span>
            <p className="text-zinc-900 text-base font-bold font-['Raleway']">{e.title}</p>
            <button className={`${like === false ? 'absolute ml-[80px] gap-[200px] rounded-3xl text-white w-5 text-center items-center' : 'bg-red-500 p-[2px] rounded-3xl absolute items-center ml-[80px] gap-[400px]'}`} onClick={() => toggle(e.id)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                    <path d="M3.84255 7.77789C4.0687 7.23192 4.40017 6.73584 4.81804 6.31798C5.2359 5.90011 5.73198 5.56864 6.27795 5.34249C6.82392 5.11634 7.40909 4.99994 8.00004 4.99994C8.59099 4.99994 9.17616 5.11634 9.72213 5.34249C10.2681 5.56864 10.7642 5.90011 11.182 6.31798L12.5 7.63598L13.818 6.31798C14.662 5.47406 15.8066 4.99995 17 4.99995C18.1935 4.99995 19.3381 5.47406 20.182 6.31798C21.026 7.1619 21.5001 8.3065 21.5001 9.49998C21.5001 10.6935 21.026 11.8381 20.182 12.682L12.5 20.364L4.81804 12.682C4.40017 12.2641 4.0687 11.768 3.84255 11.2221C3.6164 10.6761 3.5 10.0909 3.5 9.49998C3.5 8.90902 3.6164 8.32386 3.84255 7.77789Z" stroke="#B0B0B0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </button>
            <p className="text-blue-800 text-lg font-extrabold font-['Raleway']">{e.puli}</p>
            <button onClick={() => addCart(e.id)} className={`w-[210px] h-9 px-9 rounded-md border border-blue-800 justify-center items-center inline-flex text-blue-800 text-base font-semibold font-['Raleway'] leading-normal`}>{e.savat}</button>
        </li>
    )
}

export default Kards