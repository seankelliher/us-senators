<template>
    <section>
        <div
            id="democrats"
            class="gallery-title"
        >
            <h2>Democrats</h2>
        </div>
        <InfoPanel
            heading="How many Democrats?"
            :msg1="`There are currently ${getParties.democrats.length} Democrats in the US Senate. There are also currently ${getParties.independents.length} Independents who generally vote with them.`"
        />
        <SenatorCard2 :details="getParties.democrats" />
    </section>
    <section>
        <div
            id="independents"
            class="gallery-title"
        >
            <h2>Independents</h2>
        </div>
        <InfoPanel
            heading="How many Independents?"
            :msg1="`There are currently ${getParties.independents.length} Independents in the US Senate.`"
        />
        <SenatorCard2 :details="getParties.independents" />
    </section>
    <section>
        <div
            id="republicans"
            class="gallery-title"
        >
            <h2>Republicans</h2>
        </div>
        <InfoPanel
            heading="How many Republicans?"
            :msg1="`There are currently ${getParties.republicans.length} Republicans in the US Senate.`"
        />
        <SenatorCard2 :details="getParties.republicans" />
    </section>
    <JumpLinks1
        link-top="top"
        name-top="⇧"
        link1="democrats"
        name1="Democrats"
        link2="independents"
        name2="Independents"
        link3="republicans"
        name3="Republicans"
    />
</template>

<script>
import InfoPanel from "@/components/InfoPanel.vue";
import SenatorCard2 from "@/components/SenatorCard2.vue";
import JumpLinks1 from "@/components/JumpLinks1.vue";
export default {
    name: "SenateParty",
    components: {
        InfoPanel,
        SenatorCard2,
        JumpLinks1,
    },
    data() {
        return {};
    },
    computed: {
        getParties() {
            return {
                democrats: this.$store.getters.getTheParty("D"),
                independents: this.$store.getters.getTheParty("I"),
                republicans: this.$store.getters.getTheParty("R"),
            };
        },
    },
    methods: {},
};
</script>
