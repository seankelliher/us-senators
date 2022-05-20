<template>
    <Transition name="fade-in-slide-left" appear>
        <div class="stats-panel">
            <p>
                Population: {{ stat1 }}. Rank: {{ stat2 }}. House members:
                {{ stat3 }}.
            </p>
        </div>
    </Transition>
</template>

<script>
export default {
    name: "StatsPanel",
    props: {
        stat1: String,
        stat2: Number,
        stat3: Number,
    },
    data() {
        return {};
    },
    components: {},
};
</script>
