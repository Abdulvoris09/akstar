import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
// pages
import Home from '../src/pages/Home'
import Akademiya from '../src/pages/Akademiya'
import Blog from '../src/pages/Blog'
import Dokon from '../src/pages/Dokon'
import Card from "./pages/KartochkaTovari";
import Header from "./components/Header";
import Footer from "./components/Footer";

// layouts
import Products from "./components/Products";
import Login from "./components/Login";
import { useState } from "react";
import { guitar } from "./assets/data";
import KartochkaTovari from "./pages/KartochkaTovari";
import PageFound from "./pages/PageFound";
import Filter from "./pages/Filter";
import Kards from "./pages/Kards";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Voyti from "./pages/Voyti";
import Profil from "./pages/Profil";
import Xatolar from "./pages/Xatolar";

const App = () => {
  const [dokon, setDokon] = useState([]);
  const [like, setLike] = useState([])

  const addCart = (i) => {
    const found = dokon.find((e) => e.id === i);
    if (!found) {
      const cart = guitar.find((e) => e.id === i)
      setDokon([...dokon, { ...cart }])
      toast.success("Cartga qo'shildi", {
        position: "bottom-right",
        autoClose: 1500,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      toast.warning("Bu mahsulot avvaldan bor", {
        position: "bottom-right",
        autoClose: 1500,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      })
    }

  }
  const addLike = (i) => {
    const found = like.find((e) => e.id === i);
    if (!found) {
      const cart = guitar.find((e) => e.id === i)
      setLike([...like, { ...cart }])
    }
  }
  const deletCart = (i) => {
    const cart = like.filter((e) => e.id !== i)
    setLike(cart)
  }
  const addCartPul = (e, d) => {
    let ind = -1;
    dokon.forEach((data, index) => {
      if (data.id === e.id) {
        ind = index;
      }
    });
    const tempArr = [...dokon];
    tempArr[ind].miqdor += d;

    if (tempArr[ind].miqdor === 0) {
      tempArr[ind].miqdor = 1;
    }

    setDokon([...tempArr]);
  };
  return (
    <div>
      <Router>
        <Header dokon={dokon} like={like} />
        <Routes>
          <Route path="/" element={<Dokon />} />
          <Route path="/akademiya" element={<Akademiya />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/dokon" element={<Dokon addCart={addCart} deletCart={deletCart} addLike={addLike} />} />
          <Route path="/card" element={<Card />} />
          <Route path="/yurak" element={<Products like={like} setLike={setLike} deletCart={deletCart} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/voyti" element={<Voyti />} />
          <Route path="/filter" element={<Filter />} />
          <Route path="/kards" element={<Kards />} />
          <Route path="/tovar" element={<KartochkaTovari addCartPul={addCartPul} dokon={dokon} setDokon={setDokon} />} />
          <Route path="*" element={<Xatolar />} />
        </Routes>
        <Footer />
      </Router>

      <ToastContainer />
    </div>
  )
}

export default App;