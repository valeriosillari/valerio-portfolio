<template>
    <div :class="['b-section', props.classnames]">
        <div class="container">
            <slot></slot>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    classnames: {
        type: String,
        default: null,
    },
})
</script>

<style lang="scss">
.b-section {
    padding: $space_04;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    // as bootstrap h2
    p {
        @include heading;
        @include font-size($h2-font-size);
    }

    &.is-section-start {
        color: $color_section_start_text;
        background-color: $color_section_start_bg;
    }

    &.is-section-about {
        color: $color_section_about_text;
        background-color: $color_section_about_bg;
    }

    &.is-section-contact {
        color: $color_section_contact_text;
        background-color: $color_section_contact_bg;
    }
}
</style>
