<template>
    <a
        :class="['b-link-external', props.classnames]"
        :href="props.url"
        :title="props.title"
        :target="isTargetBlank ? '_blank' : null"
    >
        {{ props.text }}
    </a>
</template>

<script setup>
const props = defineProps({
    text: {
        type: String,
        required: true,
    },

    url: {
        type: String,
        required: true,
    },

    title: {
        type: String,
        // another prop as default value
        default: (props) => props.text,
    },

    isTargetBlank: {
        type: Boolean,
        default: true,
    },

    classnames: {
        type: String,
        default: null,
    },
})
</script>
