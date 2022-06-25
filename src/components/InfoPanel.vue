<template>
    <div class="info-panel">
        <Transition
            name="fade-in-slide-left"
            appear
        >
            <p
                role="button"
                tabindex="0"
                class="cursor-pointer"
                @click="seen === true ? (seen = false) : (seen = true)"
            >
                <information-icon fill-color="#d90416" /> {{ heading }}
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
    components: {
        InformationIcon,
    },
    props: {
        heading: {
            type: String,
            default: "",
        },
        msg1: {
            type: String,
            default: "",
        },
        msg2: {
            type: String,
            default: "",
        },
    },
    data() {
        return {
            seen: false,
        };
    },
};
</script>

<style scoped>
.gallery-title h2 {
    margin-bottom: 0;
}
</style>
