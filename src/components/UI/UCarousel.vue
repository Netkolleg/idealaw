<script setup lang="ts">
import { ref, computed } from 'vue';

interface Cases {
    id: number,
    path: string,
    title: string,
    description: string,
    info: string
}

export interface Props {
    cases: Cases[]
}
const props = defineProps<{
    cases: Cases[]
}>()

const currentIndex = ref<number>(0);
const itemsToShow = 2;

const isFirst = computed(() => currentIndex.value === 0);
const isLast = computed(() => currentIndex.value + itemsToShow >= props.cases.length);

const carouselStyle = computed(() => ({
    transform: `translateX(-${(currentIndex.value * 100) / itemsToShow}%)`,
    transition: 'transform 0.5s ease',
    display: 'flex',
}));

const next = () => {
    if (!isLast.value) {
        currentIndex.value += 1;
    }
};

const prev = () => {
    if (!isFirst.value) {
        currentIndex.value -= 1;
    }
};
</script>
<template>
    <div class="carousel-section">
    </div>
    <div class="carousel">
        <button :class="['control-button']" @click="prev" :disabled="isFirst"><img :class="{ 'disabled': isFirst }"
                src="../../assets/icons/prev.svg" alt="Previuos Button"></button>
        <div class="carousel-container" :style="carouselStyle">
            <div class="carousel-item" v-for="(caseItem, index) in props.cases" :key="index">
                <div class="carousel-item-info">
                    <u-case-item class="case-item" :caseInfo="caseItem" />
                </div>
            </div>
        </div>
        <button :class="['control-button']" @click="next" :disabled="isLast"><img :class="{ 'disabled': isLast }"
                src="../../assets/icons/next.svg" alt="Next Button"></button>
    </div>
</template>

<style scoped>
.carousel-section {
    margin: 5.21vw 3.13vw;
}

.carousel {
    display: flex;
    flex-flow: row nowrap;
    width: 100%;
    position: relative;
    overflow: hidden;
    width: 100%;
}

.carousel-container {
    display: flex;
}

.carousel-item {
    min-width: 50%;
    box-sizing: border-box;
    padding: 10px;
}

.control-button {
    background-color: #fff;
    z-index: 2999;
    cursor: pointer;
}

.control-button img {
    width: 1.563vw;
    height: auto;
    color: var(--gray-additional);
}

.disabled {
    transition: 0.4s opacity ease-in-out;
    opacity: 0.25;
}
</style>
