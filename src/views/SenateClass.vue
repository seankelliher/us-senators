<template>
    <section>
        <h2>By Class</h2>
        <SenatorCards
            msg="Placeholder for Senators Cards, displayed by class"
        />
    </section>
</template>

<script>
// @ is an alias to /src
import SenatorCards from "@/components/SenatorCards.vue";

export default {
    name: "SenateClass",
    components: {
        SenatorCards,
    },
};
</script>
