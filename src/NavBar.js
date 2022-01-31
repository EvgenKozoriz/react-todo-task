import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
    return (
        <div className='navBar'>
            <div className='navBarLinks'>
                <Link to='/todoList'>TodoList</Link>
                <Link to='/about'>About</Link>
            </div>
      </div>
    )
}

export default NavBar
