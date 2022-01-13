<template>
    <section>
        <div class="gallery-title">
            <h3>Leaders</h3>
        </div>

        <div
            class="senator-card"
            v-for="getLeader in getLeaders"
            :key="getLeader.bioguideId"
        >
            <figure>
                <img
                    :src="require(`../assets/images/${getLeader.portrait}.jpg`)"
                    :alt="getLeader.firstName + ' ' + getLeader.lastName"
                />
                <figcaption>
                    {{
                        getLeader.firstName +
                        " " +
                        getLeader.lastName +
                        ", " +
                        getLeader.party
                    }}
                    <br />
                    {{ getLeader.state }}
                    <br />
                    {{ getLeader.leadershipPosition }}
                </figcaption>
            </figure>
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
