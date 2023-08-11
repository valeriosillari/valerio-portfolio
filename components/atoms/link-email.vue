<template>
    <AtomsLinkExternal
        :isTargetBlank="false"
        :url="emailUrl"
        :text="props.text"
        :title="props.title"
        :classnames="['b-link-email', props.classnames]"
    />
</template>

<script setup>
// email more dynamic
const emailUrl = `mailto:hello@valerio.sillari.com`

const props = defineProps({
    text: {
        type: String,
        default: 'email',
    },

    title: {
        type: String,
        // another prop as default value
        default: (props) => props.text,
    },

    classnames: {
        type: String,
        default: null,
    },
})
</script>
