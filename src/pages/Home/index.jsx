import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight, Play } from 'lucide-react';
import './Home.css';

const Home = () => {
    return (
        <div className="home-page">
            {/* Hero Section */}
            <section className="hero-section">
                <div className="container hero-grid">
                    <motion.div
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        className="hero-text"
                    >
                        <span className="badge">BEST SHORTHAND INSTITUTE IN ABHAYAPURI</span>
                        <h1 className="hero-title">
                            Fast Track Your <br />
                            <span>Steno Career</span>
                        </h1>
                        <p className="hero-subtitle">
                            Master shorthand, typing, and government exam prep under expert guidance.
                            Your shortcut to a Government Job starts here!
                        </p>
                        <div className="hero-btns">
                            <a href="/courses" className="btn-secondary">EXPLORE COURSES <ArrowRight size={18} /></a>
                            <a href="/about" className="btn-outline">ABOUT US</a>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="hero-image-wrapper"
                    >
                        <div className="image-card">
                            <img
                                src="https://lh3.googleusercontent.com/p/AF1QipOz-iH6k3FsgTk4t7aD6_Dq5BhR7EbP4_1JXGc4=s1360-w1360-h1020-rw"
                                alt="Stenography Class"
                                className="hero-image"
                            />
                            <div className="floating-stat">
                                <span className="stat-num">99%</span>
                                <span className="stat-label">Success Rate</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Mission Section */}
            <section className="mission-section">
                <div className="container mission-grid">
                    <div className="mission-content">
                        <h2 className="section-title">OUR MISSION</h2>
                        <p className="large-text">
                            Empowering students with the precision and speed of professional stenography.
                        </p>
                        <p className="body-text">
                            Our mission is to bridge the gap between talent and industry requirements through
                            rigorous training and a classroom environment designed for excellence.
                        </p>
                        <div className="feature-list">
                            <div className="feature-item">
                                <CheckCircle size={20} className="icon-red" />
                                <span>High-Speed Data Entry Training</span>
                            </div>
                            <div className="feature-item">
                                <CheckCircle size={20} className="icon-red" />
                                <span>Govt Job Interview Preparation</span>
                            </div>
                            <div className="feature-item">
                                <CheckCircle size={20} className="icon-red" />
                                <span>Precision Shorthand Dictations</span>
                            </div>
                        </div>
                    </div>
                    <div className="stats-box">
                        <div className="stat-box-item">
                            <h3>800+</h3>
                            <p>STUDENTS TRAINED</p>
                        </div>
                        <div className="stat-box-item">
                            <h3>10+</h3>
                            <p>YEARS OF EXPERIENCE</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-banner">
                <div className="container cta-content">
                    <h2>Ready to Build Your Career?</h2>
                    <p>Join Eduspark Institute and start your journey towards excellence.</p>
                    <a href="/courses" className="btn-secondary">GET STARTED NOW</a>
                </div>
            </section>

            {/* Testimonials */}
            <section className="testimonial-section">
                <div className="container">
                    <h2 className="section-title centered">WHAT STUDENTS SAY</h2>
                    <div className="testimonial-grid">
                        <div className="testimonial-card">
                            <p className="quote">"THE TRAINING HERE IS INTENSE AND PROFESSIONAL. I WENT FROM 20 WPM TO 80 WPM IN JUST 3 MONTHS!"</p>
                            <p className="author"> - Sumit Das, ADVANCED STUDENT</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
