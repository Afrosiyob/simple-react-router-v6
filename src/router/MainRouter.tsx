import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import IndexLayout from '../layout/IndexLayout'
import AboutPage from '../pages/AboutPage'
import AuthPage from '../pages/AuthPage'
import ContactPage from '../pages/ContactPage'
import HomePage from '../pages/HomePage'



const MainRouter = () => {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<IndexLayout />}>
                        <Route index element={<HomePage />} />
                        <Route path="auth" element={<AuthPage/>} />
                        <Route path="contact" element={<ContactPage/>} />
                        <Route path="about" element={<AboutPage/>} />
                        <Route path="*" element="page not found" />
                    </Route>
                </Routes>
            </Router>
        </>
    )
}

export default MainRouter
