<template>
    <div class="card-gallery">
        <p>{{ msg }}</p>
    </div>
</template>

<script>
export default {
    name: "SenatorCards",
    props: {
        msg: String,
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card-gallery {
    background: #fafafa; /*grey 50*/
}
</style>
