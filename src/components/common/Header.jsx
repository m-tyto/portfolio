import React from 'react'
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import { MemoryRouter} from 'react-router-dom';
import '../styles/commonStyles/header.css'; 

const Header = () => {
    return(
        <div className="row">
            <div className="col-10 offset-1">
                <div className="header row">
                    <Link to="/" className="headerLink col-2">Home</Link>
                    <Link to="/profile" className="headerLink col-2">Profile</Link>
                    <Link to="/about" className="headerLink col-2">About</Link>
                    <Link to="/skill" className="headerLink col-2">Skill</Link>
                    <Link to="/contact" className="headerLink col-2">Contact</Link>
                </div>
            </div>
        </div>
    )
}

export default Header