<template>
    <div class="b-no-js-fallback">
        Your browser does not support JavaScript!
    </div>
</template>

<style lang="scss">
.b-no-js-fallback {
    background-color: red;
    color: white;
    font-size: 24px;
    line-height: 1.2rem;
    padding: 30px;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 100;
    display: none;

    .no-js & {
        display: block;
    }
}
</style>
