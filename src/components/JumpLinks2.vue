<!--JumpLinks2: used for State.-->
<!--Contains slots for 20 links.-->
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
                    :id="link01"
                    @click="scrollToAnchor()"
                >
                    {{ name01 }}
                </span>
                <span
                    :id="link02"
                    @click="scrollToAnchor()"
                >
                    {{ name02 }}
                </span>
                <span
                    :id="link03"
                    @click="scrollToAnchor()"
                >
                    {{ name03 }}
                </span>
                <span
                    :id="link04"
                    @click="scrollToAnchor()"
                >
                    {{ name04 }}
                </span>
                <span
                    :id="link05"
                    @click="scrollToAnchor()"
                >
                    {{ name05 }}
                </span>
                <span
                    :id="link06"
                    @click="scrollToAnchor()"
                >
                    {{ name06 }}
                </span>
                <span
                    :id="link07"
                    @click="scrollToAnchor()"
                >
                    {{ name07 }}
                </span>
                <span
                    :id="link08"
                    @click="scrollToAnchor()"
                >
                    {{ name08 }}
                </span>
                <span
                    :id="link09"
                    @click="scrollToAnchor()"
                >
                    {{ name09 }}
                </span>
                <span
                    :id="link10"
                    @click="scrollToAnchor()"
                >
                    {{ name10 }}
                </span>
                <span
                    :id="link11"
                    @click="scrollToAnchor()"
                >
                    {{ name11 }}
                </span>
                <span
                    :id="link12"
                    @click="scrollToAnchor()"
                >
                    {{ name12 }}
                </span>
                <span
                    :id="link13"
                    @click="scrollToAnchor()"
                >
                    {{ name13 }}
                </span>
                <span
                    :id="link14"
                    @click="scrollToAnchor()"
                >
                    {{ name14 }}
                </span>
                <span
                    :id="link15"
                    @click="scrollToAnchor()"
                >
                    {{ name15 }}
                </span>
                <span
                    :id="link16"
                    @click="scrollToAnchor()"
                >
                    {{ name16 }}
                </span>
                <span
                    :id="link17"
                    @click="scrollToAnchor()"
                >
                    {{ name17 }}
                </span>
                <span
                    :id="link18"
                    @click="scrollToAnchor()"
                >
                    {{ name18 }}
                </span>
                <span
                    :id="link19"
                    @click="scrollToAnchor()"
                >
                    {{ name19 }}
                </span>
            </p>
        </div>
    </Transition>
</template>

<script>
export default {
    name: "JumpLinks2",
    components: {},
    props: {
        linkTop: {
            type: String,
            default: "",
        },
        link01: {
            type: String,
            default: "",
        },
        link02: {
            type: String,
            default: "",
        },
        link03: {
            type: String,
            default: "",
        },
        link04: {
            type: String,
            default: "",
        },
        link05: {
            type: String,
            default: "",
        },
        link06: {
            type: String,
            default: "",
        },
        link07: {
            type: String,
            default: "",
        },
        link08: {
            type: String,
            default: "",
        },
        link09: {
            type: String,
            default: "",
        },
        link10: {
            type: String,
            default: "",
        },
        link11: {
            type: String,
            default: "",
        },
        link12: {
            type: String,
            default: "",
        },
        link13: {
            type: String,
            default: "",
        },
        link14: {
            type: String,
            default: "",
        },
        link15: {
            type: String,
            default: "",
        },
        link16: {
            type: String,
            default: "",
        },
        link17: {
            type: String,
            default: "",
        },
        link18: {
            type: String,
            default: "",
        },
        link19: {
            type: String,
            default: "",
        },
        nameTop: {
            type: String,
            default: "",
        },
        name01: {
            type: String,
            default: "",
        },
        name02: {
            type: String,
            default: "",
        },
        name03: {
            type: String,
            default: "",
        },
        name04: {
            type: String,
            default: "",
        },
        name05: {
            type: String,
            default: "",
        },
        name06: {
            type: String,
            default: "",
        },
        name07: {
            type: String,
            default: "",
        },
        name08: {
            type: String,
            default: "",
        },
        name09: {
            type: String,
            default: "",
        },
        name10: {
            type: String,
            default: "",
        },
        name11: {
            type: String,
            default: "",
        },
        name12: {
            type: String,
            default: "",
        },
        name13: {
            type: String,
            default: "",
        },
        name14: {
            type: String,
            default: "",
        },
        name15: {
            type: String,
            default: "",
        },
        name16: {
            type: String,
            default: "",
        },
        name17: {
            type: String,
            default: "",
        },
        name18: {
            type: String,
            default: "",
        },
        name19: {
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
