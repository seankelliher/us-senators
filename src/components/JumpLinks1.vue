<!--JumpLinks1: used for Class, Party, Leaders.-->
<!--Contains slots for three links.-->
<template>
    <Transition name="jump-links-move-up" appear>
        <div class="jump-links">
            <p>
                <!--Go to:&nbsp;-->
                <a v-bind:href="linkT">{{ nameT }}</a>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <a v-bind:href="link1">{{ name1 }}</a>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <a v-bind:href="link2">{{ name2 }}</a>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <a v-bind:href="link3">{{ name3 }}</a>
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
};
</script>
