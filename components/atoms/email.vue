<template>
    <a
        :class="['b-email', props.classnames]"
        href="mailto:hello@valeriosillari.com"
    >
        {{ props.text }}
    </a>
</template>

<script setup>
const props = defineProps({
    text: {
        type: String,
        default: 'hello[@]valeriosillari.com',
    },

    classnames: {
        type: String,
        default: null,
    },
})
</script>
