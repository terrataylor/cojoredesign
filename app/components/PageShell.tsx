import Header from './Header'
import Footer from './Footer'
import ScrollTop from './ScrollTop'
import Preloader from './Preloader'
import Scripts from './Scripts'

interface PageShellProps {
  children: React.ReactNode
}

export default function PageShell({ children }: PageShellProps) {
  return (
    <>
      <Preloader />
      <Header />
      <main className="main">{children}</main>
      <Footer />
      <ScrollTop />
      <Scripts />
    </>
  )
}
