<!--JumpLinks2: used for State.-->
<!--Contains slots for 20 links.-->
<template>
    <Transition name="jump-links-move-up" appear>
        <div class="jump-links">
            <p>
                <span v-bind:id="link0T" @click="scrollToTop()">
                    {{ name0T }}
                </span>
                <span v-bind:id="link01" @click="scrollToAnchor()">
                    {{ name01 }}
                </span>
                <span v-bind:id="link02" @click="scrollToAnchor()">
                    {{ name02 }}
                </span>
                <span v-bind:id="link03" @click="scrollToAnchor()">
                    {{ name03 }}
                </span>
                <span v-bind:id="link04" @click="scrollToAnchor()">
                    {{ name04 }}
                </span>
                <span v-bind:id="link05" @click="scrollToAnchor()">
                    {{ name05 }}
                </span>
                <span v-bind:id="link06" @click="scrollToAnchor()">
                    {{ name06 }}
                </span>
                <span v-bind:id="link07" @click="scrollToAnchor()">
                    {{ name07 }}
                </span>
                <span v-bind:id="link08" @click="scrollToAnchor()">
                    {{ name08 }}
                </span>
                <span v-bind:id="link09" @click="scrollToAnchor()">
                    {{ name09 }}
                </span>
                <span v-bind:id="link10" @click="scrollToAnchor()">
                    {{ name10 }}
                </span>
                <span v-bind:id="link11" @click="scrollToAnchor()">
                    {{ name11 }}
                </span>
                <span v-bind:id="link12" @click="scrollToAnchor()">
                    {{ name12 }}
                </span>
                <span v-bind:id="link13" @click="scrollToAnchor()">
                    {{ name13 }}
                </span>
                <span v-bind:id="link14" @click="scrollToAnchor()">
                    {{ name14 }}
                </span>
                <span v-bind:id="link15" @click="scrollToAnchor()">
                    {{ name15 }}
                </span>
                <span v-bind:id="link16" @click="scrollToAnchor()">
                    {{ name16 }}
                </span>
                <span v-bind:id="link17" @click="scrollToAnchor()">
                    {{ name17 }}
                </span>
                <span v-bind:id="link18" @click="scrollToAnchor()">
                    {{ name18 }}
                </span>
                <span v-bind:id="link19" @click="scrollToAnchor()">
                    {{ name19 }}
                </span>
            </p>
        </div>
    </Transition>
</template>

<script>
export default {
    name: "JumpLinks2",
    props: {
        link0T: String,
        link01: String,
        link02: String,
        link03: String,
        link04: String,
        link05: String,
        link06: String,
        link07: String,
        link08: String,
        link09: String,
        link10: String,
        link11: String,
        link12: String,
        link13: String,
        link14: String,
        link15: String,
        link16: String,
        link17: String,
        link18: String,
        link19: String,
        name0T: String,
        name01: String,
        name02: String,
        name03: String,
        name04: String,
        name05: String,
        name06: String,
        name07: String,
        name08: String,
        name09: String,
        name10: String,
        name11: String,
        name12: String,
        name13: String,
        name14: String,
        name15: String,
        name16: String,
        name17: String,
        name18: String,
        name19: String,
    },
    data() {
        return {};
    },
    components: {},
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
