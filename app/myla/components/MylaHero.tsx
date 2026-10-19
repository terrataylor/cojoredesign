import { useMylaContent } from '../content'

export default function MylaHero() {
  const { hero, brand } = useMylaContent()

  return (
    <section id="top" className="myla-hero">
      <div className="myla-container myla-hero-inner">
        <div className="myla-hero-copy">
          <h1>
            {(hero.headline ?? '').split(/(?<=\.)\s+/).map((line, i) => (
              <span key={i} className="myla-hero-line">{line}</span>
            ))}
          </h1>
          <p className="myla-hero-intro">{hero.intro}</p>
          <div className="myla-hero-buttons">
            <a href="#stays" className="myla-btn myla-btn-primary">
              {hero.staysButton} <i className="bi bi-arrow-down" aria-hidden="true"></i>
            </a>
            <a href="#transport" className="myla-btn myla-btn-outline">
              {hero.transportButton} <i className="bi bi-arrow-down" aria-hidden="true"></i>
            </a>
          </div>
        </div>
        <div className="myla-hero-mascots">
          <img src={brand.staysMascot.src} alt={brand.staysMascot.alt} />
          <img src={brand.transportMascot.src} alt={brand.transportMascot.alt} />
        </div>
      </div>
    </section>
  )
}
