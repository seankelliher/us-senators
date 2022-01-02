<template>
    <section>
        <h2>By Leaders</h2>
        <SenatorCards
            msg="Placeholder for Senators Cards, displayed by leaders"
        />
    </section>
</template>

<script>
// @ is an alias to /src
import SenatorCards from "@/components/SenatorCards.vue";

export default {
    name: "SenateLeaders",
    components: {
        SenatorCards,
    },
};
</script>
