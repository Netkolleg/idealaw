<script setup lang="ts">
import image1 from '../../assets/images/aproach-image-1.jpg'
import image2 from '../../assets/images/aproach-image-2.jpg'
import image3 from '../../assets/images/aproach-image-3.jpg'

const imagesArr = [
    image1, image2, image3
]

export interface Props {
    name: string[]
}

const props = withDefaults(defineProps<Props>(), {
    name: () => ['proven-knowledge', 'comprehensive-approach', 'our-advantages']
})
</script>

<template>
    <div
        :class="[{ 'approach-wrapper': props.name?.includes('comprehensive-approach'), 'information-section': props.name?.includes('comprehensive-approach') || props.name?.includes('proven-knowledge') }]">
        <div class="proven-knowledge-section" v-if="props.name?.includes('proven-knowledge')">
            <div class="proven-knowledge-image">
                <img src="../../assets/images/proven-knowledge-image.jpg" alt="">
            </div>
            <div class="proven-knowledge-info">
                <h2>Проверенные знания</h2>
                <p>Мы применяем исключительно эффективные и надежные методики в нашей юридической практике. К каждому
                    делу
                    юристы подходят с глубокой экспертизой и знаниями, проверенными временем.</p>
            </div>
        </div>
        <div class="comprehensive-approach-section" v-if="props.name?.includes('comprehensive-approach')">
            <div class="comprehensive-approach-images">
                <img v-for="(image, index) in imagesArr" :key="index" :src="image" alt="">
            </div>
            <div class="comprehensive-approach-info">
                <h2>Комплексный подход</h2>
                <p>Мы рассматриваем ваше дело с разных сторон, объединяя опыт и знания для создания всесторонней и
                    эффективной стратегии защиты. Ваш успех — наш приоритет.</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.information-section {
    width: 100%;
    min-height: 25.78vw;
    background-color: var(--c-black);
    padding: 0 3.13vw;
    position: relative;
}

.approach-wrapper {
    padding: 0 0 0 3.13vw;
}

.proven-knowledge-section {
    height: 25.78vw;
    display: flex;
    flex-flow: row nowrap;
    gap: 6.25vw;
    align-items: center;
    color: white;
    overflow: hidden;
    position: relative;
}

.proven-knowledge-image img {
    width: 150%;
    height: fit-content;
    mask-image: url(../../assets/images/clip-mask-figure.svg);
    -webkit-mask-image: url(../../assets/images/clip-mask-figure.svg);
    mask-repeat: no-repeat;
    mask-size: 30.21vw;
}

.proven-knowledge-info {
    display: flex;
    flex-flow: column nowrap;
    justify-items: flex-start;
    gap: 0.52vw;
    min-width: 57.29vw;
}

.proven-knowledge-info h2 {
    font-weight: var(--bold);
    font-size: 3.91vw;
    padding-left: 0;
    margin-left: 0;
}

.proven-knowledge-info p {
    font-weight: var(--regular);
    font-size: 2.08vw;
}

/* Section 2 */

.comprehensive-approach-section {
    height: 31.25vw;
    display: flex;
    flex-flow: row nowrap;
    gap: 6.25vw;
    align-items: center;
    color: white;
    overflow: hidden;
    position: relative;
}

.comprehensive-approach-images {
    width: 54.69vw;
    height: 18.23vw;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    position: absolute;
    z-index: 2999;
    right: 0;
    bottom: 0;
    overflow: hidden;
}

.comprehensive-approach-images img {
    width: 18.23vw;
    height: fit-content;
    mask-image: url(../../assets/images/clip-mask-figure-2.svg);
    -webkit-mask-image: url(../../assets/images/clip-mask-figure-2.svg);
    mask-repeat: no-repeat;
    mask-position: center;
    mask-size: 100% 100%;
    mask-clip: border-box;
}

.comprehensive-approach-images img:nth-child(1) {
    height: 18.23vw;
}

.comprehensive-approach-info {
    display: flex;
    flex-flow: column nowrap;
    justify-items: flex-start;
    gap: 0.52vw;
    max-width: 47.92vw;
    z-index: 3000;
}

.comprehensive-approach-info h2 {
    font-weight: var(--bold);
    font-size: 3.91vw;
    padding-left: 0;
    margin-left: 0;
}

.comprehensive-approach-info p {
    font-weight: var(--regular);
    font-size: 2.08vw;
}
</style>