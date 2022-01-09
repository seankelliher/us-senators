<template>
    <section>
        <h2>By Leaders</h2>
        <p>Placeholder for Senators Cards, displayed by leaders</p>

        <div
            class="senator-card"
            v-for="(getLeader, index) in getLeaders"
            :key="index.getLeader"
        >
            {{ getLeader.fName }}
            {{ getLeader.lName }}
            {{ getLeader.lPosition }}
        </div>
    </section>
</template>

<script>
export default {
    name: "SenateLeaders",
    components: {},
    computed: {
        getLeaders() {
            return this.$store.getters.getLeaders;
        },
    },
};
</script>
