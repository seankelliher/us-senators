<template>
    <section>
        <div class="gallery-title">
            <h2>By State</h2>
            <p>Placeholder for Senators Cards, displayed by state</p>
        </div>

        <div
            class="senator-card"
            v-for="(getState, index) in getStates.alabama"
            :key="index"
        >
            <p>{{ getState.firstName + " " + getState.lastName }}</p>
            <p>{{ getState.state }}</p>
        </div>
        <div
            class="senator-card"
            v-for="(getState, index) in getStates.alaska"
            :key="index"
        >
            <p>{{ getState.firstName + " " + getState.lastName }}</p>
            <p>{{ getState.state }}</p>
        </div>
        <div
            class="senator-card"
            v-for="(getState, index) in getStates.arizona"
            :key="index"
        >
            <p>{{ getState.firstName + " " + getState.lastName }}</p>
            <p>{{ getState.state }}</p>
        </div>
        <div
            class="senator-card"
            v-for="(getState, index) in getStates.arkansas"
            :key="index"
        >
            <p>{{ getState.firstName + " " + getState.lastName }}</p>
            <p>{{ getState.state }}</p>
        </div>
        <div
            class="senator-card"
            v-for="(getState, index) in getStates.california"
            :key="index"
        >
            <p>{{ getState.firstName + " " + getState.lastName }}</p>
            <p>{{ getState.state }}</p>
        </div>
        <div
            class="senator-card"
            v-for="(getState, index) in getStates.colorado"
            :key="index"
        >
            <p>{{ getState.firstName + " " + getState.lastName }}</p>
            <p>{{ getState.state }}</p>
        </div>
        <div
            class="senator-card"
            v-for="(getState, index) in getStates.connecticut"
            :key="index"
        >
            <p>{{ getState.firstName + " " + getState.lastName }}</p>
            <p>{{ getState.state }}</p>
        </div>
        <div
            class="senator-card"
            v-for="(getState, index) in getStates.delaware"
            :key="index"
        >
            <p>{{ getState.firstName + " " + getState.lastName }}</p>
            <p>{{ getState.state }}</p>
        </div>
        <div
            class="senator-card"
            v-for="(getState, index) in getStates.florida"
            :key="index"
        >
            <p>{{ getState.firstName + " " + getState.lastName }}</p>
            <p>{{ getState.state }}</p>
        </div>
        <div
            class="senator-card"
            v-for="(getState, index) in getStates.georgia"
            :key="index"
        >
            <p>{{ getState.firstName + " " + getState.lastName }}</p>
            <p>{{ getState.state }}</p>
        </div>
        <div
            class="senator-card"
            v-for="(getState, index) in getStates.hawaii"
            :key="index"
        >
            <p>{{ getState.firstName + " " + getState.lastName }}</p>
            <p>{{ getState.state }}</p>
        </div>
        <div
            class="senator-card"
            v-for="(getState, index) in getStates.idaho"
            :key="index"
        >
            <p>{{ getState.firstName + " " + getState.lastName }}</p>
            <p>{{ getState.state }}</p>
        </div>
        <div
            class="senator-card"
            v-for="(getState, index) in getStates.illinois"
            :key="index"
        >
            <p>{{ getState.firstName + " " + getState.lastName }}</p>
            <p>{{ getState.state }}</p>
        </div>
        <div
            class="senator-card"
            v-for="(getState, index) in getStates.indiana"
            :key="index"
        >
            <p>{{ getState.firstName + " " + getState.lastName }}</p>
            <p>{{ getState.state }}</p>
        </div>
        <div
            class="senator-card"
            v-for="(getState, index) in getStates.iowa"
            :key="index"
        >
            <p>{{ getState.firstName + " " + getState.lastName }}</p>
            <p>{{ getState.state }}</p>
        </div>
        <div
            class="senator-card"
            v-for="(getState, index) in getStates.kansas"
            :key="index"
        >
            <p>{{ getState.firstName + " " + getState.lastName }}</p>
            <p>{{ getState.state }}</p>
        </div>
        <div
            class="senator-card"
            v-for="(getState, index) in getStates.kentucky"
            :key="index"
        >
            <p>{{ getState.firstName + " " + getState.lastName }}</p>
            <p>{{ getState.state }}</p>
        </div>
        <div
            class="senator-card"
            v-for="(getState, index) in getStates.louisiana"
            :key="index"
        >
            <p>{{ getState.firstName + " " + getState.lastName }}</p>
            <p>{{ getState.state }}</p>
        </div>
        <div
            class="senator-card"
            v-for="(getState, index) in getStates.maine"
            :key="index"
        >
            <p>{{ getState.firstName + " " + getState.lastName }}</p>
            <p>{{ getState.state }}</p>
        </div>
        <div
            class="senator-card"
            v-for="(getState, index) in getStates.maryland"
            :key="index"
        >
            <p>{{ getState.firstName + " " + getState.lastName }}</p>
            <p>{{ getState.state }}</p>
        </div>
        <div
            class="senator-card"
            v-for="(getState, index) in getStates.massachusetts"
            :key="index"
        >
            <p>{{ getState.firstName + " " + getState.lastName }}</p>
            <p>{{ getState.state }}</p>
        </div>
        <div
            class="senator-card"
            v-for="(getState, index) in getStates.michigan"
            :key="index"
        >
            <p>{{ getState.firstName + " " + getState.lastName }}</p>
            <p>{{ getState.state }}</p>
        </div>
        <div
            class="senator-card"
            v-for="(getState, index) in getStates.minnesota"
            :key="index"
        >
            <p>{{ getState.firstName + " " + getState.lastName }}</p>
            <p>{{ getState.state }}</p>
        </div>
        <div
            class="senator-card"
            v-for="(getState, index) in getStates.mississippi"
            :key="index"
        >
            <p>{{ getState.firstName + " " + getState.lastName }}</p>
            <p>{{ getState.state }}</p>
        </div>
        <div
            class="senator-card"
            v-for="(getState, index) in getStates.missouri"
            :key="index"
        >
            <p>{{ getState.firstName + " " + getState.lastName }}</p>
            <p>{{ getState.state }}</p>
        </div>
        <div
            class="senator-card"
            v-for="(getState, index) in getStates.montana"
            :key="index"
        >
            <p>{{ getState.firstName + " " + getState.lastName }}</p>
            <p>{{ getState.state }}</p>
        </div>
        <div
            class="senator-card"
            v-for="(getState, index) in getStates.nebraska"
            :key="index"
        >
            <p>{{ getState.firstName + " " + getState.lastName }}</p>
            <p>{{ getState.state }}</p>
        </div>
        <div
            class="senator-card"
            v-for="(getState, index) in getStates.nevada"
            :key="index"
        >
            <p>{{ getState.firstName + " " + getState.lastName }}</p>
            <p>{{ getState.state }}</p>
        </div>
        <div
            class="senator-card"
            v-for="(getState, index) in getStates.newHampshire"
            :key="index"
        >
            <p>{{ getState.firstName + " " + getState.lastName }}</p>
            <p>{{ getState.state }}</p>
        </div>
        <div
            class="senator-card"
            v-for="(getState, index) in getStates.newJersey"
            :key="index"
        >
            <p>{{ getState.firstName + " " + getState.lastName }}</p>
            <p>{{ getState.state }}</p>
        </div>
        <div
            class="senator-card"
            v-for="(getState, index) in getStates.newMexico"
            :key="index"
        >
            <p>{{ getState.firstName + " " + getState.lastName }}</p>
            <p>{{ getState.state }}</p>
        </div>
        <div
            class="senator-card"
            v-for="(getState, index) in getStates.newYork"
            :key="index"
        >
            <p>{{ getState.firstName + " " + getState.lastName }}</p>
            <p>{{ getState.state }}</p>
        </div>
        <div
            class="senator-card"
            v-for="(getState, index) in getStates.northCarolina"
            :key="index"
        >
            <p>{{ getState.firstName + " " + getState.lastName }}</p>
            <p>{{ getState.state }}</p>
        </div>
        <div
            class="senator-card"
            v-for="(getState, index) in getStates.northDakota"
            :key="index"
        >
            <p>{{ getState.firstName + " " + getState.lastName }}</p>
            <p>{{ getState.state }}</p>
        </div>
        <div
            class="senator-card"
            v-for="(getState, index) in getStates.ohio"
            :key="index"
        >
            <p>{{ getState.firstName + " " + getState.lastName }}</p>
            <p>{{ getState.state }}</p>
        </div>
        <div
            class="senator-card"
            v-for="(getState, index) in getStates.oklahoma"
            :key="index"
        >
            <p>{{ getState.firstName + " " + getState.lastName }}</p>
            <p>{{ getState.state }}</p>
        </div>
        <div
            class="senator-card"
            v-for="(getState, index) in getStates.oregon"
            :key="index"
        >
            <p>{{ getState.firstName + " " + getState.lastName }}</p>
            <p>{{ getState.state }}</p>
        </div>
        <div
            class="senator-card"
            v-for="(getState, index) in getStates.pennsylvania"
            :key="index"
        >
            <p>{{ getState.firstName + " " + getState.lastName }}</p>
            <p>{{ getState.state }}</p>
        </div>
        <div
            class="senator-card"
            v-for="(getState, index) in getStates.rhodeIsland"
            :key="index"
        >
            <p>{{ getState.firstName + " " + getState.lastName }}</p>
            <p>{{ getState.state }}</p>
        </div>
        <div
            class="senator-card"
            v-for="(getState, index) in getStates.southCarolina"
            :key="index"
        >
            <p>{{ getState.firstName + " " + getState.lastName }}</p>
            <p>{{ getState.state }}</p>
        </div>
        <div
            class="senator-card"
            v-for="(getState, index) in getStates.southDakota"
            :key="index"
        >
            <p>{{ getState.firstName + " " + getState.lastName }}</p>
            <p>{{ getState.state }}</p>
        </div>
        <div
            class="senator-card"
            v-for="(getState, index) in getStates.tennessee"
            :key="index"
        >
            <p>{{ getState.firstName + " " + getState.lastName }}</p>
            <p>{{ getState.state }}</p>
        </div>
        <div
            class="senator-card"
            v-for="(getState, index) in getStates.texas"
            :key="index"
        >
            <p>{{ getState.firstName + " " + getState.lastName }}</p>
            <p>{{ getState.state }}</p>
        </div>
        <div
            class="senator-card"
            v-for="(getState, index) in getStates.utah"
            :key="index"
        >
            <p>{{ getState.firstName + " " + getState.lastName }}</p>
            <p>{{ getState.state }}</p>
        </div>
        <div
            class="senator-card"
            v-for="(getState, index) in getStates.vermont"
            :key="index"
        >
            <p>{{ getState.firstName + " " + getState.lastName }}</p>
            <p>{{ getState.state }}</p>
        </div>
        <div
            class="senator-card"
            v-for="(getState, index) in getStates.virginia"
            :key="index"
        >
            <p>{{ getState.firstName + " " + getState.lastName }}</p>
            <p>{{ getState.state }}</p>
        </div>
        <div
            class="senator-card"
            v-for="(getState, index) in getStates.washington"
            :key="index"
        >
            <p>{{ getState.firstName + " " + getState.lastName }}</p>
            <p>{{ getState.state }}</p>
        </div>
        <div
            class="senator-card"
            v-for="(getState, index) in getStates.westVirginia"
            :key="index"
        >
            <p>{{ getState.firstName + " " + getState.lastName }}</p>
            <p>{{ getState.state }}</p>
        </div>
        <div
            class="senator-card"
            v-for="(getState, index) in getStates.wisconsin"
            :key="index"
        >
            <p>{{ getState.firstName + " " + getState.lastName }}</p>
            <p>{{ getState.state }}</p>
        </div>
        <div
            class="senator-card"
            v-for="(getState, index) in getStates.wyoming"
            :key="index"
        >
            <p>{{ getState.firstName + " " + getState.lastName }}</p>
            <p>{{ getState.state }}</p>
        </div>
    </section>
</template>

<script>
export default {
    name: "SenateState",
    components: {},
    methods: {},
    computed: {
        getStates() {
            return {
                alabama: this.$store.getters.getAlabama,
                alaska: this.$store.getters.getAlaska,
                arizona: this.$store.getters.getArizona,
                arkansas: this.$store.getters.getArkansas,
                california: this.$store.getters.getCalifornia,
                colorado: this.$store.getters.getColorado,
                connecticut: this.$store.getters.getConnecticut,
                delaware: this.$store.getters.getDelaware,
                florida: this.$store.getters.getFlorida,
                georgia: this.$store.getters.getGeorgia,
                hawaii: this.$store.getters.getHawaii,
                idaho: this.$store.getters.getIdaho,
                illinois: this.$store.getters.getIllinois,
                indiana: this.$store.getters.getIndiana,
                iowa: this.$store.getters.getIowa,
                kansas: this.$store.getters.getKansas,
                kentucky: this.$store.getters.getKentucky,
                louisiana: this.$store.getters.getLouisiana,
                maine: this.$store.getters.getMaine,
                maryland: this.$store.getters.getMaryland,
                massachusetts: this.$store.getters.getMassachusetts,
                michigan: this.$store.getters.getMichigan,
                minnesota: this.$store.getters.getMinnesota,
                mississippi: this.$store.getters.getMississippi,
                missouri: this.$store.getters.getMissouri,
                montana: this.$store.getters.getMontana,
                nebraska: this.$store.getters.getNebraska,
                nevada: this.$store.getters.getNevada,
                newHampshire: this.$store.getters.getNewHampshire,
                newJersey: this.$store.getters.getNewJersey,
                newMexico: this.$store.getters.getNewMexico,
                newYork: this.$store.getters.getNewYork,
                northCarolina: this.$store.getters.getNorthCarolina,
                northDakota: this.$store.getters.getNorthDakota,
                ohio: this.$store.gettergetOhio,
                oklahoma: this.$store.getters.getOklahoma,
                oregon: this.$store.getters.getOregon,
                pennsylvania: this.$store.getters.getPennsylvania,
                rhodeIsland: this.$store.getters.getRhodeIsland,
                southCarolina: this.$store.getters.getSouthCarolina,
                southDakota: this.$store.getters.getSouthDakota,
                tennessee: this.$store.getters.getTennessee,
                texas: this.$store.getters.getTexas,
                utah: this.$store.getters.getUtah,
                vermont: this.$store.getters.getVermont,
                virginia: this.$store.getters.getVirginia,
                washington: this.$store.getters.getWashington,
                westVirginia: this.$store.getters.getWestVirginia,
                wisconsin: this.$store.getters.getWisconsin,
                wyoming: this.$store.getters.getWyoming,
            };
        },
    },
};
</script>
