<!--SenatorCard2: used for Class, Party.-->
<!--Contains photo, first name, last name, party, state.-->
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
                </a>
            </figcaption>
        </figure>
    </div>
</template>

<script>
export default {
    name: "SenatorCard2",
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
