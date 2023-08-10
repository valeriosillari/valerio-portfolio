<template>
    <div class="b-page-index">
        <OrganismsSectionsSectionStart />

        <OrganismsSectionsSectionAbout />

        <OrganismsSectionsSectionContact />
    </div>
</template>

<script setup>
import removeNoJsClass from '~/utils/modernizr-set-no-js-class'

onMounted(() => {
    removeNoJsClass()
})
</script>
