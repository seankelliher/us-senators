<template>
    <section>
        <div class="gallery-title">
            <h3>Class I</h3>
        </div>
        <div
            class="senator-card"
            v-for="(getClass, index) in getClasses.classOne"
            :key="index"
        >
            <p>{{ getClass.firstName + " " + getClass.lastName }}</p>
            <p>{{ getClass.senateClass }}</p>
            <img
                :src="require(`../assets/images/${getClass.portrait}.jpg`)"
                :alt="getClass.firstName + ' ' + getClass.lastName"
            />
        </div>
        <div class="gallery-title">
            <h3>Class II</h3>
        </div>
        <div
            class="senator-card"
            v-for="(getClass, index) in getClasses.classTwo"
            :key="index"
        >
            <p>{{ getClass.firstName + " " + getClass.lastName }}</p>
            <p>{{ getClass.senateClass }}</p>
            <img
                :src="require(`../assets/images/${getClass.portrait}.jpg`)"
                :alt="getClass.firstName + ' ' + getClass.lastName"
            />
        </div>
        <div class="gallery-title">
            <h3>Class III</h3>
        </div>
        <div
            class="senator-card"
            v-for="(getClass, index) in getClasses.classThree"
            :key="index"
        >
            <p>{{ getClass.firstName + " " + getClass.lastName }}</p>
            <p>{{ getClass.senateClass }}</p>
            <img
                :src="require(`../assets/images/${getClass.portrait}.jpg`)"
                :alt="getClass.firstName + ' ' + getClass.lastName"
            />
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
