<template>
    <MoleculesNoJsFallback />

    <MoleculesSplashscreen />

    <div role="main" class="root-container">
        <slot />
    </div>

    <OrganismsFooter />
</template>

<script setup>
const route = useRoute()

onMounted(() => {
    utilsRemoveNoJsClass()

    // just for fun ;)
    console.log('🚀')
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

<style lang="scss">
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
