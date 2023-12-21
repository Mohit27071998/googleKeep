import React from 'react'
import './Footer.css'
const Footer = () => {

const year = new Date().getFullYear()



  return (
    <footer>CopyRight@{year}</footer>
  )
}

export default Footer