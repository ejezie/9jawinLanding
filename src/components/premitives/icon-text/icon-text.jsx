import React from 'react'
import "./icon-text.scss"
import { Link } from 'react-router-dom'

 export const IconText = ({icon, text, iconWidth = "19.5px", iconHeight = "19.5px", linkTo=null, horizontal, active, onClick}) => {

  return (
        <Link to={linkTo} className={`${horizontal ? 'center' : 'center-vertical'} icon-text header-text`} onClick={onClick}>
            <img src={icon} alt='icon' style={{width: `${iconWidth}`, height: `${iconHeight}`}} className='icon-text-icon'/>
            <div>{text}</div>
            <div className={`${active ? "active" : ""}`}/>
        </Link>
  )
}



export const IconTextHome = ({icon, text, iconWidth = "19.5px", iconHeight = "19.5px", linkTo=null, horizontal, active, textColor=null, onClick}) => {

  return (
        <Link to={linkTo} className={`${horizontal ? 'center' : 'center-vertical'} icon-text-home header-text center`} onClick={onClick}>
            <div style={{color: `${textColor}`}}>{text}</div>
            { icon && <img src={icon} alt='icon' style={{width: `${iconWidth}`, height: `${iconHeight}`, marginLeft: '15px'}} className='icon-text-icon-home'/>}
            <div className={`${active ? "active-home" : ""}`}/>
        </Link>
  )
}

