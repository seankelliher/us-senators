<template>
    <div class="info-panel">
        <p
            class="cursor-pointer"
            v-on:click="seen === true ? (seen = false) : (seen = true)"
        >
            <information-icon fillColor="#f44336" /> {{ heading }}
        </p>
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
.gallery-title h2 {
    margin-bottom: 0;
}
</style>
