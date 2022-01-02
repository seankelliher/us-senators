<template>
    <section>
        <h2>By State</h2>
        <SenatorCards
            msg="Placeholder for Senators Cards, displayed by state"
        />
    </section>
</template>

<script>
// @ is an alias to /src
import SenatorCards from "@/components/SenatorCards.vue";

export default {
    name: "SenateState",
    components: {
        SenatorCards,
    },
};
</script>
