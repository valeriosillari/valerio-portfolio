<template>
    <div class="b-page-index">
        <OrganismsSectionsSectionStart />

        <OrganismsSectionsSectionAbout />

        <OrganismsSectionsSectionContact />
    </div>
</template>

<script setup>
onMounted(() => {
    // remove component itself when fade completed (vue IF logic)
    setTimeout(() => {
        document.documentElement.classList.remove('no-js')
    }, 50)
})
</script>
