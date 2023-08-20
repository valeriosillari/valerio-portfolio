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
