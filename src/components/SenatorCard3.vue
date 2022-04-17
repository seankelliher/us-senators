<!--SenatorCard3: used for Leaders.-->
<!--Contains photo, first name, last name, party, state, leadership role.-->
<template>
    <div
        class="senator-card"
        v-for="detail in details"
        :key="detail.bioguideId"
    >
        <figure>
            <img
                :src="require(`../assets/images/${detail.portrait}.jpg`)"
                :alt="detail.firstName + ' ' + detail.lastName"
            />
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
                    <br />
                    {{ detail.state }}
                    <br />
                    {{ detail.leadershipPosition }}
                </a>
            </figcaption>
        </figure>
    </div>
</template>

<script>
export default {
    name: "SenatorCard2",
    props: {
        details: Object,
    },
};
</script>
