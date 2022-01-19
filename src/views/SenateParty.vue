<template>
    <section>
        <div class="gallery-title" id="democrats">
            <h3>Democrats</h3>
        </div>
        <InfoPanel
            heading="How many Democrats?"
            :msg1="`There are currently ${getParties.democratsL} Democrats in the US Senate. There are also currently ${getParties.independentsL} Independents who generally vote with them.`"
        />
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
                    {{ getParty.firstName + " " + getParty.lastName }}
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
        <InfoPanel
            heading="How many Independents?"
            :msg1="`There are currently ${getParties.independentsL} Independents in the US Senate.`"
        />
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
                    {{ getParty.firstName + " " + getParty.lastName }}
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
        <InfoPanel
            heading="How many Republicans?"
            :msg1="`There are currently ${getParties.republicansL} Republicans in the US Senate.`"
        />
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
                    {{ getParty.firstName + " " + getParty.lastName }}
                    <br />
                    {{ getParty.state }}
                </figcaption>
            </figure>
        </div>
    </section>
</template>

<script>
import InfoPanel from "@/components/InfoPanel.vue";
import JumpsPanel from "@/components/JumpsPanel.vue";
export default {
    name: "SenateParty",
    components: {
        JumpsPanel,
        InfoPanel,
    },
    computed: {
        getParties() {
            return {
                democrats: this.$store.getters.getDemocrats,
                democratsL: this.$store.getters.getDemocrats.length,
                independents: this.$store.getters.getIndependents,
                independentsL: this.$store.getters.getIndependents.length,
                republicans: this.$store.getters.getRepublicans,
                republicansL: this.$store.getters.getRepublicans.length,
            };
        },
    },
};
</script>
