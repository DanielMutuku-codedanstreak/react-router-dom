import React from 'react'
import carImage from '../images/posche.jpeg'

export default function Landing() {
  return (
    <div className='container'>
        <div className='row'>
            <div className='col-md-6'>
                <img src={carImage} alt='Porshe car' style={{width:'900px'}}></img>
            </div>
            <div className='col-md-6'>
                <h2>Find Your Porsche Center</h2>
                <p>
                    A Porsche Center, and your dream Porsche vehicle, may be closer than you think. Search our Porsche Center network for the location closest to you.
                </p>
            </div>
        </div>
    </div>
  )
}
