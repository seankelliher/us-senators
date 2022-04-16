<template>
    <section>
        <div class="gallery-title" id="democrats">
            <h2>Democrats</h2>
        </div>
        <InfoPanel
            heading="How many Democrats?"
            :msg1="`There are currently ${getParties.democrats.length} Democrats in the US Senate. There are also currently ${getParties.independents.length} Independents who generally vote with them.`"
        />
        <SenatorCard2 :details="getParties.democrats" />
    </section>
    <section>
        <div class="gallery-title" id="independents">
            <h2>Independents</h2>
        </div>
        <InfoPanel
            heading="How many Independents?"
            :msg1="`There are currently ${getParties.independents.length} Independents in the US Senate.`"
        />
        <SenatorCard2 :details="getParties.independents" />
    </section>
    <section>
        <div class="gallery-title" id="republicans">
            <h2>Republicans</h2>
        </div>
        <InfoPanel
            heading="How many Republicans?"
            :msg1="`There are currently ${getParties.republicans.length} Republicans in the US Senate.`"
        />
        <SenatorCard2 :details="getParties.republicans" />
    </section>
    <JumpsPanelO
        linkT=""
        nameT="⇧"
        link1="#democrats"
        name1="Democrats"
        link2="#independents"
        name2="Independents"
        link3="#republicans"
        name3="Republicans"
    />
</template>

<style scoped>
/*<figure:hover {
    cursor: pointer;
}*/
</style>

<script>
import InfoPanel from "@/components/InfoPanel.vue";
import SenatorCard2 from "@/components/SenatorCard2.vue";
import JumpsPanelO from "@/components/JumpsPanelO.vue";
export default {
    name: "SenateParty",
    components: {
        InfoPanel,
        SenatorCard2,
        JumpsPanelO,
    },
    methods: {
        /*goToDetail(portrait) {
            this.$router.push({
                name: "SenateDetail",
                params: { portrait },
            });
        },*/
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
};
</script>
