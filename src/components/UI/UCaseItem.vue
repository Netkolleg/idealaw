<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

interface Case {
    id: number,
    path: string,
    title: string,
    description: string,
    info: string
}

export interface Props {
    width: number,
    unit: string,
    caseInfo: Case
}

const props = withDefaults(defineProps<Props>(), {
    width: undefined,
    unit: 'vw',
    caseInfo: undefined
})

function pushToRoute(pathName: string, routeParams: { path: string }, id: number | null) {
    router.push({ name: pathName, params: { path: routeParams.path }, query: { id: id } })
}
</script>

<template>
    <div :style="{ width: props.width ? props.width + unit : '' }"
        @click="pushToRoute('case', { path: props.caseInfo.path }, props.caseInfo.id)" class="case-item">
        <div class="case-content">
            <span>0{{ props.caseInfo.id }}</span>
            <h2>{{ props.caseInfo.title }}</h2>
            <p>{{ props.caseInfo.description }}</p>
        </div>
        <button class="more-btn">Подробнее</button>
    </div>
</template>

<style scoped>
.case-item {
    display: flex;
    min-height: 19.01vw;
    flex-flow: column nowrap;
    align-items: flex-start;
    justify-content: space-between;
    gap: 2.60vw;
    padding: 2.60vw;
    cursor: pointer;
    border-radius: 2.083vw;
    transition: 0.4s ease-in-out;
}

.case-item:hover {
    background-color: #F7F7F7;
    transition: 0.4s ease-in-out;
}

.case-content {
    display: flex;
    flex-flow: column nowrap;
    gap: 0.78vw;
}

.case-content span {
    font-size: 1.56vw;
    font-weight: var(--semibold);
}

.case-content h2,
p {
    font-weight: var(--medium);
}

.case-content h2 {
    font-size: 1.56vw;
}

.case-content p {
    font-size: 1.04vw;
    color: var(--gray-additional);
}

.more-btn {
    font-weight: var(--semibold);
    font-size: 1.30vw;
    padding: 0;
    cursor: pointer;
}

@media screen and (max-width: 431px) {
    .case-item {
        min-height: 45.349vw;
        gap: 2.60vw;
        padding: 3.488vw;
        border-radius: 0;
    }

    .case-item:hover {
        background-color: #F7F7F7;
        transition: 0.4s ease-in-out;
    }

    .case-content {
        gap: 2.60vw;
    }

    .case-content span {
        font-size: 3.488vw;
    }

    .case-content h2 {
        font-size: 3.488vw;
    }

    .case-content p {
        font-size: 2.326vw;
    }

    .more-btn {
        font-size: 3.023vw;
    }
}
</style>