<script setup lang="ts">
import { computed } from 'vue'
import { useWindowSize } from '@/composables/useWindowSize';
const { width } = useWindowSize()
const isMobile = computed(() => width.value < 431)

export interface Props {
    type: string[],
    needHeading: boolean
}

const props = withDefaults(defineProps<Props>(), {
    type: () => ['main', 'child-page'],
    needHeading: true
})
</script>
<template>
    <footer :class="[props.type.includes('main') ? 'footer-main' : 'footer-child', 'footer']">
        <address :class="[props.type.includes('main') ? 'contacts' : 'contacts-child']">
            <div
                :class="[props.type.includes('main') ? 'contacts-content-main' : 'contacts-content-child', 'contacts-content']">
                <h2 v-if="props.type.includes('main') && props.needHeading">Контакты</h2>
                <div :class="['contact-block']">
                    <div class="address-info">
                        <p>г. Бишкек, ул. Манаса 41а</p>
                        <p>Бизнес-центр “Адмирал”, 9 этаж</p>
                    </div>
                    <div class="schedule-info">
                        <p>Понедельник-пятница</p>
                        <p>с 9:00 до 18:00</p>
                    </div>
                    <u-button v-if="props.type.includes('child') && !isMobile" :title="'Связаться с нами'"
                        :type="'filled'" />
                </div>
                <div :class="['contact-block']">
                    <div class="contact-info">
                        <h4>На связи в любое время</h4>
                        <a href="tel:+996502204402">0(502) 204-402</a>
                        <a href="tel:+996702204402">0(504) 204-402</a>
                    </div>
                    <div class="contact-info">
                        <div class="contact-info-content">
                            <h4>По общим вопросам</h4>
                            <a href="mailto:ideaavdokat@gmail.com">ideaavdokat@gmail.com</a>
                        </div>
                        <u-button v-if="props.type.includes('main') || isMobile" :title="'Связаться с нами'"
                            :type="'filled'" />
                    </div>
                </div>
            </div>
            <div v-if="props.type.includes('main') && !isMobile" class="copyright">
                <p>&copy; IdeaLaw, 2024.</p>
                <a href="https://t.me/followtotherisingsea">Связаться с разработчиком</a>
            </div>
        </address>
        <u-map :type="props.type.includes('main') ? 'large' : 'small'" />
    </footer>
    <div v-if="props.type.includes('child') || isMobile" class="copyright copyright-child">
        <p>&copy; IdeaLaw, 2024.</p>
        <a href="https://t.me/followtotherisingsea">Связаться с разработчиком</a>
    </div>
</template>
<style scoped>
.footer {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    color: var(--c-black);
}

.footer-main {
    margin: 5.21vw 3.13vw 2.60vw 3.13vw;
    /* min-height: 81vh; */
}

.footer-child {
    border-top: 1px var(--gray-border) solid;
    padding: 3.13vw 3.13vw 2.60vw 3.13vw;
    margin: 0;
}

.contacts {
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
}

.contact-block {
    display: flex;
    flex-flow: column nowrap;
    gap: 2.60vw;
}

.contacts-content h2 {
    font-size: 3.91vw;
    font-weight: var(--bold);
}

.contacts-content {
    display: flex;
    gap: 2.60vw;
}

.contacts-content-main {
    flex-flow: column nowrap;
}

.contacts-content-child {
    flex-flow: row nowrap;
    justify-items: space-between;
    gap: 10vw;
}

.contacts-content h4 {
    font-size: 1.30vw;
    font-weight: var(--medium);
    color: var(--gray-additional);
}

.contacts-content p,
a {
    font-size: 1.56vw;
}

.contacts-content p {
    font-weight: var(--medium);
}

.contacts-content a {
    font-weight: var(--semibold);
}

.schedule-info,
.address-info {
    display: flex;
    flex-flow: column nowrap;
    gap: 0.52vw;
}

.contact-info {
    display: flex;
    flex-flow: column nowrap;
    gap: 1.04vw;
}

.contact-info-content {
    display: flex;
    flex-flow: column nowrap;
    gap: 1.04vw;
    margin-bottom: 0.8vw;
}

.copyright {
    display: flex;
    flex-flow: row nowrap;
    gap: 0.6vw;
}

.copyright-child {
    display: flex;
    margin: 0vw 3.13vw 2.60vw 3.13vw;
}

.copyright p {
    font-weight: var(--medium);
    font-size: 1.30vw;
}

.copyright a {
    font-weight: var(--medium);
    font-size: 1.30vw;
}

.copyright p {
    color: var(--gray-additional);
}

@media screen and (max-width: 431px) {
    .footer {
        flex-flow: column nowrap;
        justify-content: flex-start;
        gap: 8.14vw;
    }

    .footer-main {
        margin: 11.628vw 5.814vw 5.814vw 5.814vw;
        min-height: 0;
    }

    .footer-child {
        border-top: 1px var(--gray-border) solid;
        padding: 5.814vw;
        margin: 0;
    }

    .contacts {
        display: flex;
        flex-flow: column nowrap;
        justify-content: space-between;
    }

    .contact-block {
        gap: 8.14vw;
    }

    .contacts-content h2 {
        font-size: 9.302vw;
    }

    .contacts-content {
        display: flex;
        gap: 5.814vw;
    }

    .contacts-content-main {
        flex-flow: column nowrap;
    }

    .contacts-content-child {
        flex-flow: column nowrap;
        justify-items: auto;
        gap: 5.814vw;
    }

    .contacts-content h4 {
        font-size: 3vw;
        font-weight: var(--medium);
        color: var(--gray-additional);
    }

    .contacts-content p,
    a {
        font-size: 3.488vw;
    }

    .contacts-content p {
        font-weight: var(--medium);
    }

    .contacts-content a {
        font-weight: var(--semibold);
    }

    .schedule-info,
    .address-info {
        display: flex;
        flex-flow: column nowrap;
        gap: 1.86vw;
    }

    .contact-info {
        gap: 1.86vw;
    }

    .contact-info-content {
        gap: 1.86vw;
        margin-bottom: 5.814vw;
    }

    .copyright {
        gap: 1vw;
        padding-bottom: 2vw;
    }

    .copyright-child {
        margin: 5.814vw 5.814vw 5.814vw 5.814vw;
    }

    .copyright p {
        font-size: 3vw;
    }

    .copyright a {
        font-weight: var(--medium);
        font-size: 3vw;
    }

    .copyright p {
        color: var(--gray-additional);
    }
}
</style>