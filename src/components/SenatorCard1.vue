<!--SenatorCard1: used for State.-->
<!--Contains photo, first name, last name, party.-->
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
                </a>
            </figcaption>
        </figure>
    </div>
</template>

<script>
export default {
    name: "SenatorCard1",
    props: {
        details: Object,
    },
};
</script>
