import React from 'react'
import "./ManageProdact.css"
import Products from '../../../components/products/Products'
import { PRODUCTS } from '../../../static'
function ManageProdact() {
    return (
        <div className="">
            <h1>ManageProdact</h1>
            <Products admin={true} data={PRODUCTS}/>
            
        </div>
    )
}

export default ManageProdact
