<template>
    <section>
        <h2>By Party</h2>
        <SenatorCards
            msg="Placeholder for Senators Cards, displayed by party"
        />
    </section>
</template>

<script>
// @ is an alias to /src
import SenatorCards from "@/components/SenatorCards.vue";

export default {
    name: "SenateParty",
    components: {
        SenatorCards,
    },
};
</script>
