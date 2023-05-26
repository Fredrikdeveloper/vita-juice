import React from 'react'
import { Link } from 'react-router-dom'
import "../pageError/ErrorPage.css"

const PageNotFound = () => {

  return (
    <div className='err-pagess-body'>
        <h1 className='err-pagess'>данное старница не существует</h1>
        <Link to="/">Главное</Link>
    </div>
  )
}

export default PageNotFound