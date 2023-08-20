<template>
    <NuxtLayout>
        <div role="main" class="root-container b-page-error">
            <div class="container">
                <h1>{{ props.pageTitle }}.</h1>

                <h2>404</h2>

                <AtomsImage
                    :classnames="'is-image-error'"
                    :src="'/images/star-wars-no.gif'"
                    :alt="'Nope.'"
                />

                <p>
                    This page seems not working or not correct. Please try
                    again.
                </p>

                <AtomsLinkButton
                    to="/"
                    text="Back to the home page"
                    classnames="is-button-error"
                />
            </div>
        </div>
    </NuxtLayout>
</template>

<script setup lang="ts">
const runtimeConfig = useRuntimeConfig()

const props = defineProps({
    pageTitle: {
        type: String,
        default: 'Page not found',
    },
})

useHead({
    title: `${props.pageTitle} | ${runtimeConfig.public.metaHeadDefaultTitleShort}`,
    meta: [
        {
            name: 'description',
            content: `${props.pageTitle} | ${runtimeConfig.public.metaHeadDefaultTitleShort}`,
        },
    ],
})
</script>

<style lang="scss">
.b-page-error {
    padding-top: $space_06;
    padding-bottom: $space_06;
    text-align: center;

    .is-image-error {
        margin: $space_04 $space_00;
        padding: $space_03;
        border: 1px solid $color_page_error_image_border;
    }

    .is-button-error {
        margin: $space_03 auto;
    }
}
</style>
