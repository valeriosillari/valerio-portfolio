export default defineNitroPlugin((nitroApp) => {
    const runtimeConfig = useRuntimeConfig()

    nitroApp.hooks.hook('render:html', (html) => {
        html.htmlAttrs = html.htmlAttrs || []

        html.htmlAttrs.push(`class="${runtimeConfig.public.htmlNoJsClass}"`)
    })
})
