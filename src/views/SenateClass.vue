<template>
    <section>
        <div
            id="class1"
            class="gallery-title"
        >
            <h2>Class I</h2>
        </div>
        <InfoPanel
            heading="What is Class I?"
            msg1="A class is a grouping of senators who are up for election in the same year. Article I, section 3 of the Constitution divides senators into three classes, Class I, Class II, and Class III. Each class is elected two years apart."
            msg2="Class I terms run from the beginning of the 116th Congress on January 3, 2019, to the end of the 118th Congress on January 3, 2025. Senators in Class I were elected to office in the November 2018 general election, unless they took their seat through appointment or special election."
        />
        <SenatorCard2 :details="getClasses.classOne" />
    </section>
    <section>
        <div
            id="class2"
            class="gallery-title"
        >
            <h2>Class II</h2>
        </div>
        <InfoPanel
            heading="What is Class II?"
            msg1="Class II terms run from the beginning of the 117th Congress on January 3, 2021, to the end of the 119th Congress on January 3, 2027. Senators in Class II were elected to office in the November 2020 general election, unless they took their seat through appointment or special election."
        />
        <SenatorCard2 :details="getClasses.classTwo" />
    </section>
    <section>
        <div
            id="class3"
            class="gallery-title"
        >
            <h2>Class III</h2>
        </div>
        <InfoPanel
            heading="What is Class III?"
            msg1="Class III terms run from the beginning of the 115th Congress on January 3, 2017, to the end of the 117th Congress on January 3, 2023. Senators in Class III were elected to office in the November 2016 general election, unless they took their seat through appointment or special election."
        />
        <SenatorCard2 :details="getClasses.classThree" />
    </section>
    <JumpLinks1
        link-top="top"
        name-top="⇧"
        link1="class1"
        name1="Class I"
        link2="class2"
        name2="Class II"
        link3="class3"
        name3="Class III"
    />
</template>

<script>
import InfoPanel from "@/components/InfoPanel.vue";
import SenatorCard2 from "@/components/SenatorCard2.vue";
import JumpLinks1 from "@/components/JumpLinks1.vue";

export default {
    name: "SenateClass",
    components: {
        InfoPanel,
        SenatorCard2,
        JumpLinks1,
    },
    data() {
        return {};
    },
    computed: {
        getClasses() {
            return {
                classOne: this.$store.getters.getTheClass("Class I"),
                classTwo: this.$store.getters.getTheClass("Class II"),
                classThree: this.$store.getters.getTheClass("Class III"),
            };
        },
    },
    methods: {},
};
</script>
