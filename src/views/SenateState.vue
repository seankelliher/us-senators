<template>
    <section>
        <div class="gallery-title">
            <h2>By State</h2>
            <p>Placeholder for Senators Cards, displayed by state</p>
        </div>

        <div
            class="senator-card"
            v-for="(getState, index) in getStates"
            :key="index.getClass"
        >
            <p>{{ getState.fullName }}</p>
            <p>{{ getState.hState }}</p>
        </div>
    </section>
</template>

<script>
export default {
    name: "SenateState",
    components: {},
    computed: {
        getStates() {
            return this.$store.getters.getStates;
        },
    },
};
</script>
