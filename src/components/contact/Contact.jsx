import React from 'react'
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom'

const Contact = () => {
    return(
        <div>
            <dl>
                <dd>mail</dd>
                <dt>tychan224@gmail.com</dt>
                <dd>twitter</dd>
                <dt><a href="https://twitter.com/tychan0024">my twitter</a></dt>
                <dd>LINE@</dd>
                <dl><a href="https://lin.ee/wNjsnRd">LINE@</a></dl>
                <dd>github</dd>
                <dl><a href="https://github.com/m-tyto">my github</a></dl>
            </dl>
        </div>
    )
}

export default Contact