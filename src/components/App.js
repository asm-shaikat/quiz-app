import React from 'react';
import  '../styles/Style.module.css';
import Layout from './Layout';
import Home from './pages/Home';
const App = () => {
    return (
        <div>
            <Layout>
                <Home/>
            </Layout>
        </div>
    );
};

export default App;