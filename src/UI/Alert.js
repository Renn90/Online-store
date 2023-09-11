import React from 'react'
import style from '../Styles/Alert.module.scss'
import { useSelector } from 'react-redux'
import { CheckBoxRounded } from '@mui/icons-material'

const Alert = () => {
  const alert = useSelector((state)=> state.alert)
  const showAlert = useSelector((state)=> state.showAlert)

  return (
    <>
    {showAlert &&
    <div className={style.mainCont}>
      <CheckBoxRounded className={style.check}/>
      <h4>{alert}</h4>
    </div> }
    </>
  )
}

export default Alert
