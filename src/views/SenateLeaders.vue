<template>
    <section>
        <div class="gallery-title" id="leaders">
            <h2>Leaders</h2>
        </div>
        <InfoPanel
            heading="What are Leaders?"
            msg1="The 'offices' of the majority and the minority leader, as we know them today, are of recent development in the history of the Senate although individual senators since 1789 have assumed leading roles in the determination of what the Senate would or would not do. It was not until the latter part of the 19th century that the senators of each political party organized and assembled separately as a unit for the purpose of electing certain members from among their own to represent each, respectively, as agents in helping to run the legislative machine. According to the best available records, it was not until the 20th century that the posts of majority and minority leaders became official political positions."
            msg2="The floor leaders of each party today are elected by a majority vote of all the senators of the said party assembled in a conference or, as it sometimes is called, a caucus. The practice has been to choose the leader for a two-year term at the beginning of each Congress. "
        />
        <div
            class="senator-card"
            v-for="getLeader in getLeadership.leaders"
            :key="getLeader.bioguideId"
        >
            <figure @click="goToDetail(getLeader.portrait)">
                <img
                    :src="require(`../assets/images/${getLeader.portrait}.jpg`)"
                    :alt="getLeader.firstName + ' ' + getLeader.lastName"
                />
                <figcaption>
                    {{
                        getLeader.firstName +
                        " " +
                        getLeader.lastName +
                        ", " +
                        getLeader.party
                    }}
                    <br />
                    {{ getLeader.state }}
                    <br />
                    {{ getLeader.leadershipPosition }}
                </figcaption>
            </figure>
        </div>
    </section>
    <section>
        <div class="gallery-title" id="whips">
            <h2>Whips</h2>
        </div>
        <InfoPanel
            heading="What are Whips?"
            msg1="Both parties in the Senate elect whips. The term 'whip' comes from a fox-hunting expression- 'whipper-in'-referring to the member of the hunting team responsible for keeping the dogs from straying from the team during a chase. Established early in the 20th century, the development of party whips coincided with the evolution of party leaders in the Senate."
            msg2="Democrat James Hamilton Lewis of Illinois became the first party whip in 1913, and the Republicans established their own whip position two years later. Traditionally serving as assistant leaders, whips are mainly responsible for counting heads and rounding up party members for votes and quorum calls, and they occasionally stand in for the majority or minority leaders in their absence. In 1970 Republicans began referring to their whips as assistant leaders, but in 2003, they began using the whip title again. Democrats used the title whip until 2003, when they began calling the position assistant leader. In 2017 Democrats created a new position of assistant leader, which is separate from and ranks directly below the position of whip."
        />
        <div
            class="senator-card"
            v-for="getLeader in getLeadership.whips"
            :key="getLeader.bioguideId"
        >
            <figure @click="goToDetail(getLeader.portrait)">
                <img
                    :src="require(`../assets/images/${getLeader.portrait}.jpg`)"
                    :alt="getLeader.firstName + ' ' + getLeader.lastName"
                />
                <figcaption>
                    {{
                        getLeader.firstName +
                        " " +
                        getLeader.lastName +
                        ", " +
                        getLeader.party
                    }}
                    <br />
                    {{ getLeader.state }}
                    <br />
                    {{ getLeader.leadershipPosition }}
                </figcaption>
            </figure>
        </div>
    </section>
    <section>
        <div class="gallery-title" id="pros">
            <h2>Pro Tempore</h2>
        </div>
        <InfoPanel
            heading="What is the Pro Tempore?"
            msg1="The Constitution instructs the Senate to choose a president pro tempore to preside over the Senate in the absence of the vice president. Pro tempore is a Latin term meaning 'for the time being,' signaling that the position was originally conceived as a temporary replacement. The framers of the Constitution assumed that the vice president would preside over the Senate on a regular basis, so the Senate would only need to elect a president pro tempore to fill in as presiding officer for short periods of time."
            msg2="Although the Constitution does not specify who can serve as president pro tempore, the Senate has always elected one of its members to serve in this position. Since the mid-20th century, tradition has dictated that the senior member of the majority party serve as president pro tempore."
        />
        <div
            class="senator-card"
            v-for="getLeader in getLeadership.pros"
            :key="getLeader.bioguideId"
        >
            <figure @click="goToDetail(getLeader.portrait)">
                <img
                    :src="require(`../assets/images/${getLeader.portrait}.jpg`)"
                    :alt="getLeader.firstName + ' ' + getLeader.lastName"
                />
                <figcaption>
                    {{
                        getLeader.firstName +
                        " " +
                        getLeader.lastName +
                        ", " +
                        getLeader.party
                    }}
                    <br />
                    {{ getLeader.state }}
                    <br />
                    {{ getLeader.leadershipPosition }}
                </figcaption>
            </figure>
        </div>
    </section>
    <JumpsPanelO
        linkT=""
        nameT="⇧"
        link1="#leaders"
        name1="Leaders"
        link2="#whips"
        name2="Whips"
        link3="#pros"
        name3="Pro Tempore"
    />
</template>

<style scoped>
figure:hover {
    cursor: pointer;
    filter: grayscale(70%);
}
</style>

<script>
import InfoPanel from "@/components/InfoPanel.vue";
import JumpsPanelO from "@/components/JumpsPanelO.vue";
export default {
    name: "SenateLeaders",
    components: {
        InfoPanel,
        JumpsPanelO,
    },
    methods: {
        goToDetail(portrait) {
            this.$router.push({
                name: "SenateDetail",
                params: { portrait },
            });
        },
    },
    computed: {
        getLeadership() {
            return {
                leaders: this.$store.getters.getTheLeader("leader"),
                whips: this.$store.getters.getTheLeader("whip"),
                pros: this.$store.getters.getTheLeader("pro tempore"),
            };
        },
    },
};
</script>
