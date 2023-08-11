<template>
    <MoleculesNoJsFallback />

    <MoleculesSplashscreen />

    <NuxtPage role="main" class="root-container" />

    <OrganismsFooter />
</template>

<script setup>
const route = useRoute()

onMounted(() => {
    utilsRemoveNoJsClass()
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
