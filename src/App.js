import React  from 'react';
import { Routes, Route } from 'react-router-dom';
import SubHeader from './components/sub-header/SubHeader';
import Navbar from './components/navbar/Navbar';
import NavbarBottom from './components/navbar-bottom/NavbarBottom';
import Footer from './components/footer/Footer';
import { PRODUCTS } from "./static";
import Home from "./router/home/Home";
import Login from "./router/login/Login";
import Wishes from "./router/wishes/Wishes";
import Cart from "./router/cart/Cart";
import SingilRout from './router/singilRoute/SingilRout';
import Turkum from "./router/turkum/Turkum"
import Elektronika from './router/Web/Elektronika/Elektronika';
import Maishiy from './router/Web/Maishiy/Maishiy';
import Kiyim from './router/Web/Kiyim/Kiyim';
import Poyabzallar from './router/Web/Poyabzallar/Poyabzallar';
import Aksessuarlar from './router/Web/Aksessuarlar/Aksessuarlar';
import Gozallik from './router/Web/Goʻzallik/Gozallik';
import Salomatlik from './router/Web/Salomatlik/Salomatlik';
import UyRozgor from './router/Web/Uy-roʻzgʻor/UyRozgor';
import Qurilish from './router/Web/Qurilish/Qurilish';
import Avtotovarlar from './router/Web/Avtotovarlar/Avtotovarlar';
import Bolalar from './router/Web/Bolalar/Bolalar';
import Xobbi from './router/Web/Xobbi/Xobbi';
import Sport from './router/Web/Sport/Sport';
import OziqOvqat from './router/Web/Oziq-ovqat/OziqOvqat';
import MaishiyKimyo from './router/Web/Maishiy-kimyo/MaishiyKimyo';
import Kanselyariya from './router/Web/Kanselyariya/Kanselyariya';
import Hayvonlar from './router/Web/Hayvonlar/Hayvonlar';
import Kitoblar from './router/Web/Kitoblar/Kitoblar';
import Dacha from './router/Web/Dacha/Dacha';
import Now from './Now/Now';
import Snowfall from 'react-snowfall'
import Admin from './router/admin/Admin';
import Auth from './router/auth/Auth';
import "./App.css"
import Archa from './components/archa/Archa';
function App() {



  return (
    <div className="App">
      <SubHeader />
        
      <Archa/>
   
      <Navbar data={PRODUCTS} />
      <NavbarBottom />
      <Routes>
     
        <Route path='/' element={<Home data={PRODUCTS} />} />
        <Route path='login' element={<Login />} />
        <Route path='wishes' element={<Wishes />} />
        <Route path='cart' element={<Cart />} /> 

        <Route path='' element={<Auth/>}>
        <Route path='admin/*' element={<Admin />} />
        </Route>
        
        <Route path='product/:id' element={<SingilRout data={PRODUCTS} />} />
        <Route path='turkum' element={<Turkum/>} />







        <Route path='Elektronika'       element={<Elektronika/>} />
        <Route path='Maishiy'         element={<Maishiy/>} />
        <Route path='Kiyim'             element={<Kiyim/>} />
        <Route path='Poyabzallar'           element={<Poyabzallar/>} />
        <Route path='Aksessuarlar'       element={<Aksessuarlar/>} />
        <Route path='Gozallik'      element={<Gozallik/>} />
        <Route path='Salomatlik'        element={<Salomatlik/>} />
        <Route path='UyRozgor'        element={<UyRozgor/>} />
        <Route path='Qurilish'        element={<Qurilish/>} />
        <Route path='Avtotovarlar'      element={<Avtotovarlar/>} />
        <Route path='olalar'        element={<Bolalar/>} />
        <Route path='Xobbi'           element={<Xobbi/>} />
        <Route path='Sport'          element={<Sport/>} />
        <Route path='OziqOvqat'       element={<OziqOvqat/>} />
        <Route path='MaishiyKimyo'      element={<MaishiyKimyo/>} />
        <Route path='Kanselyariya'      element={<Kanselyariya/>} />
        <Route path='Hayvonlar'           element={<Hayvonlar/>} />
        <Route path='Kitoblar'          element={<Kitoblar/>} />
        <Route path='Dacha'            element={<Dacha/>} />



        <Route path='*'  element={<Now/>} />


      </Routes>
      <Footer />
      <Snowfall style={{position: 'fixed',width: '100vw',height: '100vh',}}/>
    </div>
  );
}       

export default App;
 

 
// import React from 'react'

// function App() {
//     return (
//      <div className="">e</div>   
//     )
// }

// export default App


//  import React from 'react'
// import Sekeleton from './components/products/skaleton/Sekeleton'
 
//  function App() {
//   return (
//     <div className="">
//       <Sekeleton/>
//     </div>
//   )
//  }
 
//  export default App
 

// import * as React from 'react';
// import AspectRatio from '@mui/joy/AspectRatio';
// import Stack from '@mui/joy/Stack';
// import Button from '@mui/joy/Button';
// import Card from '@mui/joy/Card';
// import CardContent from '@mui/joy/CardContent';
// import Skeleton from '@mui/joy/Skeleton';
// import Typography from '@mui/joy/Typography';

// export default function AnimationSkeleton() {
//   return (
//     <Stack spacing={2} useFlexGap>
//       <Card variant="outlined" sx={{ width: 343 }}>
//         <CardContent orientation="horizontal">
//           <Skeleton animation="wave" variant="circular" width={48} height={48} />
//           <div>
//             <Skeleton animation="wave" variant="text" sx={{ width: 120 }} />
//             <Skeleton
//               animation="wave"
//               variant="text"
//               level="body-sm"
//               sx={{ width: 200 }}
//             />
//           </div>
//         </CardContent>
//         <AspectRatio ratio="21/9">
//           <Skeleton animation="wave" variant="overlay">
//             <img
//               alt=""
//               src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
//             />
//           </Skeleton>
//         </AspectRatio>
//         <Typography sx={{ overflow: 'hidden' }}>
//           <Skeleton animation="wave">
//             Lorem ipsum is placeholder text commonly used in the graphic, print, and
//             publishing industries.
//           </Skeleton>
//         </Typography>
//         <Button>
//           Read more
//           <Skeleton animation="wave" />
//         </Button>
//       </Card>
//     </Stack>
//   );
// }


// import * as React from 'react';
// // import AspectRatio from '@mui/joy/AspectRatio';
// import Card from '@mui/joy/Card';
// import Skeleton from '@mui/joy/Skeleton';
// import Typography from '@mui/joy/Typography';
// import Box from '@mui/joy/Box';
// import "./App.css"
// const BasicSkeleton = () => {
//   return (
//     <div>
//       <Card
//       className="card"
//       //  variant="outlined" style={{ width: 343, display: 'flex', gap: 2 }}
//       >
//         {/* <AspectRatio
//          className="ras"
//         //  ratio="21/9"
//         >
//           <Skeleton 
//           className="ras"
//           //  variant="overlay"
//            >
          
//           </Skeleton>
//         </AspectRatio> */}
//         <div className="foyz">

//         <Typography>
//         <Skeleton variant="rectangular" width={220} height="16em" sx={{ mb: 1 }} />

//         </Typography>
//         <Typography>
//           <Skeleton >
//            jncdnhjec c ejk ckjdeocls,ekdcn ed c
//           </Skeleton>
//         </Typography>
//         <Skeleton variant="rectangular" width={120} height="1.4em" />

//       <Box className="box" 
//       // sx={{ width: 343, m: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 2 }}
//       >
//         <div className='gap'>
//           <Skeleton variant="rectangular" width={100} height="1em" />
//           <Skeleton variant="rectangular" width={140} height="1em" sx={{ mb: 1 }} />
//         </div>
//         <Skeleton variant="circular" width={48} height={48} />
//       </Box>

//       </div>
//       </Card>
//     </div>
//   );
// };

// export default BasicSkeleton;



// // import "./styles.css";
// import { MuiTelInput } from "mui-tel-input";
// import { useState } from "react";

// export default function App() {
//   const [value, setValue] = useState("");

//   const handleChange = (value) => {
//     setValue(value);
//   };

//   return (
//     <div className="App">
//       <h1>Mui Tel Input</h1>
//       <MuiTelInput defaultCountry="FR" onChange={handleChange} value={value} />
//     </div>
//   );
// }



 


// import React from 'react';

 

// import React from 'react';
// import './App.css';

// function App() {
//   function color(e) {
//     let a = window.getComputedStyle(e.target);
//     let b = a.backgroundColor;
//     document.body.style.backgroundColor = b;
//   }

//   return (
//     <div className="contact">
//       <span onClick={color} className='colorred'></span>
//       <span onClick={color} className='colorgreen'></span>
//       <span onClick={color} className='colorblue'></span>
//       <span onClick={color} className='colorpink'></span>
//     </div>
//   );
// }

// export default App;

 