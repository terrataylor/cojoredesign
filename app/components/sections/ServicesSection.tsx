'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function ServicesSection() {
  const [activeTab, setActiveTab] = useState('v-pills-home')

  useEffect(() => {
    if (typeof window !== 'undefined' && window.AOS) {
      window.AOS.refresh()
    }
  }, [])

  return (
    <section id="services" className="services section">
      <div className="container section-title" data-aos="fade-up">
        <h2>What I do</h2>
        <p>Managing properties. Growing businesses. Championing diversity and inclusion.</p>
      </div>

      <div className="container">
        <div className="row gy-4">
          <div className="d-flex align-items-start">
            <div className="nav flex-column nav-pills me-5 col-12 col-md-4" id="v-pills-tab" role="tablist" aria-orientation="vertical">
              <button
                className={`nav-link ${activeTab === 'v-pills-home' ? 'active' : ''}`}
                onClick={() => setActiveTab('v-pills-home')}
                type="button"
                role="tab"
              >
                <div className="service-item d-flex mb-1">
                  <div className="icon flex-shrink-0"><i className="bi bi-house"></i></div>
                  <div>
                    <h4 className="title"><a href="#services" className="stretched-link service">Property Management</a></h4>
                    <p className="description">From keys to contracts, we handle it all.</p>
                  </div>
                </div>
              </button>

              <button
                className={`nav-link ${activeTab === 'v-pills-profile' ? 'active' : ''}`}
                onClick={() => setActiveTab('v-pills-profile')}
                type="button"
                role="tab"
              >
                <div className="service-item d-flex mb-1">
                  <div className="icon flex-shrink-0"><i className="bi bi-tools"></i></div>
                  <div>
                    <h4 className="title"><a href="#services" className="stretched-link service">Home Renovation</a></h4>
                    <p className="description">Expert craftsmanship. Inspired design. Stunning results.</p>
                  </div>
                </div>
              </button>

              <button
                className={`nav-link ${activeTab === 'v-pills-messages' ? 'active' : ''}`}
                onClick={() => setActiveTab('v-pills-messages')}
                type="button"
                role="tab"
              >
                <div className="service-item d-flex mb-1">
                  <div className="icon flex-shrink-0"><i className="bi bi-buildings"></i></div>
                  <div>
                    <h4 className="title"><a href="#services" className="stretched-link service">Business Consulting and Investment</a></h4>
                    <p className="description">Turning bold ideas into profitable realities.</p>
                  </div>
                </div>
              </button>

              <button
                className={`nav-link ${activeTab === 'v-pills-settings' ? 'active' : ''}`}
                onClick={() => setActiveTab('v-pills-settings')}
                type="button"
                role="tab"
              >
                <div className="service-item d-flex mb-1">
                  <div className="icon flex-shrink-0"><i className="bi bi-globe-americas"></i></div>
                  <div>
                    <h4 className="title"><a href="#services" className="stretched-link service">Ambassador for Diversity and Inclusion</a></h4>
                    <p className="description">Empowering people. Enriching communities. Inspiring change.</p>
                  </div>
                </div>
              </button>
            </div>

            <div className="tab-content col-12 col-md-8" id="v-pills-tabContent">
              <div className={`tab-pane fade ${activeTab === 'v-pills-home' ? 'show active' : ''}`} role="tabpanel">
                <div className="container">
                  <div className="row gy-4">
                    <div className="col-lg-6 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="100">
                      <div className="team">
                        <div className="team-member">
                          <div className="member-img">
                            <Image
                              src="/assets/img/properties/omaha.png"
                              alt="Dundee Rental"
                              width={400}
                              height={300}
                              className="img-fluid"
                            />
                            <div className="social">
                              <a href=""><i className="bi bi-twitter-x"></i></a>
                              <a href=""><i className="bi bi-facebook"></i></a>
                              <a href=""><i className="bi bi-instagram"></i></a>
                              <a href=""><i className="bi bi-linkedin"></i></a>
                            </div>
                          </div>
                          <div className="member-info">
                            <h4>Dundee Rental (Coming Soon)</h4>
                            <span>Omaha, NE</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="200">
                      <div className="team">
                        <div className="team-member">
                          <div className="member-img">
                            <Image
                              src="/assets/img/properties/texas.png"
                              alt="Comfy 4BR - The Aero"
                              width={400}
                              height={300}
                              className="img-fluid"
                            />
                            <div className="social">
                              <a href=""><i className="bi bi-twitter-x"></i></a>
                              <a href=""><i className="bi bi-facebook"></i></a>
                              <a href=""><i className="bi bi-instagram"></i></a>
                              <a href=""><i className="bi bi-linkedin"></i></a>
                            </div>
                          </div>
                          <div className="member-info">
                            <h4>Comfy 4BR - The &quot;Aero&quot; in Schertz</h4>
                            <span>Schertz, TX</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={`tab-pane fade ${activeTab === 'v-pills-profile' ? 'show active' : ''}`} role="tabpanel">
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <blockquote
                    className="instagram-media"
                    data-instgrm-captioned
                    data-instgrm-permalink="https://www.instagram.com/reel/CVav6owPCaq/?utm_source=ig_embed&amp;utm_campaign=loading"
                    data-instgrm-version="14"
                    style={{
                      background: '#FFF',
                      border: 0,
                      borderRadius: '3px',
                      boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)',
                      margin: '1px',
                      maxWidth: '540px',
                      minWidth: '326px',
                      padding: 0,
                      width: '99.375%',
                    }}
                  >
                    <div style={{ padding: '16px' }}>
                      <a
                        href="https://www.instagram.com/reel/CVav6owPCaq/?utm_source=ig_embed&amp;utm_campaign=loading"
                        style={{
                          background: '#FFFFFF',
                          lineHeight: 0,
                          padding: '0 0',
                          textAlign: 'center',
                          textDecoration: 'none',
                          width: '100%',
                        }}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                          <div
                            style={{
                              backgroundColor: '#F4F4F4',
                              borderRadius: '50%',
                              flexGrow: 0,
                              height: '40px',
                              marginRight: '14px',
                              width: '40px',
                            }}
                          ></div>
                          <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'center' }}>
                            <div
                              style={{
                                backgroundColor: '#F4F4F4',
                                borderRadius: '4px',
                                flexGrow: 0,
                                height: '14px',
                                marginBottom: '6px',
                                width: '100px',
                              }}
                            ></div>
                            <div
                              style={{
                                backgroundColor: '#F4F4F4',
                                borderRadius: '4px',
                                flexGrow: 0,
                                height: '14px',
                                width: '60px',
                              }}
                            ></div>
                          </div>
                        </div>
                        <div style={{ padding: '19% 0' }}></div>
                        <div style={{ display: 'block', height: '50px', margin: '0 auto 12px', width: '50px' }}>
                          <svg width="50px" height="50px" viewBox="0 0 60 60" version="1.1" xmlns="https://www.w3.org/2000/svg">
                            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                              <g transform="translate(-511.000000, -20.000000)" fill="#000000">
                                <g>
                                  <path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631"></path>
                                </g>
                              </g>
                            </g>
                          </svg>
                        </div>
                        <div style={{ paddingTop: '8px' }}>
                          <div
                            style={{
                              color: '#3897f0',
                              fontFamily: 'Arial,sans-serif',
                              fontSize: '14px',
                              fontStyle: 'normal',
                              fontWeight: 550,
                              lineHeight: '18px',
                            }}
                          >
                            View this post on Instagram
                          </div>
                        </div>
                        <div style={{ padding: '12.5% 0' }}></div>
                      </a>
                      <p
                        style={{
                          color: '#c9c8cd',
                          fontFamily: 'Arial,sans-serif',
                          fontSize: '14px',
                          lineHeight: '17px',
                          marginBottom: 0,
                          marginTop: '8px',
                          overflow: 'hidden',
                          padding: '8px 0 7px',
                          textAlign: 'center',
                          textOverflow: 'ellipsis',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        <a
                          href="https://www.instagram.com/reel/CVav6owPCaq/?utm_source=ig_embed&amp;utm_campaign=loading"
                          style={{
                            color: '#c9c8cd',
                            fontFamily: 'Arial,sans-serif',
                            fontSize: '14px',
                            fontStyle: 'normal',
                            fontWeight: 'normal',
                            lineHeight: '17px',
                            textDecoration: 'none',
                          }}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          A post shared by CoJo LLC (@cojo.dreamhomes)
                        </a>
                      </p>
                    </div>
                  </blockquote>
                  <script async src="//www.instagram.com/embed.js"></script>
                </div>
              </div>

              <div className={`tab-pane fade ${activeTab === 'v-pills-messages' ? 'show active' : ''}`} role="tabpanel">
                More information coming soon
              </div>

              <div className={`tab-pane fade ${activeTab === 'v-pills-settings' ? 'show active' : ''}`} role="tabpanel">
                More information coming soon
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
