<!--JumpLinks1: used for Class, Party, Leaders.-->
<!--Contains slots for three links.-->
<template>
    <Transition name="jump-links-move-up" appear>
        <div class="jump-links">
            <p>
                <span v-bind:id="linkT" @click="scrollToTop()">
                    {{ nameT }}
                </span>
                <span v-bind:id="link1" @click="scrollToAnchor()">
                    {{ name1 }}
                </span>
                <span v-bind:id="link2" @click="scrollToAnchor()">
                    {{ name2 }}
                </span>
                <span v-bind:id="link3" @click="scrollToAnchor()">
                    {{ name3 }}
                </span>
            </p>
        </div>
    </Transition>
</template>

<script>
export default {
    name: "JumpLinks1",
    props: {
        linkT: String,
        link1: String,
        link2: String,
        link3: String,
        nameT: String,
        name1: String,
        name2: String,
        name3: String,
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
