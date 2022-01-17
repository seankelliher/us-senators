<template>
    <div class="info-panel">
        <h3
            class="cursor-pointer"
            v-on:click="seen === true ? (seen = false) : (seen = true)"
        >
            {{ heading }} <information-icon fillColor="#f44336" />
        </h3>
        <p v-show="seen">{{ msg1 }}</p>
        <p v-show="seen">{{ msg2 }}</p>
    </div>
</template>

<script>
import InformationIcon from "vue-material-design-icons/Information.vue";

export default {
    name: "InfoPanel",
    props: {
        heading: String,
        msg1: String,
        msg2: String,
    },
    data() {
        return {
            seen: false,
        };
    },
    components: {
        InformationIcon,
    },
};
</script>
<style scoped>
.gallery-title h3 {
    margin-bottom: 0;
}
</style>
