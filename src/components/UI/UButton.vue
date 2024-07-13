<script setup lang="ts">
export interface Props {
    title: string,
    type: string[]
}

const props = withDefaults(defineProps<Props>(), {
    title: 'Связаться',
    type: () => ['filled', 'outline']
})
</script>

<template>
    <button :class="[props.type.includes('filled') ? 'filled' : 'outline', 'btn']">
        {{ props.title }}
    </button>
</template>

<style scoped>
.btn {
    all: unset;
    width: fit-content;
    display: inline-block;
    cursor: pointer;
    font-weight: var(--medium);
    border-radius: 100vw;
}

.filled {
    font-size: 1.30vw;
    background-color: var(--c-black);
    color: white;
    padding: 1.15vw 2.08vw;
}

.outline {
    font-size: 1.04vw;
    background-color: white;
    outline: 1px solid var(--gray-border);
    padding: 1.04vw 2.08vw;
    transition: 0.45s linear;
}

.outline:hover {
    background-color: var(--c-black);
    color: white;
    outline: 1px solid var(--c-black);
    transition: 0.45s linear;
}
</style>