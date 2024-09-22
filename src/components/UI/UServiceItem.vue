<script setup lang="ts">
import { ref } from 'vue'

interface ServiceInfo {
    name: string,
    info: string
}
const props = defineProps<{
    serviceInfo: ServiceInfo
}>()

const showDot = ref(false)
</script>

<template>
    <div @mouseover="showDot = true" @mouseleave="showDot = false" class="service-item">
        <h3>
            <transition name="fade">
                <img v-if="showDot" :class="{ 'show': showDot }" src="../../assets/icons/dot.svg" alt="Dot Icon">
            </transition>
            <span :class="{ 'shifted': showDot }">{{ props.serviceInfo.name }}</span>
        </h3>
        <img class="service-item-icon" src="../../assets/icons/go.svg" alt="Go Icon">
    </div>
</template>

<style scoped>
.service-item {
    display: inline-flex;
    flex-flow: row nowrap;
    align-items: flex-start;
    justify-content: space-between;
    position: relative;
    width: 30.4vw;
    height: 8.33vw;
    padding: 1.56vw 1.56vw 0 1.56vw;
    cursor: pointer;
    transition: opacity 0.4s ease-in-out;
}

.service-item::before {
    content: "";
    position: absolute;
    width: 27.9vw;
    margin-right: 1.56vw;
    top: 0;
    bottom: 0;
    background-image: linear-gradient(90deg, var(--c-black), var(--c-black));
    background-size: 0 2px;
    background-repeat: no-repeat;
    background-position: left bottom;
    transition: background-size .40s ease-in;
}

.service-item:hover::before {
    background-size: 100% 2px;
}

.service-item h3 {
    display: flex;
    flex-flow: row nowrap;
    align-items: flex-start;
    width: 24vw;
    font-size: 1.56vw;
    color: var(--c-black);
    transition: opacity 0.4s ease-in-out;
}

.service-item span {
    font-weight: var(--medium);
}

.service-item-icon {
    width: 1.30vw;
}

.dot {
    width: 0.63vw;
    height: 0.63vw;
    opacity: 0;
    height: auto;
    transition: opacity 0.4s ease-in-out;
}

/* Mobile */

@media screen and (max-width: 431px) {
    .service-item {
        width: 42.923vw;
        height: 19.722vw;
        padding: 2.32vw 2.32vw 0 2.32vw;
    }

    .service-item::before {
        opacity: 0;
    }

    .service-item:hover::before {
        background-size: 100%;
    }

    .service-item h3 {
        width: 32.558vw;
        font-size: 2.791vw;
    }

    .service-item span {
        font-weight: var(--semibold);
    }

    .service-item-icon {
        width: 3vw;
    }

    .dot {
        opacity: 0;
    }
}

.show {
    opacity: 1;
    transition: opacity 0.4s ease-in-out;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.4s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

.shifted {
    transition: margin-left 0.4s ease-in-out;
    margin-left: 0.78vw;
}
</style>