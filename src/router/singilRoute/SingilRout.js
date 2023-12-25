import React from 'react';
import { useParams } from 'react-router-dom';
import './SingilRout.css';
import { toggleWishes } from '../../context/wishesSlice';
import { useSelector, useDispatch } from 'react-redux';
import { FaRegHeart, FaHeart } from 'react-icons/fa';
// import { GoChevronLeft } from "react-icons/go";
import { GoChevronRight } from "react-icons/go";
import yulduz from "../../assets/yulduz.png"
import { incCart, decCart } from "../../context/cartSlice";
import { ToastContainer, toast } from 'react-toastify';


function SingilRout({ data }) {



  const wishes = useSelector((state) => state.wishes.value);
  const dispatch = useDispatch();

  const params = useParams();
  const oneItem = data.find((el) => el.id === params.id);


  if (!oneItem) {
    return <h1>404</h1>;
  }
  const notify = () => {
    toast(" 🛒+ Savatga Saqlandi ", {
      position: toast.POSITION.TOP_CENTER
    });
  }

  return (
    <div className="container">
      <div className="singil">
        <div className='singil_route'>
          <div className="right">
            <img width={100} className='foyizsiz' src={oneItem.url} alt="" />
            <img width={100} className='foyizsiz' src={oneItem.url} alt="" />
            <img width={100} className='foyizsiz' src={oneItem.url} alt="" />
            <img width={100} className='foyizsiz' src={oneItem.url} alt="" />
          </div>
          <div className="mains">

            {/* <GoChevronLeft className='ot' /> */}
            <img className='foyiz' src={oneItem.url} alt="" />
            {/* <GoChevronRight className='ot' /> */}

          </div>
        </div>
        <div className="singil_route_in">
          <div className="route">

            <p>  <img className='yulduz' src={yulduz} alt="" />  4.9 (284 baho) 2500 ta buyurtma</p>
            <div
              onClick={() => dispatch(toggleWishes(oneItem))}
              className="products__wishes_"
            >
              {wishes?.some((item) => item.id === oneItem.id) ? (
                <FaHeart style={{ color: "var(--bg-py)" }} />
              ) : (
                <FaRegHeart />
              )}
            </div>
          </div>
          <p className='title'>{oneItem.title}</p>
          <p className='display'>Sotuvchi:       bot</p>
          <p className='display'>Yetkazibberish:  <p>Bir kun bepul </p>   </p>
          <hr className='hr' />
          <p id='id' className='display'>   <p>Rang:</p>    Iltimos qiymatini tanlang </p>
          <p className='display'>Miqdor:</p>
          <div className="qator">

            <div className="displays">
              <div className="cart__counter">
                <button disabled={oneItem.quantity <= 1} onClick={() => dispatch(decCart(oneItem))}>-</button>
                <span>{oneItem.length}</span>
                <button onClick={() => dispatch(incCart(oneItem))}>+</button>
              </div>
            </div>
            <p>sotuvga 235 dona bor</p>
          </div>
          <p>Narhi:</p>
          <div className="display">

            <p> dan{oneItem.price?.brm()}so'm</p>
            <s>{oneItem.noprice?.brm()}so'm</s>
            <button className='btsA'>Katta sotular</button>
          </div>
          <div className='aka'>
            <p className='put'> Oyiga 233 478 so'mdan  <GoChevronRight /> </p>
            <div className='oxshadi'><p className='qrcode'>muddatli to'lov</p></div>
          </div>
          <div className="luk">

            <button onClick={() => dispatch(incCart(oneItem), notify())} className='banner'> Savatga qo'shish
              <ToastContainer
                position="top-center"
                autoClose={1333}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
              />
            </button>
            <button className='banners'> Tugmani 1 bosishda xarid qilish </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingilRout;
