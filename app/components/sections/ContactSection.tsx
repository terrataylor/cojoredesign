'use client'

import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import './ContactSection.css'

interface ContactFormData {
    name: string
    email: string
    subject: string
    message: string
}

export default function ContactSection() {
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
    const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormData>()

    useEffect(() => {
        if (typeof window !== 'undefined' && window.AOS) {
            window.AOS.refresh()
        }
    }, [])

    const onSubmit = async (data: ContactFormData) => {
        setSubmitStatus('loading')
        try {
            const endpoint = process.env.NEXT_PUBLIC_EMAIL_SERVICE_URL || '/api/contact'

            const response = await fetch(endpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })

            if (response.ok) {
                setSubmitStatus('success')
                reset()
                setTimeout(() => setSubmitStatus('idle'), 5000)
            } else {
                setSubmitStatus('error')
                const errorData = await response.json()
                console.log('Error details:', errorData)
                setTimeout(() => setSubmitStatus('idle'), 5000)
            }
        } catch (error) {
            setSubmitStatus('error')

            setTimeout(() => setSubmitStatus('idle'), 5000)
        }
    }

    return (
        <section id="contact" className="contact section">
            <div className="container section-title" data-aos="fade-up">
                <h2>Contact</h2>
                <p>Please reach out!</p>
            </div>

            <div>
                <iframe
                    style={{ border: 0, width: '100%', height: '270px' }}
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d214586.05539803446!2d-80.13528586695885!3d32.82122597370953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88fe7a42dca82477%3A0x35faf7e0aee1ec6b!2sCharleston%2C%20SC!5e0!3m2!1sen!2sus!4v1693258273306!5m2!1sen!2sus"
                    frameBorder="0"
                    allowFullScreen
                    loading="lazy"
                ></iframe>
            </div>

            <div className="container" data-aos="fade-up" data-aos-delay="100">
                <div className="row gy-4">
                    <div className="col-lg-6">
                        <div className="row gy-4">
                            <div className="col-md-6">
                                <div className="info-item" data-aos="fade" data-aos-delay="200">
                                    <i className="bi bi-geo-alt"></i>
                                    <h3>Address</h3>
                                    <p>Charleston, SC</p>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="info-item" data-aos="fade" data-aos-delay="300">
                                    <i className="bi bi-telephone"></i>
                                    <h3>Call Us</h3>
                                    <p>+1 843 543 4022</p>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="info-item" data-aos="fade" data-aos-delay="400">
                                    <i className="bi bi-envelope"></i>
                                    <h3>Email Us</h3>
                                    <p>CoJo.dreamhomes@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <form onSubmit={handleSubmit(onSubmit)} className="php-email-form" data-aos="fade-up" data-aos-delay="200">
                            <div className="row gy-4">
                                <div className="col-md-6">
                                    <input
                                        type="text"
                                        {...register('name', { required: 'Name is required' })}
                                        className="form-control"
                                        placeholder="Your Name"
                                    />
                                    {errors.name && <span className="text-danger">{errors.name.message}</span>}
                                </div>

                                <div className="col-md-6">
                                    <input
                                        type="email"
                                        {...register('email', {
                                            required: 'Email is required',
                                            pattern: {
                                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                message: 'Invalid email address'
                                            }
                                        })}
                                        className="form-control"
                                        placeholder="Your Email"
                                    />
                                    {errors.email && <span className="text-danger">{errors.email.message}</span>}
                                </div>

                                <div className="col-12">
                                    <input
                                        type="text"
                                        {...register('subject', { required: 'Subject is required' })}
                                        className="form-control"
                                        placeholder="Subject"
                                    />
                                    {errors.subject && <span className="text-danger">{errors.subject.message}</span>}
                                </div>

                                <div className="col-12">
                                    <textarea
                                        {...register('message', { required: 'Message is required' })}
                                        className="form-control"
                                        rows={6}
                                        placeholder="Message"
                                    ></textarea>
                                    {errors.message && <span className="text-danger">{errors.message.message}</span>}
                                </div>

                                <div className="col-12 text-center">
                                    {submitStatus === 'loading' && <div className="loading">Loading</div>}
                                    {submitStatus === 'error' && <div className="error-message">Error sending message. Please try again.</div>}
                                    {submitStatus === 'success' && <div className="sent-message">Your message has been sent. Thank you!</div>}

                                    <button type="submit" disabled={submitStatus === 'loading'}>
                                        Send Message
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
