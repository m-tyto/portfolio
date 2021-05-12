import React from 'react'
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import { MemoryRouter} from 'react-router-dom';

const Header = () => {
    return(
        <header className="header">
            <Link to="/" className="headerLink">Home</Link>
            <Link to="/profile" className="headerLink">Profile</Link>
            <Link to="/about" className="headerLink">About</Link>
            <Link to="/message" className="headerLink">Message</Link>
            <Link to="/contact" className="headerLink">Contact</Link>
        </header>
    )
}

export default Header