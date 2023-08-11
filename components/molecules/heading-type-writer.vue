<template>
    <p class="b-heading-type-writer" ref="typing"></p>
</template>

<!-- Vue/Nuxt 3 Implementation -->
<!-- https://github.com/Orlandster/vue-typed-js/issues/41 -->
<script setup>
import Typed from 'typed.js'

const typing = ref(null)

const textList = [
    `<span class="type-writer-text is-text-01">
        Development Consultant
    </span>`,
    `<span class="type-writer-text is-text-02">
        Frontend Coder
    </span>`,
    `<span class="type-writer-text is-text-03">
        One day Jedi'
    </span>`,
]

onMounted(() => {
    new Typed(typing.value, {
        strings: textList,
        typeSpeed: 100,
        // backSpeed: 0,
        loop: true,
        showCursor: false,
        fadeOut: true,
    })
})
</script>

<style lang="scss">
.b-heading-type-writer {
    // 2 lines of text, magic number
    min-height: 110px;

    .type-writer-text {
        padding: 0 10px;

        &.is-text-01 {
            background-color: orange;
        }
        &.is-text-02 {
            background-color: red;
        }
        &.is-text-03 {
            background-color: $color_pattern_01;
        }
    }
}
</style>
