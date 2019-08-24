import 'node_lazy_sizes'

// set to only load visible elements by minimizing the preload viewport
window.lazySizesConfig = window.lazySizesConfig || {}
window.lazySizesConfig.lazyClass = 'js-lazy'
window.lazySizesConfig.loadedClass = 'js-lazy-loaded'
window.lazySizesConfig.expand = -20
