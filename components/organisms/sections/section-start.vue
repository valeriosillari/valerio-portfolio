<template>
    <div :class="['b-section', 'is-section-start is-with-video-bg YOOOLO']">
        <video
            autoplay
            muted
            loop
            class="background-video"
            ref="backgroundVideo"
            @timeupdate="handleTimeUpdate"
        >
            <source :src="videoUrl" 857134-hd_1280_720_24fps type="video/mp4" />
            Your browser does not support the video tag.
        </video>

        <div class="content">
            <div class="container" v-bind="animationAttributes">
                <MoleculesAvatarSvgShape
                    data-aos="fade-up"
                    data-aos-delay="500"
                />

                <div class="heading" data-aos="fade-up" data-aos-delay="1800">
                    <h1>Hello, I'm Valerio.</h1>

                    <MoleculesHeadingTypeWriter />
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.b-section {
    &.is-with-video-bg {
        padding: 0;
        background-color: red;
        position: relative;
        width: 100%; /* Full width of the parent */
        height: 100vh; /* Full viewport height or customize as needed */
        overflow: hidden; /* Ensure the video does not overflow the container */

        .background-video {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            min-width: 100%;
            min-height: 100%;
            width: auto;
            height: auto;
            // z-index: -1;
            opacity: 0.15;
            object-fit: cover; /* Ensures the video always covers the container */
        }

        .content {
            position: relative;
        }
    }
}
</style>

<script setup>
// const videoUrl = '/videos/1926295-hd_1920_1080_25fps.mp4'
// const videoUrl = '/videos/857134-hd_1280_720_24fps.mp4'
const videoUrl = '/videos/4911644-hd_1280_720_30fps.mp4'

// Ref for the video element
const backgroundVideo = ref(null)

let isReversing = false

onMounted(() => {
    if (backgroundVideo.value) {
        // Set playback rate to slow down the video
        backgroundVideo.value.playbackRate = 0.2 // Adjust this value as needed
    }
})
</script>
