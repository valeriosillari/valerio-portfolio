const utilsRemoveNoJsClass = () => {
    // !!! important
    // runtimeConfig has to be called INSIDE  the function, as part of the nuxt lifecycle
    // https://stackoverflow.com/questions/75575272/nuxt-instance-unavailable-when-trying-to-run-useruntimeconfig-in-a-file-within-u
    const runtimeConfig = useRuntimeConfig()

    // remove component itself when fade completed (vue IF logic)
    setTimeout(() => {
        document.documentElement.classList.remove(
            runtimeConfig.public.htmlNoJsClass
        )
    }, 50)
}

export default utilsRemoveNoJsClass
