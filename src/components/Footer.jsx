import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-grid">
                <div className="footer-info">
                    <h2 className="logo">EDUSPARK<span> INSTITUTE</span></h2>
                    <p>
                        Eduspark Institute offers expert training in English & Hindi shorthand,
                        Pitman Steno Classes, and typing. Join online or offline shorthand classes
                        to fast track your career.
                    </p>
                </div>

                <div className="footer-links">
                    <h3>QUICK LINKS</h3>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/courses">Our Courses</Link></li>
                        <li><a href="#contact">Contact Us</a></li>
                    </ul>
                </div>

                <div className="footer-contact">
                    <h3>CONTACT US</h3>
                    <div className="contact-footer-item">
                        <MapPin size={18} />
                        <p>Assam Abhayapuri 783384</p>
                    </div>
                    <div className="contact-footer-item">
                        <Phone size={18} />
                        <p>9678125800</p>
                    </div>
                    <div className="contact-footer-item">
                        <Mail size={18} />
                        <p>info@gsshorthand.com</p>
                    </div>
                </div>

                <div className="footer-social">
                    <h3>FOLLOW US</h3>
                    <div className="social-links">
                        <a href="#" aria-label="Facebook"><Facebook size={20} /></a>
                        <a href="#" aria-label="Instagram"><Instagram size={20} /></a>
                        <a href="#" aria-label="Twitter"><Twitter size={20} /></a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom container">
                <p>&copy; {new Date().getFullYear()} EDUSPARK INSTITUTE. ALL RIGHTS RESERVED.</p>
            </div>
        </footer>
    );
};

export default Footer;
