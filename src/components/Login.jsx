import React from 'react'
import { NavLink } from 'react-router-dom'

const Login = () => {
  return (
    <div>
      <div className="border rounded-2xl shadow-xl ml-[390px] w-[410px]">
        <h2 className="text-neutral-800 text-center text-2xl font-bold font-['Raleway'] leading-loose">Регистрация</h2>
        <form>
          <div className="mb-[15px]">
            <input className="ml-8 border w-[350px] h-12 px-4 py-3 bg-white rounded-lg border-zinc-400 flex-col justify-center items-start gap-2.5 inline-flex text-zinc-400 text-base font-normal font-['Raleway'] leading-normal" placeholder='Имя*' type="text" />
          </div>
          <div className="mb-[15px]">
            <input className="ml-8 border w-[350px] h-12 px-4 py-3 bg-white rounded-lg border-zinc-400 flex-col justify-center items-start gap-2.5 inline-flex text-zinc-400 text-base font-normal font-['Raleway'] leading-normal" placeholder='Фамилия*' type="text" />
          </div>
          <div className="mb-[15px]">
            <input className="ml-8 border w-[350px] h-12 px-4 py-3 bg-white rounded-lg border-zinc-400 flex-col justify-center items-start gap-2.5 inline-flex text-zinc-400 text-base font-normal font-['Raleway'] leading-normal" placeholder='Телефон' type="text" />
          </div>
          <div className="mb-[15px]">
            <input className="ml-8 border w-[350px] h-12 px-4 py-3 bg-white rounded-lg border-zinc-400 flex-col justify-center items-start gap-2.5 inline-flex text-zinc-400 text-base font-normal font-['Raleway'] leading-normal" placeholder='Почта*' type="text" />
          </div>
          <div className="mb-[15px]">
            <input className="ml-8 border w-[350px] h-12 px-4 py-3 bg-white rounded-lg border-zinc-400 flex-col justify-center items-start gap-2.5 inline-flex text-zinc-400 text-base font-normal font-['Raleway'] leading-normal" placeholder='Пароль' type="text" />
          </div>
          <button className='ml-[30px] mb-[30px]' type="submit">
            <button className="w-[350px] h-12 px-4 py-3 bg-blue-800 rounded-[10px] justify-center items-center gap-2 inline-flex">
              <p className="text-center text-white text-base font-medium font-['Raleway'] leading-normal">Зарегистрироваться</p>
            </button>
          </button>
          <div className="flex justify-center pb-[15px] gap-[8px] items-center">
            <NavLink to='/Login' className="text-neutral-400 text-center text-sm font-normal font-['Raleway'] leading-tight">Уже есть аккаунт?</NavLink>
            <NavLink to='/Voyti' className="text-blue-800 text-sm font-normal font-['Raleway'] leading-tight">Войти</NavLink>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login