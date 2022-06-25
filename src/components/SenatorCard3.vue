<!--SenatorCard3: used for Leaders.-->
<!--Contains photo, first name, last name, party, state, leadership role.-->
<template>
    <div
        v-for="detail in details"
        :key="detail.bioguideId"
        class="senator-card"
    >
        <figure>
            <img
                :src="require(`../assets/images/${detail.portrait}.jpg`)"
                :alt="detail.firstName + ' ' + detail.lastName"
            >
            <figcaption>
                <a :href="`detail/${detail.portrait}`">
                    {{
                        detail.firstName +
                            " " +
                            detail.lastName +
                            " (" +
                            detail.party +
                            ")"
                    }}
                    <br>
                    {{ detail.state }}
                    <br>
                    {{ detail.leadershipPosition }}
                </a>
            </figcaption>
        </figure>
    </div>
</template>

<script>
export default {
    name: "SenatorCard3",
    props: {
        details: {
            type: Object,
            default: function() {
                return {};
            },
        },
    },
};
</script>
