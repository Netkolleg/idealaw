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
</style>