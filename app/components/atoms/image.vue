<!-- TODO: try to set nuxt-image module/plugin and move images from 'public' to  'assets' -->

<template>
    <img
        :src="props.src"
        :class="['b-image', props.classnames]"
        :alt="props.altText"
        loading="lazy"
    />
</template>

<script setup>
const props = defineProps({
    classnames: {
        type: String,
        default: null,
    },

    src: {
        type: String,
        default: null,
    },

    altText: {
        type: String,
        default: null,
    },
})
</script>

<style lang="scss">
.b-image {
    // bootstrap
    @include img-fluid();
}
</style>
