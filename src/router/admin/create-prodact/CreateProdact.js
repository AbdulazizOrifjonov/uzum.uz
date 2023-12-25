// import React, { useState } from 'react'
import "./CreateProdact.css"
import { FaCamera } from "react-icons/fa"
function CreateProdact() {
    // const [valu, setvalu ] = useState('')
    return (
        <div className="">
          <div>
        <h2>Create Product</h2>
        <form className='create__product-form'>
          <input className='create__product-input' type="text" placeholder='title' />
          <input className='create__product-input' type="number" placeholder='price' />
          <select className='create__product-input' name="" id="">
            <option value="">tehnika</option>
            <option value="">kiyim </option>
            <option value="">uy zo'zgo'r</option>
            <option value="">oshhona</option>
          </select>
          <div className="create__product-file">
            <FaCamera/>
            <input accept='.png, .jpg, .jpeg, .heic' type="file" />
          </div>
          <br />
          <button className='create__product-input'>Create Product</button>
        </form>
    </div>
        </div>
    )
}

export default CreateProdact
