<template>
    <section>
        <h2>By Class</h2>
        <p>Placeholder for Senators Cards, displayed by class</p>

        <div
            class="senator-card"
            v-for="(getClass, index) in getClasses"
            :key="index.getClass"
        >
            {{ getClass.fName }}
            {{ getClass.lName }}
            {{ getClass.sClass }}
        </div>
    </section>
</template>

<script>
export default {
    name: "SenateClass",
    components: {},
    computed: {
        getClasses() {
            return this.$store.getters.getClasses;
        },
    },
};
</script>
