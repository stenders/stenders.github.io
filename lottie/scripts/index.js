window.addEventListener('DOMContentLoaded', () => {
  const animation = bodymovin.loadAnimation({
    container: document.getElementById('bm'),
    renderer: 'svg',
    loop: !true,
    autoplay: !true,
    path: 'data.json'
  })

  window.onPlay = () => {
    animation.stop();
    animation.play();
  }
})
