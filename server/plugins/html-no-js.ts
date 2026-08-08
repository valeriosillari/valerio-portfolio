export default defineNitroPlugin((nitroApp) => {
    nitroApp.hooks.hook('render:html', (html) => {
        html.htmlAttrs = html.htmlAttrs || []

        html.htmlAttrs.push('class="no-js"')
    })
})
