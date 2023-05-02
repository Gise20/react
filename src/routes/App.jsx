import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import '../styles/global.css'
import Layout from "../containers/layout";
import Login from "../containers/login";
import RecoveryPassword from '../containers/RecoveryPassword'
import Home from '../pages/home';
import NotFound from '../pages/NotFound';

const App = () => {
    return(
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/Login" element={<Login />} />
                    <Route exact path="/recovery-password" element={<RecoveryPassword />} />
                    <Route element={<NotFound />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    );
}


export default App;