<!--
    Insiration:
    https://javascript.plainenglish.io/show-a-loading-spinner-in-nuxt-js-7a5ad0537ebf
-->

<template>
    <div class="b-splash-screen" v-if="isSplashscreenActive">
        <div class="spinner-wrapper">
            <div class="spinner"></div>
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
.b-splash-screen {
    background: #f2f0ee;
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
            margin: 100px auto;
            background-color: #e45447;
            border-radius: 100%;
            animation: sk-scaleout 1s infinite ease-in-out;
        }
    }
}

@keyframes sk-scaleout {
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
