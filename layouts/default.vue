<template>
    <div class="LAYOUTTTTTTT" style="border: 10px solid pink">
        <MoleculesNoJsFallback />

        <MoleculesSplashscreen />

        <slot />

        <OrganismsFooter />
    </div>
</template>

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
