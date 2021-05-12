import React from 'react';
import ReactDOM from 'react-dom';
import Contact from './contact/Contact';
import About from './about/About';
import Profile from './profile/Profile';
import Message from './message/Message';
import Header from './common/Header';
import Footer from './common/Footer';
import { BrowserRouter, Route, Link } from 'react-router-dom';

const App = () => (
    <BrowserRouter>
    <div class="container text-center mt-5">
        <header>
            <Header /> 
        </header> 
        <main>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/message" component={Message} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/contact" component={Contact} /> 
        </main>
        <footer>
            <Footer/>  
        </footer>       
    </div>
    </BrowserRouter>

)

const Home = () => {
    return(
        <h1>Welcome To Tyto's HomePage!!!</h1>
    )   
}
    


export default App