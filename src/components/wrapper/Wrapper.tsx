import React from 'react'
import style from './Wrapper.module.css' 

const Wrapper = () => {
    async function getAdvice(){
        <p>Rehan</p>
        console.log(getAdvice)
    }

  return (
    <>
    <div className={style.main}>
      Hello world
      <button onClick={getAdvice}>Get Advice</button>
    </div>
    </>
  )
}

export default Wrapper