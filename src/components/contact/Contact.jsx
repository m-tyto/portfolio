import React from 'react'
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import '../styles/contact.css';
import github from '../image/githubicon.png';
import line from '../image/linkdin.png';
import twitter from '../image/Twittericon.png';
import mail from '../image/gmail.png';

const Contact = () => {
    const contacts = [{
        name : 'gmail',
        link : 'https://mail.google.com/mail/?view=cm&to=m.taito.224@gmail.com',
        img : mail
    },{
        name : 'Twitter',
        link : "https://twitter.com/tychan0024",
        img : twitter
    },{
        name : 'LinkedIn',
        link : "https://www.linkedin.com/in/%E6%B3%B0%E6%96%97-%E4%B8%89%E5%AE%85-011b85245",
        img : line
    },{
        name : 'github',
        link : "https://github.com/m-tyto",
        img : github
    }]

    return(
        <div className="text-center">
            <h2 className="my-3">Contact</h2>
            <div className="contact-area my-5 mt-4">
                <div className="contact-block row text-center">
                    <div className="col-8 offset-2">
                        <div className="row">
                            {contacts.map((contact) => {
                                return(
                                    <div className="contact col-3 my-4 text-center">
                                        <a href={contact.link} target="_blank"><img src={contact.img} alt={contact.name} className="linkimage mt-2"  /></a>
                                        <p  className="linkname py-3 mt-2">{contact.name}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact