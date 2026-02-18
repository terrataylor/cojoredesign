'use client'

import { useEffect } from 'react'
import Image from 'next/image'

export default function AboutSection() {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.AOS) {
      window.AOS.refresh()
    }
  }, [])

  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-6 order-1 order-lg-2" data-aos="fade-up" data-aos-delay="100">
            <Image
              src="/assets/img/about.jpg"
              alt="About Courtney Johnson"
              width={600}
              height={600}
              className="img-fluid"
            />
          </div>

          <div className="col-lg-6 order-2 order-lg-1 content" data-aos="fade-up" data-aos-delay="200">
            <h3>Welcome to my personal website!</h3>
            <p className="fst-italic">
              I&apos;m thrilled to have you here. This website is a reflection of who I am, my passions, and the things I
              love to do. Through this platform, I aim to share my experiences, insights, and knowledge on various
              topics that interest me. From my personal companies, partnership companies and community investments -
              you&apos;ll find a diverse range of content that I hope will engage and inspire you. So, take a moment to
              explore, connect, and embark on a journey of discovery with me. Thank you for visiting, and I hope you
              enjoy your time here!
            </p>
            <p>
              Courtney Johnson is the Vice President, Business Development at Atlanta Life Insurance Company. With over
              22 years of experience in insurance and finance, she dedicates her free time to volunteering in the
              Charleston community. Courtney was elected to President of the board of the Greater Charleston YWCA, also
              an active board member of the Teacher&apos;s Supply Closet, and is a member of the Charleston Links, Inc.
              Additionally, she is passionate about investing in the communities she has lived in or visited as a former
              military dependent. Courtney is the proud owner of CoJo, LLC, a Property Management & Investment Company
              with ventures in SC, NC, and NE. She is also a co-owner of Coer, LLC, another property investment company
              with ventures in TX and NE. As she establishes her presence in the Charleston area, Courtney has silently
              invested in local businesses, nurturing her roots within the community.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
