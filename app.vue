<template>
    <NuxtLayout>
        <NuxtPage role="main" class="root-container" />
    </NuxtLayout>
</template>

<script setup>
import AOS from 'aos'

onMounted(() => {
    AOS.init({
        offset: 0,
        once: true,
        duration: 1500,
        delay: 0,
    })
})
</script>
