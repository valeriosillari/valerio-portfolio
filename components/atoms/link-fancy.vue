<!-- TODO: blank is optional and true by default -->
<template>
    <a
        :class="['b-link-fancy', props.classnames]"
        :href="props.url"
        :title="props.title"
        target="_blank"
    >
        {{ text }}
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

    classnames: {
        type: String,
        default: null,
    },
})
</script>

<style lang="scss">
.b-link-fancy {
    display: inline;
    color: $color_link_fancy;
    background-repeat: no-repeat;
    transition: background-size 400ms ease-in-out;
    background-position: left;
    background-size: 0% 100%;

    &:hover {
        background-size: 100% 100%;
    }

    &.is-red {
        background-image: linear-gradient(
            $color_link_fancy_hvr_red,
            $color_link_fancy_hvr_red
        );
    }
    &.is-orange {
        background-image: linear-gradient(
            $color_link_fancy_hvr_orange,
            $color_link_fancy_hvr_orange
        );
    }
    &.is-yellow {
        background-image: linear-gradient(
            $color_link_fancy_hvr_yellow,
            $color_link_fancy_hvr_yellow
        );
    }
    &.is-blue {
        background-image: linear-gradient(
            $color_link_fancy_hvr_blue,
            $color_link_fancy_hvr_blue
        );
    }
}
</style>
