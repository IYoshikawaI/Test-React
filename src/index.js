import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";
import Header from "./header"
import Footer from "./footer"
import MainContent from './MainContent';






function App() {
    return (
        <div>
            <Header />
            <MainContent />
            <Footer />
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById("root"));