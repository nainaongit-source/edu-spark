import React from 'react';
import { motion } from 'framer-motion';
import { Award, Target, Shield, User, Play } from 'lucide-react';
import './About.css';

const About = () => {
    return (
        <div className="about-page">
            {/* About Hero */}
            <section className="about-hero">
                <div className="container">
                    <motion.h1
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        className="page-header"
                    >
                        OUR <span>STORY</span>
                    </motion.h1>
                    <p className="hero-sub">Leading the way in professional Stenography since 2014.</p>
                </div>
            </section>

            {/* Rocky Ahamed Profile */}
            <section className="profile-section container">
                <div className="profile-grid">
                    <motion.div
                        initial={{ x: -50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        className="profile-image-container"
                    >
                        <img
                            src="https://lh3.googleusercontent.com/p/AF1QipNwXgwwT-3KAXb8H5YtlRneIZGNfiGAAxfxmoU9=s1360-w1360-h1020-rw"
                            alt="Rocky Ahamed"
                            className="profile-image"
                        />
                        <div className="experience-badge">
                            <span className="years">10+</span>
                            <span className="text">Years Exp.</span>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ x: 50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        className="profile-text"
                    >
                        <div className="title-wrapper">
                            <User size={24} className="icon-red" />
                            <h2 className="section-title">HEAD OF STENO</h2>
                        </div>
                        <h3 className="profile-name">ROCKY AHAMED</h3>
                        <div className="bio-content">
                            <p>
                                Rocky Ahamed is a visionary educator and an expert in the field of Stenography.
                                With over a decade of experience in teaching shorthand and professional typing,
                                he has mentored hundreds of students to achieve their career goals.
                            </p>
                            <p>
                                His unique teaching style focuses on <strong>"Speed with Accuracy,"</strong> ensuring
                                that every student masters the intricate strokes of shorthand while maintaining
                                the stamina required for high-pressure environments.
                            </p>
                            <div className="qual-grid">
                                <div className="qual-item">
                                    <Award size={20} className="icon-red" />
                                    <span>Certified Senior Stenographer</span>
                                </div>
                                <div className="qual-item">
                                    <Shield size={20} className="icon-red" />
                                    <span>Awarded 'Best Trainer' (2022)</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Institute Values */}
            <section className="values-section">
                <div className="container">
                    <h2 className="section-title centered">OUR CORE VALUES</h2>
                    <div className="values-grid">
                        <div className="value-card">
                            <Target size={40} className="icon-accent" />
                            <h3>PRECISION</h3>
                            <p>In Stenography, every stroke counts. We instill a culture of absolute accuracy from day one.</p>
                        </div>
                        <div className="value-card">
                            <Play size={40} className="icon-accent" />
                            <h3>SPEED</h3>
                            <p>Our curriculum is designed to push boundaries, helping students reach competitive speeds in record time.</p>
                        </div>
                        <div className="value-card">
                            <Shield size={40} className="icon-accent" />
                            <h3>DISCIPLINE</h3>
                            <p>A classroom environment that mirrors professional workspaces, fostering focus and dedication.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
