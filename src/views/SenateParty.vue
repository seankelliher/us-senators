<template>
    <section>
        <div class="gallery-title">
            <h3>Democrats</h3>
        </div>
        <div
            class="senator-card"
            v-for="(getParty, index) in getParties.democrats"
            :key="index"
        >
            <p>{{ getParty.firstName + " " + getParty.lastName }}</p>
            <p>{{ getParty.party }}</p>
        </div>
        <div class="gallery-title">
            <h3>Independents</h3>
        </div>
        <div
            class="senator-card"
            v-for="(getParty, index) in getParties.indendents"
            :key="index"
        >
            <p>{{ getParty.firstName + " " + getParty.lastName }}</p>
            <p>{{ getParty.party }}</p>
        </div>
        <div class="gallery-title">
            <h3>Republicans</h3>
        </div>
        <div
            class="senator-card"
            v-for="(getParty, index) in getParties.republicans"
            :key="index"
        >
            <p>{{ getParty.firstName + " " + getParty.lastName }}</p>
            <p>{{ getParty.party }}</p>
        </div>
    </section>
</template>

<script>
export default {
    name: "SenateParty",
    components: {},
    computed: {
        getParties() {
            return {
                democrats: this.$store.getters.getDemocrats,
                independents: this.$store.getters.getIndependents,
                republicans: this.$store.getters.getRepublicans,
            };
        },
    },
};
</script>
