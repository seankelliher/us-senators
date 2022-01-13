<template>
    <section>
        <div class="gallery-title">
            <h3>Democrats</h3>
        </div>
        <div
            class="senator-card"
            v-for="getParty in getParties.democrats"
            :key="getParty.bioguideId"
        >
            <figure>
                <img
                    :src="require(`../assets/images/${getParty.portrait}.jpg`)"
                    :alt="getParty.firstName + ' ' + getParty.lastName"
                />
                <figcaption>
                    {{
                        getParty.firstName +
                        " " +
                        getParty.lastName +
                        " (" +
                        getParty.party +
                        ")"
                    }}
                    <br />
                    {{ getParty.state }}
                </figcaption>
            </figure>
        </div>
        <div class="gallery-title">
            <h3>Independents</h3>
        </div>
        <div
            class="senator-card"
            v-for="getParty in getParties.independents"
            :key="getParty.bioguideId"
        >
            <figure>
                <img
                    :src="require(`../assets/images/${getParty.portrait}.jpg`)"
                    :alt="getParty.firstName + ' ' + getParty.lastName"
                />
                <figcaption>
                    {{
                        getParty.firstName +
                        " " +
                        getParty.lastName +
                        " (" +
                        getParty.party +
                        ")"
                    }}
                    <br />
                    {{ getParty.state }}
                </figcaption>
            </figure>
        </div>
        <div class="gallery-title">
            <h3>Republicans</h3>
        </div>
        <div
            class="senator-card"
            v-for="getParty in getParties.republicans"
            :key="getParty.bioguideId"
        >
            <figure>
                <img
                    :src="require(`../assets/images/${getParty.portrait}.jpg`)"
                    :alt="getParty.firstName + ' ' + getParty.lastName"
                />
                <figcaption>
                    {{
                        getParty.firstName +
                        " " +
                        getParty.lastName +
                        " (" +
                        getParty.party +
                        ")"
                    }}
                    <br />
                    {{ getParty.state }}
                </figcaption>
            </figure>
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
