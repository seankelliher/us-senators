<template>
    <!--FOR FUTURE-<SenatorCards msg="This is just a test message!" />-->
    <section>
        <div class="gallery-title">
            <h3>Alabama</h3>
        </div>
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
        <div class="gallery-title">
            <h3>Alaska</h3>
        </div>
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
        <div class="gallery-title">
            <h3>Arizona</h3>
        </div>
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
        <div class="gallery-title">
            <h3>Arkansas</h3>
        </div>
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
        <div class="gallery-title">
            <h3>California</h3>
        </div>
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
        <div class="gallery-title">
            <h3>Colorado</h3>
        </div>
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
        <div class="gallery-title">
            <h3>Connecticut</h3>
        </div>
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
        <div class="gallery-title">
            <h3>Delaware</h3>
        </div>
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
        <div class="gallery-title">
            <h3>Florida</h3>
        </div>
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
        <div class="gallery-title">
            <h3>Georgia</h3>
        </div>
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
        <div class="gallery-title">
            <h3>Hawaii</h3>
        </div>
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
        <div class="gallery-title">
            <h3>Idaho</h3>
        </div>
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
        <div class="gallery-title">
            <h3>Illinois</h3>
        </div>
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
        <div class="gallery-title">
            <h3>Indiana</h3>
        </div>
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
        <div class="gallery-title">
            <h3>Iowa</h3>
        </div>
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
        <div class="gallery-title">
            <h3>Kansas</h3>
        </div>
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
        <div class="gallery-title">
            <h3>Kentucky</h3>
        </div>
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
        <div class="gallery-title">
            <h3>Louisiana</h3>
        </div>
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
        <div class="gallery-title">
            <h3>Maine</h3>
        </div>
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
        <div class="gallery-title">
            <h3>Maryland</h3>
        </div>
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
        <div class="gallery-title">
            <h3>Massachusetts</h3>
        </div>
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
        <div class="gallery-title">
            <h3>Michigan</h3>
        </div>
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
        <div class="gallery-title">
            <h3>Minnesota</h3>
        </div>
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
        <div class="gallery-title">
            <h3>Mississippi</h3>
        </div>
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
        <div class="gallery-title">
            <h3>Missouri</h3>
        </div>
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
        <div class="gallery-title">
            <h3>Montana</h3>
        </div>
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
        <div class="gallery-title">
            <h3>Nebraska</h3>
        </div>
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
        <div class="gallery-title">
            <h3>Nevada</h3>
        </div>
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
        <div class="gallery-title">
            <h3>New Hampshire</h3>
        </div>
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
        <div class="gallery-title">
            <h3>New Jersey</h3>
        </div>
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
        <div class="gallery-title">
            <h3>New Mexico</h3>
        </div>
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
        <div class="gallery-title">
            <h3>New York</h3>
        </div>
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
        <div class="gallery-title">
            <h3>North Carolina</h3>
        </div>
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
        <div class="gallery-title">
            <h3>North Dakota</h3>
        </div>
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
        <div class="gallery-title">
            <h3>Ohio</h3>
        </div>
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
        <div class="gallery-title">
            <h3>Oklahoma</h3>
        </div>
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
        <div class="gallery-title">
            <h3>Oregon</h3>
        </div>
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
        <div class="gallery-title">
            <h3>Pennsylvania</h3>
        </div>
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
        <div class="gallery-title">
            <h3>Rhode Island</h3>
        </div>
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
        <div class="gallery-title">
            <h3>South Carolina</h3>
        </div>
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
        <div class="gallery-title">
            <h3>South Dakota</h3>
        </div>
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
        <div class="gallery-title">
            <h3>Tennessee</h3>
        </div>
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
        <div class="gallery-title">
            <h3>Texas</h3>
        </div>
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
        <div class="gallery-title">
            <h3>Utah</h3>
        </div>
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
        <div class="gallery-title">
            <h3>Vermont</h3>
        </div>
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
        <div class="gallery-title">
            <h3>Virginia</h3>
        </div>
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
        <div class="gallery-title">
            <h3>Washington</h3>
        </div>
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
        <div class="gallery-title">
            <h3>West Virginia</h3>
        </div>
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
        <div class="gallery-title">
            <h3>Wisconsin</h3>
        </div>
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
        <div class="gallery-title">
            <h3>Wyoming</h3>
        </div>
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
//FOR FUTURE - import SenatorCards from "@/components/SenatorCards.vue";
export default {
    name: "SenateState",
    components: {
        //FOR FUTURE - SenatorCards,
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
    },
};
</script>
