<template>
    <section>
        <div class="gallery-title">
            <h2>By Leaders</h2>
            <p>Placeholder for Senators Cards, displayed by leaders</p>
        </div>

        <div
            class="senator-card"
            v-for="(getLeader, index) in getLeaders"
            :key="index.getLeader"
        >
            <p>{{ getLeader.fullName }}</p>
            <p>{{ getLeader.lPosition }}</p>
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
