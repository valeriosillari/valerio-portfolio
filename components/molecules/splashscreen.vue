<!--
    Insiration:
    https://javascript.plainenglish.io/show-a-loading-spinner-in-nuxt-js-7a5ad0537ebf
-->

<template>
    <div class="b-splashscreen" v-if="isSplashscreenActive">
        <div class="spinner-wrapper">
            <div class="spinner" />
        </div>
    </div>
</template>

<script setup>
let isSplashscreenActive = ref(true)

onMounted(() => {
    isSplashscreenActive.value = false
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
