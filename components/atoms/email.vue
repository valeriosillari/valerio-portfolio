<!-- TODO: a unique component for external links, for link and email, for normal and fancy styles -->
<template>
    <a :class="['b-email', props.classnames]" :href="emailUrl">
        {{ props.email }}
    </a>
</template>

<script setup>
const props = defineProps({
    email: {
        type: String,
        // this sholud be set here as optional and get email set as public runtime env
        required: true,
    },

    classnames: {
        type: String,
        default: null,
    },
})

const emailUrl = `mailto:${props.email}`
</script>
