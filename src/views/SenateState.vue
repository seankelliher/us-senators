<template>
    <section>
        <div class="gallery-title">
            <h2>By State</h2>
            <p>Placeholder for Senators Cards, displayed by state</p>
        </div>

        <div
            class="senator-card"
            v-for="(getAL, index) in getAlabama"
            :key="index"
        >
            <p>{{ getAL.firstName + " " + getAL.lastName }}</p>
            <p>{{ getAL.state }}</p>
        </div>
        <div
            class="senator-card"
            v-for="(getAK, index) in getAlaska"
            :key="index"
        >
            <p>{{ getAK.firstName + " " + getAK.lastName }}</p>
            <p>{{ getAK.state }}</p>
        </div>
        <div
            class="senator-card"
            v-for="(getAZ, index) in getArizona"
            :key="index"
        >
            <p>{{ getAZ.firstName + " " + getAZ.lastName }}</p>
            <p>{{ getAZ.state }}</p>
        </div>
        <div
            class="senator-card"
            v-for="(getAR, index) in getArkansas"
            :key="index"
        >
            <p>{{ getAR.firstName + " " + getAR.lastName }}</p>
            <p>{{ getAR.state }}</p>
        </div>
        <div
            class="senator-card"
            v-for="(getCA, index) in getCalifornia"
            :key="index"
        >
            <p>{{ getCA.firstName + " " + getCA.lastName }}</p>
            <p>{{ getCA.state }}</p>
        </div>
        <div
            class="senator-card"
            v-for="(getCO, index) in getColorado"
            :key="index"
        >
            <p>{{ getCO.firstName + " " + getCO.lastName }}</p>
            <p>{{ getCO.state }}</p>
        </div>
        <div
            class="senator-card"
            v-for="(getCT, index) in getConnecticut"
            :key="index"
        >
            <p>{{ getCT.firstName + " " + getCT.lastName }}</p>
            <p>{{ getCT.state }}</p>
        </div>
        <div
            class="senator-card"
            v-for="(getDE, index) in getDelaware"
            :key="index"
        >
            <p>{{ getDE.firstName + " " + getDE.lastName }}</p>
            <p>{{ getDE.state }}</p>
        </div>
        <div
            class="senator-card"
            v-for="(getFL, index) in getFlorida"
            :key="index"
        >
            <p>{{ getFL.firstName + " " + getFL.lastName }}</p>
            <p>{{ getFL.state }}</p>
        </div>
        <div
            class="senator-card"
            v-for="(getGA, index) in getGeorgia"
            :key="index"
        >
            <p>{{ getGA.firstName + " " + getGA.lastName }}</p>
            <p>{{ getGA.state }}</p>
        </div>
        <div
            class="senator-card"
            v-for="(getHI, index) in getHawaii"
            :key="index"
        >
            <p>{{ getHI.firstName + " " + getHI.lastName }}</p>
            <p>{{ getHI.state }}</p>
        </div>
        <div
            class="senator-card"
            v-for="(getID, index) in getIdaho"
            :key="index"
        >
            <p>{{ getID.firstName + " " + getID.lastName }}</p>
            <p>{{ getID.state }}</p>
        </div>
        <div
            class="senator-card"
            v-for="(getIL, index) in getIllinois"
            :key="index"
        >
            <p>{{ getIL.firstName + " " + getIL.lastName }}</p>
            <p>{{ getIL.state }}</p>
        </div>
        <div
            class="senator-card"
            v-for="(getIN, index) in getIndiana"
            :key="index"
        >
            <p>{{ getIN.firstName + " " + getIN.lastName }}</p>
            <p>{{ getIN.state }}</p>
        </div>
        <div
            class="senator-card"
            v-for="(getIA, index) in getIowa"
            :key="index"
        >
            <p>{{ getIA.firstName + " " + getIA.lastName }}</p>
            <p>{{ getIA.state }}</p>
        </div>
        <div
            class="senator-card"
            v-for="(getKS, index) in getKansas"
            :key="index"
        >
            <p>{{ getKS.firstName + " " + getKS.lastName }}</p>
            <p>{{ getKS.state }}</p>
        </div>
        <div
            class="senator-card"
            v-for="(getKS, index) in getKentucky"
            :key="index"
        >
            <p>{{ getKS.firstName + " " + getKS.lastName }}</p>
            <p>{{ getKS.state }}</p>
        </div>
        <div
            class="senator-card"
            v-for="(getLA, index) in getLouisiana"
            :key="index"
        >
            <p>{{ getLA.firstName + " " + getLA.lastName }}</p>
            <p>{{ getLA.state }}</p>
        </div>
        <div
            class="senator-card"
            v-for="(getME, index) in getMaine"
            :key="index"
        >
            <p>{{ getME.firstName + " " + getME.lastName }}</p>
            <p>{{ getME.state }}</p>
        </div>
        <div
            class="senator-card"
            v-for="(getMD, index) in getMaryland"
            :key="index"
        >
            <p>{{ getMD.firstName + " " + getMD.lastName }}</p>
            <p>{{ getMD.state }}</p>
        </div>
        <div
            class="senator-card"
            v-for="(getMA, index) in getMassachusetts"
            :key="index"
        >
            <p>{{ getMA.firstName + " " + getMA.lastName }}</p>
            <p>{{ getMA.state }}</p>
        </div>
        <div
            class="senator-card"
            v-for="(getMI, index) in getMichigan"
            :key="index"
        >
            <p>{{ getMI.firstName + " " + getMI.lastName }}</p>
            <p>{{ getMI.state }}</p>
        </div>
        <div
            class="senator-card"
            v-for="(getMN, index) in getMinnesota"
            :key="index"
        >
            <p>{{ getMN.firstName + " " + getMN.lastName }}</p>
            <p>{{ getMN.state }}</p>
        </div>
        <div
            class="senator-card"
            v-for="(getMI, index) in getMississippi"
            :key="index"
        >
            <p>{{ getMI.firstName + " " + getMI.lastName }}</p>
            <p>{{ getMI.state }}</p>
        </div>
        <div
            class="senator-card"
            v-for="(getMS, index) in getMissouri"
            :key="index"
        >
            <p>{{ getMS.firstName + " " + getMS.lastName }}</p>
            <p>{{ getMS.state }}</p>
        </div>
        <div
            class="senator-card"
            v-for="(getMT, index) in getMontana"
            :key="index"
        >
            <p>{{ getMT.firstName + " " + getMT.lastName }}</p>
            <p>{{ getMT.state }}</p>
        </div>
        <div
            class="senator-card"
            v-for="(getNE, index) in getNebraska"
            :key="index"
        >
            <p>{{ getNE.firstName + " " + getNE.lastName }}</p>
            <p>{{ getNE.state }}</p>
        </div>
        <div
            class="senator-card"
            v-for="(getNV, index) in getNevada"
            :key="index"
        >
            <p>{{ getNV.firstName + " " + getNV.lastName }}</p>
            <p>{{ getNV.state }}</p>
        </div>
        <div
            class="senator-card"
            v-for="(getNH, index) in getNewHampshire"
            :key="index"
        >
            <p>{{ getNH.firstName + " " + getNH.lastName }}</p>
            <p>{{ getNH.state }}</p>
        </div>
        <div
            class="senator-card"
            v-for="(getNJ, index) in getNewJersey"
            :key="index"
        >
            <p>{{ getNJ.firstName + " " + getNJ.lastName }}</p>
            <p>{{ getNJ.state }}</p>
        </div>
        <div
            class="senator-card"
            v-for="(getNM, index) in getNewMexico"
            :key="index"
        >
            <p>{{ getNM.firstName + " " + getNM.lastName }}</p>
            <p>{{ getNM.state }}</p>
        </div>
        <div
            class="senator-card"
            v-for="(getNY, index) in getNewYork"
            :key="index"
        >
            <p>{{ getNY.firstName + " " + getNY.lastName }}</p>
            <p>{{ getNY.state }}</p>
        </div>
        <div
            class="senator-card"
            v-for="(getNC, index) in getNorthCarolina"
            :key="index"
        >
            <p>{{ getNC.firstName + " " + getNC.lastName }}</p>
            <p>{{ getNC.state }}</p>
        </div>
        <div
            class="senator-card"
            v-for="(getND, index) in getNorthDakota"
            :key="index"
        >
            <p>{{ getND.firstName + " " + getND.lastName }}</p>
            <p>{{ getND.state }}</p>
        </div>
        <div
            class="senator-card"
            v-for="(getOH, index) in getOhio"
            :key="index"
        >
            <p>{{ getOH.firstName + " " + getOH.lastName }}</p>
            <p>{{ getOH.state }}</p>
        </div>
        <div
            class="senator-card"
            v-for="(getOK, index) in getOklahoma"
            :key="index"
        >
            <p>{{ getOK.firstName + " " + getOK.lastName }}</p>
            <p>{{ getOK.state }}</p>
        </div>
        <div
            class="senator-card"
            v-for="(getOR, index) in getOregon"
            :key="index"
        >
            <p>{{ getOR.firstName + " " + getOR.lastName }}</p>
            <p>{{ getOR.state }}</p>
        </div>
        <div
            class="senator-card"
            v-for="(getPA, index) in getPennsylvania"
            :key="index"
        >
            <p>{{ getPA.firstName + " " + getPA.lastName }}</p>
            <p>{{ getPA.state }}</p>
        </div>
        <div
            class="senator-card"
            v-for="(getRI, index) in getRhodeIsland"
            :key="index"
        >
            <p>{{ getRI.firstName + " " + getRI.lastName }}</p>
            <p>{{ getRI.state }}</p>
        </div>
        <div
            class="senator-card"
            v-for="(getSC, index) in getSouthCarolina"
            :key="index"
        >
            <p>{{ getSC.firstName + " " + getSC.lastName }}</p>
            <p>{{ getSC.state }}</p>
        </div>
        <div
            class="senator-card"
            v-for="(getSD, index) in getSouthDakota"
            :key="index"
        >
            <p>{{ getSD.firstName + " " + getSD.lastName }}</p>
            <p>{{ getSD.state }}</p>
        </div>
        <div
            class="senator-card"
            v-for="(getTN, index) in getTennessee"
            :key="index"
        >
            <p>{{ getTN.firstName + " " + getTN.lastName }}</p>
            <p>{{ getTN.state }}</p>
        </div>
        <div
            class="senator-card"
            v-for="(getTX, index) in getTexas"
            :key="index"
        >
            <p>{{ getTX.firstName + " " + getTX.lastName }}</p>
            <p>{{ getTX.state }}</p>
        </div>
        <div
            class="senator-card"
            v-for="(getUT, index) in getUtah"
            :key="index"
        >
            <p>{{ getUT.firstName + " " + getUT.lastName }}</p>
            <p>{{ getUT.state }}</p>
        </div>
        <div
            class="senator-card"
            v-for="(getVT, index) in getVermont"
            :key="index"
        >
            <p>{{ getVT.firstName + " " + getVT.lastName }}</p>
            <p>{{ getVT.state }}</p>
        </div>
        <div
            class="senator-card"
            v-for="(getVA, index) in getVirginia"
            :key="index"
        >
            <p>{{ getVA.firstName + " " + getVA.lastName }}</p>
            <p>{{ getVA.state }}</p>
        </div>
        <div
            class="senator-card"
            v-for="(getWA, index) in getWashington"
            :key="index"
        >
            <p>{{ getWA.firstName + " " + getWA.lastName }}</p>
            <p>{{ getWA.state }}</p>
        </div>
        <div
            class="senator-card"
            v-for="(getWV, index) in getWestVirginia"
            :key="index"
        >
            <p>{{ getWV.firstName + " " + getWV.lastName }}</p>
            <p>{{ getWV.state }}</p>
        </div>
        <div
            class="senator-card"
            v-for="(getWI, index) in getWisconsin"
            :key="index"
        >
            <p>{{ getWI.firstName + " " + getWI.lastName }}</p>
            <p>{{ getWI.state }}</p>
        </div>
        <div
            class="senator-card"
            v-for="(getWY, index) in getWyoming"
            :key="index"
        >
            <p>{{ getWY.firstName + " " + getWY.lastName }}</p>
            <p>{{ getWY.state }}</p>
        </div>
    </section>
</template>

<script>
export default {
    name: "SenateState",
    components: {},
    methods: {},
    computed: {
        getAlabama() {
            return this.$store.getters.getAlabama;
        },
        getAlaska() {
            return this.$store.getters.getAlaska;
        },
        getArizona() {
            return this.$store.getters.getArizona;
        },
        getArkansas() {
            return this.$store.getters.getArkansas;
        },
        getCalifornia() {
            return this.$store.getters.getCalifornia;
        },
        getColorado() {
            return this.$store.getters.getColorado;
        },
        getConnecticut() {
            return this.$store.getters.getConnecticut;
        },
        getDelaware() {
            return this.$store.getters.getDelaware;
        },
        getFlorida() {
            return this.$store.getters.getFlorida;
        },
        getGeorgia() {
            return this.$store.getters.getGeorgia;
        },
        getHawaii() {
            return this.$store.getters.getHawaii;
        },
        getIdaho() {
            return this.$store.getters.getIdaho;
        },
        getIllinois() {
            return this.$store.getters.getIllinois;
        },
        getIndiana() {
            return this.$store.getters.getIndiana;
        },
        getIowa() {
            return this.$store.getters.getIowa;
        },
        getKansas() {
            return this.$store.getters.getKansas;
        },
        getKentucky() {
            return this.$store.getters.getKentucky;
        },
        getLouisiana() {
            return this.$store.getters.getLouisiana;
        },
        getMaine() {
            return this.$store.getters.getMaine;
        },
        getMaryland() {
            return this.$store.getters.getMaryland;
        },
        getMassachusetts() {
            return this.$store.getters.getMassachusetts;
        },
        getMichigan() {
            return this.$store.getters.getMichigan;
        },
        getMinnesota() {
            return this.$store.getters.getMinnesota;
        },
        getMississippi() {
            return this.$store.getters.getMississippi;
        },
        getMissouri() {
            return this.$store.getters.getMissouri;
        },
        getMontana() {
            return this.$store.getters.getMontana;
        },
        getNebraska() {
            return this.$store.getters.getNebraska;
        },
        getNevada() {
            return this.$store.getters.getNevada;
        },
        getNewHampshire() {
            return this.$store.getters.getNewHampshire;
        },
        getNewJersey() {
            return this.$store.getters.getNewJersey;
        },
        getNewMexico() {
            return this.$store.getters.getNewMexico;
        },
        getNewYork() {
            return this.$store.getters.getNewYork;
        },
        getNorthCarolina() {
            return this.$store.getters.getNorthCarolina;
        },
        getNorthDakota() {
            return this.$store.getters.getNorthDakota;
        },
        getOhio() {
            return this.$store.gettergetOhio;
        },
        getOklahoma() {
            return this.$store.getters.getOklahoma;
        },
        getOregon() {
            return this.$store.getters.getOregon;
        },
        getPennsylvania() {
            return this.$store.getters.getPennsylvania;
        },
        getRhodeIsland() {
            return this.$store.getters.getRhodeIsland;
        },
        getSouthCarolina() {
            return this.$store.getters.getSouthCarolina;
        },
        getSouthDakota() {
            return this.$store.getters.getSouthDakota;
        },
        getTennessee() {
            return this.$store.getters.getTennessee;
        },
        getTexas() {
            return this.$store.getters.getTexas;
        },
        getUtah() {
            return this.$store.getters.getUtah;
        },
        getVermont() {
            return this.$store.getters.getVermont;
        },
        getVirginia() {
            return this.$store.getters.getVirginia;
        },
        getWashington() {
            return this.$store.getters.getWashington;
        },
        getWestVirginia() {
            return this.$store.getters.getWestVirginia;
        },
        getWisconsin() {
            return this.$store.getters.getWisconsin;
        },
        getWyoming() {
            return this.$store.getters.getWyoming;
        },
    },
};
</script>
