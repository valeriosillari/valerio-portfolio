<template>
    <OrganismsSectionsSectionPrototype classnames="is-section-contact">
        <h1>Let's talk.</h1>

        <p>
            You can send me an
            <AtomsLinkExternal
                classnames="is-link-fancy is-blue"
                text="email"
                :url="emailUrl"
                :isTargetBlank="false"
            />
        </p>

        <p>Or find me on my social profiles:</p>

        <MoleculesSocialLinkList classnames="is-section-contact" />
    </OrganismsSectionsSectionPrototype>
</template>

<script setup lang="ts">
const runtimeConfig = useRuntimeConfig()
const emailUrl = `mailto:${runtimeConfig.public.email}`
</script>
