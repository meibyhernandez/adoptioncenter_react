import React from 'react'

import { backgroundImage } from "../utils/constants";

import './Style.css'

const Header = () => (
    <div className='app__header app__wrapper section_padding' id='home'>
      <div className='app__wrapper_info'>
       
        <h1 className='app__header-h1'>Adopt today! Save a life</h1>
        <p className='p__opensans' style={{ margin: '1rem 0', marginRight: '3rem' }}>
        Throughout the country, thousands of commercial pet-breeding facilities and backyard breeders produce millions of animals for sale in pet stores and through newspaper ads. Often known as puppy and kitten mills, these facilities repeatedly impregnate female dogs that spend their entire lives in cages without human companionship. These unfortunate animals are often in intolerable environments, forced to produce litter upon litter, and are destroyed after they become unprofitable assets. Adopting a shelter animal means you don’t support such cruel practices.</p>
       
      </div>
      <div className='app__wrapper_img'>
        <img src={backgroundImage} alt="header image"></img>
      </div>
    </div>
  );

export default Header