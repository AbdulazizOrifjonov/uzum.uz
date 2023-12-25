import React from 'react'
import "./Admin.css"
import { NavLink, Routes, Route } from 'react-router-dom'
import CreateProdact from './create-prodact/CreateProdact'
import ManageProdact from './manage_prodact/ManageProdact'
function Admin() {
    return (
        <div className='admin'>
        <div className="admin__sidebar">

          <NavLink  className='link' to={"/"}>
            home
          </NavLink>
          <h2>Admin - Private Route</h2>
          <h3>Authentication</h3>
          <div className="admin_link">
            <NavLink className='link' to={"create-produc"}>create-produc</NavLink>
            <NavLink className='link' to={"manage-produc"}>manage-produc</NavLink>
          </div>
        </div>
        <div className="admin__content">
         <Routes>
            <Route path='manage-produc' element={<ManageProdact/>}/>
            <Route path='create-produc' element={<CreateProdact/>}/>
         </Routes>
        </div>
      </div>
    )
}

export default Admin
