const removeNoJsClass = () => {
    // remove component itself when fade completed (vue IF logic)
    setTimeout(() => {
        document.documentElement.classList.remove('no-js')
    }, 50)

    console.log('NO JS done')
}
export default removeNoJsClass
