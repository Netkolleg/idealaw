<script setup lang="ts">

interface Cases {
    id: number,
    path: string,
    title: string,
    description: string,
    info: string
}

const props = defineProps<{
    cases: Cases[],
    show: boolean
}>()
</script>

<template>
    <div v-if="props.show" class="carousel-section">
        <u-navheader :type="'sections'" :title="'Кейсы'" :path="'cases'" />
        <u-carousel :cases="props.cases.length >= 5 ? props.cases.slice(0, 5) : props.cases" />
    </div>
</template>

<style scoped>
.carousel-section {
    display: flex;
    flex-flow: column nowrap;
    gap: 8.14vw;
    margin: 11.628vw 5.814vw;
}
</style>