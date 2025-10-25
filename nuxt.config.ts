// ===============================

const titleShort = 'Valerio Sillari'

const authorName = titleShort

// main title
const headTitle = ` ${titleShort} | Development Consultant | Senior Frontend Developer`

// used in head description in all the pages
const headDescription =
    'I code, especially on frontend side. With strong focus on performance, UX and details. One day I will be a Jedi.'

// the URL set as variables: for redirect DNS
// with httpS: in case redirect take care of it
const appMainUrl = 'https://valeriosillari.com'

const metaKeywords = `Development Consultant, Consultant, Senior Frontend Developer, Coder, Developer, Frontend, Berlin, Germany, ${titleShort}`

// ====== og for FB and Linkedin
const ogUrl = appMainUrl
const ogTitle = headTitle
const ogDescription = headDescription
const ogType = 'website'
const ogImage = `${appMainUrl}/app-icons/logo_og_image.png`
const ogImageWidth = '1200'
const ogImageHeight = '630'
// ====== Twitter
const twitterUserAccountReference = '@stellavalerio'

const htmlNoJsClass = 'no-js'

const graphqlEndpoint = `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_GQL_SPACE}?access_token=${process.env.CONTENTFUL_GQL_TOKEN}`

export default defineNuxtConfig({
    // spread value from this config file globally
    // https://nuxt.com/docs/guide/going-further/runtime-config#exposing-runtime-config
    runtimeConfig: {
        originalEndpointToBeProxied: graphqlEndpoint,
        public: {
            // email as ENV value?
            email: 'hello@valeriosillari.com',
            metaHeadDefaultTitleShort: titleShort,
            htmlNoJsClass,
        },
    },

    app: {
        pageTransition: {
            name: 'page',
            mode: 'out-in',
        },

        head: {
            htmlAttrs: {
                lang: 'en',
                // no js class (as Modernizr).
                // removed later by the application (by utils function on app level)
                class: htmlNoJsClass,
            },

            title: headTitle,

            noscript: [
                {
                    // for AOS fallback when no js enabled
                    // https://github.com/nuxt/nuxt/issues/13848
                    children: `
                        <style type="text/css">
                            [data-aos] {
                                opacity: 1 !important;
                                transform: translate(0) scale(1) !important;
                            }
                        </style>                    
                    `,
                },
            ],

            meta: [
                // viewport set on mobile
                {
                    name: 'viewport',
                    content:
                        'width=device-width, initial-scale=1, shrink-to-fit=no',
                },

                {
                    name: 'description',
                    content: headDescription,
                },

                {
                    name: 'author',
                    content: authorName,
                },

                {
                    name: 'keywords',
                    content: metaKeywords,
                },

                // OG options for open graph: Fb and Linkedin
                {
                    property: 'og:title',
                    content: ogTitle,
                },
                {
                    property: 'og:description',
                    content: ogDescription,
                },
                {
                    property: 'og:type',
                    content: ogType,
                },
                {
                    property: 'og:url',
                    content: ogUrl,
                },
                {
                    property: 'og:image',
                    content: ogImage,
                },
                {
                    property: 'og:image:width',
                    content: ogImageWidth,
                },
                {
                    property: 'og:image:height',
                    content: ogImageHeight,
                },
                // Twitter card
                {
                    property: 'twitter:card',
                    content: 'summary_large_image',
                },

                {
                    property: 'twitter:site',
                    content: twitterUserAccountReference,
                },

                {
                    property: 'twitter:creator',
                    content: authorName,
                },

                {
                    property: 'twitter:title',
                    content: ogTitle,
                },

                {
                    property: 'twitter:description',
                    content: ogDescription,
                },

                {
                    property: 'twitter:image',
                    content: ogImage,
                },

                {
                    property: 'twitter:image:alt',
                    content: ogTitle,
                },
            ],

            link: [
                // favicon (ico)
                {
                    rel: 'icon',
                    sizes: 'any',
                    href: '/app-icons/favicon.ico',
                },

                // TODO: set correct icon as svg
                {
                    rel: 'icon',
                    type: 'image/svg+xml',
                    href: '/app-icons/icon.svg',
                },

                // apple-touch-icon
                {
                    rel: 'apple-touch-icon',
                    href: '/app-icons/apple_touch_icon.png',
                },

                // site manifest
                {
                    rel: 'manifest',
                    href: '/app-icons/site.webmanifest',
                },

                // link canonical
                {
                    rel: 'canonical',
                    href: appMainUrl,
                },
            ],

            // // external js
            // script: [
            //     {
            //     },
            // ],
        },
    },

    devtools: { enabled: true },

    build: {
        // Font awesome trick, for fixing hydration
        // https://github.com/nuxt/nuxt/discussions/16014
        transpile: [
            '@fortawesome/vue-fontawesome',
            '@fortawesome/fontawesome-svg-core',
            '@fortawesome/free-brands-svg-icons',
        ],
    },

    site: {
        url: appMainUrl,
        name: headTitle,
    },

    // buildModules: ['@nuxtjs/google-fonts'],
    modules: [
        '@nuxtjs/sitemap',
        [
            // https://masanos.com/notes/l37t1_8qf-fv/
            '@nuxtjs/google-fonts',
            {
                families: {
                    'Titillium+Web': {
                        wght: [200],
                        ital: [200],
                    },
                },
            },
        ],
    ],

    vite: {
        css: {
            preprocessorOptions: {
                // all global var and mixins and functions
                scss: {
                    additionalData:
                        '@use "@/assets/sass/root_configuration.scss" as *;',
                },
            },
        },
    },

    // all pure code (sass, css, scss ...)
    css: ['@/assets/sass/root.scss'],

    compatibilityDate: '2025-10-25',
})
