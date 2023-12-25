import React from 'react'
import { GoChevronRight } from "react-icons/go";



import { GoChevronDown } from "react-icons/go";





import kitob from "./photos/kitob.png"
import blender from "./photos/blender.png"
import bolararOyinchioq from "./photos/bolararOyinchioq.png"
import daraht from "./photos/daraht.png"
import gozallikBuyumlari from "./photos/gozallikBuyumlar.png"
import kiyim from "./photos/kiyim.png"
import ijotkorlik from "./photos/ijotkorlik.png"
import kimyoviy from "./photos/kimyoviy.png"
import mashunaTzatihs from "./photos/mashinaTuzatish.png"
import olma from "./photos/olma.png"
import poyabza from "./photos/poyabzal.png"
import quloqchin from "./photos/quloqchin.png"
import qurlish from "./photos/qurilish.png"
import salomatlik from "./photos/salomatlik.png"
import sport from "./photos/sport.png"
import sumka from "./photos/sumka.png"
import uy from "./photos/uy.png"
import hayvon from "./photos/hayvon.png"
import araq from "./photos/araq.png"









// import DropdownMenu from './DropdownMenu/DropdownMenu';
import { NavLink } from 'react-router-dom';

import "./Turkum.css"
function Turkum() {
  return (
    <div className="container">
      <div className="katagorya">


        {/* <DropdownMenu/> */}


        <NavLink className="gov" to={'/Elektronika'} >                 <div className="turkumlar"><div className='johan'><img width={20} src={quloqchin} alt="" /><p className='joha' >                          Elektronika                                     </p> </div>     <div className="">   <GoChevronRight className='bloc' />  <GoChevronDown className='none' /> </div>  </div>                        </NavLink>
        <NavLink className="gov" to={'/Maishiy'} >                 <div className="turkumlar"><div className='johan'><img width={20} src={blender} alt="" /><p className='joha' >                          Maishiy ehnika                                      </p> </div>     <div className="">   <GoChevronRight className='bloc' />  <GoChevronDown className='none' /> </div>  </div>                      </NavLink>
        <NavLink className="gov" to={'/Kiyim'} >                 <div className="turkumlar"><div className='johan'><img width={20} src={kiyim} alt="" /><p className='joha' >                          Kiyim                                     </p> </div>     <div className="">   <GoChevronRight className='bloc' />  <GoChevronDown className='none' /> </div>  </div>                                  </NavLink>
        <NavLink className="gov" to={'/Poyabzallar'} >                 <div className="turkumlar"><div className='johan'><img width={20} src={poyabza} alt="" /><p className='joha' >                          Poyabzallar                                     </p> </div>     <div className="">   <GoChevronRight className='bloc' />  <GoChevronDown className='none' /> </div>  </div>                          </NavLink>
        <NavLink className="gov" to={'/Aksessuarlar'} >                 <div className="turkumlar"><div className='johan'><img width={20} src={sumka} alt="" /><p className='joha' >                          Aksessuarlar                                     </p> </div>     <div className="">   <GoChevronRight className='bloc' />  <GoChevronDown className='none' /> </div>  </div>                           </NavLink>
        <NavLink className="gov" to={'/Gozallik'} >                 <div className="turkumlar"><div className='johan'><img width={20} src={gozallikBuyumlari} alt="" /><p className='joha' >                          Goʻzallik va parvarish                                     </p> </div>     <div className="">   <GoChevronRight className='bloc' />  <GoChevronDown className='none' /> </div>  </div>     </NavLink>
        <NavLink className="gov" to={'/Salomatlik'} >                 <div className="turkumlar"><div className='johan'><img width={20} src={salomatlik} alt="" /><p className='joha' >                          Salomatlik                                     </p> </div>     <div className="">   <GoChevronRight className='bloc' />  <GoChevronDown className='none' /> </div>  </div>                        </NavLink>
        <NavLink className="gov" to={'/UyRozgor'} >                 <div className="turkumlar"><div className='johan'><img width={20} src={uy} alt="" /><p className='joha' >                          Uy-roʻzgʻor buyumlari                                     </p> </div>     <div className="">   <GoChevronRight className='bloc' />  <GoChevronDown className='none' /> </div>  </div>                     </NavLink>
        <NavLink className="gov" to={'/Qurilish'} >                 <div className="turkumlar"><div className='johan'><img width={20} src={qurlish} alt="" /><p className='joha' >                          Qurilish va taʼmirlash                                     </p> </div>     <div className="">   <GoChevronRight className='bloc' />  <GoChevronDown className='none' /> </div>  </div>               </NavLink>
        <NavLink className="gov" to={'/Avtotovarlar'} >                 <div className="turkumlar"><div className='johan'><img width={20} src={mashunaTzatihs} alt="" /><p className='joha' >                          Avtotovarlar                                     </p> </div>     <div className="">   <GoChevronRight className='bloc' />  <GoChevronDown className='none' /> </div>  </div>                  </NavLink>
        <NavLink className="gov" to={'/Bolalar'} >                 <div className="turkumlar"><div className='johan'><img width={20} src={bolararOyinchioq} alt="" /><p className='joha' >                          Bolalar tovarlari                                     </p> </div>     <div className="">   <GoChevronRight className='bloc' />  <GoChevronDown className='none' /> </div>  </div>           </NavLink>
        <NavLink className="gov" to={'/Xobbi'} >                 <div className="turkumlar"><div className='johan'><img width={20} src={ijotkorlik} alt="" /><p className='joha' >                          Xobbi va ijod                                     </p> </div>     <div className="">   <GoChevronRight className='bloc' />  <GoChevronDown className='none' /> </div>  </div>                     </NavLink>
        <NavLink className="gov" to={'/Sport'} >                 <div className="turkumlar"><div className='johan'><img width={20} src={sport} alt="" /><p className='joha' >                          Sport va hordiq                                     </p> </div>     <div className="">   <GoChevronRight className='bloc' />  <GoChevronDown className='none' /> </div>  </div>                        </NavLink>
        <NavLink className="gov" to={'/OziqOvqat'} >                 <div className="turkumlar"><div className='johan'><img width={20} src={olma} alt="" /><p className='joha' >                          Oziq-ovqat mahsulotlari                                     </p> </div>     <div className="">   <GoChevronRight className='bloc' />  <GoChevronDown className='none' /> </div>  </div>                 </NavLink>
        <NavLink className="gov" to={'/MaishiyKimyo'} >                 <div className="turkumlar"><div className='johan'><img width={20} src={kimyoviy} alt="" /><p className='joha' >                          Maishiy kimyoviy                                       </p> </div>     <div className="">   <GoChevronRight className='bloc' />  <GoChevronDown className='none' /> </div>  </div>                  </NavLink>
        <NavLink className="gov" to={'/Kanselyariya'} >                 <div className="turkumlar"><div className='johan'><img width={20} src={araq} alt="" /><p className='joha' >                          Kanselyariya tovarlari                                     </p> </div>     <div className="">   <GoChevronRight className='bloc' />  <GoChevronDown className='none' /> </div>  </div>                  </NavLink>
        <NavLink className="gov" to={'/Hayvonlar'} >                 <div className="turkumlar"><div className='johan'><img width={20} src={hayvon} alt="" /><p className='joha' >                          Hayvonlar uchun tovarlar                                     </p> </div>     <div className="">   <GoChevronRight className='bloc' />  <GoChevronDown className='none' /> </div>  </div>              </NavLink>
        <NavLink className="gov" to={'/Kitoblar'} >                 <div className="turkumlar"><div className='johan'><img width={20} src={kitob} alt="" /><p className='joha' >                          Kitoblar                                     </p> </div>     <div className="">   <GoChevronRight className='bloc' />  <GoChevronDown className='none' /> </div>  </div>                               </NavLink>
        <NavLink className="gov" to={'/Dacha'} >                 <div className="turkumlar"><div className='johan'><img width={20} src={daraht} alt="" /><p className='joha' >                          Dacha, bogʻ va tomorqa                                     </p>  </div>    <div className="">   <GoChevronRight className='bloc' />  <GoChevronDown className='none' /> </div>  </div>                </NavLink>
      </div>
    </div>
  )
}

export default Turkum


