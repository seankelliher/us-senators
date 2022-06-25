<template>
    <section>
        <div
            id="states-a"
            class="gallery-title"
        >
            <h2>Alabama</h2>
        </div>
        <StatsPanel
            :stat1="getStats.alabama.pop"
            :stat2="getStats.alabama.rank"
            :stat3="getStats.alabama.seats"
        />
        <SenatorCard1 :details="getStates.alabama" />
    </section>
    <section>
        <div class="gallery-title">
            <h2>Alaska</h2>
        </div>
        <StatsPanel
            :stat1="getStats.alaska.pop"
            :stat2="getStats.alaska.rank"
            :stat3="getStats.alaska.seats"
        />
        <SenatorCard1 :details="getStates.alaska" />
    </section>
    <section>
        <div class="gallery-title">
            <h2>Arizona</h2>
        </div>
        <StatsPanel
            :stat1="getStats.arizona.pop"
            :stat2="getStats.arizona.rank"
            :stat3="getStats.arizona.seats"
        />
        <SenatorCard1 :details="getStates.arizona" />
    </section>
    <section>
        <div class="gallery-title">
            <h2>Arkansas</h2>
        </div>
        <StatsPanel
            :stat1="getStats.arkansas.pop"
            :stat2="getStats.arkansas.rank"
            :stat3="getStats.arkansas.seats"
        />
        <SenatorCard1 :details="getStates.arkansas" />
    </section>
    <section>
        <div
            id="states-c"
            class="gallery-title"
        >
            <h2>California</h2>
        </div>
        <StatsPanel
            :stat1="getStats.california.pop"
            :stat2="getStats.california.rank"
            :stat3="getStats.california.seats"
        />
        <SenatorCard1 :details="getStates.california" />
    </section>
    <section>
        <div class="gallery-title">
            <h2>Colorado</h2>
        </div>
        <StatsPanel
            :stat1="getStats.colorado.pop"
            :stat2="getStats.colorado.rank"
            :stat3="getStats.colorado.seats"
        />
        <SenatorCard1 :details="getStates.colorado" />
    </section>
    <section>
        <div class="gallery-title">
            <h2>Connecticut</h2>
        </div>
        <StatsPanel
            :stat1="getStats.connecticut.pop"
            :stat2="getStats.connecticut.rank"
            :stat3="getStats.connecticut.seats"
        />
        <SenatorCard1 :details="getStates.connecticut" />
    </section>
    <section>
        <div
            id="states-d"
            class="gallery-title"
        >
            <h2>Delaware</h2>
        </div>
        <StatsPanel
            :stat1="getStats.delaware.pop"
            :stat2="getStats.delaware.rank"
            :stat3="getStats.delaware.seats"
        />
        <SenatorCard1 :details="getStates.delaware" />
    </section>
    <section>
        <div
            id="states-f"
            class="gallery-title"
        >
            <h2>Florida</h2>
        </div>
        <StatsPanel
            :stat1="getStats.florida.pop"
            :stat2="getStats.florida.rank"
            :stat3="getStats.florida.seats"
        />
        <SenatorCard1 :details="getStates.florida" />
    </section>
    <section>
        <div
            id="states-g"
            class="gallery-title"
        >
            <h2>Georgia</h2>
        </div>
        <StatsPanel
            :stat1="getStats.georgia.pop"
            :stat2="getStats.georgia.rank"
            :stat3="getStats.georgia.seats"
        />
        <SenatorCard1 :details="getStates.georgia" />
    </section>
    <section>
        <div
            id="states-h"
            class="gallery-title"
        >
            <h2>Hawaii</h2>
        </div>
        <StatsPanel
            :stat1="getStats.hawaii.pop"
            :stat2="getStats.hawaii.rank"
            :stat3="getStats.hawaii.seats"
        />
        <SenatorCard1 :details="getStates.hawaii" />
    </section>
    <section>
        <div
            id="states-i"
            class="gallery-title"
        >
            <h2>Idaho</h2>
        </div>
        <StatsPanel
            :stat1="getStats.idaho.pop"
            :stat2="getStats.idaho.rank"
            :stat3="getStats.idaho.seats"
        />
        <SenatorCard1 :details="getStates.idaho" />
    </section>
    <section>
        <div class="gallery-title">
            <h2>Illinois</h2>
        </div>
        <StatsPanel
            :stat1="getStats.illinois.pop"
            :stat2="getStats.illinois.rank"
            :stat3="getStats.illinois.seats"
        />
        <SenatorCard1 :details="getStates.illinois" />
    </section>
    <section>
        <div class="gallery-title">
            <h2>Indiana</h2>
        </div>
        <StatsPanel
            :stat1="getStats.indiana.pop"
            :stat2="getStats.indiana.rank"
            :stat3="getStats.indiana.seats"
        />
        <SenatorCard1 :details="getStates.indiana" />
    </section>
    <section>
        <div class="gallery-title">
            <h2>Iowa</h2>
        </div>
        <StatsPanel
            :stat1="getStats.iowa.pop"
            :stat2="getStats.iowa.rank"
            :stat3="getStats.iowa.seats"
        />
        <SenatorCard1 :details="getStates.iowa" />
    </section>
    <section>
        <div
            id="states-k"
            class="gallery-title"
        >
            <h2>Kansas</h2>
        </div>
        <StatsPanel
            :stat1="getStats.kansas.pop"
            :stat2="getStats.kansas.rank"
            :stat3="getStats.kansas.seats"
        />
        <SenatorCard1 :details="getStates.kansas" />
    </section>
    <section>
        <div class="gallery-title">
            <h2>Kentucky</h2>
        </div>
        <StatsPanel
            :stat1="getStats.kentucky.pop"
            :stat2="getStats.kentucky.rank"
            :stat3="getStats.kentucky.seats"
        />
        <SenatorCard1 :details="getStates.kentucky" />
    </section>
    <section>
        <div
            id="states-l"
            class="gallery-title"
        >
            <h2>Louisiana</h2>
        </div>
        <StatsPanel
            :stat1="getStats.louisiana.pop"
            :stat2="getStats.louisiana.rank"
            :stat3="getStats.louisiana.seats"
        />
        <SenatorCard1 :details="getStates.louisiana" />
    </section>
    <section>
        <div
            id="states-m"
            class="gallery-title"
        >
            <h2>Maine</h2>
        </div>
        <StatsPanel
            :stat1="getStats.maine.pop"
            :stat2="getStats.maine.rank"
            :stat3="getStats.maine.seats"
        />
        <SenatorCard1 :details="getStates.maine" />
    </section>
    <section>
        <div class="gallery-title">
            <h2>Maryland</h2>
        </div>
        <StatsPanel
            :stat1="getStats.maryland.pop"
            :stat2="getStats.maryland.rank"
            :stat3="getStats.maryland.seats"
        />
        <SenatorCard1 :details="getStates.maryland" />
    </section>
    <section>
        <div class="gallery-title">
            <h2>Massachusetts</h2>
        </div>
        <StatsPanel
            :stat1="getStats.massachusetts.pop"
            :stat2="getStats.massachusetts.rank"
            :stat3="getStats.massachusetts.seats"
        />
        <SenatorCard1 :details="getStates.massachusetts" />
    </section>
    <section>
        <div class="gallery-title">
            <h2>Michigan</h2>
        </div>
        <StatsPanel
            :stat1="getStats.michigan.pop"
            :stat2="getStats.michigan.rank"
            :stat3="getStats.michigan.seats"
        />
        <SenatorCard1 :details="getStates.michigan" />
    </section>
    <section>
        <div class="gallery-title">
            <h2>Minnesota</h2>
        </div>
        <StatsPanel
            :stat1="getStats.minnesota.pop"
            :stat2="getStats.minnesota.rank"
            :stat3="getStats.minnesota.seats"
        />
        <SenatorCard1 :details="getStates.minnesota" />
    </section>
    <section>
        <div class="gallery-title">
            <h2>Mississippi</h2>
        </div>
        <StatsPanel
            :stat1="getStats.mississippi.pop"
            :stat2="getStats.mississippi.rank"
            :stat3="getStats.mississippi.seats"
        />
        <SenatorCard1 :details="getStates.mississippi" />
    </section>
    <section>
        <div class="gallery-title">
            <h2>Missouri</h2>
        </div>
        <StatsPanel
            :stat1="getStats.missouri.pop"
            :stat2="getStats.missouri.rank"
            :stat3="getStats.missouri.seats"
        />
        <SenatorCard1 :details="getStates.missouri" />
    </section>
    <section>
        <div class="gallery-title">
            <h2>Montana</h2>
        </div>
        <StatsPanel
            :stat1="getStats.montana.pop"
            :stat2="getStats.montana.rank"
            :stat3="getStats.montana.seats"
        />
        <SenatorCard1 :details="getStates.montana" />
    </section>
    <section>
        <div
            id="states-n"
            class="gallery-title"
        >
            <h2>Nebraska</h2>
        </div>
        <StatsPanel
            :stat1="getStats.nebraska.pop"
            :stat2="getStats.nebraska.rank"
            :stat3="getStats.nebraska.seats"
        />
        <SenatorCard1 :details="getStates.nebraska" />
    </section>
    <section>
        <div class="gallery-title">
            <h2>Nevada</h2>
        </div>
        <StatsPanel
            :stat1="getStats.nevada.pop"
            :stat2="getStats.nevada.rank"
            :stat3="getStats.nevada.seats"
        />
        <SenatorCard1 :details="getStates.nevada" />
    </section>
    <section>
        <div class="gallery-title">
            <h2>New Hampshire</h2>
        </div>
        <StatsPanel
            :stat1="getStats.newHampshire.pop"
            :stat2="getStats.newHampshire.rank"
            :stat3="getStats.newHampshire.seats"
        />
        <SenatorCard1 :details="getStates.newHampshire" />
    </section>
    <section>
        <div class="gallery-title">
            <h2>New Jersey</h2>
        </div>
        <StatsPanel
            :stat1="getStats.newJersey.pop"
            :stat2="getStats.newJersey.rank"
            :stat3="getStats.newJersey.seats"
        />
        <SenatorCard1 :details="getStates.newJersey" />
    </section>
    <section>
        <div class="gallery-title">
            <h2>New Mexico</h2>
        </div>
        <StatsPanel
            :stat1="getStats.newMexico.pop"
            :stat2="getStats.newMexico.rank"
            :stat3="getStats.newMexico.seats"
        />
        <SenatorCard1 :details="getStates.newMexico" />
    </section>
    <section>
        <div class="gallery-title">
            <h2>New York</h2>
        </div>
        <StatsPanel
            :stat1="getStats.newYork.pop"
            :stat2="getStats.newYork.rank"
            :stat3="getStats.newYork.seats"
        />
        <SenatorCard1 :details="getStates.newYork" />
    </section>
    <section>
        <div class="gallery-title">
            <h2>North Carolina</h2>
        </div>
        <StatsPanel
            :stat1="getStats.northCarolina.pop"
            :stat2="getStats.northCarolina.rank"
            :stat3="getStats.northCarolina.seats"
        />
        <SenatorCard1 :details="getStates.northCarolina" />
    </section>
    <section>
        <div class="gallery-title">
            <h2>North Dakota</h2>
        </div>
        <StatsPanel
            :stat1="getStats.northDakota.pop"
            :stat2="getStats.northDakota.rank"
            :stat3="getStats.northDakota.seats"
        />
        <SenatorCard1 :details="getStates.northDakota" />
    </section>
    <section>
        <div
            id="states-o"
            class="gallery-title"
        >
            <h2>Ohio</h2>
        </div>
        <StatsPanel
            :stat1="getStats.ohio.pop"
            :stat2="getStats.ohio.rank"
            :stat3="getStats.ohio.seats"
        />
        <SenatorCard1 :details="getStates.ohio" />
    </section>
    <section>
        <div class="gallery-title">
            <h2>Oklahoma</h2>
        </div>
        <StatsPanel
            :stat1="getStats.oklahoma.pop"
            :stat2="getStats.oklahoma.rank"
            :stat3="getStats.oklahoma.seats"
        />
        <SenatorCard1 :details="getStates.oklahoma" />
    </section>
    <section>
        <div class="gallery-title">
            <h2>Oregon</h2>
        </div>
        <StatsPanel
            :stat1="getStats.oregon.pop"
            :stat2="getStats.oregon.rank"
            :stat3="getStats.oregon.seats"
        />
        <SenatorCard1 :details="getStates.oregon" />
    </section>
    <section>
        <div
            id="states-p"
            class="gallery-title"
        >
            <h2>Pennsylvania</h2>
        </div>
        <StatsPanel
            :stat1="getStats.pennsylvania.pop"
            :stat2="getStats.pennsylvania.rank"
            :stat3="getStats.pennsylvania.seats"
        />
        <SenatorCard1 :details="getStates.pennsylvania" />
    </section>
    <section>
        <div
            id="states-r"
            class="gallery-title"
        >
            <h2>Rhode Island</h2>
        </div>
        <StatsPanel
            :stat1="getStats.rhodeIsland.pop"
            :stat2="getStats.rhodeIsland.rank"
            :stat3="getStats.rhodeIsland.seats"
        />
        <SenatorCard1 :details="getStates.rhodeIsland" />
    </section>
    <section>
        <div
            id="states-s"
            class="gallery-title"
        >
            <h2>South Carolina</h2>
        </div>
        <StatsPanel
            :stat1="getStats.southCarolina.pop"
            :stat2="getStats.southCarolina.rank"
            :stat3="getStats.southCarolina.seats"
        />
        <SenatorCard1 :details="getStates.southCarolina" />
    </section>
    <section>
        <div class="gallery-title">
            <h2>South Dakota</h2>
        </div>
        <StatsPanel
            :stat1="getStats.southDakota.pop"
            :stat2="getStats.southDakota.rank"
            :stat3="getStats.southDakota.seats"
        />
        <SenatorCard1 :details="getStates.southDakota" />
    </section>
    <section>
        <div
            id="states-t"
            class="gallery-title"
        >
            <h2>Tennessee</h2>
        </div>
        <StatsPanel
            :stat1="getStats.tennessee.pop"
            :stat2="getStats.tennessee.rank"
            :stat3="getStats.tennessee.seats"
        />
        <SenatorCard1 :details="getStates.tennessee" />
    </section>
    <section>
        <div class="gallery-title">
            <h2>Texas</h2>
        </div>
        <StatsPanel
            :stat1="getStats.texas.pop"
            :stat2="getStats.texas.rank"
            :stat3="getStats.texas.seats"
        />
        <SenatorCard1 :details="getStates.texas" />
    </section>
    <section>
        <div
            id="states-u"
            class="gallery-title"
        >
            <h2>Utah</h2>
        </div>
        <StatsPanel
            :stat1="getStats.utah.pop"
            :stat2="getStats.utah.rank"
            :stat3="getStats.utah.seats"
        />
        <SenatorCard1 :details="getStates.utah" />
    </section>
    <section>
        <div
            id="states-v"
            class="gallery-title"
        >
            <h2>Vermont</h2>
        </div>
        <StatsPanel
            :stat1="getStats.vermont.pop"
            :stat2="getStats.vermont.rank"
            :stat3="getStats.vermont.seats"
        />
        <SenatorCard1 :details="getStates.vermont" />
    </section>
    <section>
        <div class="gallery-title">
            <h2>Virginia</h2>
        </div>
        <StatsPanel
            :stat1="getStats.virginia.pop"
            :stat2="getStats.virginia.rank"
            :stat3="getStats.virginia.seats"
        />
        <SenatorCard1 :details="getStates.virginia" />
    </section>
    <section>
        <div
            id="states-w"
            class="gallery-title"
        >
            <h2>Washington</h2>
        </div>
        <StatsPanel
            :stat1="getStats.washington.pop"
            :stat2="getStats.washington.rank"
            :stat3="getStats.washington.seats"
        />
        <SenatorCard1 :details="getStates.washington" />
    </section>
    <section>
        <div class="gallery-title">
            <h2>West Virginia</h2>
        </div>
        <StatsPanel
            :stat1="getStats.westVirginia.pop"
            :stat2="getStats.westVirginia.rank"
            :stat3="getStats.westVirginia.seats"
        />
        <SenatorCard1 :details="getStates.westVirginia" />
    </section>
    <section>
        <div class="gallery-title">
            <h2>Wisconsin</h2>
        </div>
        <StatsPanel
            :stat1="getStats.wisconsin.pop"
            :stat2="getStats.wisconsin.rank"
            :stat3="getStats.wisconsin.seats"
        />
        <SenatorCard1 :details="getStates.wisconsin" />
    </section>
    <section>
        <div class="gallery-title">
            <h2>Wyoming</h2>
        </div>
        <StatsPanel
            :stat1="getStats.wyoming.pop"
            :stat2="getStats.wyoming.rank"
            :stat3="getStats.wyoming.seats"
        />
        <SenatorCard1 :details="getStates.wyoming" />
    </section>
    <JumpLinks2
        link-top="top"
        name-top="⇧"
        link01="states-a"
        name01="A"
        link02="states-c"
        name02="C"
        link03="states-d"
        name03="D"
        link04="states-f"
        name04="F"
        link05="states-g"
        name05="G"
        link06="states-h"
        name06="H"
        link07="states-i"
        name07="I"
        link08="states-k"
        name08="K"
        link09="states-l"
        name09="L"
        link10="states-m"
        name10="M"
        link11="states-n"
        name11="N"
        link12="states-o"
        name12="O"
        link13="states-p"
        name13="P"
        link14="states-r"
        name14="R"
        link15="states-s"
        name15="S"
        link16="states-t"
        name16="T"
        link17="states-u"
        name17="U"
        link18="states-v"
        name18="V"
        link19="states-w"
        name19="W"
    />
</template>

<script>
import StatsPanel from "@/components/StatsPanel.vue";
import SenatorCard1 from "@/components/SenatorCard1.vue";
import JumpLinks2 from "@/components/JumpLinks2.vue";
export default {
    name: "SenateState",
    components: {
        StatsPanel,
        SenatorCard1,
        JumpLinks2,
    },
    data() {
        return {};
    },
    computed: {
        getStates() {
            return {
                alabama: this.$store.getters.getTheState("Alabama"),
                alaska: this.$store.getters.getTheState("Alaska"),
                arizona: this.$store.getters.getTheState("Arizona"),
                arkansas: this.$store.getters.getTheState("Arkansas"),
                california: this.$store.getters.getTheState("California"),
                colorado: this.$store.getters.getTheState("Colorado"),
                connecticut: this.$store.getters.getTheState("Connecticut"),
                delaware: this.$store.getters.getTheState("Delaware"),
                florida: this.$store.getters.getTheState("Florida"),
                georgia: this.$store.getters.getTheState("Georgia"),
                hawaii: this.$store.getters.getTheState("Hawaii"),
                idaho: this.$store.getters.getTheState("Idaho"),
                illinois: this.$store.getters.getTheState("Illinois"),
                indiana: this.$store.getters.getTheState("Indiana"),
                iowa: this.$store.getters.getTheState("Iowa"),
                kansas: this.$store.getters.getTheState("Kansas"),
                kentucky: this.$store.getters.getTheState("Kentucky"),
                louisiana: this.$store.getters.getTheState("Louisiana"),
                maine: this.$store.getters.getTheState("Maine"),
                maryland: this.$store.getters.getTheState("Maryland"),
                massachusetts: this.$store.getters.getTheState("Massachusetts"),
                michigan: this.$store.getters.getTheState("Michigan"),
                minnesota: this.$store.getters.getTheState("Minnesota"),
                mississippi: this.$store.getters.getTheState("Mississippi"),
                missouri: this.$store.getters.getTheState("Missouri"),
                montana: this.$store.getters.getTheState("Montana"),
                nebraska: this.$store.getters.getTheState("Nebraska"),
                nevada: this.$store.getters.getTheState("Nevada"),
                newHampshire: this.$store.getters.getTheState("New Hampshire"),
                newJersey: this.$store.getters.getTheState("New Jersey"),
                newMexico: this.$store.getters.getTheState("New Mexico"),
                newYork: this.$store.getters.getTheState("New York"),
                northCarolina:
                    this.$store.getters.getTheState("North Carolina"),
                northDakota: this.$store.getters.getTheState("North Dakota"),
                ohio: this.$store.getters.getTheState("Ohio"),
                oklahoma: this.$store.getters.getTheState("Oklahoma"),
                oregon: this.$store.getters.getTheState("Oregon"),
                pennsylvania: this.$store.getters.getTheState("Pennsylvania"),
                rhodeIsland: this.$store.getters.getTheState("Rhode Island"),
                southCarolina:
                    this.$store.getters.getTheState("South Carolina"),
                southDakota: this.$store.getters.getTheState("South Dakota"),
                tennessee: this.$store.getters.getTheState("Tennessee"),
                texas: this.$store.getters.getTheState("Texas"),
                utah: this.$store.getters.getTheState("Utah"),
                vermont: this.$store.getters.getTheState("Vermont"),
                virginia: this.$store.getters.getTheState("Virginia"),
                washington: this.$store.getters.getTheState("Washington"),
                westVirginia: this.$store.getters.getTheState("West Virginia"),
                wisconsin: this.$store.getters.getTheState("Wisconsin"),
                wyoming: this.$store.getters.getTheState("Wyoming"),
            };
        },
        getStats() {
            return {
                alabama: this.$store.getters.getTheStat("alabama"),
                alaska: this.$store.getters.getTheStat("alaska"),
                arizona: this.$store.getters.getTheStat("arizona"),
                arkansas: this.$store.getters.getTheStat("arkansas"),
                california: this.$store.getters.getTheStat("california"),
                colorado: this.$store.getters.getTheStat("colorado"),
                connecticut: this.$store.getters.getTheStat("connecticut"),
                delaware: this.$store.getters.getTheStat("delaware"),
                florida: this.$store.getters.getTheStat("florida"),
                georgia: this.$store.getters.getTheStat("georgia"),
                hawaii: this.$store.getters.getTheStat("hawaii"),
                idaho: this.$store.getters.getTheStat("idaho"),
                illinois: this.$store.getters.getTheStat("illinois"),
                indiana: this.$store.getters.getTheStat("indiana"),
                iowa: this.$store.getters.getTheStat("iowa"),
                kansas: this.$store.getters.getTheStat("kansas"),
                kentucky: this.$store.getters.getTheStat("kentucky"),
                louisiana: this.$store.getters.getTheStat("louisiana"),
                maine: this.$store.getters.getTheStat("maine"),
                maryland: this.$store.getters.getTheStat("maryland"),
                massachusetts: this.$store.getters.getTheStat("massachusetts"),
                michigan: this.$store.getters.getTheStat("michigan"),
                minnesota: this.$store.getters.getTheStat("minnesota"),
                mississippi: this.$store.getters.getTheStat("mississippi"),
                missouri: this.$store.getters.getTheStat("missouri"),
                montana: this.$store.getters.getTheStat("montana"),
                nebraska: this.$store.getters.getTheStat("nebraska"),
                nevada: this.$store.getters.getTheStat("nevada"),
                newHampshire: this.$store.getters.getTheStat("newHampshire"),
                newJersey: this.$store.getters.getTheStat("newJersey"),
                newMexico: this.$store.getters.getTheStat("newMexico"),
                newYork: this.$store.getters.getTheStat("newYork"),
                northCarolina: this.$store.getters.getTheStat("northCarolina"),
                northDakota: this.$store.getters.getTheStat("northDakota"),
                ohio: this.$store.getters.getTheStat("ohio"),
                oklahoma: this.$store.getters.getTheStat("oklahoma"),
                oregon: this.$store.getters.getTheStat("oregon"),
                pennsylvania: this.$store.getters.getTheStat("pennsylvania"),
                rhodeIsland: this.$store.getters.getTheStat("rhodeIsland"),
                southCarolina: this.$store.getters.getTheStat("southCarolina"),
                southDakota: this.$store.getters.getTheStat("southDakota"),
                tennessee: this.$store.getters.getTheStat("tennessee"),
                texas: this.$store.getters.getTheStat("texas"),
                utah: this.$store.getters.getTheStat("utah"),
                vermont: this.$store.getters.getTheStat("vermont"),
                virginia: this.$store.getters.getTheStat("virginia"),
                washington: this.$store.getters.getTheStat("washington"),
                westVirginia: this.$store.getters.getTheStat("westVirginia"),
                wisconsin: this.$store.getters.getTheStat("wisconsin"),
                wyoming: this.$store.getters.getTheStat("wyoming"),
            };
        },
    },
    methods: {},
};
</script>
