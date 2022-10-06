import React from 'react'
import style from '../Styles/Newsletter.module.scss'
import SendIcon from '@mui/icons-material/Send';

const Newsletter = () => {
  return (
    <div className={style.container}>
      <h1>Newsletter</h1>
      <p>Get timely updates for your favourite products</p>
      <div className={style.input}>
        <input placeholder='Enter email'/>
        <button><SendIcon /></button>
      </div> 
    </div>
  )
}

export default Newsletter
