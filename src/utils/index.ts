export function scrollToTop(isSmooth = true) {
  !isSmooth && window.scroll(0, 0)
  isSmooth && window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}
