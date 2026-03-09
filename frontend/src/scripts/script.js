import  '../styles' 

const container_iframe_map = document.getElementById('container_iframe_map')
const iframe = container_iframe_map.querySelector('iframe')
iframe.style.pointerEvents = 'none'
container_iframe_map.addEventListener('click', () => {
    iframe.style.pointerEvents = 'auto'
})

container_iframe_map.addEventListener('mouseleave', () => {
    iframe.style.pointerEvents = 'none'
})