import React, { useEffect } from 'react'
import style from '../Styles/Alert.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { sliceAction } from '../feautures/Store'
import { CheckBoxRounded } from '@mui/icons-material'

const Alert = () => {
  const alert = useSelector((state)=> state.alert)
  const showAlert = useSelector((state)=> state.showAlert)
  const dispatch = useDispatch()

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
