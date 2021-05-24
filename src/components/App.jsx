import React from 'react';
import ReactDOM from 'react-dom';
import Contact from './contact/Contact';
import About from './about/About';
import Profile from './profile/Profile';
import Skill from './skill/Skill';
import Header from './common/Header';
import Footer from './common/Footer';
import bar from './photo/bar2.jpeg';
import './styles/home.css'; 
import { BrowserRouter, Route, Link } from 'react-router-dom';


const App = () => (
    <BrowserRouter>
        <header>
            <Header /> 
        </header> 
        <main>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/skill" component={Skill} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/contact" component={Contact} /> 
        </main>
        <footer>
            <Footer/>  
        </footer>       
    </BrowserRouter>

)

const Home = () => {
    const backgroundImage = {
        backgroundImage: 'url(' + bar + ')',
    }
    return(
        <div className="row">
            <div id="home" class="col-12" style={backgroundImage}>
                <h1 id="welcome">
                    <span className="home mt-5">Welcome</span><br />
                    <span className="home mt-5">To </span><br />
                    <span className="home mt-5" id="mine">Tyto's</span> <br />
                    <span className="home mt-5">HomePage.</span>
                </h1>
            </div>
        </div>
    )   
}
    


export default App