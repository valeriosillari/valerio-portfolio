<template>
    <div class="b-no-js-fallback">
        <span class="no-js-fallback-title">
            Your browser does not support JavaScript.
        </span>

        <span class="no-js-fallback-text">
            Please enable it or get more info
            <a
                href="https://www.enable-javascript.com/"
                target="blank"
                class="no-js-fallback-link"
            >
                here </a
            >.
        </span>
    </div>
</template>

<style lang="scss">
.b-no-js-fallback {
    background-color: $color_no_js_bg;
    color: $color_no_js_text;
    padding: $space_03;
    width: 100%;
    z-index: 100;
    display: none;
    text-align: center;

    .no-js-fallback-title {
        @include heading;
        @include font-size($h4-font-size);
        display: block;
    }

    .no-js & {
        display: block;
    }
}
</style>
