<template>
    <div class="b-no-js-fallback">
        <span class="no-js-fallback-title">
            Your browser does not support JavaScript.
        </span>

        <span class="no-js-fallback-text">
            Please enable it or get more info
            <AtomsLinkExternal
                url="https://www.enable-javascript.com/"
                text="No Javascript information"
            />
            .
        </span>
    </div>
</template>

<style lang="scss">
@keyframes fadeIn {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
        height: 100%;
    }
}

.b-no-js-fallback {
    background-color: $color_no_js_bg;
    color: $color_no_js_text;
    padding: $space_03;
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    z-index: $z_index_01;
    display: none;
    text-align: center;
    height: 0;

    .no-js-fallback-title {
        @include heading;
        @include font-size($h4-font-size);
        display: block;
    }

    .no-js & {
        display: block;
        animation: fadeIn 3s;
    }
}
</style>
