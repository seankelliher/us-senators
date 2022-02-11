<template>
    <section>
        <div class="gallery-title" id="states-a">
            <h2>Alabama</h2>
        </div>
        <StatsPanel
            v-bind:stat1="getStats.alabama.pop"
            v-bind:stat2="getStats.alabama.rank"
            v-bind:stat3="getStats.alabama.seats"
        />
        <div
            class="senator-card"
            v-for="getState in getStates.alabama"
            :key="getState.bioguideId"
        >
            <figure @click="goToDetail(getState.portrait)">
                <img
                    :src="require(`../assets/images/${getState.portrait}.jpg`)"
                    :alt="getState.firstName + ' ' + getState.lastName"
                />
                <figcaption>
                    {{
                        getState.firstName +
                        " " +
                        getState.lastName +
                        " (" +
                        getState.party +
                        ")"
                    }}
                </figcaption>
            </figure>
        </div>
    </section>
    <section>
        <div class="gallery-title">
            <h2>Alaska</h2>
        </div>
        <StatsPanel
            v-bind:stat1="getStats.alaska.pop"
            v-bind:stat2="getStats.alaska.rank"
            v-bind:stat3="getStats.alaska.seats"
        />
        <div
            class="senator-card"
            v-for="getState in getStates.alaska"
            :key="getState.bioguideId"
        >
            <figure @click="goToDetail(getState.portrait)">
                <img
                    :src="require(`../assets/images/${getState.portrait}.jpg`)"
                    :alt="getState.firstName + ' ' + getState.lastName"
                />
                <figcaption>
                    {{
                        getState.firstName +
                        " " +
                        getState.lastName +
                        " (" +
                        getState.party +
                        ")"
                    }}
                </figcaption>
            </figure>
        </div>
    </section>
    <section>
        <div class="gallery-title">
            <h2>Arizona</h2>
        </div>
        <StatsPanel
            v-bind:stat1="getStats.arizona.pop"
            v-bind:stat2="getStats.arizona.rank"
            v-bind:stat3="getStats.arizona.seats"
        />
        <div
            class="senator-card"
            v-for="getState in getStates.arizona"
            :key="getState.bioguideId"
        >
            <figure @click="goToDetail(getState.portrait)">
                <img
                    :src="require(`../assets/images/${getState.portrait}.jpg`)"
                    :alt="getState.firstName + ' ' + getState.lastName"
                />
                <figcaption>
                    {{
                        getState.firstName +
                        " " +
                        getState.lastName +
                        ", " +
                        " (" +
                        getState.party +
                        ")"
                    }}
                </figcaption>
            </figure>
        </div>
    </section>
    <section>
        <div class="gallery-title">
            <h2>Arkansas</h2>
        </div>
        <StatsPanel
            v-bind:stat1="getStats.arkansas.pop"
            v-bind:stat2="getStats.arkansas.rank"
            v-bind:stat3="getStats.arkansas.seats"
        />
        <div
            class="senator-card"
            v-for="getState in getStates.arkansas"
            :key="getState.bioguideId"
        >
            <figure @click="goToDetail(getState.portrait)">
                <img
                    :src="require(`../assets/images/${getState.portrait}.jpg`)"
                    :alt="getState.firstName + ' ' + getState.lastName"
                />
                <figcaption>
                    {{
                        getState.firstName +
                        " " +
                        getState.lastName +
                        " (" +
                        getState.party +
                        ")"
                    }}
                </figcaption>
            </figure>
        </div>
    </section>
    <section>
        <div class="gallery-title" id="states-c">
            <h2>California</h2>
        </div>
        <StatsPanel
            v-bind:stat1="getStats.california.pop"
            v-bind:stat2="getStats.california.rank"
            v-bind:stat3="getStats.california.seats"
        />
        <div
            class="senator-card"
            v-for="getState in getStates.california"
            :key="getState.bioguideId"
        >
            <figure @click="goToDetail(getState.portrait)">
                <img
                    :src="require(`../assets/images/${getState.portrait}.jpg`)"
                    :alt="getState.firstName + ' ' + getState.lastName"
                />
                <figcaption>
                    {{
                        getState.firstName +
                        " " +
                        getState.lastName +
                        " (" +
                        getState.party +
                        ")"
                    }}
                </figcaption>
            </figure>
        </div>
    </section>
    <section>
        <div class="gallery-title">
            <h2>Colorado</h2>
        </div>
        <StatsPanel
            v-bind:stat1="getStats.colorado.pop"
            v-bind:stat2="getStats.colorado.rank"
            v-bind:stat3="getStats.colorado.seats"
        />
        <div
            class="senator-card"
            v-for="getState in getStates.colorado"
            :key="getState.bioguideId"
        >
            <figure @click="goToDetail(getState.portrait)">
                <img
                    :src="require(`../assets/images/${getState.portrait}.jpg`)"
                    :alt="getState.firstName + ' ' + getState.lastName"
                />
                <figcaption>
                    {{
                        getState.firstName +
                        " " +
                        getState.lastName +
                        " (" +
                        getState.party +
                        ")"
                    }}
                </figcaption>
            </figure>
        </div>
    </section>
    <section>
        <div class="gallery-title">
            <h2>Connecticut</h2>
        </div>
        <StatsPanel
            v-bind:stat1="getStats.connecticut.pop"
            v-bind:stat2="getStats.connecticut.rank"
            v-bind:stat3="getStats.connecticut.seats"
        />
        <div
            class="senator-card"
            v-for="getState in getStates.connecticut"
            :key="getState.bioguideId"
        >
            <figure @click="goToDetail(getState.portrait)">
                <img
                    :src="require(`../assets/images/${getState.portrait}.jpg`)"
                    :alt="getState.firstName + ' ' + getState.lastName"
                />
                <figcaption>
                    {{
                        getState.firstName +
                        " " +
                        getState.lastName +
                        " (" +
                        getState.party +
                        ")"
                    }}
                </figcaption>
            </figure>
        </div>
    </section>
    <section>
        <div class="gallery-title" id="states-d">
            <h2>Delaware</h2>
        </div>
        <StatsPanel
            v-bind:stat1="getStats.delaware.pop"
            v-bind:stat2="getStats.delaware.rank"
            v-bind:stat3="getStats.delaware.seats"
        />
        <div
            class="senator-card"
            v-for="getState in getStates.delaware"
            :key="getState.bioguideId"
        >
            <figure @click="goToDetail(getState.portrait)">
                <img
                    :src="require(`../assets/images/${getState.portrait}.jpg`)"
                    :alt="getState.firstName + ' ' + getState.lastName"
                />
                <figcaption>
                    {{
                        getState.firstName +
                        " " +
                        getState.lastName +
                        " (" +
                        getState.party +
                        ")"
                    }}
                </figcaption>
            </figure>
        </div>
    </section>
    <section>
        <div class="gallery-title" id="states-f">
            <h2>Florida</h2>
        </div>
        <StatsPanel
            v-bind:stat1="getStats.florida.pop"
            v-bind:stat2="getStats.florida.rank"
            v-bind:stat3="getStats.florida.seats"
        />
        <div
            class="senator-card"
            v-for="getState in getStates.florida"
            :key="getState.bioguideId"
        >
            <figure @click="goToDetail(getState.portrait)">
                <img
                    :src="require(`../assets/images/${getState.portrait}.jpg`)"
                    :alt="getState.firstName + ' ' + getState.lastName"
                />
                <figcaption>
                    {{
                        getState.firstName +
                        " " +
                        getState.lastName +
                        " (" +
                        getState.party +
                        ")"
                    }}
                </figcaption>
            </figure>
        </div>
    </section>
    <section>
        <div class="gallery-title" id="states-g">
            <h2>Georgia</h2>
        </div>
        <StatsPanel
            v-bind:stat1="getStats.georgia.pop"
            v-bind:stat2="getStats.georgia.rank"
            v-bind:stat3="getStats.georgia.seats"
        />
        <div
            class="senator-card"
            v-for="getState in getStates.georgia"
            :key="getState.bioguideId"
        >
            <figure @click="goToDetail(getState.portrait)">
                <img
                    :src="require(`../assets/images/${getState.portrait}.jpg`)"
                    :alt="getState.firstName + ' ' + getState.lastName"
                />
                <figcaption>
                    {{
                        getState.firstName +
                        " " +
                        getState.lastName +
                        " (" +
                        getState.party +
                        ")"
                    }}
                </figcaption>
            </figure>
        </div>
    </section>
    <section>
        <div class="gallery-title" id="states-h">
            <h2>Hawaii</h2>
        </div>
        <StatsPanel
            v-bind:stat1="getStats.hawaii.pop"
            v-bind:stat2="getStats.hawaii.rank"
            v-bind:stat3="getStats.hawaii.seats"
        />
        <div
            class="senator-card"
            v-for="getState in getStates.hawaii"
            :key="getState.bioguideId"
        >
            <figure @click="goToDetail(getState.portrait)">
                <img
                    :src="require(`../assets/images/${getState.portrait}.jpg`)"
                    :alt="getState.firstName + ' ' + getState.lastName"
                />
                <figcaption>
                    {{
                        getState.firstName +
                        " " +
                        getState.lastName +
                        " (" +
                        getState.party +
                        ")"
                    }}
                </figcaption>
            </figure>
        </div>
    </section>
    <section>
        <div class="gallery-title" id="states-i">
            <h2>Idaho</h2>
        </div>
        <StatsPanel
            v-bind:stat1="getStats.idaho.pop"
            v-bind:stat2="getStats.idaho.rank"
            v-bind:stat3="getStats.idaho.seats"
        />
        <div
            class="senator-card"
            v-for="getState in getStates.idaho"
            :key="getState.bioguideId"
        >
            <figure @click="goToDetail(getState.portrait)">
                <img
                    :src="require(`../assets/images/${getState.portrait}.jpg`)"
                    :alt="getState.firstName + ' ' + getState.lastName"
                />
                <figcaption>
                    {{
                        getState.firstName +
                        " " +
                        getState.lastName +
                        " (" +
                        getState.party +
                        ")"
                    }}
                </figcaption>
            </figure>
        </div>
    </section>
    <section>
        <div class="gallery-title">
            <h2>Illinois</h2>
        </div>
        <StatsPanel
            v-bind:stat1="getStats.illinois.pop"
            v-bind:stat2="getStats.illinois.rank"
            v-bind:stat3="getStats.illinois.seats"
        />
        <div
            class="senator-card"
            v-for="getState in getStates.illinois"
            :key="getState.bioguideId"
        >
            <figure @click="goToDetail(getState.portrait)">
                <img
                    :src="require(`../assets/images/${getState.portrait}.jpg`)"
                    :alt="getState.firstName + ' ' + getState.lastName"
                />
                <figcaption>
                    {{
                        getState.firstName +
                        " " +
                        getState.lastName +
                        " (" +
                        getState.party +
                        ")"
                    }}
                </figcaption>
            </figure>
        </div>
    </section>
    <section>
        <div class="gallery-title">
            <h2>Indiana</h2>
        </div>
        <StatsPanel
            v-bind:stat1="getStats.indiana.pop"
            v-bind:stat2="getStats.indiana.rank"
            v-bind:stat3="getStats.indiana.seats"
        />
        <div
            class="senator-card"
            v-for="getState in getStates.indiana"
            :key="getState.bioguideId"
        >
            <figure @click="goToDetail(getState.portrait)">
                <img
                    :src="require(`../assets/images/${getState.portrait}.jpg`)"
                    :alt="getState.firstName + ' ' + getState.lastName"
                />
                <figcaption>
                    {{
                        getState.firstName +
                        " " +
                        getState.lastName +
                        " (" +
                        getState.party +
                        ")"
                    }}
                </figcaption>
            </figure>
        </div>
    </section>
    <section>
        <div class="gallery-title">
            <h2>Iowa</h2>
        </div>
        <StatsPanel
            v-bind:stat1="getStats.iowa.pop"
            v-bind:stat2="getStats.iowa.rank"
            v-bind:stat3="getStats.iowa.seats"
        />
        <div
            class="senator-card"
            v-for="getState in getStates.iowa"
            :key="getState.bioguideId"
        >
            <figure @click="goToDetail(getState.portrait)">
                <img
                    :src="require(`../assets/images/${getState.portrait}.jpg`)"
                    :alt="getState.firstName + ' ' + getState.lastName"
                />
                <figcaption>
                    {{
                        getState.firstName +
                        " " +
                        getState.lastName +
                        " (" +
                        getState.party +
                        ")"
                    }}
                </figcaption>
            </figure>
        </div>
    </section>
    <section>
        <div class="gallery-title" id="states-k">
            <h2>Kansas</h2>
        </div>
        <StatsPanel
            v-bind:stat1="getStats.kansas.pop"
            v-bind:stat2="getStats.kansas.rank"
            v-bind:stat3="getStats.kansas.seats"
        />
        <div
            class="senator-card"
            v-for="getState in getStates.kansas"
            :key="getState.bioguideId"
        >
            <figure @click="goToDetail(getState.portrait)">
                <img
                    :src="require(`../assets/images/${getState.portrait}.jpg`)"
                    :alt="getState.firstName + ' ' + getState.lastName"
                />
                <figcaption>
                    {{
                        getState.firstName +
                        " " +
                        getState.lastName +
                        " (" +
                        getState.party +
                        ")"
                    }}
                </figcaption>
            </figure>
        </div>
    </section>
    <section>
        <div class="gallery-title">
            <h2>Kentucky</h2>
        </div>
        <StatsPanel
            v-bind:stat1="getStats.kentucky.pop"
            v-bind:stat2="getStats.kentucky.rank"
            v-bind:stat3="getStats.kentucky.seats"
        />
        <div
            class="senator-card"
            v-for="getState in getStates.kentucky"
            :key="getState.bioguideId"
        >
            <figure @click="goToDetail(getState.portrait)">
                <img
                    :src="require(`../assets/images/${getState.portrait}.jpg`)"
                    :alt="getState.firstName + ' ' + getState.lastName"
                />
                <figcaption>
                    {{
                        getState.firstName +
                        " " +
                        getState.lastName +
                        " (" +
                        getState.party +
                        ")"
                    }}
                </figcaption>
            </figure>
        </div>
    </section>
    <section>
        <div class="gallery-title" id="states-l">
            <h2>Louisiana</h2>
        </div>
        <StatsPanel
            v-bind:stat1="getStats.louisiana.pop"
            v-bind:stat2="getStats.louisiana.rank"
            v-bind:stat3="getStats.louisiana.seats"
        />
        <div
            class="senator-card"
            v-for="getState in getStates.louisiana"
            :key="getState.bioguideId"
        >
            <figure @click="goToDetail(getState.portrait)">
                <img
                    :src="require(`../assets/images/${getState.portrait}.jpg`)"
                    :alt="getState.firstName + ' ' + getState.lastName"
                />
                <figcaption>
                    {{
                        getState.firstName +
                        " " +
                        getState.lastName +
                        " (" +
                        getState.party +
                        ")"
                    }}
                </figcaption>
            </figure>
        </div>
    </section>
    <section>
        <div class="gallery-title" id="states-m">
            <h2>Maine</h2>
        </div>
        <StatsPanel
            v-bind:stat1="getStats.maine.pop"
            v-bind:stat2="getStats.maine.rank"
            v-bind:stat3="getStats.maine.seats"
        />
        <div
            class="senator-card"
            v-for="getState in getStates.maine"
            :key="getState.bioguideId"
        >
            <figure @click="goToDetail(getState.portrait)">
                <img
                    :src="require(`../assets/images/${getState.portrait}.jpg`)"
                    :alt="getState.firstName + ' ' + getState.lastName"
                />
                <figcaption>
                    {{
                        getState.firstName +
                        " " +
                        getState.lastName +
                        " (" +
                        getState.party +
                        ")"
                    }}
                </figcaption>
            </figure>
        </div>
    </section>
    <section>
        <div class="gallery-title">
            <h2>Maryland</h2>
        </div>
        <StatsPanel
            v-bind:stat1="getStats.maryland.pop"
            v-bind:stat2="getStats.maryland.rank"
            v-bind:stat3="getStats.maryland.seats"
        />
        <div
            class="senator-card"
            v-for="getState in getStates.maryland"
            :key="getState.bioguideId"
        >
            <figure @click="goToDetail(getState.portrait)">
                <img
                    :src="require(`../assets/images/${getState.portrait}.jpg`)"
                    :alt="getState.firstName + ' ' + getState.lastName"
                />
                <figcaption>
                    {{
                        getState.firstName +
                        " " +
                        getState.lastName +
                        " (" +
                        getState.party +
                        ")"
                    }}
                </figcaption>
            </figure>
        </div>
    </section>
    <section>
        <div class="gallery-title">
            <h2>Massachusetts</h2>
        </div>
        <StatsPanel
            v-bind:stat1="getStats.massachusetts.pop"
            v-bind:stat2="getStats.massachusetts.rank"
            v-bind:stat3="getStats.massachusetts.seats"
        />
        <div
            class="senator-card"
            v-for="getState in getStates.massachusetts"
            :key="getState.bioguideId"
        >
            <figure @click="goToDetail(getState.portrait)">
                <img
                    :src="require(`../assets/images/${getState.portrait}.jpg`)"
                    :alt="getState.firstName + ' ' + getState.lastName"
                />
                <figcaption>
                    {{
                        getState.firstName +
                        " " +
                        getState.lastName +
                        " (" +
                        getState.party +
                        ")"
                    }}
                </figcaption>
            </figure>
        </div>
    </section>
    <section>
        <div class="gallery-title">
            <h2>Michigan</h2>
        </div>
        <StatsPanel
            v-bind:stat1="getStats.michigan.pop"
            v-bind:stat2="getStats.michigan.rank"
            v-bind:stat3="getStats.michigan.seats"
        />
        <div
            class="senator-card"
            v-for="getState in getStates.michigan"
            :key="getState.bioguideId"
        >
            <figure @click="goToDetail(getState.portrait)">
                <img
                    :src="require(`../assets/images/${getState.portrait}.jpg`)"
                    :alt="getState.firstName + ' ' + getState.lastName"
                />
                <figcaption>
                    {{
                        getState.firstName +
                        " " +
                        getState.lastName +
                        " (" +
                        getState.party +
                        ")"
                    }}
                </figcaption>
            </figure>
        </div>
    </section>
    <section>
        <div class="gallery-title">
            <h2>Minnesota</h2>
        </div>
        <StatsPanel
            v-bind:stat1="getStats.minnesota.pop"
            v-bind:stat2="getStats.minnesota.rank"
            v-bind:stat3="getStats.minnesota.seats"
        />
        <div
            class="senator-card"
            v-for="getState in getStates.minnesota"
            :key="getState.bioguideId"
        >
            <figure @click="goToDetail(getState.portrait)">
                <img
                    :src="require(`../assets/images/${getState.portrait}.jpg`)"
                    :alt="getState.firstName + ' ' + getState.lastName"
                />
                <figcaption>
                    {{
                        getState.firstName +
                        " " +
                        getState.lastName +
                        " (" +
                        getState.party +
                        ")"
                    }}
                </figcaption>
            </figure>
        </div>
    </section>
    <section>
        <div class="gallery-title">
            <h2>Mississippi</h2>
        </div>
        <StatsPanel
            v-bind:stat1="getStats.mississippi.pop"
            v-bind:stat2="getStats.mississippi.rank"
            v-bind:stat3="getStats.mississippi.seats"
        />
        <div
            class="senator-card"
            v-for="getState in getStates.mississippi"
            :key="getState.bioguideId"
        >
            <figure @click="goToDetail(getState.portrait)">
                <img
                    :src="require(`../assets/images/${getState.portrait}.jpg`)"
                    :alt="getState.firstName + ' ' + getState.lastName"
                />
                <figcaption>
                    {{
                        getState.firstName +
                        " " +
                        getState.lastName +
                        " (" +
                        getState.party +
                        ")"
                    }}
                </figcaption>
            </figure>
        </div>
    </section>
    <section>
        <div class="gallery-title">
            <h2>Missouri</h2>
        </div>
        <StatsPanel
            v-bind:stat1="getStats.missouri.pop"
            v-bind:stat2="getStats.missouri.rank"
            v-bind:stat3="getStats.missouri.seats"
        />
        <div
            class="senator-card"
            v-for="getState in getStates.missouri"
            :key="getState.bioguideId"
        >
            <figure @click="goToDetail(getState.portrait)">
                <img
                    :src="require(`../assets/images/${getState.portrait}.jpg`)"
                    :alt="getState.firstName + ' ' + getState.lastName"
                />
                <figcaption>
                    {{
                        getState.firstName +
                        " " +
                        getState.lastName +
                        " (" +
                        getState.party +
                        ")"
                    }}
                </figcaption>
            </figure>
        </div>
    </section>
    <section>
        <div class="gallery-title">
            <h2>Montana</h2>
        </div>
        <StatsPanel
            v-bind:stat1="getStats.montana.pop"
            v-bind:stat2="getStats.montana.rank"
            v-bind:stat3="getStats.montana.seats"
        />
        <div
            class="senator-card"
            v-for="getState in getStates.montana"
            :key="getState.bioguideId"
        >
            <figure @click="goToDetail(getState.portrait)">
                <img
                    :src="require(`../assets/images/${getState.portrait}.jpg`)"
                    :alt="getState.firstName + ' ' + getState.lastName"
                />
                <figcaption>
                    {{
                        getState.firstName +
                        " " +
                        getState.lastName +
                        " (" +
                        getState.party +
                        ")"
                    }}
                </figcaption>
            </figure>
        </div>
    </section>
    <section>
        <div class="gallery-title" id="states-n">
            <h2>Nebraska</h2>
        </div>
        <StatsPanel
            v-bind:stat1="getStats.nebraska.pop"
            v-bind:stat2="getStats.nebraska.rank"
            v-bind:stat3="getStats.nebraska.seats"
        />
        <div
            class="senator-card"
            v-for="getState in getStates.nebraska"
            :key="getState.bioguideId"
        >
            <figure @click="goToDetail(getState.portrait)">
                <img
                    :src="require(`../assets/images/${getState.portrait}.jpg`)"
                    :alt="getState.firstName + ' ' + getState.lastName"
                />
                <figcaption>
                    {{
                        getState.firstName +
                        " " +
                        getState.lastName +
                        " (" +
                        getState.party +
                        ")"
                    }}
                </figcaption>
            </figure>
        </div>
    </section>
    <section>
        <div class="gallery-title">
            <h2>Nevada</h2>
        </div>
        <StatsPanel
            v-bind:stat1="getStats.nevada.pop"
            v-bind:stat2="getStats.nevada.rank"
            v-bind:stat3="getStats.nevada.seats"
        />
        <div
            class="senator-card"
            v-for="getState in getStates.nevada"
            :key="getState.bioguideId"
        >
            <figure @click="goToDetail(getState.portrait)">
                <img
                    :src="require(`../assets/images/${getState.portrait}.jpg`)"
                    :alt="getState.firstName + ' ' + getState.lastName"
                />
                <figcaption>
                    {{
                        getState.firstName +
                        " " +
                        getState.lastName +
                        " (" +
                        getState.party +
                        ")"
                    }}
                </figcaption>
            </figure>
        </div>
    </section>
    <section>
        <div class="gallery-title">
            <h2>New Hampshire</h2>
        </div>
        <StatsPanel
            v-bind:stat1="getStats.newHampshire.pop"
            v-bind:stat2="getStats.newHampshire.rank"
            v-bind:stat3="getStats.newHampshire.seats"
        />
        <div
            class="senator-card"
            v-for="getState in getStates.newHampshire"
            :key="getState.bioguideId"
        >
            <figure @click="goToDetail(getState.portrait)">
                <img
                    :src="require(`../assets/images/${getState.portrait}.jpg`)"
                    :alt="getState.firstName + ' ' + getState.lastName"
                />
                <figcaption>
                    {{
                        getState.firstName +
                        " " +
                        getState.lastName +
                        " (" +
                        getState.party +
                        ")"
                    }}
                </figcaption>
            </figure>
        </div>
    </section>
    <section>
        <div class="gallery-title">
            <h2>New Jersey</h2>
        </div>
        <StatsPanel
            v-bind:stat1="getStats.newJersey.pop"
            v-bind:stat2="getStats.newJersey.rank"
            v-bind:stat3="getStats.newJersey.seats"
        />
        <div
            class="senator-card"
            v-for="getState in getStates.newJersey"
            :key="getState.bioguideId"
        >
            <figure @click="goToDetail(getState.portrait)">
                <img
                    :src="require(`../assets/images/${getState.portrait}.jpg`)"
                    :alt="getState.firstName + ' ' + getState.lastName"
                />
                <figcaption>
                    {{
                        getState.firstName +
                        " " +
                        getState.lastName +
                        " (" +
                        getState.party +
                        ")"
                    }}
                </figcaption>
            </figure>
        </div>
    </section>
    <section>
        <div class="gallery-title">
            <h2>New Mexico</h2>
        </div>
        <StatsPanel
            v-bind:stat1="getStats.newMexico.pop"
            v-bind:stat2="getStats.newMexico.rank"
            v-bind:stat3="getStats.newMexico.seats"
        />
        <div
            class="senator-card"
            v-for="getState in getStates.newMexico"
            :key="getState.bioguideId"
        >
            <figure @click="goToDetail(getState.portrait)">
                <img
                    :src="require(`../assets/images/${getState.portrait}.jpg`)"
                    :alt="getState.firstName + ' ' + getState.lastName"
                />
                <figcaption>
                    {{
                        getState.firstName +
                        " " +
                        getState.lastName +
                        " (" +
                        getState.party +
                        ")"
                    }}
                </figcaption>
            </figure>
        </div>
    </section>
    <section>
        <div class="gallery-title">
            <h2>New York</h2>
        </div>
        <StatsPanel
            v-bind:stat1="getStats.newYork.pop"
            v-bind:stat2="getStats.newYork.rank"
            v-bind:stat3="getStats.newYork.seats"
        />
        <div
            class="senator-card"
            v-for="getState in getStates.newYork"
            :key="getState.bioguideId"
        >
            <figure @click="goToDetail(getState.portrait)">
                <img
                    :src="require(`../assets/images/${getState.portrait}.jpg`)"
                    :alt="getState.firstName + ' ' + getState.lastName"
                />
                <figcaption>
                    {{
                        getState.firstName +
                        " " +
                        getState.lastName +
                        " (" +
                        getState.party +
                        ")"
                    }}
                </figcaption>
            </figure>
        </div>
    </section>
    <section>
        <div class="gallery-title">
            <h2>North Carolina</h2>
        </div>
        <StatsPanel
            v-bind:stat1="getStats.northCarolina.pop"
            v-bind:stat2="getStats.northCarolina.rank"
            v-bind:stat3="getStats.northCarolina.seats"
        />
        <div
            class="senator-card"
            v-for="getState in getStates.northCarolina"
            :key="getState.bioguideId"
        >
            <figure @click="goToDetail(getState.portrait)">
                <img
                    :src="require(`../assets/images/${getState.portrait}.jpg`)"
                    :alt="getState.firstName + ' ' + getState.lastName"
                />
                <figcaption>
                    {{
                        getState.firstName +
                        " " +
                        getState.lastName +
                        " (" +
                        getState.party +
                        ")"
                    }}
                </figcaption>
            </figure>
        </div>
    </section>
    <section>
        <div class="gallery-title">
            <h2>North Dakota</h2>
        </div>
        <StatsPanel
            v-bind:stat1="getStats.northDakota.pop"
            v-bind:stat2="getStats.northDakota.rank"
            v-bind:stat3="getStats.northDakota.seats"
        />
        <div
            class="senator-card"
            v-for="getState in getStates.northDakota"
            :key="getState.bioguideId"
        >
            <figure @click="goToDetail(getState.portrait)">
                <img
                    :src="require(`../assets/images/${getState.portrait}.jpg`)"
                    :alt="getState.firstName + ' ' + getState.lastName"
                />
                <figcaption>
                    {{
                        getState.firstName +
                        " " +
                        getState.lastName +
                        " (" +
                        getState.party +
                        ")"
                    }}
                </figcaption>
            </figure>
        </div>
    </section>
    <section>
        <div class="gallery-title" id="states-o">
            <h2>Ohio</h2>
        </div>
        <StatsPanel
            v-bind:stat1="getStats.ohio.pop"
            v-bind:stat2="getStats.ohio.rank"
            v-bind:stat3="getStats.ohio.seats"
        />
        <div
            class="senator-card"
            v-for="getState in getStates.ohio"
            :key="getState.bioguideId"
        >
            <figure @click="goToDetail(getState.portrait)">
                <img
                    :src="require(`../assets/images/${getState.portrait}.jpg`)"
                    :alt="getState.firstName + ' ' + getState.lastName"
                />
                <figcaption>
                    {{
                        getState.firstName +
                        " " +
                        getState.lastName +
                        " (" +
                        getState.party +
                        ")"
                    }}
                </figcaption>
            </figure>
        </div>
    </section>
    <section>
        <div class="gallery-title">
            <h2>Oklahoma</h2>
        </div>
        <StatsPanel
            v-bind:stat1="getStats.oklahoma.pop"
            v-bind:stat2="getStats.oklahoma.rank"
            v-bind:stat3="getStats.oklahoma.seats"
        />
        <div
            class="senator-card"
            v-for="getState in getStates.oklahoma"
            :key="getState.bioguideId"
        >
            <figure @click="goToDetail(getState.portrait)">
                <img
                    :src="require(`../assets/images/${getState.portrait}.jpg`)"
                    :alt="getState.firstName + ' ' + getState.lastName"
                />
                <figcaption>
                    {{
                        getState.firstName +
                        " " +
                        getState.lastName +
                        " (" +
                        getState.party +
                        ")"
                    }}
                </figcaption>
            </figure>
        </div>
    </section>
    <section>
        <div class="gallery-title">
            <h2>Oregon</h2>
        </div>
        <StatsPanel
            v-bind:stat1="getStats.oregon.pop"
            v-bind:stat2="getStats.oregon.rank"
            v-bind:stat3="getStats.oregon.seats"
        />
        <div
            class="senator-card"
            v-for="getState in getStates.oregon"
            :key="getState.bioguideId"
        >
            <figure @click="goToDetail(getState.portrait)">
                <img
                    :src="require(`../assets/images/${getState.portrait}.jpg`)"
                    :alt="getState.firstName + ' ' + getState.lastName"
                />
                <figcaption>
                    {{
                        getState.firstName +
                        " " +
                        getState.lastName +
                        " (" +
                        getState.party +
                        ")"
                    }}
                </figcaption>
            </figure>
        </div>
    </section>
    <section>
        <div class="gallery-title" id="states-p">
            <h2>Pennsylvania</h2>
        </div>
        <StatsPanel
            v-bind:stat1="getStats.pennsylvania.pop"
            v-bind:stat2="getStats.pennsylvania.rank"
            v-bind:stat3="getStats.pennsylvania.seats"
        />
        <div
            class="senator-card"
            v-for="getState in getStates.pennsylvania"
            :key="getState.bioguideId"
        >
            <figure @click="goToDetail(getState.portrait)">
                <img
                    :src="require(`../assets/images/${getState.portrait}.jpg`)"
                    :alt="getState.firstName + ' ' + getState.lastName"
                />
                <figcaption>
                    {{
                        getState.firstName +
                        " " +
                        getState.lastName +
                        " (" +
                        getState.party +
                        ")"
                    }}
                </figcaption>
            </figure>
        </div>
    </section>
    <section>
        <div class="gallery-title" id="states-r">
            <h2>Rhode Island</h2>
        </div>
        <StatsPanel
            v-bind:stat1="getStats.rhodeIsland.pop"
            v-bind:stat2="getStats.rhodeIsland.rank"
            v-bind:stat3="getStats.rhodeIsland.seats"
        />
        <div
            class="senator-card"
            v-for="getState in getStates.rhodeIsland"
            :key="getState.bioguideId"
        >
            <figure @click="goToDetail(getState.portrait)">
                <img
                    :src="require(`../assets/images/${getState.portrait}.jpg`)"
                    :alt="getState.firstName + ' ' + getState.lastName"
                />
                <figcaption>
                    {{
                        getState.firstName +
                        " " +
                        getState.lastName +
                        " (" +
                        getState.party +
                        ")"
                    }}
                </figcaption>
            </figure>
        </div>
    </section>
    <section>
        <div class="gallery-title" id="states-s">
            <h2>South Carolina</h2>
        </div>
        <StatsPanel
            v-bind:stat1="getStats.southCarolina.pop"
            v-bind:stat2="getStats.southCarolina.rank"
            v-bind:stat3="getStats.southCarolina.seats"
        />
        <div
            class="senator-card"
            v-for="getState in getStates.southCarolina"
            :key="getState.bioguideId"
        >
            <figure @click="goToDetail(getState.portrait)">
                <img
                    :src="require(`../assets/images/${getState.portrait}.jpg`)"
                    :alt="getState.firstName + ' ' + getState.lastName"
                />
                <figcaption>
                    {{
                        getState.firstName +
                        " " +
                        getState.lastName +
                        " (" +
                        getState.party +
                        ")"
                    }}
                </figcaption>
            </figure>
        </div>
    </section>
    <section>
        <div class="gallery-title">
            <h2>South Dakota</h2>
        </div>
        <StatsPanel
            v-bind:stat1="getStats.southDakota.pop"
            v-bind:stat2="getStats.southDakota.rank"
            v-bind:stat3="getStats.southDakota.seats"
        />
        <div
            class="senator-card"
            v-for="getState in getStates.southDakota"
            :key="getState.bioguideId"
        >
            <figure @click="goToDetail(getState.portrait)">
                <img
                    :src="require(`../assets/images/${getState.portrait}.jpg`)"
                    :alt="getState.firstName + ' ' + getState.lastName"
                />
                <figcaption>
                    {{
                        getState.firstName +
                        " " +
                        getState.lastName +
                        " (" +
                        getState.party +
                        ")"
                    }}
                </figcaption>
            </figure>
        </div>
    </section>
    <section>
        <div class="gallery-title" id="states-t">
            <h2>Tennessee</h2>
        </div>
        <StatsPanel
            v-bind:stat1="getStats.tennessee.pop"
            v-bind:stat2="getStats.tennessee.rank"
            v-bind:stat3="getStats.tennessee.seats"
        />
        <div
            class="senator-card"
            v-for="getState in getStates.tennessee"
            :key="getState.bioguideId"
        >
            <figure @click="goToDetail(getState.portrait)">
                <img
                    :src="require(`../assets/images/${getState.portrait}.jpg`)"
                    :alt="getState.firstName + ' ' + getState.lastName"
                />
                <figcaption>
                    {{
                        getState.firstName +
                        " " +
                        getState.lastName +
                        " (" +
                        getState.party +
                        ")"
                    }}
                </figcaption>
            </figure>
        </div>
    </section>
    <section>
        <div class="gallery-title">
            <h2>Texas</h2>
        </div>
        <StatsPanel
            v-bind:stat1="getStats.texas.pop"
            v-bind:stat2="getStats.texas.rank"
            v-bind:stat3="getStats.texas.seats"
        />
        <div
            class="senator-card"
            v-for="getState in getStates.texas"
            :key="getState.bioguideId"
        >
            <figure @click="goToDetail(getState.portrait)">
                <img
                    :src="require(`../assets/images/${getState.portrait}.jpg`)"
                    :alt="getState.firstName + ' ' + getState.lastName"
                />
                <figcaption>
                    {{
                        getState.firstName +
                        " " +
                        getState.lastName +
                        " (" +
                        getState.party +
                        ")"
                    }}
                </figcaption>
            </figure>
        </div>
    </section>
    <section>
        <div class="gallery-title" id="states-u">
            <h2>Utah</h2>
        </div>
        <StatsPanel
            v-bind:stat1="getStats.utah.pop"
            v-bind:stat2="getStats.utah.rank"
            v-bind:stat3="getStats.utah.seats"
        />
        <div
            class="senator-card"
            v-for="getState in getStates.utah"
            :key="getState.bioguideId"
        >
            <figure @click="goToDetail(getState.portrait)">
                <img
                    :src="require(`../assets/images/${getState.portrait}.jpg`)"
                    :alt="getState.firstName + ' ' + getState.lastName"
                />
                <figcaption>
                    {{
                        getState.firstName +
                        " " +
                        getState.lastName +
                        " (" +
                        getState.party +
                        ")"
                    }}
                </figcaption>
            </figure>
        </div>
    </section>
    <section>
        <div class="gallery-title" id="states-v">
            <h2>Vermont</h2>
        </div>
        <StatsPanel
            v-bind:stat1="getStats.vermont.pop"
            v-bind:stat2="getStats.vermont.rank"
            v-bind:stat3="getStats.vermont.seats"
        />
        <div
            class="senator-card"
            v-for="getState in getStates.vermont"
            :key="getState.bioguideId"
        >
            <figure @click="goToDetail(getState.portrait)">
                <img
                    :src="require(`../assets/images/${getState.portrait}.jpg`)"
                    :alt="getState.firstName + ' ' + getState.lastName"
                />
                <figcaption>
                    {{
                        getState.firstName +
                        " " +
                        getState.lastName +
                        " (" +
                        getState.party +
                        ")"
                    }}
                </figcaption>
            </figure>
        </div>
    </section>
    <section>
        <div class="gallery-title">
            <h2>Virginia</h2>
        </div>
        <StatsPanel
            v-bind:stat1="getStats.virginia.pop"
            v-bind:stat2="getStats.virginia.rank"
            v-bind:stat3="getStats.virginia.seats"
        />
        <div
            class="senator-card"
            v-for="getState in getStates.virginia"
            :key="getState.bioguideId"
        >
            <figure @click="goToDetail(getState.portrait)">
                <img
                    :src="require(`../assets/images/${getState.portrait}.jpg`)"
                    :alt="getState.firstName + ' ' + getState.lastName"
                />
                <figcaption>
                    {{
                        getState.firstName +
                        " " +
                        getState.lastName +
                        " (" +
                        getState.party +
                        ")"
                    }}
                </figcaption>
            </figure>
        </div>
    </section>
    <section>
        <div class="gallery-title" id="states-w">
            <h2>Washington</h2>
        </div>
        <StatsPanel
            v-bind:stat1="getStats.washington.pop"
            v-bind:stat2="getStats.washington.rank"
            v-bind:stat3="getStats.washington.seats"
        />
        <div
            class="senator-card"
            v-for="getState in getStates.washington"
            :key="getState.bioguideId"
        >
            <figure @click="goToDetail(getState.portrait)">
                <img
                    :src="require(`../assets/images/${getState.portrait}.jpg`)"
                    :alt="getState.firstName + ' ' + getState.lastName"
                />
                <figcaption>
                    {{
                        getState.firstName +
                        " " +
                        getState.lastName +
                        " (" +
                        getState.party +
                        ")"
                    }}
                </figcaption>
            </figure>
        </div>
    </section>
    <section>
        <div class="gallery-title">
            <h2>West Virginia</h2>
        </div>
        <StatsPanel
            v-bind:stat1="getStats.westVirginia.pop"
            v-bind:stat2="getStats.westVirginia.rank"
            v-bind:stat3="getStats.westVirginia.seats"
        />
        <div
            class="senator-card"
            v-for="getState in getStates.westVirginia"
            :key="getState.bioguideId"
        >
            <figure @click="goToDetail(getState.portrait)">
                <img
                    :src="require(`../assets/images/${getState.portrait}.jpg`)"
                    :alt="getState.firstName + ' ' + getState.lastName"
                />
                <figcaption>
                    {{
                        getState.firstName +
                        " " +
                        getState.lastName +
                        " (" +
                        getState.party +
                        ")"
                    }}
                </figcaption>
            </figure>
        </div>
    </section>
    <section>
        <div class="gallery-title">
            <h2>Wisconsin</h2>
        </div>
        <StatsPanel
            v-bind:stat1="getStats.wisconsin.pop"
            v-bind:stat2="getStats.wisconsin.rank"
            v-bind:stat3="getStats.wisconsin.seats"
        />
        <div
            class="senator-card"
            v-for="getState in getStates.wisconsin"
            :key="getState.bioguideId"
        >
            <figure @click="goToDetail(getState.portrait)">
                <img
                    :src="require(`../assets/images/${getState.portrait}.jpg`)"
                    :alt="getState.firstName + ' ' + getState.lastName"
                />
                <figcaption>
                    {{
                        getState.firstName +
                        " " +
                        getState.lastName +
                        " (" +
                        getState.party +
                        ")"
                    }}
                </figcaption>
            </figure>
        </div>
    </section>
    <section>
        <div class="gallery-title">
            <h2>Wyoming</h2>
        </div>
        <StatsPanel
            v-bind:stat1="getStats.wyoming.pop"
            v-bind:stat2="getStats.wyoming.rank"
            v-bind:stat3="getStats.wyoming.seats"
        />
        <div
            class="senator-card"
            v-for="getState in getStates.wyoming"
            :key="getState.bioguideId"
        >
            <figure @click="goToDetail(getState.portrait)">
                <img
                    :src="require(`../assets/images/${getState.portrait}.jpg`)"
                    :alt="getState.firstName + ' ' + getState.lastName"
                />
                <figcaption>
                    {{
                        getState.firstName +
                        " " +
                        getState.lastName +
                        " (" +
                        getState.party +
                        ")"
                    }}
                </figcaption>
            </figure>
        </div>
    </section>
    <JumpsPanelS
        link0T=""
        name0T="⇧"
        link01="#states-a"
        name01="A"
        link02="#states-c"
        name02="C"
        link03="#states-d"
        name03="D"
        link04="#states-f"
        name04="F"
        link05="#states-g"
        name05="G"
        link06="#states-h"
        name06="H"
        link07="#states-i"
        name07="I"
        link08="#states-k"
        name08="K"
        link09="#states-l"
        name09="L"
        link10="#states-m"
        name10="M"
        link11="#states-n"
        name11="N"
        link12="#states-o"
        name12="O"
        link13="#states-p"
        name13="P"
        link14="#states-r"
        name14="R"
        link15="#states-s"
        name15="S"
        link16="#states-t"
        name16="T"
        link17="#states-u"
        name17="U"
        link18="#states-v"
        name18="V"
        link19="#states-w"
        name19="W"
    />
</template>

<style scoped>
figure:hover {
    cursor: pointer;
    filter: grayscale(70%);
}
</style>

<script>
import StatsPanel from "@/components/StatsPanel.vue";
import JumpsPanelS from "@/components/JumpsPanelS.vue";
export default {
    name: "SenateState",
    data() {
        return {
            /*populations: {
                alabama: 987654321,
            },*/
        };
    },
    components: {
        StatsPanel,
        JumpsPanelS,
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
        getStates() {
            return {
                alabama: this.$store.getters.getTheState("Alabama"),
                alaska: this.$store.getters.getTheState("Alaska"),
                arizona: this.$store.getters.getTheState("Arizona"),
                arkansas: this.$store.getters.getTheState("Arkansas"),
                california: this.$store.getters.getTheState("California"),
                colorado: this.$store.getters.getTheState("Colorado"),
                connecticut: this.$store.getters.getTheState("Connecticut"),
                delaware: this.$store.getters.getTheState("Delaware"),
                florida: this.$store.getters.getTheState("Florida"),
                georgia: this.$store.getters.getTheState("Georgia"),
                hawaii: this.$store.getters.getTheState("Hawaii"),
                idaho: this.$store.getters.getTheState("Idaho"),
                illinois: this.$store.getters.getTheState("Illinois"),
                indiana: this.$store.getters.getTheState("Indiana"),
                iowa: this.$store.getters.getTheState("Iowa"),
                kansas: this.$store.getters.getTheState("Kansas"),
                kentucky: this.$store.getters.getTheState("Kentucky"),
                louisiana: this.$store.getters.getTheState("Louisiana"),
                maine: this.$store.getters.getTheState("Maine"),
                maryland: this.$store.getters.getTheState("Maryland"),
                massachusetts: this.$store.getters.getTheState("Massachusetts"),
                michigan: this.$store.getters.getTheState("Michigan"),
                minnesota: this.$store.getters.getTheState("Minnesota"),
                mississippi: this.$store.getters.getTheState("Mississippi"),
                missouri: this.$store.getters.getTheState("Missouri"),
                montana: this.$store.getters.getTheState("Montana"),
                nebraska: this.$store.getters.getTheState("Nebraska"),
                nevada: this.$store.getters.getTheState("Nevada"),
                newHampshire: this.$store.getters.getTheState("New Hampshire"),
                newJersey: this.$store.getters.getTheState("New Jersey"),
                newMexico: this.$store.getters.getTheState("New Mexico"),
                newYork: this.$store.getters.getTheState("New York"),
                northCarolina:
                    this.$store.getters.getTheState("North Carolina"),
                northDakota: this.$store.getters.getTheState("North Dakota"),
                ohio: this.$store.getters.getTheState("Ohio"),
                oklahoma: this.$store.getters.getTheState("Oklahoma"),
                oregon: this.$store.getters.getTheState("Oregon"),
                pennsylvania: this.$store.getters.getTheState("Pennsylvania"),
                rhodeIsland: this.$store.getters.getTheState("Rhode Island"),
                southCarolina:
                    this.$store.getters.getTheState("South Carolina"),
                southDakota: this.$store.getters.getTheState("South Dakota"),
                tennessee: this.$store.getters.getTheState("Tennessee"),
                texas: this.$store.getters.getTheState("Texas"),
                utah: this.$store.getters.getTheState("Utah"),
                vermont: this.$store.getters.getTheState("Vermont"),
                virginia: this.$store.getters.getTheState("Virginia"),
                washington: this.$store.getters.getTheState("Washington"),
                westVirginia: this.$store.getters.getTheState("West Virginia"),
                wisconsin: this.$store.getters.getTheState("Wisconsin"),
                wyoming: this.$store.getters.getTheState("Wyoming"),
            };
        },
        getStats() {
            return {
                alabama: this.$store.getters.getTheStat("alabama"),
                alaska: this.$store.getters.getTheStat("alaska"),
                arizona: this.$store.getters.getTheStat("arizona"),
                arkansas: this.$store.getters.getTheStat("arkansas"),
                california: this.$store.getters.getTheStat("california"),
                colorado: this.$store.getters.getTheStat("colorado"),
                connecticut: this.$store.getters.getTheStat("connecticut"),
                delaware: this.$store.getters.getTheStat("delaware"),
                florida: this.$store.getters.getTheStat("florida"),
                georgia: this.$store.getters.getTheStat("georgia"),
                hawaii: this.$store.getters.getTheStat("hawaii"),
                idaho: this.$store.getters.getTheStat("idaho"),
                illinois: this.$store.getters.getTheStat("illinois"),
                indiana: this.$store.getters.getTheStat("indiana"),
                iowa: this.$store.getters.getTheStat("iowa"),
                kansas: this.$store.getters.getTheStat("kansas"),
                kentucky: this.$store.getters.getTheStat("kentucky"),
                louisiana: this.$store.getters.getTheStat("louisiana"),
                maine: this.$store.getters.getTheStat("maine"),
                maryland: this.$store.getters.getTheStat("maryland"),
                massachusetts: this.$store.getters.getTheStat("massachusetts"),
                michigan: this.$store.getters.getTheStat("michigan"),
                minnesota: this.$store.getters.getTheStat("minnesota"),
                mississippi: this.$store.getters.getTheStat("mississippi"),
                missouri: this.$store.getters.getTheStat("missouri"),
                montana: this.$store.getters.getTheStat("montana"),
                nebraska: this.$store.getters.getTheStat("nebraska"),
                nevada: this.$store.getters.getTheStat("nevada"),
                newHampshire: this.$store.getters.getTheStat("newHampshire"),
                newJersey: this.$store.getters.getTheStat("newJersey"),
                newMexico: this.$store.getters.getTheStat("newMexico"),
                newYork: this.$store.getters.getTheStat("newYork"),
                northCarolina: this.$store.getters.getTheStat("northCarolina"),
                northDakota: this.$store.getters.getTheStat("northDakota"),
                ohio: this.$store.getters.getTheStat("ohio"),
                oklahoma: this.$store.getters.getTheStat("oklahoma"),
                oregon: this.$store.getters.getTheStat("oregon"),
                pennsylvania: this.$store.getters.getTheStat("pennsylvania"),
                rhodeIsland: this.$store.getters.getTheStat("rhodeIsland"),
                southCarolina: this.$store.getters.getTheStat("southCarolina"),
                southDakota: this.$store.getters.getTheStat("southDakota"),
                tennessee: this.$store.getters.getTheStat("tennessee"),
                texas: this.$store.getters.getTheStat("texas"),
                utah: this.$store.getters.getTheStat("utah"),
                vermont: this.$store.getters.getTheStat("vermont"),
                virginia: this.$store.getters.getTheStat("virginia"),
                washington: this.$store.getters.getTheStat("washington"),
                westVirginia: this.$store.getters.getTheStat("westVirginia"),
                wisconsin: this.$store.getters.getTheStat("wisconsin"),
                wyoming: this.$store.getters.getTheStat("wyoming"),
            };
        },
    },
};
</script>
