<template>
    <Transition
        name="fade-in-slide-left"
        appear
    >
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
    components: {},
    props: {
        stat1: {
            type: String,
            default: "",
        },
        stat2: {
            type: Number,
            default: null,
        },
        stat3: {
            type: Number,
            default: null,
        },
    },
    data() {
        return {};
    },
};
</script>
