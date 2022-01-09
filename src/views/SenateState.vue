<template>
    <section>
        <h2>By State</h2>
        <p>Placeholder for Senators Cards, displayed by state</p>

        <div
            class="senator-card"
            v-for="(getState, index) in getStates"
            :key="index.getClass"
        >
            {{ getState.fName }}
            {{ getState.lName }}
            {{ getState.hState }}
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
