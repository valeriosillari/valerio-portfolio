<template>
    <NuxtLink
        :to="props.url"
        :title="props.title"
        :class="['b-link-button', props.classnames]"
    >
        {{ props.text }}
    </NuxtLink>
</template>

<script setup>
const props = defineProps({
    text: {
        type: String,
        required: true,
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

<style lang="scss">
.b-link-button {
    @include transition($btn-transition);
    display: inline-block;
    padding: $space_01 $space_03;
    margin: $space_00;
    cursor: pointer;
    text-decoration: none;
    background-color: $color_transparent;
    border: 1px solid $color_btn_border;
    color: $color_btn_text;

    &:hover {
        border-color: $color_btn_border_hvr;
        color: $color_btn_text_hvr;
    }
}
</style>
