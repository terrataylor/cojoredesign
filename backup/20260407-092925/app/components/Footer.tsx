import navigation from '../../site/content/navigation.json'

export default function Footer() {
  return (
    <footer id="footer" className="footer accent-background">
      <div className="container footer-top">
        <div className="row gy-4">
          <div className="col-12 d-flex justify-content-center footer-about">
            <div className="social-links d-flex mt-4">
              {navigation.footerSocial.map((social) => (
                <a key={social.platform} href={social.href} target="_blank" rel="noopener noreferrer">
                  <i className={`bi ${social.platform === 'Instagram' ? 'bi-instagram' : 'bi-linkedin'}`}></i>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="container copyright text-center mt-4">
        <p>
          © <span>Copyright</span> <strong className="px-1 sitename">CoJo LLC</strong>{' '}
          <span>All Rights Reserved</span>
        </p>
      </div>
    </footer>
  )
}
