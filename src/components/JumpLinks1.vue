<!--JumpLinks1: used for Class, Party, Leaders.-->
<!--Contains slots for three links.-->
<template>
    <Transition
        name="jump-links-move-up"
        appear
    >
        <div class="jump-links">
            <p>
                <span
                    :id="linkTop"
                    @click="scrollToTop()"
                >
                    {{ nameTop }}
                </span>
                <span
                    :id="link1"
                    @click="scrollToAnchor()"
                >
                    {{ name1 }}
                </span>
                <span
                    :id="link2"
                    @click="scrollToAnchor()"
                >
                    {{ name2 }}
                </span>
                <span
                    :id="link3"
                    @click="scrollToAnchor()"
                >
                    {{ name3 }}
                </span>
            </p>
        </div>
    </Transition>
</template>

<script>
export default {
    name: "JumpLinks1",
    components: {},
    props: {
        linkTop: {
            type: String,
            default: "",
        },
        link1: {
            type: String,
            default: "",
        },
        link2: {
            type: String,
            default: "",
        },
        link3: {
            type: String,
            default: "",
        },
        nameTop: {
            type: String,
            default: "",
        },
        name1: {
            type: String,
            default: "",
        },
        name2: {
            type: String,
            default: "",
        },
        name3: {
            type: String,
            default: "",
        },
    },
    data() {
        return {};
    },
    methods: {
        scrollToTop() {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: "smooth",
            });
        },
        scrollToAnchor() {
            const anchor = document.getElementById(event.target.id);
            anchor.scrollIntoView({
                behavior: "smooth",
            });
        },
    },
};
</script>
