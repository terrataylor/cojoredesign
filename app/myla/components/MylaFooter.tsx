import Link from 'next/link'
import { useMylaContent } from '../content'

export default function MylaFooter() {
  const myla = useMylaContent()

  return (
    <footer className="myla-footer">
      <div className="myla-container myla-footer-inner">
        <img className="myla-footer-logo" src={myla.brand.logo.src} alt={myla.brand.logo.alt} />
        <nav className="myla-footer-nav" aria-label="MyLa footer">
          <a href="#stays">MyLa Stays</a>
          <span className="myla-footer-sep" aria-hidden="true">&bull;</span>
          <a href="#transport">MyLa Transport</a>
          <span className="myla-footer-sep" aria-hidden="true">|</span>
          <Link href="/">{myla.footer.backLabel}</Link>
        </nav>
        {myla.visibility?.footerCopyright && (
          <p className="myla-footer-copy">
            &copy; {new Date().getFullYear()} MyLa. All rights reserved.
          </p>
        )}
      </div>
    </footer>
  )
}
