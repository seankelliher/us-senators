<template>
    <div class="info-panel">
        <Transition name="fade-in-slide-left" appear>
            <p
                role="button"
                tabindex="0"
                class="cursor-pointer"
                v-on:click="seen === true ? (seen = false) : (seen = true)"
            >
                <information-icon fillColor="#d90416" /> {{ heading }}
            </p>
        </Transition>
        <Transition name="slide-down-fade-in-out">
            <div v-show="seen">
                <p>{{ msg1 }}</p>
                <p>{{ msg2 }}</p>
            </div>
        </Transition>
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
