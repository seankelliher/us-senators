<template>
    <section>
        <div
            class="senator-card-detail"
            v-for="getDetail in getDetails.senatorDetails"
            :key="getDetail.bioguideId"
        >
            <h2>{{ getDetail.firstName + " " + getDetail.lastName }}</h2>
            <figure>
                <img
                    :src="require(`../assets/images/${getDetail.portrait}.jpg`)"
                    :alt="getDetail.firstName + ' ' + getDetail.lastName"
                />
            </figure>
            <p>
                <strong>State:</strong> <br />
                {{ getDetail.state }}
            </p>
            <p v-if="getDetail.party === 'D'">
                <strong>Political Party:</strong> <br />Democratic
            </p>
            <p v-if="getDetail.party === 'I'">
                <strong>Political Party:</strong> <br />Independent
            </p>
            <p v-if="getDetail.party === 'R'">
                <strong>Political Party:</strong> <br />Republican
            </p>
            <p>
                <strong>Senate Class:</strong> <br />{{ getDetail.senateClass }}
            </p>
            <p>
                <strong>Assumed Office:</strong> <br />
                {{ getDetail.assumedOffice }}
            </p>
            <p v-if="getDetail.leadershipPosition === null">
                <strong>Leadership Position:</strong> <br />none
            </p>
            <p v-if="getDetail.leadershipPosition !== null">
                <strong>Leadership Position:</strong> <br />
                {{ getDetail.leadershipPosition }}
            </p>
            <p>
                <strong>Office Address:</strong> <br />{{ getDetail.address1
                }}<br />{{ getDetail.address2 }}
            </p>
            <p><strong>Telephone:</strong> <br />{{ getDetail.phone }}</p>
            <p>
                <strong>Website:</strong> <br />
                <a :href="`https://www.${getDetail.website}`" target="_blank">
                    {{ getDetail.website }}
                </a>
            </p>
            <p>
                <strong>Contact Form:</strong> <br />
                <a :href="`https://www.${getDetail.email}`" target="_blank">
                    {{ getDetail.email }}
                </a>
            </p>
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
    mounted() {
        window.scrollTo(0, 0);
    },
};
</script>
