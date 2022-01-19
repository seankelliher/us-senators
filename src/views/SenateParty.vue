<template>
    <section>
        <div class="gallery-title" id="democrats">
            <h3>Democrats</h3>
        </div>
        <JumpsPanel
            link1="#independents"
            name1="Independents"
            link2="#republicans"
            name2="Republicans"
        />
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
    </section>
    <section>
        <div class="gallery-title" id="independents">
            <h3>Independents</h3>
        </div>
        <JumpsPanel
            link1="#democrats"
            name1="Democrats"
            link2="#republicans"
            name2="Republicans"
        />
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
    </section>
    <section>
        <div class="gallery-title" id="republicans">
            <h3>Republicans</h3>
        </div>
        <JumpsPanel
            link1="#democrats"
            name1="Democrats"
            link2="#independents"
            name2="Independents"
        />
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
import JumpsPanel from "@/components/JumpsPanel.vue";
export default {
    name: "SenateParty",
    components: {
        JumpsPanel,
    },
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
<style scoped>
.gallery-title h3 {
    margin-bottom: 0;
}
</style>
