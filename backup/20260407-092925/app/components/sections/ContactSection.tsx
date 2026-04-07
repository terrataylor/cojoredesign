'use client'

import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import contactContent from '../../../site/content/contact.json'
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
                <h2>{contactContent.heading}</h2>
                <p>{contactContent.subheading}</p>
            </div>

            <div>
                <iframe
                    style={{ border: 0, width: '100%', height: '270px' }}
                    src={contactContent.mapEmbedUrl}
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
                                    <p>{contactContent.address}</p>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="info-item" data-aos="fade" data-aos-delay="300">
                                    <i className="bi bi-telephone"></i>
                                    <h3>Call Us</h3>
                                    <p>{contactContent.phone}</p>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="info-item" data-aos="fade" data-aos-delay="400">
                                    <i className="bi bi-envelope"></i>
                                    <h3>Email Us</h3>
                                    <p>{contactContent.email}</p>
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
                                        placeholder={contactContent.form.namePlaceholder}
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
                                        placeholder={contactContent.form.emailPlaceholder}
                                    />
                                    {errors.email && <span className="text-danger">{errors.email.message}</span>}
                                </div>

                                <div className="col-12">
                                    <input
                                        type="text"
                                        {...register('subject', { required: 'Subject is required' })}
                                        className="form-control"
                                        placeholder={contactContent.form.subjectPlaceholder}
                                    />
                                    {errors.subject && <span className="text-danger">{errors.subject.message}</span>}
                                </div>

                                <div className="col-12">
                                    <textarea
                                        {...register('message', { required: 'Message is required' })}
                                        className="form-control"
                                        rows={6}
                                        placeholder={contactContent.form.messagePlaceholder}
                                    ></textarea>
                                    {errors.message && <span className="text-danger">{errors.message.message}</span>}
                                </div>

                                <div className="col-12 text-center">
                                    {submitStatus === 'loading' && <div className="loading">Loading</div>}
                                    {submitStatus === 'error' && <div className="error-message">Error sending message. Please try again.</div>}
                                    {submitStatus === 'success' && <div className="sent-message">Your message has been sent. Thank you!</div>}

                                    <button type="submit" disabled={submitStatus === 'loading'}>
                                        {contactContent.form.submitLabel}
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
