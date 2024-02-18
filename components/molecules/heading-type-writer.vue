<template>
    <p class="b-heading-type-writer" ref="root"></p>
</template>

<!-- Vue/Nuxt 3 Implementation -->
<!-- https://github.com/Orlandster/vue-typed-js/issues/41 -->
<script setup>
import Typed from 'typed.js'

const root = ref(null)

// text strings
const textStrings = [
    'Development Consultant',
    'Senior Frontend Developer',
    'One day Jedi',
]

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
    // timeout to sync with AOS animation on start section
    setTimeout(() => {
        new Typed(root.value, {
            strings: textHtmlList,
            typeSpeed: 75,
            showCursor: false,
            // at start of each loop
            // startDelay: 500,
            backSpeed: 0,
            backDelay: 0,
            loop: true,
            fadeOut: true,
            fadeOutDelay: 250,
            // 1 word is done (for each word in the array)
            // onStringTyped: () => {
            //     alert('onStringTyped')
            // },
        })
    }, 2000)
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
            content: 'Development Consultant. Senior Frontend Developer. One day Jedi.';
        }
    }
}
</style>
