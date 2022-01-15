<template>
    <div class="jumps-panel">
        <p>
            Go to:&nbsp;
            <a v-bind:href="link1">{{ name1 }}</a>
            &nbsp;
            <a v-bind:href="link2">{{ name2 }}</a>
        </p>
    </div>
</template>

<script>
export default {
    name: "JumpsPanel",
    props: {
        link1: String,
        link2: String,
        name1: String,
        name2: String,
    },
    data() {
        return {};
    },
    components: {},
};
</script>
