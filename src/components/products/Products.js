import React, {  useState }   from "react";
import "./Products.css";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleWishes } from "../../context/wishesSlice";
import { TbShoppingBagPlus } from "react-icons/tb";
import { incCart } from "../../context/cartSlice";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

 
const  AMOUNT = 5

function Products({ data, admin }) {
 
 


  const [count ,  setCount] = useState(1)
  const wishes = useSelector((s) => s.wishes.value);
  const dispatch = useDispatch();

const notify = () => {
  toast(" 🛒+ Savatga Saqlandi ",{
    position: toast.POSITION.TOP_CENTER
  });
 
}
  return (
    <div className="">
       
       
    <div>
    <div className="products__wrapper">
 
             

      {data?.slice(0, count*AMOUNT).map((el) => (
        <div key={el.id} className="products__card">
          <Link to={ `/product/${el.id}`} className="products__image">
            <img src={el.url} alt="" />
          </Link>
          <div className="products__body">
            <p className="products__title">{el.title }</p>
            <div style={{ flex: 1 }}>
              <span className="products__monthly">
                {(el.price * 1.5 / 12)?.brm()  } so'm/oyiga
              </span>
            </div>
            <del  id="fonts">{(el.price * 1.2)?.brm()} so'm</del>
            <p id="font" className="products__price">{el.price?.brm()} so'm</p>
          </div>
          {
            admin ? 
            <div className="">

            </div>
            :
          <div
            onClick={() => dispatch(toggleWishes(el))}
            className="products__wishes"
            >
            {wishes?.some((item) => item.id === el.id) ? (
              <FaHeart style={{ color: "var(--bg-py)" }} />
              ) : (
              <FaRegHeart />
              )}
          </div>
          }
          {
            admin ? 
            <div  className="products__cart">
              🗑
            </div>
            :
          <div
            onClick={() => dispatch(incCart(el))}
            className="products__cart"
            >
            <button className="products__carts"
             onClick={ e => notify()}>      
                  <TbShoppingBagPlus />
               </button>
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
          </div>
          }
        </div>





      ))}
    </div>
    {
      data.length > count*AMOUNT ? 
      <div className="hurmacha">

      <button className='nok'
      onClick={()=> setCount( p => p+5)}> 
       
        <h1 className="font">Yana ko'rsatish</h1>
        </button>
      </div>
: <></>
}
      </div>
</div>
  );
}
export default Products;

 

 





 
// import React, { useEffect, useState } from "react";
// import "./Products.css";
// import { FaRegHeart, FaHeart } from "react-icons/fa";
// import { Link } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { toggleWishes } from "../../context/wishesSlice";
// import { TbShoppingBagPlus } from "react-icons/tb";
// import { ToastContainer, toast } from 'react-toastify';
// import { incCart } from "../../context/cartSlice";
// import 'react-toastify/dist/ReactToastify.css';
// import Skeleton from '@mui/material/Skeleton';
// import Typography from '@mui/joy/Typography';
// import Box from '@mui/joy/Box';
// import Card from '@mui/joy/Card';


// const AMOUNT = 10;

// function Products({ data, admin }) {
//   const [loading, setLoading] = useState(true);
//   useEffect(() => {
//     // Simulyatsiyani o'chirish uchun setTimeout ishlatamiz
//     setTimeout(() => {
//       setLoading(false);
//     }, 6000);
//   }, []);

//   const [count, setCount] = useState(1);
//   const wishes = useSelector((s) => s.wishes.value);
//   const dispatch = useDispatch();

//   const notify = () => {
//     toast(" 🛒+ Savatga Saqlandi ", {
//       position: toast.POSITION.TOP_CENTER,
//     });
//   };

//   return (
//     <div className="">
//       <div>
//         <div className="products__wrapper">
//           {loading ? (
//             // Skeleton oynasini ko'rsatish
//             Array.from({ length: 10 }).map((_, index) => (
//               <div key={index}  width={220} className="products__card">
//                 {/* <Skeleton variant="rectangular" width={220} height={300} /> */}
//                 <Card width={220} className=" acard">
//         <div className=" afoyz">
//         <Typography>
//         <Skeleton variant="rectangular" width={220} height="16em" sx={{ mb: 1 }} />
//         </Typography>
//         <div variant="rectangular" width={220} height="1.2em" className=" apadding"/>
//         <Typography>
//           <Skeleton variant="rectangular" width={220} height="1.8em" className=" apadding"/>
//         </Typography>
//         <div variant="rectangular" width={220} height="1.2em" className=" apadding"/>
//         <Skeleton variant="rectangular" width={120} height="1.4em" />
//         <div variant="rectangular" width={220} height="1.2em" className=" apadding"/>
//       <Box className=" abox" 
//       >
//         <div className=' agap'>
//           <Skeleton variant="rectangular" width={100} height="1em" />
//           <Skeleton variant="rectangular" width={140} height="1em" sx={{ mb: 1 }} />
//         </div>
//         <Skeleton variant="circular" width={48} height={48} />
//       </Box>
//       </div>
//       </Card>             
//               </div>
//             ))
//           ) : (
//             // Maxsulotlarni ko'rsatish
//             data?.slice(0, count * AMOUNT).map((el) => (
//               <div key={el.id} className="products__card">
//                 <Link to={`/product/${el.id}`} className="products__image">
//                   <img src={el.url} alt="" />
//                 </Link>
//                 <div className="products__body">
//                   <p className="products__title">{el.title}</p>
//                   <div style={{ flex: 1 }}>
//                     <span className="products__monthly">
//                       {(el.price * 1.5 / 12)?.brm()} so'm/oyiga
//                     </span>
//                   </div>
//                   <del id="fonts">{(el.price * 1.2)?.brm()} so'm</del>
//                   <p id="font" className="products__price">
//                     {el.price?.brm()} so'm
//                   </p>
//                 </div>
//                 {!admin && (
//                   <div
//                     onClick={() => dispatch(toggleWishes(el))}
//                     className="products__wishes"
//                   >
//                     {wishes?.some((item) => item.id === el.id) ? (
//                       <FaHeart style={{ color: "var(--bg-py)" }} />
//                     ) : (
//                       <FaRegHeart />
//                     )}
//                   </div>
//                 )}
//                 {!admin && (
//                   <div onClick={() => dispatch(incCart(el))} className="products__cart">
//                     <button className="products__carts" onClick={(e) => notify()}>
//                       <TbShoppingBagPlus />
//                     </button>
//                     <ToastContainer
//                       position="top-center"
//                       autoClose={1333}
//                       hideProgressBar={false}
//                       newestOnTop={false}
//                       closeOnClick
//                       rtl={false}
//                       pauseOnFocusLoss
//                       draggable
//                       pauseOnHover
//                       theme="light"
//                     />
//                   </div>
//                 )}
//               </div>
//             ))
//           )}
//         </div>
//         {data.length > count * AMOUNT && (
//           <div className="hurmacha">
//             <button className="nok" onClick={() => setCount((p) => p + 5)}>
//               <h1 className="font">Yana ko'rsatish</h1>
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Products;  












































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































// import React from "react";
// import "./Products.css";
// import { FaRegHeart ,FaHeart } from "react-icons/fa";
// import { Link } from "react-router-dom";
// import { useDispatch , useSelector  } from "react-redux"
// import { toggleWishes } from "../../context/wishesSlice"
// import { TbShoppingBagPlus } from "react-icons/tb";
// import { TbShoppingBagX } from "react-icons/tb";
// import { toggleCart } from "../../context/wishesSliceCopy";
// function Products({ data }) {
//   const wishes = useSelector(s => s.wishes.value)
//   const cart = useSelector (a => a.wishes.value)
//   const dispatch = useDispatch()
//   console.log(cart);
//   console.log(wishes);
//   return (
//     <div className="products__wrapper">
//         {
//             data?.map((el) => <div key={el.id} className="products__card">
//             <Link to={"/login"} className="products__image">
//               <img src={el.url} alt="" />
//             </Link>
//             <div className="products__body">
//               <p className="products__title">{el.title}</p>
//               <div style={{flex: 1}}>
//                 <span className="products__monthly">
//                     {(el.price * 1.5 / 12)?.brm()} so'm/oyiga
//                 </span>
//               </div>
//               <del>{(el.price * 1.2)?.brm()} so'm</del>
//               <p className="products__price">{el.price?.brm()} so'm</p>
//             </div>
//             <div onClick={()=> dispatch(toggleWishes(el))} className="products__wishes">
//               {
//         wishes?.some(item => item.id === el.id) ?     <FaHeart style={ {color: "var(--bg-py)"}} /> : <FaRegHeart/>
//               }
      
//             </div>
//           <div onClick={() => dispatch(toggleCart(el))} className="products__cart">
//           {
//         cart?.some(item => item.id === el.id) ?     < TbShoppingBagX style={ {color: "var(--bg-py)"}} /> : <TbShoppingBagPlus/>
//               }

// </div>
//           </div>)
//         }
//     </div>
//   );
// }

// export default Products;





// Products.js
// import React from "react";
// import "./Products.css";
// import { FaRegHeart, FaHeart } from "react-icons/fa";
// import { Link } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { toggleWishes } from "../../context/wishesSlice";
// import { TbShoppingBagPlus } from "react-icons/tb";
// import { incCart } from "../../context/cartSlice"; // Correct import statement

// function Products({ data }) {
//   const wishes = useSelector((s) => s.wishes.value);
//   const cart = useSelector((s) => s.cart.value);
//   const dispatch = useDispatch();
//   console.log(cart);
//   console.log(wishes);

//   return (
//     <div className="products__wrapper">
//       {data?.map((el) => (
//         <div key={el.id} className="products__card">
//           <Link to={"/login"} className="products__image">
//             <img src={el.url} alt="" />
//           </Link>
//           <div className="products__body">
//             <p className="products__title">{el.title}</p>
//             <div style={{ flex: 1 }}>
//               <span className="products__monthly">
//                 {(el.price * 1.5 / 12)?.brm()} so'm/oyiga
//               </span>
//             </div>
//             <del>{(el.price * 1.2)?.brm()} so'm</del>
//             <p className="products__price">{el.price?.brm()} so'm</p>
//           </div>
//           <div
//             onClick={() => dispatch(toggleWishes(el))}
//             className="products__wishes"
//           >
//             {wishes?.some((item) => item.id === el.id) ? (
//               <FaHeart style={{ color: "var(--bg-py)" }} />
//             ) : (
//               <FaRegHeart />
//             )}
//           </div>
//           <div
//             onClick={() => dispatch(incCart(el))}
//             className="products__cart"
//           >
//             <TbShoppingBagPlus />
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Products;
// const cart = useSelector((a) => a.wishes.value); shuni ham to'g'rillab yozibber   savatga  bosilganda savatga like bosilganda like ga saqlansin hammasini boshidan yozibber savatga saqlaydigan qilib   ber wishesSliceCopy, store, Cart larni boshidan aytganimdaek ishlaydigan qilib yozibber 





// import React from "react";
// import "./Products.css";
// import { FaRegHeart, FaHeart } from "react-icons/fa";
// import { TbShoppingBagPlus } from "react-icons/tb";
// import { TbShoppingBagX } from "react-icons/tb";
// import { Link } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { toggleWishes } from "../../context/wishesSlice";
// import { toggleCart } from "../../context/cartSlice";

// function Products({ data }) {
//   const wishes = useSelector((state) => state.wishes.value);
//   const cart = useSelector((state) => state.cart.value);
//   const dispatch = useDispatch();

//   return (
//     <div className="products__wrapper">
//       {data?.map((el) => (
//         <div key={el.id} className="products__card">
//           <Link to={"/login"} className="products__image">
//             <img src={el.url} alt="" />
//           </Link>
//           <div className="products__body">
//             <p className="products__title">{el.title}</p>
//             <div style={{ flex: 1 }}>
//               <span className="products__monthly">
//                 {(el.price * 1.5 / 12)?.brm()} so'm/oyiga
//               </span>
//             </div>
//             <del>{(el.price * 1.2)?.brm()} so'm</del>
//             <p className="products__price">{el.price?.brm()} so'm</p>
//           </div>
//           <div
//             onClick={() => dispatch(toggleWishes(el))}
//             className="products__wishes"
//           >
//             {wishes?.some((item) => item.id === el.id) ? (
//               <FaHeart style={{ color: "var(--bg-py)" }} />
//             ) : (
//               <FaRegHeart />
//             )}
//           </div>
//           <div
//             onClick={() => dispatch(toggleCart(el))}
//             className="products__cart"
//           >
//             {cart?.some((item) => item.id === el.id) ? (
//               <TbShoppingBagX style={{ color: "var(--bg-py)" }} />
//             ) : (
//               <TbShoppingBagPlus />
//             )}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Products;



























// import React from "react";
// import "./Products.css";
// import { FaRegHeart, FaHeart } from "react-icons/fa";
// import { IoCartOutline } from "react-icons/io5";
// import { Link } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { toggleWishes } from "../../context/wishesSlice";
// // import { addToCart } from "../../context/cartSlice";

// function Products({ data }) {
//   const wishes = useSelector((s) => s.wishes.value);
//   // const cart = useSelector((s) => s.wishes.value);
//   const dispatch = useDispatch();
//   // console.log(cart);
//   console.log(wishes);
//   return (
//     <div className="products__wrapper">
//       {data?.map((el) => (
//         <div key={el.id} className="products__card">
//           <Link to={"/login"} className="products__image">
//             <img src={el.url} alt="" />
//           </Link>
//           <div className="products__body">
//             <p className="products__title">{el.title}</p>
//             <div style={{ flex: 1 }}>
//               <span className="products__monthly">
//                 {(el.price * 1.5 / 12)?.brm()} so'm/oyiga
//               </span>
//             </div>
//             <del>{(el.price * 1.2)?.brm()} so'm</del>
//             <p className="products__price">{el.price?.brm()} so'm</p>
//           </div>
//           <div
//             onClick={() => dispatch(toggleWishes(el))}
//             className="products__wishes"
//           >
//             {wishes?.some((item) => item.id === el.id) ? (
//               <FaHeart style={{ color: "var(--bg-py)" }} />
//             ) : (
//               <FaRegHeart />
//             )}
//           </div>
//           <div className="products__cart">
//             {/* {cart?.some((item) => item.id === el.id) ? (
//               <button
//                 onClick={() => dispatch(addToCart(el))}
//                 className="products__btn"
//               >
//                 Savol
//               </button>
//             ) : (
//               <button
//                 onClick={() => dispatch(addToCart(el))}
//                 className="products__btn"
//               >
//                 Savol
//               </button>
//             )} */}
//             <IoCartOutline />
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Products;













































































// import React from "react";
// import "./Products.css";
// import { FaRegHeart ,FaHeart } from "react-icons/fa";
// import { IoCartOutline } from "react-icons/io5";
// import { Link } from "react-router-dom";
// import { useDispatch , useSelector  } from "react-redux"
// import { toggleWishes } from "../../context/wishesSlice"

// function Products({ data }) {
//   const wishes = useSelector(s => s.wishes.value)
//   const dispatch = useDispatch()
//   console.log(wishes);
//   return (
//     <div className="products__wrapper">
//         {
//             data?.map((el) => <div key={el.id} className="products__card">
//             <Link to={"/login"} className="products__image">
//               <img src={el.url} alt="" />
//             </Link>
//             <div className="products__body">
//               <p className="products__title">{el.title}</p>
//               <div style={{flex: 1}}>
//                 <span className="products__monthly">
//                     {(el.price * 1.5 / 12)?.brm()} so'm/oyiga
//                 </span>
//               </div>
//               <del>{(el.price * 1.2)?.brm()} so'm</del>
//               <p className="products__price">{el.price?.brm()} so'm</p>
//             </div>
//             <div onClick={()=> dispatch(toggleWishes(el))} className="products__wishes">
//               {
//         wishes?.some(item => item.id === el.id) ?     <FaHeart style={ {color: "var(--bg-py)"}} /> : <FaRegHeart/>
//               }
          
//             </div>
//             <div className="products__cart">
//               <IoCartOutline />
//             </div>
//           </div>)
//         }
//     </div>
//   );
// }

// export default Products;
