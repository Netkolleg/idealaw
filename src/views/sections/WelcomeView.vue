<script setup lang="ts">
</script>

<template>
    <div class="welcome-section">
        <div class="info-block">
            <div class="info-content">
                <h4>Юридическая проблема?</h4>
                <div>
                    <h1>Есть идея!</h1>
                    <p>Мы придумаем, как решить любую вашу проблему.</p>
                </div>
            </div>
            <u-button class="contact-btn" :title="'Связаться с нами'" :type="'filled'" />
        </div>
        <div class="welcome-images">
            <div class="images">
                <img src="../../assets/images/welcome-image-1.svg" alt="Welcome Image #1">
                <img src="../../assets/images/welcome-image-2.svg" alt="Welcome Image #2">
            </div>
        </div>
    </div>
</template>

<style scoped>
.welcome-section {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-between;
    max-width: 100%;
    height: 40vw;
    margin: 0 3.13vw;
    overflow: hidden;
    position: relative;
}

.info-block {
    width: 33.44vw;
    height: auto;
    display: flex;
    flex-flow: column nowrap;
    gap: 2.60vw;
}

.info-content div {
    display: flex;
    flex-flow: column nowrap;
    gap: 0.26vw;
}

.info-content h4 {
    font-weight: var(--medium);
    font-size: 1.30vw;
}

.info-content h1 {
    font-weight: var(--bold);
    font-size: 6.51vw;
}

.info-content p {
    font-weight: var(--medium);
    font-size: 2.08vw;
    color: var(--gray-additional);
}

.info-content h4,
.info-content p {
    margin-left: 0.42vw;
}

.contact-btn {
    margin-left: 0.42vw;
}

.welcome-images .images {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    gap: 3.13vw;
}

.images img:nth-child(1) {
    width: 5.21vw;
}

.images img:nth-child(2) {
    width: 24.22vw;
}

@media screen and (max-width: 431px) {
    .welcome-section {
        flex-flow: column nowrap;
        align-items: center;
        max-width: 100%;
        height: 155.814vw;
        margin: 0;
        padding: 11.628vw 5.814vw;
        gap: 6.977vw;
    }

    .info-block {
        width: 100%;
        height: auto;
        display: flex;
        flex-flow: column nowrap;
        gap: 6.977vw;
        z-index: 2996;
    }

    .info-content div {
        display: flex;
        flex-flow: column nowrap;
        gap: 0.26vw;
    }

    .info-content h4 {
        font-size: 3.488vw;
    }

    .info-content h1 {
        font-weight: var(--bold);
        font-size: 16.279vw;
    }

    .info-content p {
        font-weight: var(--medium);
        font-size: 4.651vw;
        color: var(--gray-additional);
    }

    .info-content h4,
    .info-content p {
        margin-left: 1.1vw;
    }

    .contact-btn {
        margin-left: 1.1vw;
    }

    .welcome-images {
        width: 100%;
        height: 79.07vw;
        position: relative;
        overflow: visible;
    }

    .images {
        width: 100%;
        height: 79.07vw;
        position: absolute;
        z-index: 2995;
    }

    .welcome-images .images {
        display: flex;
        flex-flow: row-reverse nowrap;
        align-items: center;
        justify-items: center;
        gap: 13.953vw;
    }

    .images img:nth-child(2) {
        width: 51.163vw;
    }

    .images img:nth-child(1) {
        width: 23.256vw;
    }
}
</style>