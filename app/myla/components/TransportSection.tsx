import { useMylaContent } from '../content'
import TransportInterest from './TransportInterest'

export default function TransportSection() {
  const { transport, brand, transportStatus, visibility } = useMylaContent()
  const comingSoon = transportStatus !== 'live'

  return (
    <section id="transport" className="myla-transport">
      <div className="myla-container myla-transport-inner">
        <div className="myla-transport-copy">
          {comingSoon && <span className="myla-badge">{transport.badge}</span>}
          <h2>{transport.heading}</h2>
          <p className="myla-lead">{transport.description}</p>
          <p>{transport.supportingText}</p>
          {visibility?.goodsOnlyNote && (
            <p className="myla-goods-only">{transport.goodsOnlyNote}</p>
          )}
          <TransportInterest />
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
