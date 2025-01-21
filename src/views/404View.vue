<script setup lang="ts"></script>

<template>
    <div>
        <div class="hero"></div>
        <h3>
            <code>{{ $route.path }}</code> is not real...
        </h3>
    </div>
</template>

<style scoped lang="scss">
div {
    display: flex;
    height: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    .hero {
        height: 300px;
        width: 300px;
        background: url('../assets/Erik_Profile.png') no-repeat center;
        background-size: contain;
    }

    code {
        background-color: black;
        color: greenyellow;
        padding: 0.25em;
        border-radius: 0.25em;
    }
}
</style>
