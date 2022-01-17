<template>
    <div class="stats-panel">
        <p>
            Population: {{ stat1 }}. Rank: {{ stat2 }}. House members:
            {{ stat3 }}.
        </p>
    </div>
</template>

<script>
export default {
    name: "StatsPanel",
    props: {
        stat1: Number,
        stat2: Number,
        stat3: Number,
    },
    data() {
        return {};
    },
    components: {},
};
</script>
