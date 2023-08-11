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
const runtimeConfig = useRuntimeConfig()
const emailUrl = `mailto:${runtimeConfig.public.email}`

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
