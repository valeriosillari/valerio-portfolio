<!--
  https://codeconvey.com/css-hexagon-image-with-border/?expand_article=1
  https://codepen.io/user1112/pen/PoQXppm
-->

<template>
    <div class="b-avatar-svg-shape">
        <div class="avatar-svg-shape-container">
            <AtomsImage
                :classnames="'is-image-avatar-svg-shape'"
                :src="'/images/vale_square_400x400.png'"
                :alt="'Valerio Avatar (you will find me on the web with this image)'"
            />
        </div>
    </div>
</template>

<!-- TODO: clean all this css with better variables -->
<style lang="scss">
.b-avatar-svg-shape {
    display: block;
    // reset text align, important
    text-align: initial;
    margin: 0 auto;
    position: relative;
    width: 10rem;
    height: 8.660254037rem;
    box-sizing: border-box;
    clip-path: polygon(0% 50%, 25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%);

    .avatar-svg-shape-container {
        position: absolute;
        top: 0.2rem;
        left: 0.2rem;
        width: 9.6rem;
        height: 8.260254037rem;

        .is-image-avatar-svg-shape {
            position: absolute;
            width: 100%;
            height: 100%;
            object-fit: cover;
            clip-path: polygon(
                0% 50%,
                25% 0%,
                75% 0%,
                100% 50%,
                75% 100%,
                25% 100%
            );
        }
    }
}
</style>
