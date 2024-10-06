<script setup lang="ts">

</script>

<template>
    <header>
        erik.
    </header>
    holman
    <footer>.dev</footer>
</template>

<style scoped>
header,
footer {
    line-height: 1.5;
    max-height: 100vh;
    width: 400px;
    display: flex;
    justify-content: center;
    border: 1px solid green
}


@media (min-width: 1024px) {

    header,
    footer {
        display: flex;
        place-items: center;
        padding-right: calc(var(--section-gap) / 2);
    }

}
</style>
