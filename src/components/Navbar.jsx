import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const isActive = (path) => location.pathname === path;

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container nav-content">
                <Link to="/" className="logo">
                    EDUSPARK<span> INSTITUTE</span>
                </Link>

                <div className={`nav-links ${isOpen ? 'active' : ''}`}>
                    <Link
                        to="/"
                        onClick={() => setIsOpen(false)}
                        className={isActive('/') ? 'active' : ''}
                    >
                        HOME
                    </Link>
                    <Link
                        to="/about"
                        onClick={() => setIsOpen(false)}
                        className={isActive('/about') ? 'active' : ''}
                    >
                        ABOUT US
                    </Link>
                    <Link
                        to="/courses"
                        onClick={() => setIsOpen(false)}
                        className={isActive('/courses') ? 'active' : ''}
                    >
                        COURSES
                    </Link>
                    <Link
                        to="/courses#contact"
                        onClick={() => setIsOpen(false)}
                        className="nav-cta"
                    >
                        ENROLL NOW
                    </Link>
                </div>

                <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
