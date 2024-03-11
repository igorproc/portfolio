export function observeVisibility(ids: string[], callback: ([...args]) => unknown) {
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.01,
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        callback(`#${entry.target.id}`)
      }
    })
  }, observerOptions)

  ids.forEach(id => {
    const target = document.getElementById(id)
    if (target) {
      observer.observe(target)
    }
  })
}
