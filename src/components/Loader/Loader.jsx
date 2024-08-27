import React from 'react'
import "./loader.scss"
import logo from "../../assets/logo/logo.png"

function Loader() {
  return (
    <>
        <div className='loaderOuter'>
            <img src={logo} alt="" />
        </div>
    </>
  )
}

export default Loader

