'use client'

import { useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css/pagination'

export default function TestimonialsSection() {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.AOS) {
      window.AOS.refresh()
    }
  }, [])

  const testimonials = [
    {
      text: "Incredibly insightful and educational. I am working to pivot into D&I as a career, and this seminar just fanned the flames of my passion even higher. I learned so many practical and innovative ways to be impactful in ways to not only widen leaderships' lenses regarding D&I, but also the positive effect it has on the business. Thank you so much for today. I feel recharged.",
    },
    {
      text: "Very enlightening, engaging and informative!",
    },
    {
      text: "One of my favorite parts of Courtney Johnson and Trish Payne's session was hearing how they felt about Prudential's response to its historical role in denying Black clients the same financial growth and investment opportunities that were offered to white people. They didn't sugar coat anything but also did a great job highlighting the work being done now.",
    },
    {
      text: "I liked Courtney and Trish's positive and polished delivery.",
    },
    {
      text: "I have chills. That was amazing and I could feel your pride for your company in setting the example. Thank you!",
    },
  ]

  return (
    <section id="testimonials" className="testimonials section light-background">
      <div className="container section-title" data-aos="fade-up">
        <h2>Testimonials</h2>
        <p>Feedback from attendees and fellow speakers at some of my recent conferences</p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <Swiper
          modules={[Autoplay, Pagination]}
          loop={true}
          speed={600}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 40,
            },
            1200: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
          className="init-swiper"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="testimonial-item">
                <p>
                  <i className="bi bi-quote quote-icon-left"></i>
                  <span>{testimonial.text}</span>
                  <i className="bi bi-quote quote-icon-right"></i>
                </p>
              </div>
            </SwiperSlide>
          ))}
          <div className="swiper-pagination"></div>
        </Swiper>
      </div>
    </section>
  )
}
