<template>
    <section>
        <div class="gallery-title" id="class1">
            <h2>Class I</h2>
        </div>
        <InfoPanel
            heading="What is Class I?"
            msg1="A class is a grouping of senators who are up for election in the same year. Article I, section 3 of the Constitution divides senators into three classes, Class I, Class II, and Class III. Each class is elected two years apart."
            msg2="Class I terms run from the beginning of the 116th Congress on January 3, 2019, to the end of the 118th Congress on January 3, 2025. Senators in Class I were elected to office in the November 2018 general election, unless they took their seat through appointment or special election."
        />
        <div
            class="senator-card"
            v-for="getClass in getClasses.classOne"
            :key="getClass.bioguideId"
        >
            <figure @click="goToDetail(getClass.portrait)">
                <img
                    :src="require(`../assets/images/${getClass.portrait}.jpg`)"
                    :alt="getClass.firstName + ' ' + getClass.lastName"
                />
                <figcaption>
                    {{
                        getClass.firstName +
                        " " +
                        getClass.lastName +
                        " (" +
                        getClass.party +
                        ")"
                    }}
                    <br />
                    {{ getClass.state }}
                </figcaption>
            </figure>
        </div>
    </section>
    <section>
        <div class="gallery-title" id="class2">
            <h2>Class II</h2>
        </div>
        <InfoPanel
            heading="What is Class II?"
            msg1="Class II terms run from the beginning of the 117th Congress on January 3, 2021, to the end of the 119th Congress on January 3, 2027. Senators in Class II were elected to office in the November 2020 general election, unless they took their seat through appointment or special election."
        />
        <div
            class="senator-card"
            v-for="getClass in getClasses.classTwo"
            :key="getClass.bioguideId"
        >
            <figure @click="goToDetail(getClass.portrait)">
                <img
                    :src="require(`../assets/images/${getClass.portrait}.jpg`)"
                    :alt="getClass.firstName + ' ' + getClass.lastName"
                />
                <figcaption>
                    {{
                        getClass.firstName +
                        " " +
                        getClass.lastName +
                        " (" +
                        getClass.party +
                        ")"
                    }}
                    <br />
                    {{ getClass.state }}
                </figcaption>
            </figure>
        </div>
    </section>
    <section>
        <div class="gallery-title" id="class3">
            <h2>Class III</h2>
        </div>
        <InfoPanel
            heading="What is Class III?"
            msg1="Class III terms run from the beginning of the 115th Congress on January 3, 2017, to the end of the 117th Congress on January 3, 2023. Senators in Class III were elected to office in the November 2016 general election, unless they took their seat through appointment or special election."
        />
        <div
            class="senator-card"
            v-for="getClass in getClasses.classThree"
            :key="getClass.bioguideId"
        >
            <figure @click="goToDetail(getClass.portrait)">
                <img
                    :src="require(`../assets/images/${getClass.portrait}.jpg`)"
                    :alt="getClass.firstName + ' ' + getClass.lastName"
                />
                <figcaption>
                    {{
                        getClass.firstName +
                        " " +
                        getClass.lastName +
                        " (" +
                        getClass.party +
                        ")"
                    }}
                    <br />
                    {{ getClass.state }}
                </figcaption>
            </figure>
        </div>
    </section>
    <JumpsPanelO
        linkT=""
        nameT="⇧"
        link1="#class1"
        name1="Class I"
        link2="#class2"
        name2="Class II"
        link3="#class3"
        name3="Class III"
    />
</template>

<style scoped>
figure:hover {
    cursor: pointer;
    filter: grayscale(70%);
}
</style>

<script>
import JumpsPanelO from "@/components/JumpsPanelO.vue";
import InfoPanel from "@/components/InfoPanel.vue";
export default {
    name: "SenateClass",
    components: {
        JumpsPanelO,
        InfoPanel,
    },
    methods: {
        goToDetail(portrait) {
            this.$router.push({
                name: "SenateDetail",
                params: { portrait },
            });
        },
    },
    computed: {
        getClasses() {
            return {
                classOne: this.$store.getters.getClassOne,
                classTwo: this.$store.getters.getClassTwo,
                classThree: this.$store.getters.getClassThree,
            };
        },
    },
};
</script>
