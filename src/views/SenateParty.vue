<template>
    <section>
        <div class="gallery-title">
            <h2>By Party</h2>
            <p>Placeholder for Senators Cards, displayed by party</p>
        </div>

        <div
            class="senator-card"
            v-for="(getParty, index) in getParties"
            :key="index.getClass"
        >
            <p>{{ getParty.fullName }}</p>
            <p>{{ getParty.sParty }}</p>
        </div>
    </section>
</template>

<script>
export default {
    name: "SenateParty",
    components: {},
    computed: {
        getParties() {
            return this.$store.getters.getParties;
        },
    },
};
</script>
