<template>
    <section>
        <div class="gallery-title">
            <h3>Leaders</h3>
        </div>

        <div
            class="senator-card"
            v-for="(getLeader, index) in getLeaders"
            :key="index.getLeader"
        >
            <p>{{ getLeader.firstName + " " + getLeader.lastName }}</p>
            <p>{{ getLeader.leadershipPosition }}</p>
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
