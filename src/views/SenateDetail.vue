<template>
    <section>
        <div class="gallery-title">
            <h2>
                <!--Senator {{ this.$route.params.firstName }}
                {{ this.$route.params.lastName }}-->
            </h2>
        </div>
        <div
            class="senator-card"
            v-for="getDetail in getDetails.senatorDetails"
            :key="getDetail.bioguideId"
        >
            <figure>
                <img
                    :src="require(`../assets/images/${getDetail.portrait}.jpg`)"
                    :alt="getDetail.firstName + ' ' + getDetail.lastName"
                />
                <figcaption>
                    {{ getDetail.firstName + " " + getDetail.lastName }}
                    <br />
                    {{ getDetail.state }}
                </figcaption>
            </figure>
        </div>
    </section>
</template>

<script>
export default {
    name: "SenateDetail",
    data() {
        return {};
    },
    components: {},
    computed: {
        getDetails() {
            return {
                senatorDetails: this.$store.getters.getSenatorDetails(
                    this.$route.params.portrait
                ),
            };
        },
    },
};
</script>
