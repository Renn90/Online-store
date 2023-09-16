import React from 'react'
import icon from '../../image/paid.svg'
import confetti from '../../image/confetti.png'
import style from '../../Styles/Success.module.scss'
import { Link } from 'react-router-dom'

const Success = () => {
  return (
    <div style={{marginTop: '190px'}} className={style.container}>
      <img src={confetti} className={style.confetti}/>
      <img src={icon} alt='successful' className={style.image}/>
      <h1>Thank You!!</h1>
      <span>
        <p>Payment Done successfully!</p>
      </span>
      <Link to='/' className='Cbutton'>Back Home</Link>
    </div>
  )
}

export default Success

