<template>
    <section>
        <div class="gallery-title" id="democrats">
            <h2>Democrats</h2>
        </div>
        <InfoPanel
            heading="How many Democrats?"
            :msg1="`There are currently ${getParties.democratsL} Democrats in the US Senate. There are also currently ${getParties.independentsL} Independents who generally vote with them.`"
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
            <h2>Independents</h2>
        </div>
        <InfoPanel
            heading="How many Independents?"
            :msg1="`There are currently ${getParties.independentsL} Independents in the US Senate.`"
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
            <h2>Republicans</h2>
        </div>
        <InfoPanel
            heading="How many Republicans?"
            :msg1="`There are currently ${getParties.republicansL} Republicans in the US Senate.`"
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
    <JumpsPanelO
        link1="#democrats"
        name1="Democrats"
        link2="#independents"
        name2="Independents"
        link3="#republicans"
        name3="Republicans"
    />
</template>

<script>
import InfoPanel from "@/components/InfoPanel.vue";
import JumpsPanelO from "@/components/JumpsPanelO.vue";
export default {
    name: "SenateParty",
    components: {
        JumpsPanelO,
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
