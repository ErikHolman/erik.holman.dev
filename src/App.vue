<script setup lang="ts">
import TheHeader from '@/components/TheHeader.vue'
import HomeView from '@/views/HomeView.vue'
const currLocation = 'Home' // Will be populated by router
</script>

<template>
    <div class="content">
        <TheHeader :pageName="currLocation" />
        <div class="displayArea">
            <HomeView />
        </div>
        <div class="footer"></div>
    </div>
</template>

<style scoped>
.content {
    display: flex;
    flex-direction: column;
    min-height: 567px;
    width: 987px;
    border: 1px solid pink;
}

.displayArea {
    border: 1px solid green;
}

.footer {
    display: flex;
    height: 4em;
    border: 1px solid red;
    background-color: #222222;
}

@media (min-width: 1024px) {
}
</style>
