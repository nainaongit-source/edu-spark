import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send, Clock, BookOpen } from 'lucide-react';
import './Courses.css';

const Courses = () => {
    const courses = [
        {
            id: 1,
            title: "BEGINNER'S COURSE",
            duration: "1 YEAR",
            fee: "Admission: ₹2,500 | Monthly: ₹1,000",
            description: "A comprehensive one-year foundation course covering advanced shorthand theory and professional speed development."
        },
        {
            id: 2,
            title: "STENO TYPIST",
            duration: "6 MONTHS",
            fee: "Admission: ₹2,000 | Monthly: ₹1,500",
            description: "Intensive 6-month certification program focused on achieving clerical stenography standards for job readiness."
        }
    ];

    return (
        <div className="courses-page">
            {/* Courses Hero */}
            <section className="courses-hero">
                <div className="container">
                    <motion.h1
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        className="page-header"
                    >
                        OUR <span>COURSES</span>
                    </motion.h1>
                    <p className="hero-sub">Expert-led training programs for every skill level.</p>
                </div>
            </section>

            {/* Courses Grid */}
            <section className="container courses-section">
                <div className="section-header centered">
                    <h2 className="section-title centered">CHOOSE YOUR COURSE</h2>
                    <p>Designed to help you master stenography and crack competitive exams.</p>
                </div>

                <div className="courses-grid">
                    {courses.map((course) => (
                        <motion.div
                            key={course.id}
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: course.id * 0.1 }}
                            className="course-card"
                        >
                            <div className="course-card-content">
                                <BookOpen className="icon-accent" size={32} />
                                <h3>{course.title}</h3>
                                <div className="course-duration">
                                    <Clock size={16} />
                                    <span>{course.duration}</span>
                                </div>
                                <p className="course-desc">{course.description}</p>
                            </div>
                            <div className="course-card-footer">
                                <span className="fee">{course.fee}</span>
                                <button className="btn-secondary btn-full">ENROLL NOW</button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="contact-section">
                <div className="container contact-grid">
                    <div className="contact-info">
                        <h2 className="section-title">GET IN TOUCH</h2>
                        <h3 className="contact-main-title">STAY CONNECTED</h3>

                        <div className="contact-items">
                            <div className="contact-item">
                                <div className="icon-circle"><MapPin className="icon" /></div>
                                <div>
                                    <h4>ADDRESS</h4>
                                    <p>Assam Abhayapuri 783384</p>
                                </div>
                            </div>
                            <div className="contact-item">
                                <div className="icon-circle"><Phone className="icon" /></div>
                                <div>
                                    <h4>PHONE</h4>
                                    <p>9678125800</p>
                                </div>
                            </div>
                            <div className="contact-item">
                                <div className="icon-circle"><Mail className="icon" /></div>
                                <div>
                                    <h4>EMAIL</h4>
                                    <p>contact@edusparkinstitute.com</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="contact-form-container">
                        <h3>REQUEST A CALL BACK</h3>
                        <form className="contact-form">
                            <div className="form-row">
                                <div className="form-group">
                                    <label>FULL NAME</label>
                                    <input type="text" placeholder="Your Name" required />
                                </div>
                                <div className="form-group">
                                    <label>PHONE NUMBER</label>
                                    <input type="tel" placeholder="Your Phone" required />
                                </div>
                            </div>
                            <div className="form-group">
                                <label>INTERESTED COURSE</label>
                                <select>
                                    <option>CHOOSE A COURSE</option>
                                    <option>BEGINNER'S COURSE (1 YEAR)</option>
                                    <option>STENO TYPIST (6 MONTHS)</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label>MESSAGE</label>
                                <textarea rows="3" placeholder="How can we help?"></textarea>
                            </div>
                            <button type="submit" className="btn-primary btn-full">
                                SEND MESSAGE <Send size={18} style={{ marginLeft: '10px' }} />
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Courses;
