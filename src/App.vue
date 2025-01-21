<script setup lang="ts">
import TheHeader from '@/components/TheHeader.vue'
</script>

<template>
    <div class="content">
        <TheHeader />
        <div class="displayArea">
            <RouterView />
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
}

.displayArea {
    border-left: 1px solid grey;
    border-right: 1px solid grey;
    height: 567px;
}

.footer {
    display: flex;
    height: 4em;
    background-color: #222222;
}

@media (min-width: 1024px) {
}
</style>
