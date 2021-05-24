import React from 'react'
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import '../styles/commonStyles/footer.css'; 

const Footer = () => {
    return(
        <div className="footer mt-4">
            <p>MailAddress : m.taito.224@gmail.com</p>    
        </div>
    )
}

export default Footer