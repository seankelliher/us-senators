<template>
    <section>
        <div class="gallery-title">
            <h3>Alabama</h3>
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
            <figure>
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
            <h3>Alaska</h3>
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
            <figure>
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
            <h3>Arizona</h3>
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
            <figure>
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
            <h3>Arkansas</h3>
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
            <figure>
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
            <h3>California</h3>
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
            <figure>
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
            <h3>Colorado</h3>
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
            <figure>
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
            <h3>Connecticut</h3>
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
            <figure>
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
            <h3>Delaware</h3>
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
            <figure>
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
            <h3>Florida</h3>
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
            <figure>
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
            <h3>Georgia</h3>
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
            <figure>
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
            <h3>Hawaii</h3>
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
            <figure>
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
            <h3>Idaho</h3>
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
            <figure>
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
            <h3>Illinois</h3>
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
            <figure>
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
            <h3>Indiana</h3>
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
            <figure>
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
            <h3>Iowa</h3>
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
            <figure>
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
            <h3>Kansas</h3>
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
            <figure>
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
            <h3>Kentucky</h3>
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
            <figure>
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
            <h3>Louisiana</h3>
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
            <figure>
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
            <h3>Maine</h3>
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
            <figure>
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
            <h3>Maryland</h3>
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
            <figure>
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
            <h3>Massachusetts</h3>
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
            <figure>
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
            <h3>Michigan</h3>
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
            <figure>
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
            <h3>Minnesota</h3>
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
            <figure>
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
            <h3>Mississippi</h3>
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
            <figure>
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
            <h3>Missouri</h3>
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
            <figure>
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
            <h3>Montana</h3>
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
            <figure>
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
            <h3>Nebraska</h3>
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
            <figure>
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
            <h3>Nevada</h3>
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
            <figure>
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
            <h3>New Hampshire</h3>
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
            <figure>
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
            <h3>New Jersey</h3>
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
            <figure>
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
            <h3>New Mexico</h3>
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
            <figure>
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
            <h3>New York</h3>
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
            <figure>
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
            <h3>North Carolina</h3>
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
            <figure>
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
            <h3>North Dakota</h3>
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
            <figure>
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
            <h3>Ohio</h3>
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
            <figure>
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
            <h3>Oklahoma</h3>
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
            <figure>
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
            <h3>Oregon</h3>
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
            <figure>
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
            <h3>Pennsylvania</h3>
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
            <figure>
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
            <h3>Rhode Island</h3>
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
            <figure>
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
            <h3>South Carolina</h3>
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
            <figure>
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
            <h3>South Dakota</h3>
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
            <figure>
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
            <h3>Tennessee</h3>
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
            <figure>
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
            <h3>Texas</h3>
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
            <figure>
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
            <h3>Utah</h3>
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
            <figure>
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
            <h3>Vermont</h3>
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
            <figure>
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
            <h3>Virginia</h3>
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
            <figure>
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
            <h3>Washington</h3>
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
            <figure>
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
            <h3>West Virginia</h3>
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
            <figure>
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
            <h3>Wisconsin</h3>
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
            <figure>
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
            <h3>Wyoming</h3>
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
            <figure>
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
</template>

<script>
import StatsPanel from "@/components/StatsPanel.vue";
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
    },
    methods: {},
    computed: {
        getStates() {
            return {
                alabama: this.$store.getters.getAlabama,
                alaska: this.$store.getters.getAlaska,
                arizona: this.$store.getters.getArizona,
                arkansas: this.$store.getters.getArkansas,
                california: this.$store.getters.getCalifornia,
                colorado: this.$store.getters.getColorado,
                connecticut: this.$store.getters.getConnecticut,
                delaware: this.$store.getters.getDelaware,
                florida: this.$store.getters.getFlorida,
                georgia: this.$store.getters.getGeorgia,
                hawaii: this.$store.getters.getHawaii,
                idaho: this.$store.getters.getIdaho,
                illinois: this.$store.getters.getIllinois,
                indiana: this.$store.getters.getIndiana,
                iowa: this.$store.getters.getIowa,
                kansas: this.$store.getters.getKansas,
                kentucky: this.$store.getters.getKentucky,
                louisiana: this.$store.getters.getLouisiana,
                maine: this.$store.getters.getMaine,
                maryland: this.$store.getters.getMaryland,
                massachusetts: this.$store.getters.getMassachusetts,
                michigan: this.$store.getters.getMichigan,
                minnesota: this.$store.getters.getMinnesota,
                mississippi: this.$store.getters.getMississippi,
                missouri: this.$store.getters.getMissouri,
                montana: this.$store.getters.getMontana,
                nebraska: this.$store.getters.getNebraska,
                nevada: this.$store.getters.getNevada,
                newHampshire: this.$store.getters.getNewHampshire,
                newJersey: this.$store.getters.getNewJersey,
                newMexico: this.$store.getters.getNewMexico,
                newYork: this.$store.getters.getNewYork,
                northCarolina: this.$store.getters.getNorthCarolina,
                northDakota: this.$store.getters.getNorthDakota,
                ohio: this.$store.getters.getOhio,
                oklahoma: this.$store.getters.getOklahoma,
                oregon: this.$store.getters.getOregon,
                pennsylvania: this.$store.getters.getPennsylvania,
                rhodeIsland: this.$store.getters.getRhodeIsland,
                southCarolina: this.$store.getters.getSouthCarolina,
                southDakota: this.$store.getters.getSouthDakota,
                tennessee: this.$store.getters.getTennessee,
                texas: this.$store.getters.getTexas,
                utah: this.$store.getters.getUtah,
                vermont: this.$store.getters.getVermont,
                virginia: this.$store.getters.getVirginia,
                washington: this.$store.getters.getWashington,
                westVirginia: this.$store.getters.getWestVirginia,
                wisconsin: this.$store.getters.getWisconsin,
                wyoming: this.$store.getters.getWyoming,
            };
        },
        getStats() {
            return {
                alabama: this.$store.getters.getStatsAlabama,
                alaska: this.$store.getters.getStatsAlaska,
                arizona: this.$store.getters.getStatsArizona,
                arkansas: this.$store.getters.getStatsArkansas,
                california: this.$store.getters.getStatsCalifornia,
                colorado: this.$store.getters.getStatsColorado,
                connecticut: this.$store.getters.getStatsConnecticut,
                delaware: this.$store.getters.getStatsDelaware,
                florida: this.$store.getters.getStatsFlorida,
                georgia: this.$store.getters.getStatsGeorgia,
                hawaii: this.$store.getters.getStatsHawaii,
                idaho: this.$store.getters.getStatsIdaho,
                illinois: this.$store.getters.getStatsIllinois,
                indiana: this.$store.getters.getStatsIndiana,
                iowa: this.$store.getters.getStatsIowa,
                kansas: this.$store.getters.getStatsKansas,
                kentucky: this.$store.getters.getStatsKentucky,
                louisiana: this.$store.getters.getStatsLouisiana,
                maine: this.$store.getters.getStatsMaine,
                maryland: this.$store.getters.getStatsMaryland,
                massachusetts: this.$store.getters.getStatsMassachusetts,
                michigan: this.$store.getters.getStatsMichigan,
                minnesota: this.$store.getters.getStatsMinnesota,
                mississippi: this.$store.getters.getStatsMississippi,
                missouri: this.$store.getters.getStatsMissouri,
                montana: this.$store.getters.getStatsMontana,
                nebraska: this.$store.getters.getStatsNebraska,
                nevada: this.$store.getters.getStatsNevada,
                newHampshire: this.$store.getters.getStatsNewHampshire,
                newJersey: this.$store.getters.getStatsNewJersey,
                newMexico: this.$store.getters.getStatsNewMexico,
                newYork: this.$store.getters.getStatsNewYork,
                northCarolina: this.$store.getters.getStatsNorthCarolina,
                northDakota: this.$store.getters.getStatsNorthDakota,
                ohio: this.$store.getters.getStatsOhio,
                oklahoma: this.$store.getters.getStatsOklahoma,
                oregon: this.$store.getters.getStatsOregon,
                pennsylvania: this.$store.getters.getStatsPennsylvania,
                rhodeIsland: this.$store.getters.getStatsRhodeIsland,
                southCarolina: this.$store.getters.getStatsSouthCarolina,
                southDakota: this.$store.getters.getStatsSouthDakota,
                tennessee: this.$store.getters.getStatsTennessee,
                texas: this.$store.getters.getStatsTexas,
                utah: this.$store.getters.getStatsUtah,
                vermont: this.$store.getters.getStatsVermont,
                virginia: this.$store.getters.getStatsVirginia,
                washington: this.$store.getters.getStatsWashington,
                westVirginia: this.$store.getters.getStatsWestVirginia,
                wisconsin: this.$store.getters.getStatsWisconsin,
                wyoming: this.$store.getters.getStatsWyoming,
            };
        },
    },
};
</script>
<style scoped>
.gallery-title h3 {
    margin-bottom: 0;
}
</style>
