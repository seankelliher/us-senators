<template>
    <section>
        <div class="gallery-title">
            <h2>By Class</h2>
            <p>Placeholder for Senators Cards, displayed by class</p>
        </div>

        <div
            class="senator-card"
            v-for="(getClass, index) in getClasses"
            :key="index.getClass"
        >
            <p>{{ getClass.fullName }}</p>
            <p>{{ getClass.sClass }}</p>
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
