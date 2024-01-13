import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="description-navigator">
        <div className="description-nav-box">Description</div>
        <div className="description-nav-box fade">Reviews(120)</div>
      </div>
      <div className="descriptionbox-description">
        <p>An e-commerce website stands as a digital marketplace, facilitating the
             exchange of goods and services through the internet. It serves as a 
             virtual nexus where businesses and consumers seamlessly conduct transactions, 
             playing a pivotal role in the contemporary digital economy. The burgeoning 
             popularity of e-commerce platforms can be attributed to their unparalleled
            convenience, ubiquitous accessibility, and the expansive global reach they afford.</p>
        <p>Core attributes of an e-commerce website encompass comprehensive product listings 
            featuring detailed descriptions, high-quality imagery, and transparent pricing.
            These platforms integrate secure payment gateways to facilitate safe and reliable
            online transactions, coupled with an optimized and straightforward checkout process.
            User-centric design principles, robust search functionalities, and personalized product
            recommendations contribute to an enhanced and intuitive shopping experience</p>
      </div>
    </div>
  )
}

export default DescriptionBox
