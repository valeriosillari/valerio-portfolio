<template>
    <p class="b-heading-type-writer" ref="typing"></p>
</template>

<!-- Vue/Nuxt 3 Implementation -->
<!-- https://github.com/Orlandster/vue-typed-js/issues/41 -->
<script setup>
import Typed from 'typed.js'

const typing = ref(null)

// text strings
const textStrings = ['Development Consultant', 'Frontend Coder', 'One day Jedi']

// set strings into proper html
let textHtmlList = []
textStrings.forEach((string, index) => {
    textHtmlList.push(`
        <span class="type-writer-text is-text-0${index + 1}">
            ${string}
        </span>
    `)
})

onMounted(() => {
    new Typed(typing.value, {
        strings: textHtmlList,
        typeSpeed: 80,
        showCursor: false,
        // at start of each loop
        // startDelay: 1000,
        backSpeed: 0,
        backDelay: 0,
        loop: true,
        fadeOut: true,
        fadeOutDelay: 250,
    })
})
</script>

<style lang="scss">
.b-heading-type-writer {
    // 2 lines of text, magic number
    min-height: 90px;
    // reset <p>
    margin: 0;

    // for no js trick
    &::before {
        content: '';
    }

    // <span> real text
    .type-writer-text {
        line-height: 1.6;
        // inline block necessary to avoid extra space (css reset)
        display: inline-block;
        padding: $space_00 $space_01;

        &.is-text-01 {
            background-color: $color_pattern_11;
        }
        &.is-text-02 {
            background-color: $color_pattern_13;
        }
        &.is-text-03 {
            background-color: $color_pattern_01;
        }
    }

    .no-js & {
        &::before {
            // text as in js string above
            content: 'Development Consultant. Frontend Coder. One day Jedi.';
        }
    }
}
</style>
