import myla from '../../../site/content/myla.json'
import InquiryForm from './InquiryForm'

export default function StaysSection() {
  const { stays, brand } = myla
  const [featured, ...rest] = stays.gallery

  return (
    <section id="stays" className="myla-stays">
      <div className="myla-container">
        <div className="myla-stays-intro">
          <div className="myla-stays-copy">
            <p className="myla-eyebrow">{stays.eyebrow}</p>
            <h2>{stays.headline}</h2>
            <p className="myla-lead">{stays.description}</p>
          </div>
          {featured && (
            <img className="myla-gallery-featured" src={featured.src} alt={featured.alt} />
          )}
        </div>

        <div className="myla-gallery">
          {rest.map((photo) => (
            <img key={photo.src} src={photo.src} alt={photo.alt} />
          ))}
          <div className="myla-away-card">
            <h3>{stays.awayFromHome.heading}</h3>
            <p>{stays.awayFromHome.text}</p>
            <a
              href={stays.furnishedFinder.url}
              target="_blank"
              rel="noopener noreferrer"
              className="myla-link"
            >
              {stays.furnishedFinder.label} <i className="bi bi-arrow-up-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>

        {/* Hidden to match the approved mockup; restore when the client supplies this content.
        <div className="myla-details">
          <div className="myla-detail-card">
            <h3><i className="bi bi-geo-alt" aria-hidden="true"></i> {stays.location.heading}</h3>
            <p>{stays.location.text}</p>
          </div>
          <div className="myla-detail-card">
            <h3><i className="bi bi-house-check" aria-hidden="true"></i> {stays.amenities.heading}</h3>
            <ul>
              {stays.amenities.items.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
          <div className="myla-detail-card">
            <h3><i className="bi bi-file-earmark-text" aria-hidden="true"></i> {stays.terms.heading}</h3>
            <ul>
              {stays.terms.items.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
        </div>

        <div className="myla-hosts-faq">
          <div className="myla-hosts">
            <h3>{stays.hosts.heading}</h3>
            <p>{stays.hosts.text}</p>
          </div>
          <div className="myla-faq">
            <h3>{stays.faqHeading}</h3>
            {stays.faqs.map((faq) => (
              <details key={faq.question}>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
        */}

        <div id="inquire" className="myla-inquiry-card">
          <div className="myla-inquiry-body">
            <h3>{stays.form.heading}</h3>
            <p className="myla-muted">{stays.form.subheading}</p>
            <InquiryForm type="stays" />
          </div>
          <img
            className="myla-inquiry-mascot"
            src={brand.staysMascot.src}
            alt={brand.staysMascot.alt}
          />
        </div>
      </div>
    </section>
  )
}
