import React from 'react'
import { NavLink } from 'react-router-dom'

const Voyti = () => {
    return (
        <div>
            <form>
            <center>
                <div className="w-[410px] h-[361px] p-[30px] bg-white rounded-xl shadow-xl flex-col justify-start items-center gap-[30px] inline-flex">
                    <h2 className="text-neutral-800 text-2xl font-bold font-['Raleway'] leading-loose">Авторизация</h2>
                    <div className="">
                        <input className="w-[350px] h-12 px-4 py-3 bg-white rounded-lg border border-zinc-400 flex-col justify-center items-start gap-2.5 inline-flex" placeholder='Почта*' type="text" />
                    </div>
                    <div className="">
                        <input className="w-[350px] h-12 px-4 py-3 bg-white rounded-lg border border-zinc-400 flex-col justify-center items-start gap-2.5 inline-flex" placeholder='Пароль' type="text" />
                    </div>
                    <button>
                        <button className="w-[350px] h-12 px-4 py-3 bg-blue-800 rounded-[10px] justify-center items-center gap-2 inline-flex">
                            <button className="text-center text-white text-base font-medium font-['Raleway'] leading-normal">Войти</button>
                        </button>
                    </button>
                    <div className="flex mb-[15px] gap-[8px]">
                    <p className="text-neutral-400 text-sm font-normal font-['Raleway'] leading-tight">Ещё нет аккаунта?</p>
                    <NavLink to="/Login" className="text-blue-800 text-sm font-normal font-['Raleway'] leading-tight">Зарегистрироваться</NavLink>
                    </div>
                </div>
            </center>
            </form>
        </div>
    )
}

export default Voyti