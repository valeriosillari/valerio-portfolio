<!--
    Insiration:
    https://javascript.plainenglish.io/show-a-loading-spinner-in-nuxt-js-7a5ad0537ebf
-->

<template>
    <div class="b-splashscreen" ref="root">
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

    // remove from dom
    setTimeout(() => {
        // TODO: remove on vue way with unmounted
        el.parentNode.removeChild(el)
    }, speed)
}

onMounted(() => {
    isSplashscreenActive.value = false
    removeFadeOut(root.value, 1500)
})
</script>

<style lang="scss">
.b-splashscreen {
    background: $color_splashscreen_bg;
    width: 100vw;
    height: 100vh;
    position: fixed;
    z-index: 50;

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
</style>
