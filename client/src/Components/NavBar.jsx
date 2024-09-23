import React from 'react'
import { search } from '../assets'
import './Navbar.css'
import CustomButton from './CustomButton'
import { Navigate, useNavigate } from 'react-router-dom'

const NavBar = () => {

    const address = '0xabc'
    const navigate = useNavigate()

    const connect = () =>{

    }
  return (
    <div style={{
        display:'flex',
        flexDirection:'column-reverse'
    }}>
        <div style={{
            display:'flex',
            padding:'4px',
            backgroundColor:'#1c1c2a',
            height:'48px',
            borderRadius:'200px'
        }}>

            <input type='text' placeholder='Search for Campaigns' className='search-input'/>
            <div className='search-button'>
                <img src={search} alt='search' className='search-icon' />

            </div>

            <CustomButton 
  btnType='button' 
  title={address ? 'Create a Campaign' : 'Connect'}
  styles={address ? 'bg-create-campaign' : 'bg-connect'} // Use CSS classes instead of Tailwind classes
  handleClick={() => {
    if (address) navigate('create-campaign');
    else connect();
  }} 
/>

        </div>
    </div>
  )
}

export default NavBar