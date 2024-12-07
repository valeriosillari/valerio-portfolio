<template>
    <div :class="['b-section', 'is-section-start YOOOLO']">
        <div class="container" v-bind="animationAttributes">
            <MoleculesAvatarSvgShape data-aos="fade-up" data-aos-delay="500" />

            <div class="heading" data-aos="fade-up" data-aos-delay="1800">
                <h1>Hello, I'm Valerio.</h1>

                <MoleculesHeadingTypeWriter />
            </div>
        </div>
    </div>
</template>

<script setup>
// const aosElementBasicTiming = ref(250)
</script>
