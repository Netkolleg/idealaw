<script setup lang="ts">
import { cases } from '@/collections'
import { reactive, onBeforeMount } from 'vue'


interface Cases {
    id: number,
    path: string,
    title: string,
    description: string,
    info: string
}

const state = reactive<{
    cases: Cases[]
}>({
    cases: []
})

onBeforeMount(() => {
    state.cases = cases
    console.log(state.cases)
})
</script>

<template>
    <u-navheader :title="'Дела'" :type="'child-page'" />
    <div class="cases-wrapper">
        <div class="cases-section">
            <div v-for="(caseItem, index) in state.cases" :key="index">
                <u-case-item :caseInfo="caseItem" :width="46" />
            </div>
        </div>
    </div>
    <u-footer :type="'child-page'" />
</template>

<style scoped>
.cases-section {
    display: flex;
    flex-flow: row wrap;
    margin: 3.13vw 2.60vw;
    gap: 0.5vw;
}
</style>
