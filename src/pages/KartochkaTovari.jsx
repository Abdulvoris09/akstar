import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

const KartochkaTovari = ({ dokon, setDokon, addCartPul }) => {
  const [narhi, setNarhi] = useState(0);

  const CartNarhi = () => {
    let totalPul = 0;
    dokon.forEach((e) => {
      totalPul += e.puli * e.miqdor;
    });
    setNarhi(totalPul);
  };

  useEffect(() => {
    CartNarhi();
  }, [dokon]);

  const deletCart = (i) => {
    const cart = dokon.filter((e) => e.id !== i)
    setDokon(cart)
    toast.success("Cartdan o'chirildi", {
      position: "bottom-right",
      autoClose: 1500,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  return (
    <div className='mt-[100px] sm:w-full sm:max-w-7xl sm:mx-auto sm:my-auto sm:px-[7px]'>
      <h1 className="text-zinc-900 pb-[50px] ml-5 text-4xl font-bold font-['Raleway']">Корзина</h1>
      <div className={`ml-[20px] list-none ${dokon.length === 0 ? 'hidden' : 'inline-block'}`}>
        <div className="flex">
          <div className="flex">
            {
              dokon.map((e) => {
                return (
                  <li key={e.id} className="mt-[30px] flex">
                    <img className="w-[170px] h-[190px] rounded-[15px]" src={e.img} alt="" />
                    <div className="ml-[20px]">
                      <p className="text-zinc-900 mt-5 text-2xl font-bold font-['Raleway']">{e.title}</p>
                      <p className="w-[481px] text-zinc-900 text-base font-normal font-['Raleway']">{e.haqida}</p>
                      <button onClick={() => deletCart(e.id)} className="text-zinc-400 flex items-center text-base font-semibold font-['Raleway'] leading-normal">Ochirish <img src="../src/assets/img/trash.png" alt="trash" /></button>
                      <div className="md:ml-[200px] gap-[30px]">
                        <div className='space-x-4'>
                          <button onClick={() => addCartPul(e, -1)} disabled={e.miqdor <= 1}>
                            -
                          </button>
                          <span className='font-semibold text-xl'>{e.miqdor}</span>
                          <button onClick={() => {
                            if (e.miqdor !== 0) {
                              addCartPul(e, 1);
                              CartNarhi();
                            }
                          }}>
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                )

              })

            }
            <div>
              <div className=" w-[410px] h-[285px] bg-slate-50 rounded-xl flex-col justify-start items-start gap-2.5 inline-flex">
                <div className="self-stretch px-[30px] py-5 border-b border-gray-100 justify-start items-start gap-2.5 inline-flex">
                  <div className="text-zinc-900 text-2xl font-bold font-['Raleway']">Hammasi: {dokon.length} tovar</div>
                </div>
                <div className="self-stretch h-[122px] px-[30px] py-5 border-b border-gray-100 flex-col justify-start items-start gap-[15px] flex">
                  <div className="self-stretch h-12 px-4 py-3 bg-white rounded-lg flex-col justify-center items-start gap-2.5 flex">
                    <input className="self-stretch text-zinc-500 text-base font-normal font-['Raleway'] leading-normal" placeholder='Промокод:' />
                  </div>
                  <div className="self-stretch h-[19px] flex-col justify-start items-start gap-2.5 flex">
                    <div className="self-stretch justify-center items-end gap-[5px] inline-flex">
                    </div>
                  </div>
                </div>
                <div className="self-stretch h-[75px] px-[30px] py-5 flex-col justify-start items-start gap-[15px] flex">
                  <div className="w-[350px] justify-between items-center inline-flex">
                    <div className="text-zinc-900 text-2xl font-bold font-['Raleway']">Jami</div>
                    <div className="text-right text-blue-800 text-3xl font-bold font-['Raleway']">{narhi} so'm</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`${dokon.length === 0 ? 'inline-block' : 'hidden'}`}>
        <p className='text-red-700 text-2xl'>Cartda hech narsa yo'q :(</p>
      </div>
    </div>
  )
}

export default KartochkaTovari