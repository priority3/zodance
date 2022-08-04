export function scrollToTop(isSmooth = true) {
  !isSmooth && window.scroll(0, 0)
  isSmooth && window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}

export function isIosMobile() {
  const reg = /iphone|ipod|ipad/i
  return reg.test(navigator.userAgent)
}
