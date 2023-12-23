
import React, { useState, useEffect } from 'react';
import { IoSearch, IoCartOutline, IoHomeOutline } from "react-icons/io5";
import { NavLink } from 'react-router-dom';
import { FaRegUser, FaRegHeart } from "react-icons/fa";
import { TfiMenuAlt } from "react-icons/tfi";
import "./Navbar.css";
import { useSelector } from 'react-redux';

function Navbar({ data }) {
  // const { pathname } = useLocation()
  const [value, setValue] = useState('');
  const [searchData, setSearchData] = useState([]);
  // if (pathname.includes("login") || pathname.includes("admin")) {
  //   return <></>;
  // }
  useEffect(() => {
    if (value.trim()) {
      let filteredData = data.filter((item) =>
        item.title.toLowerCase().includes(value.toLowerCase().trim())
      );
      setSearchData(filteredData);
    } else {
      setSearchData([]);
    }
  }, [value, data]);

  const wishes = useSelector((state) => state.wishes.value);
  const cart = useSelector((state) => state.cart.value);

  return (
    <div className='container'>
      <div className='navbar'>
        <h2 className='nav__logo'>
          <NavLink to={'/'}>uzum market</NavLink>
        </h2>
        <NavLink to={"/turkum"}>
          <button className='nav__category'>
            <TfiMenuAlt />
            <span>Katalog</span>
          </button>
        </NavLink>
        <div className='nav__search'>
          <input
            className='imput'
            value={value}
            placeholder='Maxsulotlar va turkumlar izlash'
            onChange={(e) => setValue(e.target.value)}
            type='text'
          />
          <button>
            <IoSearch />
          </button>
          {value.trim() && (
            <div className='nav__search-drop'>
              {searchData.slice(0, 5).map((item) => (
                <NavLink
                  to={`/product/${item.id}`}
                  onClick={() => setValue('')}
                  key={item.id} className='nav__search-item'
                >
                  <img className='images' src={item.url} alt='' />
                  <div className=''>
                    <p>{item.title}</p>
                    <b>{item.price?.brm()} so'm</b>
                  </div>
                </NavLink>
              ))}
              {!searchData.length && (
                <div className='center'>
                  <img
                    className='noUndefoend'
                    src='https://uzum.uz/static/img/penguin.a739ac8.png'
                    alt=''
                  />
                  <p>Malumot yo'q</p>
                </div>
              )}
            </div>
          )}
        </div>
        <ul className='nav__collection'>
          <li className="nav__item nav__home">
            <NavLink to={"/"}>
              <IoHomeOutline />
              <span>Asosiy sahifa</span>
            </NavLink>
          </li>
          <li className='nav__item'>
            <NavLink to={'/admin'}>
              <FaRegUser />
              <span>Kirish</span>
            </NavLink>
          </li>
          <li className='nav__item'>
            <NavLink to={'/wishes'}>
              <FaRegHeart />
              <span>Sevimlilar</span>
              <sup className='cat'>{wishes.length}</sup>
            </NavLink>
          </li>
          <li className='nav__item'>
            <NavLink to={'/cart'}>

              <IoCartOutline />
              <span>Savat</span>
              <sup className='cat'>{cart.length}</sup>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;