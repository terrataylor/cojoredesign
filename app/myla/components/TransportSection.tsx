import myla from '../../../site/content/myla.json'
import InquiryForm from './InquiryForm'

export default function TransportSection() {
  const { transport, brand, transportStatus } = myla
  const comingSoon = transportStatus !== 'live'

  return (
    <section id="transport" className="myla-transport">
      <div className="myla-container myla-transport-inner">
        <div className="myla-transport-copy">
          {comingSoon && <span className="myla-badge">{transport.badge}</span>}
          <h2>{transport.heading}</h2>
          <p className="myla-lead">{transport.description}</p>
          <p>{transport.supportingText}</p>
          <p className="myla-goods-only">{transport.goodsOnlyNote}</p>
          <div className="myla-transport-form">
            <h3>{transport.form.heading}</h3>
            <InquiryForm type="transport" />
          </div>
        </div>
        <div className="myla-transport-visuals">
          <img
            className="myla-transport-mascot"
            src={brand.transportMascot.src}
            alt={brand.transportMascot.alt}
          />
          <img
            className="myla-transport-van"
            src={transport.vanImage.src}
            alt={transport.vanImage.alt}
          />
        </div>
      </div>
    </section>
  )
}
