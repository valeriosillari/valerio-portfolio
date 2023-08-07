<template>
    <MoleculesSplashscreen v-if="formDataReady" />

    <NuxtPage class="root-container" />

    <OrganismsFooter />
</template>

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

<script setup>
let formDataReady = ref(true)

onMounted(() => {
    formDataReady.value = false
})
</script>
