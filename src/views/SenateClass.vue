<template>
    <section>
        <div class="gallery-title">
            <h3>Class I</h3>
        </div>
        <div
            class="senator-card"
            v-for="getClass in getClasses.classOne"
            :key="getClass.bioguideId"
        >
            <figure>
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
        <div class="gallery-title">
            <h3>Class II</h3>
        </div>
        <div
            class="senator-card"
            v-for="getClass in getClasses.classTwo"
            :key="getClass.bioguideId"
        >
            <figure>
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
        <div class="gallery-title">
            <h3>Class III</h3>
        </div>
        <div
            class="senator-card"
            v-for="getClass in getClasses.classThree"
            :key="getClass.bioguideId"
        >
            <figure>
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
</template>

<script>
export default {
    name: "SenateClass",
    components: {},
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
