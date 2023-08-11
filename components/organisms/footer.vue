<template>
    <div role="contentinfo" class="b-footer">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-sm-8">
                    <NuxtLink
                        v-for="link in footerLinks"
                        :key="link.title"
                        :title="link.title"
                        :href="link.url"
                        class="footer-link"
                    >
                        {{ link.title }}
                    </NuxtLink>

                    <div>Made with ♥ | {{ dateYear }} | v{{ appVersion }}</div>
                </div>

                <div class="col-sm-4 order-first order-sm-last">
                    <MoleculesSocialLinkList :classnames="'is-footer'" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import packageJson from '../../package.json'

const dateYear = new Date().getFullYear()
const appVersion = packageJson.version

const footerLinks = [
    {
        title: 'Home',
        url: '/',
    },
    {
        title: 'Privacy Policy',
        url: '/privacy-policy',
    },
]
</script>

<style lang="scss">
.b-footer {
    padding: $space_04;
    background-color: $color_footer_bg;
    color: $color_footer_text;

    .footer-link {
        color: $color_footer_link;
        padding-left: $space_01;

        &:first-child {
            padding-left: $space_00;
        }

        &.router-link-active {
            color: $color_footer_link_active;
        }

        &:hover {
            color: $color_footer_link_hvr;
        }
    }
}
</style>
