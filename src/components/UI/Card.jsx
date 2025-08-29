import React from 'react'
import classes from './Card.module.css';

const Card = (pros) => {
  return (
    <div className={classes.container}>{pros.children}</div>
  )
}

export default Card