<template>
    <section>
        <h2>By Party</h2>
        <p>Placeholder for Senators Cards, displayed by party</p>

        <div
            class="senator-card"
            v-for="(getParty, index) in getParties"
            :key="index.getClass"
        >
            {{ getParty.fName }}
            {{ getParty.lName }}
            {{ getParty.sParty }}
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
