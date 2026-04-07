declare global {
  interface Window {
    AOS?: {
      init: (options?: any) => void
      refresh: () => void
    }
    GLightbox?: (options?: any) => any
    Swiper?: any
    PureCounter?: new () => any
    Isotope?: any
  }
}

export {}
