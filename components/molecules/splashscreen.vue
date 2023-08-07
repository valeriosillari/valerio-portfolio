<!--
    Insiration:
    https://javascript.plainenglish.io/show-a-loading-spinner-in-nuxt-js-7a5ad0537ebf
-->

<template>
    <div class="b-splashscreen">
        <div class="spinner-wrapper">
            <div class="spinner" />
        </div>
    </div>
</template>

<script setup>
let isSplashscreenActive = ref(true)

const removeFadeOut = (el, speed) => {
    console.log('======= removeFadeOut ======')

    var seconds = speed / 1000

    el[0].style.transition = 'opacity ' + seconds + 's ease'

    el[0].style.opacity = 0

    setTimeout(() => {
        el[0].parentNode.removeChild(el[0])
    }, speed)
}

onMounted(() => {
    isSplashscreenActive.value = false

    removeFadeOut(document.getElementsByClassName('b-splashscreen'), 1500)
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
