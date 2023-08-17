<template>
    <NuxtLayout>
        <NuxtPage role="main" class="root-container" />
    </NuxtLayout>
</template>

<script setup>
import AOS from 'aos'

const route = useRoute()

onMounted(() => {
    utilsRemoveNoJsClass()

    AOS.init({
        offset: 0,
        once: true,
        duration: 1500,
        delay: 0,
    })
})

watch(
    // watch/listen a page/route change ...
    () => route.fullPath,
    () => {
        // then check no js logic again
        utilsRemoveNoJsClass()
    }
)
</script>

<style>
.page-enter-active,
.page-leave-active {
    transition: all 0.5s;
}

.page-enter-from,
.page-leave-to {
    opacity: 0;
    filter: blur(1rem);
}
</style>
