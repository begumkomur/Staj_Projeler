import React from 'react'
import BannerImage from '../assets/banneryeni.jpg'
import '../styles/About.css'

export const About = () => {
  return (
    <div className='about'>
      <div className='aboutTop' style={{backgroundImage: `url(${BannerImage})`}}>
      </div>
      <div className='aboutBottom'>
        <h1>Hakkımızda</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, consectetur quo ullam laboriosam aperiam numquam dolore beatae repudiandae iure vero quos illum amet obcaecati mollitia rem iusto rerum est aliquid!
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero est quidem atque consequatur mollitia autem voluptatum exercitationem sequi placeat? Sequi vitae a animi culpa porro dolorem eius nulla earum expedita?
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem, perferendis dolorem. Illo dignissimos, harum nam praesentium veniam aspernatur magni laborum quis consequatur accusantium eum ipsa? Magnam voluptates nobis vitae omnis!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quas quae necessitatibus doloribus nobis! Debitis adipisci magni ut, ab quibusdam perferendis velit dicta quis, maxime esse delectus. Fugiat, harum non.

        </p>

      </div>

    </div>
  )
}
