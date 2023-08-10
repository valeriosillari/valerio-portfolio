const utilsRemoveNoJsClass = () => {
    // remove component itself when fade completed (vue IF logic)
    setTimeout(() => {
        document.documentElement.classList.remove('no-js')
    }, 50)
}

export default utilsRemoveNoJsClass
