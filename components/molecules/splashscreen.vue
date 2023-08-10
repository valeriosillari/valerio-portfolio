<!--
    Inspiration:
    https://javascript.plainenglish.io/show-a-loading-spinner-in-nuxt-js-7a5ad0537ebf
-->

<template>
    <div class="b-splashscreen" ref="root" v-if="isSplashscreenActive">
        <div class="spinner-wrapper">
            <div class="spinner" />
        </div>
    </div>
</template>

<script setup>
const root = ref(null)
const isSplashscreenActive = ref(true)

const removeFadeOut = (el, speed) => {
    var seconds = speed / 1000

    el.style.transition = 'opacity ' + seconds + 's ease'
    el.style.opacity = 0

    // remove component itself when fade completed (vue IF logic)
    setTimeout(() => {
        isSplashscreenActive.value = false
    }, speed)
}

onMounted(() => {
    removeFadeOut(root.value, 1250)
})
</script>

<style lang="scss">
.b-splashscreen {
    background: $color_splashscreen_bg;
    width: 100vw;
    height: 100vh;
    position: fixed;
    z-index: $z_index_02;
    top: 0;

    .spinner-wrapper {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);

        .spinner {
            width: 80px;
            height: 80px;
            margin: auto;
            background-color: $color_splashscreen_spinner;
            clip-path: $shape_clip_path;
            animation: animation-splashscreen 2s infinite ease-in-out;
        }
    }

    // remove splashscreen after several seconds if browser has no JS enabled
    .no-js & {
        animation: cssAnimationHideElement 0s ease-in $timing_hide_no_js
            forwards;
        animation-fill-mode: forwards;
    }
}

@keyframes animation-splashscreen {
    0% {
        -webkit-transform: scale(0);
        transform: scale(0);
    }
    100% {
        -webkit-transform: scale(1);
        transform: scale(1);
        opacity: 0;
    }
}

@keyframes cssAnimationHideElement {
    to {
        width: 0;
        height: 0;
        overflow: hidden;
    }
}
</style>
