import React from 'react'
import "./SubHeader.css"
import { useLocation } from 'react-router-dom'
import uzb from "../../assets/uzbekistan (1).png"
// import eng from "../../assets/united-kingdom.png"
// import rus from "../../assets/russia.png"
function SubHeader() {
  const {pathname} = useLocation()
  console.log(pathname);
  if(pathname.includes("login") || pathname.includes("admin") ){
    return <></>; 
  }
  return (
    <div className='sub__header'>
        <div className="container">
            <p>Shahar Toshkent Topshiriqlar punkti</p>
            <p className='sub__header-title'>Buyurtmagizni 1 kunda bepul yetkazib beramiz</p>
            <p className='a'>
              Savol-javoblar Buyurtmalarim
              <div className="c">

              <img src={uzb} width={20} alt="" /> O'zbekcha
              </div>
              {/* <select  className=' col'>
                <option value=""><span>  <img src={uzb} alt="" /> Uzbekcha</span></option>
                <option value=""><span> <img src={eng} alt="" /> Ingilizcha</span></option>
                <option value=""><span> <img src={rus} alt="" /> Ruscha</span></option>
              </select> */}
              
              {/* <select className='like' >
        <option className='milk' value=""> <span className='zar' > Foydalanuvchilarga        </span>      </option>
        <option className='milk' value=""> <span className='zar' > Biz bilan bog'lanish      </span>        </option>
        <option className='milk' value=""> <span className='zar' > Savol-Javob              </span></option>
       </select> */}
            </p>
        </div>
    </div>
  )
}

export default SubHeader