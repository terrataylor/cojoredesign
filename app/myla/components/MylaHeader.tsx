import Link from 'next/link'
import { useMylaContent } from '../content'

export default function MylaHeader() {
  const myla = useMylaContent()

  return (
    <header className="myla-header">
      <div className="myla-container myla-header-inner">
        <Link href="/" className="myla-back-link">
          <i className="bi bi-arrow-left" aria-hidden="true"></i>
          <span className="myla-back-label">CoJo LLC</span>
        </Link>

        <a href="#top" className="myla-header-logo" aria-label="MyLa home">
          <img src={myla.brand.logo.src} alt={myla.brand.logo.alt} />
        </a>

        <nav className="myla-header-nav" aria-label="MyLa">
          <a href="#stays">Stays</a>
          <a href="#transport">Transport</a>
          <a href="#inquire" className="myla-hide-sm">Contact</a>
        </nav>
      </div>
    </header>
  )
}
