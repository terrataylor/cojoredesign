export default function Footer() {
  return (
    <footer id="footer" className="footer accent-background">
      <div className="container footer-top">
        <div className="row gy-4">
          <div className="col-12 d-flex justify-content-center footer-about">
            <div className="social-links d-flex mt-4">
              <a href="https://www.instagram.com/cojo.dreamhomes/" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="https://www.linkedin.com/in/courtney-johnson-cojollc/" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-linkedin"></i>
              </a>
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
