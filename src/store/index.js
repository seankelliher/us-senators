import { createStore } from "vuex";

export default createStore({
    state: {
        senators: [
            {
                address1: "709 Hart Senate Office Building",
                address2: "Washington DC 20510",
                assumedOffice: "January 3, 2013",
                bioguideId: "b001230",
                eliteSchool: true, //Smith
                email: "baldwin.senate.gov/feedback",
                firstName: "Tammy",
                lastName: "Baldwin",
                leadershipPosition: null,
                leadershipType: null,
                party: "D",
                phone: "(202) 224-5653",
                portrait: "wi-tammy-baldwin",
                senateClass: "Class I",
                state: "Wisconsin",
                website: "baldwin.senate.gov",
            },
            {
                address1: "307 Dirksen Senate Office Building",
                address2: "Washington DC 20510",
                assumedOffice: "June 25, 2007",
                bioguideId: "b001261",
                eliteSchool: true, //Georgetown
                email: "barrasso.senate.gov/public/index.cfm/contact-form",
                firstName: "John",
                lastName: "Barrasso",
                leadershipPosition: null,
                leadershipType: null,
                party: "R",
                phone: "(202) 224-6441",
                portrait: "wy-john-barrasso",
                senateClass: "Class I",
                state: "Wyoming",
                website: "barrasso.senate.gov",
            },
            {
                address1: "261 Russell Senate Office Building",
                address2: "Washington DC 20510",
                assumedOffice: "January 21, 2009",
                bioguideId: "b001267",
                eliteSchool: true, //Yale
                email: "bennet.senate.gov/public/index.cfm/contact",
                firstName: "Michael F.",
                lastName: "Bennet",
                leadershipPosition: null,
                leadershipType: null,
                party: "D",
                phone: "(202) 224-5852",
                portrait: "co-michael-bennet",
                senateClass: "Class III",
                state: "Colorado",
                website: "bennet.senate.gov",
            },
            {
                address1: "357 Dirksen Senate Office Building",
                address2: "Washington DC 20510",
                assumedOffice: "January 3, 2019",
                bioguideId: "b001243",
                eliteSchool: false,
                email: "blackburn.senate.gov/email-me",
                firstName: "Marsha",
                lastName: "Blackburn",
                leadershipPosition: null,
                leadershipType: null,
                party: "R",
                phone: "(202) 224-3344",
                portrait: "tn-marsha-blackburn",
                senateClass: "Class I",
                state: "Tennessee",
                website: "blackburn.senate.gov",
            },
            {
                address1: "706 Hart Senate Office Building",
                address2: "Washington DC 20510",
                assumedOffice: "January 3, 2011",
                bioguideId: "b001277",
                eliteSchool: true, //Harvard, Yale
                email: "blumenthal.senate.gov/contact",
                firstName: "Richard",
                lastName: "Blumenthal",
                leadershipPosition: null,
                leadershipType: null,
                party: "D",
                phone: "(202) 224-2823",
                portrait: "ct-richard-blumenthal",
                senateClass: "Class III",
                state: "Connecticut",
                website: "blumenthal.senate.gov",
            },
            {
                address1: "260 Russell Senate Office Building",
                address2: "Washington DC 20510",
                assumedOffice: "January 3, 2011",
                bioguideId: "b000575",
                eliteSchool: false,
                email: "blunt.senate.gov/public/index.cfm/contact-roy",
                firstName: "Roy",
                lastName: "Blunt",
                leadershipPosition: null,
                leadershipType: null,
                party: "R",
                phone: "(202) 224-5721",
                portrait: "mo-roy-blunt",
                senateClass: "Class III",
                state: "Missouri",
                website: "blunt.senate.gov",
            },
            {
                address1: "717 Hart Senate Office Building",
                address2: "Washington DC 20510",
                assumedOffice: "October 31, 2013",
                bioguideId: "b001288",
                eliteSchool: true, //Stanford, Oxford, Yale
                email: "booker.senate.gov/?p=contact",
                firstName: "Cory A.",
                lastName: "Booker",
                leadershipPosition: null,
                leadershipType: null,
                party: "D",
                phone: "(202) 224-3224",
                portrait: "nj-cory-booker",
                senateClass: "Class II",
                state: "New Jersey",
                website: "booker.senate.gov",
            },
            {
                address1: "141 Hart Senate Office Building",
                address2: "Washington DC 20510",
                assumedOffice: "January 3, 2011",
                bioguideId: "b001236",
                eliteSchool: false,
                email: "boozman.senate.gov/public/index.cfm/contact",
                firstName: "John",
                lastName: "Boozman",
                leadershipPosition: null,
                leadershipType: null,
                party: "R",
                phone: "(202) 224-4843",
                portrait: "ar-john-boozman",
                senateClass: "Class III",
                state: "Arkansas",
                website: "boozman.senate.gov",
            },
            {
                address1: "404 Russell Senate Office Building",
                address2: "Washington DC 20510",
                assumedOffice: "January 3, 2019",
                bioguideId: "b001310",
                eliteSchool: true, //Harvard
                email: "braun.senate.gov/contact-mike",
                firstName: "Mike",
                lastName: "Braun",
                leadershipPosition: null,
                leadershipType: null,
                party: "R",
                phone: "(202) 224-4814",
                portrait: "in-mike-braun",
                senateClass: "Class I",
                state: "Indiana",
                website: "braun.senate.gov",
            },
            {
                address1: "503 Hart Senate Office Building",
                address2: "Washington DC 20510",
                assumedOffice: "January 3, 2007",
                bioguideId: "b000944",
                eliteSchool: true, //Yale
                email: "brown.senate.gov/contact",
                firstName: "Sherrod",
                lastName: "Brown",
                leadershipPosition: null,
                leadershipType: null,
                party: "D",
                phone: "(202) 224-2315",
                portrait: "oh-sherrod-brown",
                senateClass: "Class I",
                state: "Ohio",
                website: "brown.senate.gov",
            },
            {
                address1: "217 Russell Senate Office Building",
                address2: "Washington DC 20510",
                assumedOffice: "January 3, 2005",
                bioguideId: "b001135",
                eliteSchool: false,
                email: "burr.senate.gov/contact",
                firstName: "Richard",
                lastName: "Burr",
                leadershipPosition: null,
                leadershipType: null,
                party: "R",
                phone: "(202) 224-3154",
                portrait: "nc-richard-burr",
                senateClass: "Class III",
                state: "North Carolina",
                website: "burr.senate.gov",
            },
            {
                address1: "511 Hart Senate Office Building",
                address2: "Washington DC 20510",
                assumedOffice: "January 3, 2001",
                bioguideId: "c000127",
                eliteSchool: false,
                email: "cantwell.senate.gov/public/index.cfm/email-maria",
                firstName: "Maria",
                lastName: "Cantwell",
                leadershipPosition: null,
                leadershipType: null,
                party: "D",
                phone: "(202) 224-3441",
                portrait: "wa-maria-cantwell",
                senateClass: "Class I",
                state: "Washington",
                website: "cantwell.senate.gov",
            },
            {
                address1: "172 Russell Senate Office Building",
                address2: "Washington DC 20510",
                assumedOffice: "January 3, 2015",
                bioguideId: "c001047",
                eliteSchool: true, //Duke
                email: "capito.senate.gov/contact/contact-shelley",
                firstName: "Shelley Moore",
                lastName: "Capito",
                leadershipPosition: null,
                leadershipType: null,
                party: "R",
                phone: "(202) 224-6472",
                portrait: "wv-shelley-moore-capito",
                senateClass: "Class II",
                state: "West Virginia",
                website: "capito.senate.gov",
            },
            {
                address1: "509 Hart Senate Office Building",
                address2: "Washington DC 20510",
                assumedOffice: "January 3, 2007",
                bioguideId: "c000141",
                eliteSchool: false,
                email: "cardin.senate.gov/contact",
                firstName: "Benjamin L.",
                lastName: "Cardin",
                leadershipPosition: null,
                leadershipType: null,
                party: "D",
                phone: "(202) 224-4524",
                portrait: "md-benjamin-cardin",
                senateClass: "Class I",
                state: "Maryland",
                website: "cardin.senate.gov",
            },
            {
                address1: "513 Hart Senate Office Building",
                address2: "Washington DC 20510",
                assumedOffice: "January 3, 2001",
                bioguideId: "c000174",
                eliteSchool: false,
                email: "carper.senate.gov/public/index.cfm/email-senator-carper",
                firstName: "Thomas R.",
                lastName: "Carper",
                leadershipPosition: null,
                leadershipType: null,
                party: "D",
                phone: "(202) 224-2441",
                portrait: "de-thomas-carper",
                senateClass: "Class I",
                state: "Delaware",
                website: "carper.senate.gov",
            },
            {
                address1: "393 Russell Senate Office Building",
                address2: "Washington DC 20510",
                assumedOffice: "January 3, 2007",
                bioguideId: "c001070",
                eliteSchool: false,
                email: "casey.senate.gov/contact",
                firstName: "Robert P.",
                lastName: "Casey, Jr.",
                leadershipPosition: null,
                leadershipType: null,
                party: "D",
                phone: "(202) 224-6324",
                portrait: "pa-robert-casey",
                senateClass: "Class I",
                state: "Pennsylvania",
                website: "casey.senate.gov",
            },
            {
                address1: "520 Hart Senate Office Building",
                address2: "Washington DC 20510",
                assumedOffice: "January 3, 2015",
                bioguideId: "c001075",
                eliteSchool: false,
                email: "cassidy.senate.gov/contact",
                firstName: "Bill",
                lastName: "Cassidy",
                leadershipPosition: null,
                leadershipType: null,
                party: "R",
                phone: "(202) 224-5824",
                portrait: "la-bill-cassidy",
                senateClass: "Class II",
                state: "Louisiana",
                website: "cassidy.senate.gov",
            },
            {
                address1: "413 Dirksen Senate Office Building",
                address2: "Washington DC 20510",
                assumedOffice: "January 3, 1997",
                bioguideId: "c001035",
                eliteSchool: false,
                email: "collins.senate.gov/contact",
                firstName: "Susan M.",
                lastName: "Collins",
                leadershipPosition: null,
                leadershipType: null,
                party: "R",
                phone: "(202) 224-2523",
                portrait: "me-susan-collins",
                senateClass: "Class II",
                state: "Maine",
                website: "collins.senate.gov",
            },
            {
                address1: "218 Russell Senate Office Building",
                address2: "Washington DC 20510",
                assumedOffice: "November 15, 2010",
                bioguideId: "c001088",
                eliteSchool: true, //Amherst, Yale
                email: "coons.senate.gov/contact",
                firstName: "Christopher A.",
                lastName: "Coons",
                leadershipPosition: null,
                leadershipType: null,
                party: "D",
                phone: "(202) 224-5042",
                portrait: "de-christopher-coons",
                senateClass: "Class II",
                state: "Delaware",
                website: "coons.senate.gov",
            },
            {
                address1: "517 Hart Senate Office Building",
                address2: "Washington DC 20510",
                assumedOffice: "December 2, 2002",
                bioguideId: "c001056",
                eliteSchool: false,
                email: "cornyn.senate.gov/contact",
                firstName: "John",
                lastName: "Cornyn",
                leadershipPosition: null,
                leadershipType: null,
                party: "R",
                phone: "(202) 224-2934",
                portrait: "tx-john-cornyn",
                senateClass: "Class II",
                state: "Texas",
                website: "cornyn.senate.gov",
            },
            {
                address1: "313 Hart Senate Office Building",
                address2: "Washington DC 20510",
                assumedOffice: "January 3, 2017",
                bioguideId: "c001113",
                eliteSchool: false,
                email: "cortezmasto.senate.gov/contact",
                firstName: "Catherine",
                lastName: "Cortez Masto",
                leadershipPosition: null,
                leadershipType: null,
                party: "D",
                phone: "(202) 224-3542",
                portrait: "nv-catherine-cortez-masto",
                senateClass: "Class III",
                state: "Nevada",
                website: "cortezmasto.senate.gov",
            },
            {
                address1: "326 Russell Senate Office Building",
                address2: "Washington DC 20510",
                assumedOffice: "January 3, 2015",
                bioguideId: "c001095",
                eliteSchool: true, //Harvard
                email: "cotton.senate.gov/contact/contact-tom",
                firstName: "Tom",
                lastName: "Cotton",
                leadershipPosition: null,
                leadershipType: null,
                party: "R",
                phone: "(202) 224-2353",
                portrait: "ar-tom-cotton",
                senateClass: "Class II",
                state: "Arkansas",
                website: "cotton.senate.gov",
            },
            {
                address1: "330 Hart Senate Office Building",
                address2: "Washington DC 20510",
                assumedOffice: "January 3, 2019",
                bioguideId: "c001096",
                eliteSchool: false,
                email: "cramer.senate.gov/contact/contact-kevin",
                firstName: "Kevin",
                lastName: "Cramer",
                leadershipPosition: null,
                leadershipType: null,
                party: "R",
                phone: "(202) 224-2043",
                portrait: "nd-kevin-cramer",
                senateClass: "Class I",
                state: "North Dakota",
                website: "cramer.senate.gov",
            },
            {
                address1: "239 Dirksen Senate Office Building",
                address2: "Washington DC 20510",
                assumedOffice: "January 3, 1999",
                bioguideId: "c000880",
                eliteSchool: true, //Harvard
                email: "crapo.senate.gov/contact",
                firstName: "Mike",
                lastName: "Crapo",
                leadershipPosition: null,
                leadershipType: null,
                party: "R",
                phone: "(202) 224-6142",
                portrait: "id-mike-crapo",
                senateClass: "Class III",
                state: "Idaho",
                website: "crapo.senate.gov",
            },
            {
                address1: "127A Russell Senate Office Building",
                address2: "Washington DC 20510",
                assumedOffice: "January 3, 2013",
                bioguideId: "c001098",
                eliteSchool: true, //Princeton, Harvard
                email: "cruz.senate.gov/?p=form&id=16",
                firstName: "Ted",
                lastName: "Cruz",
                leadershipPosition: null,
                leadershipType: null,
                party: "R",
                phone: "(202) 224-5922",
                portrait: "tx-ted-cruz",
                senateClass: "Class I",
                state: "Texas",
                website: "cruz.senate.gov",
            },
            {
                address1: "320 Hart Senate Office Building",
                address2: "Washington DC 20510",
                assumedOffice: "January 3, 2015",
                bioguideId: "d000618",
                eliteSchool: false,
                email: "daines.senate.gov/connect/email-steve",
                firstName: "Steve",
                lastName: "Daines",
                leadershipPosition: null,
                leadershipType: null,
                party: "R",
                phone: "(202) 224-2651",
                portrait: "mt-steve-daines",
                senateClass: "Class II",
                state: "Montana",
                website: "daines.senate.gov",
            },
            {
                address1: "524 Hart Senate Office Building",
                address2: "Washington DC 20510",
                assumedOffice: "January 3, 2017",
                bioguideId: "d000622",
                eliteSchool: false,
                email: "duckworth.senate.gov/content/contact-senator",
                firstName: "Tammy",
                lastName: "Duckworth",
                leadershipPosition: null,
                leadershipType: null,
                party: "D",
                phone: "(202) 224-2854",
                portrait: "il-tammy-duckworth",
                senateClass: "Class III",
                state: "Illinois",
                website: "duckworth.senate.gov",
            },
            {
                address1: "711 Hart Senate Office Building",
                address2: "Washington DC 20510",
                assumedOffice: "January 3, 1997",
                bioguideId: "d000563",
                eliteSchool: true, //Georgetown
                email: "durbin.senate.gov/contact",
                firstName: "Richard J.",
                lastName: "Durbin",
                leadershipPosition: "Majority Whip",
                leadershipType: "whip",
                party: "D",
                phone: "(202) 224-2152",
                portrait: "il-richard-durbin",
                senateClass: "Class II",
                state: "Illinois",
                website: "durbin.senate.gov",
            },
            {
                address1: "730 Hart Senate Office Building",
                address2: "Washington DC 20510",
                assumedOffice: "January 3, 2015",
                bioguideId: "e000295",
                eliteSchool: false,
                email: "ernst.senate.gov/public/index.cfm/contact",
                firstName: "Joni",
                lastName: "Ernst",
                leadershipPosition: null,
                leadershipType: null,
                party: "R",
                phone: "(202) 224-3254",
                portrait: "ia-joni-ernst",
                senateClass: "Class II",
                state: "Iowa",
                website: "ernst.senate.gov",
            },
            {
                address1: "331 Hart Senate Office Building",
                address2: "Washington DC 20510",
                assumedOffice: "November 10, 1992",
                bioguideId: "f000062",
                eliteSchool: true, //Stanford
                email: "feinstein.senate.gov/public/index.cfm/e-mail-me",
                firstName: "Dianne",
                lastName: "Feinstein",
                leadershipPosition: null,
                leadershipType: null,
                party: "D",
                phone: "(202) 224-3841",
                portrait: "ca-dianne-feinstein",
                senateClass: "Class I",
                state: "California",
                website: "feinstein.senate.gov",
            },
            {
                address1: "454 Russell Senate Office Building",
                address2: "Washington DC 20510",
                assumedOffice: "January 3, 2013",
                bioguideId: "f000463",
                eliteSchool: false,
                email: "fischer.senate.gov/public/index.cfm/contact",
                firstName: "Deb",
                lastName: "Fischer",
                leadershipPosition: null,
                leadershipType: null,
                party: "R",
                phone: "(202) 224-6551",
                portrait: "ne-deb-fischer",
                senateClass: "Class I",
                state: "Nebraska",
                website: "fischer.senate.gov",
            },
            {
                address1: "478 Russell Senate Office Building",
                address2: "Washington DC 20510",
                assumedOffice: "January 26, 2009",
                bioguideId: "g000555",
                eliteSchool: true, //Dartmouth
                email: "gillibrand.senate.gov/contact/email-me",
                firstName: "Kirsten E.",
                lastName: "Gillibrand",
                leadershipPosition: null,
                leadershipType: null,
                party: "D",
                phone: "(202) 224-4451",
                portrait: "ny-kirsten-gillibrand",
                senateClass: "Class I",
                state: "New York",
                website: "gillibrand.senate.gov",
            },
            {
                address1: "290 Russell Senate Office Building",
                address2: "Washington DC 20510",
                assumedOffice: "January 3, 2003",
                bioguideId: "g000359",
                eliteSchool: false,
                email: "lgraham.senate.gov/public/index.cfm/e-mail-senator-graham",
                firstName: "Lindsey",
                lastName: "Graham",
                leadershipPosition: null,
                leadershipType: null,
                party: "R",
                phone: "(202) 224-5972",
                portrait: "sc-lindsey-graham",
                senateClass: "Class II",
                state: "South Carolina",
                website: "lgraham.senate.gov",
            },
            {
                address1: "135 Hart Senate Office Building",
                address2: "Washington DC 20510",
                assumedOffice: "January 3, 1981",
                bioguideId: "g000386",
                eliteSchool: false,
                email: "grassley.senate.gov/contact",
                firstName: "Chuck",
                lastName: "Grassley",
                leadershipPosition: null,
                leadershipType: null,
                party: "R",
                phone: "(202) 224-3744",
                portrait: "ia-chuck-grassley",
                senateClass: "Class III",
                state: "Iowa",
                website: "grassley.senate.gov",
            },
            {
                address1: "248 Russell Senate Office Building",
                address2: "Washington DC 20510",
                assumedOffice: "January 3, 2021",
                bioguideId: "h000601",
                eliteSchool: false,
                email: "hagerty.senate.gov/email-me",
                firstName: "Bill",
                lastName: "Hagerty",
                leadershipPosition: null,
                leadershipType: null,
                party: "R",
                phone: "(202) 224-4944",
                portrait: "tn-bill-hagerty",
                senateClass: "Class II",
                state: "Tennessee",
                website: "hagerty.senate.gov",
            },
            {
                address1: "324 Hart Senate Office Building",
                address2: "Washington DC 20510",
                assumedOffice: "January 3, 2017",
                bioguideId: "h001076",
                eliteSchool: true, //Brown
                email: "hassan.senate.gov/content/contact-senator",
                firstName: "Margaret Wood",
                lastName: "Hassan",
                leadershipPosition: null,
                leadershipType: null,
                party: "D",
                phone: "(202) 224-3324",
                portrait: "nh-maggie-hassan",
                senateClass: "Class III",
                state: "New Hampshire",
                website: "hassan.senate.gov",
            },
            {
                address1: "115 Russell Senate Office Building",
                address2: "Washington DC 20510",
                assumedOffice: "January 3, 2019",
                bioguideId: "h001089",
                eliteSchool: true, //Stanford, Yale
                email: "hawley.senate.gov/contact-senator-hawley",
                firstName: "Josh",
                lastName: "Hawley",
                leadershipPosition: null,
                leadershipType: null,
                party: "R",
                phone: "(202) 224-6154",
                portrait: "mo-josh-hawley",
                senateClass: "Class I",
                state: "Missouri",
                website: "hawley.senate.gov",
            },
            {
                address1: "303 Hart Senate Office Building",
                address2: "Washington DC 20510",
                assumedOffice: "January 3, 2013",
                bioguideId: "h001046",
                eliteSchool: false,
                email: "heinrich.senate.gov/contact",
                firstName: "Martin",
                lastName: "Heinrich",
                leadershipPosition: null,
                leadershipType: null,
                party: "D",
                phone: "(202) 224-5521",
                portrait: "nm-martin-heinrich",
                senateClass: "Class I",
                state: "New Mexico",
                website: "heinrich.senate.gov",
            },
            {
                address1: "374 Russell Senate Office Building",
                address2: "Washington DC 20510",
                assumedOffice: "January 3, 2021",
                bioguideId: "h000273",
                eliteSchool: false,
                email: "hickenlooper.senate.gov/contact",
                firstName: "John W.",
                lastName: "Hickenlooper",
                leadershipPosition: null,
                leadershipType: null,
                party: "D",
                phone: "(202) 224-5941",
                portrait: "co-john-hickenlooper",
                senateClass: "Class II",
                state: "Colorado",
                website: "hickenlooper.senate.gov",
            },
            {
                address1: "109 Hart Senate Office Building",
                address2: "Washington DC 20510",
                assumedOffice: "January 3, 2013",
                bioguideId: "h001042",
                eliteSchool: true, //Georgetown
                email: "hirono.senate.gov/contact",
                firstName: "Mazie K.",
                lastName: "Hirono",
                leadershipPosition: null,
                leadershipType: null,
                party: "D",
                phone: "(202) 224-6361",
                portrait: "hi-mazie-hirono",
                senateClass: "Class I",
                state: "Hawaii",
                website: "hirono.senate.gov",
            },
            {
                address1: "338 Russell Senate Office Building",
                address2: "Washington DC 20510",
                assumedOffice: "January 3, 2011",
                bioguideId: "h001061",
                eliteSchool: true, //Dartmouth, Northwestern
                email: "hoeven.senate.gov/public/index.cfm/email-the-senator",
                firstName: "John",
                lastName: "Hoeven",
                leadershipPosition: null,
                leadershipType: null,
                party: "R",
                phone: "(202) 224-2551",
                portrait: "nd-john-hoeven",
                senateClass: "Class III",
                state: "North Dakota",
                website: "hoeven.senate.gov",
            },
            {
                address1: "702 Hart Senate Office Building",
                address2: "Washington DC 20510",
                assumedOffice: "April 9, 2018",
                bioguideId: "h001079",
                eliteSchool: false,
                email: "hydesmith.senate.gov/content/contact-senator",
                firstName: "Cindy",
                lastName: "Hyde-Smith",
                leadershipPosition: null,
                leadershipType: null,
                party: "R",
                phone: "(202) 224-5054",
                portrait: "ms-cindy-hyde-smith",
                senateClass: "Class II",
                state: "Mississippi",
                website: "hydesmith.senate.gov",
            },
            {
                address1: "205 Russell Senate Office Building",
                address2: "Washington DC 20510",
                assumedOffice: "November 16, 1994",
                bioguideId: "i000024",
                eliteSchool: false,
                email: "inhofe.senate.gov/contact",
                firstName: "James M.",
                lastName: "Inhofe",
                leadershipPosition: null,
                leadershipType: null,
                party: "R",
                phone: "(202) 224-4721",
                portrait: "ok-james-inhofe",
                senateClass: "Class II",
                state: "Oklahoma",
                website: "inhofe.senate.gov",
            },
            {
                address1: "328 Hart Senate Office Building",
                address2: "Washington DC 20510",
                assumedOffice: "January 3, 2011",
                bioguideId: "j000293",
                eliteSchool: false,
                email: "ronjohnson.senate.gov/public/index.cfm/email-the-senator",
                firstName: "Ron",
                lastName: "Johnson",
                leadershipPosition: null,
                leadershipType: null,
                party: "R",
                phone: "(202) 224-5323",
                portrait: "wi-ron-johnson",
                senateClass: "Class III",
                state: "Wisconsin",
                website: "ronjohnson.senate.gov",
            },
            {
                address1: "231 Russell Senate Office Building",
                address2: "Washington DC 20510",
                assumedOffice: "January 3, 2013",
                bioguideId: "k000384",
                eliteSchool: true, //Harvard
                email: "kaine.senate.gov/contact",
                firstName: "Tim",
                lastName: "Kaine",
                leadershipPosition: null,
                leadershipType: null,
                party: "D",
                phone: "(202) 224-4024",
                portrait: "va-tim-kaine",
                senateClass: "Class I",
                state: "Virginia",
                website: "kaine.senate.gov",
            },
            {
                address1: "516 Hart Senate Office Building",
                address2: "Washington DC 20510",
                assumedOffice: "December 2, 2020",
                bioguideId: "k000377",
                eliteSchool: false,
                email: "kelly.senate.gov",
                firstName: "Mark",
                lastName: "Kelly",
                leadershipPosition: null,
                leadershipType: null,
                party: "D",
                phone: "(202) 224-2235",
                portrait: "az-mark-kelly",
                senateClass: "Class III",
                state: "Arizona",
                website: "kelly.senate.gov",
            },
            {
                address1: "416 Russell Senate Office Building",
                address2: "Washington DC 20510",
                assumedOffice: "January 3, 2017",
                bioguideId: "k000393",
                eliteSchool: false,
                email: "kennedy.senate.gov/public/email-me",
                firstName: "John",
                lastName: "Kennedy",
                leadershipPosition: null,
                leadershipType: null,
                party: "R",
                phone: "(202) 224-4623",
                portrait: "la-john-kennedy",
                senateClass: "Class III",
                state: "Louisiana",
                website: "kennedy.senate.gov",
            },
            {
                address1: "133 Hart Senate Office Building",
                address2: "Washington DC 20510",
                assumedOffice: "January 3, 2013",
                bioguideId: "k000383",
                eliteSchool: true, //Dartmouth
                email: "king.senate.gov/contact",
                firstName: "Angus S.",
                lastName: "King, Jr.",
                leadershipPosition: null,
                leadershipType: null,
                party: "I",
                phone: "(202) 224-5344",
                portrait: "me-angus-king",
                senateClass: "Class I",
                state: "Maine",
                website: "king.senate.gov",
            },
            {
                address1: "425 Dirksen Senate Office Building",
                address2: "Washington DC 20510",
                assumedOffice: "January 3, 2007",
                bioguideId: "k000367",
                eliteSchool: true, //Yale, Univ of Chicago
                email: "klobuchar.senate.gov/public/index.cfm/contact",
                firstName: "Amy",
                lastName: "Klobuchar",
                leadershipPosition: null,
                leadershipType: null,
                party: "D",
                phone: "(202) 224-3244",
                portrait: "mn-amy-klobuchar",
                senateClass: "Class I",
                state: "Minnesota",
                website: "klobuchar.senate.gov",
            },
            {
                address1: "316 Hart Senate Office Building",
                address2: "Washington DC 20510",
                assumedOffice: "January 3, 2015",
                bioguideId: "l000575",
                eliteSchool: false,
                email: "lankford.senate.gov/contact/email",
                firstName: "James",
                lastName: "Lankford",
                leadershipPosition: null,
                leadershipType: null,
                party: "R",
                phone: "(202) 224-5754",
                portrait: "ok-james-lankford",
                senateClass: "Class III",
                state: "Oklahoma",
                website: "lankford.senate.gov",
            },
            {
                address1: "437 Russell Senate Office Building",
                address2: "Washington DC 20510",
                assumedOffice: "January 3, 1975",
                bioguideId: "l000174",
                eliteSchool: true, //Georgetown
                email: "leahy.senate.gov/contact",
                firstName: "Patrick J.",
                lastName: "Leahy",
                leadershipPosition: "President Pro Tempore",
                leadershipType: "pro tempore",
                party: "D",
                phone: "(202) 224-4242",
                portrait: "vt-patrick-leahy",
                senateClass: "Class III",
                state: "Vermont",
                website: "leahy.senate.gov",
            },
            {
                address1: "361A Russell Senate Office Building",
                address2: "Washington DC 20510",
                assumedOffice: "January 3, 2011",
                bioguideId: "l000577",
                eliteSchool: false,
                email: "lee.senate.gov/public/index.cfm/contact",
                firstName: "Mike",
                lastName: "Lee",
                leadershipPosition: null,
                leadershipType: null,
                party: "R",
                phone: "(202) 224-5444",
                portrait: "ut-mike-lee",
                senateClass: "Class III",
                state: "Utah",
                website: "lee.senate.gov",
            },
            {
                address1: "498 Russell Senate Office Building",
                address2: "Washington DC 20510",
                assumedOffice: "January 3, 2021",
                bioguideId: "l000570",
                eliteSchool: false,
                email: "lujan.senate.gov/contact",
                firstName: "Ben Ray",
                lastName: "Luján",
                leadershipPosition: null,
                leadershipType: null,
                party: "D",
                phone: "(202) 224-6621",
                portrait: "nm-ben-ray-lujan",
                senateClass: "Class II",
                state: "New Mexico",
                website: "lujan.senate.gov",
            },
            {
                address1: "124 Russell Senate Office Building",
                address2: "Washington DC 20510",
                assumedOffice: "January 3, 2021",
                bioguideId: "l000571",
                eliteSchool: false,
                email: "lummis.senate.gov/contact/contact-form/",
                firstName: "Cynthia M.",
                lastName: "Lummis",
                leadershipPosition: null,
                leadershipType: null,
                party: "R",
                phone: "(202) 224-3424",
                portrait: "wy-cynthia-lummis",
                senateClass: "Class II",
                state: "Wyoming",
                website: "lummis.senate.gov",
            },
            {
                address1: "306 Hart Senate Office Building",
                address2: "Washington DC 20510",
                assumedOffice: "November 15, 2010",
                bioguideId: "m001183",
                eliteSchool: false,
                email: "manchin.senate.gov/public/index.cfm/contact-form",
                firstName: "Joe",
                lastName: "Manchin, III",
                leadershipPosition: null,
                leadershipType: null,
                party: "D",
                phone: "(202) 224-3954",
                portrait: "wv-joe-manchin",
                senateClass: "Class I",
                state: "West Virginia",
                website: "manchin.senate.gov",
            },
            {
                address1: "255 Dirksen Senate Office Building",
                address2: "Washington DC 20510",
                assumedOffice: "July 16, 2013",
                bioguideId: "m000133",
                eliteSchool: false,
                email: "markey.senate.gov/contact",
                firstName: "Edward J.",
                lastName: "Markey",
                leadershipPosition: null,
                leadershipType: null,
                party: "D",
                phone: "(202) 224-2742",
                portrait: "ma-ed-markey",
                senateClass: "Class II",
                state: "Massachusetts",
                website: "markey.senate.gov",
            },
            {
                address1: "479A Russell Senate Office Building",
                address2: "Washington DC 20510",
                assumedOffice: "January 3, 2021",
                bioguideId: "m001198",
                eliteSchool: false,
                email: "marshall.senate.gov/contact",
                firstName: "Roger",
                lastName: "Marshall",
                leadershipPosition: null,
                leadershipType: null,
                party: "R",
                phone: "(202) 224-4774",
                portrait: "ks-roger-marshall",
                senateClass: "Class II",
                state: "Kansas",
                website: "marshall.senate.gov",
            },
            {
                address1: "317 Russell Senate Office Building",
                address2: "Washington DC 20510",
                assumedOffice: "January 3, 1985",
                bioguideId: "m000355",
                eliteSchool: false,
                email: "mcconnell.senate.gov/public/index.cfm?p=contact",
                firstName: "Mitch",
                lastName: "McConnell",
                leadershipPosition: "Republican Leader",
                leadershipType: "leader",
                party: "R",
                phone: "(202) 224-2541",
                portrait: "ky-mitch-mcconnell",
                senateClass: "Class II",
                state: "Kentucky",
                website: "mcconnell.senate.gov",
            },
            {
                address1: "528 Hart Senate Office Building",
                address2: "Washington DC 20510",
                assumedOffice: "January 17, 2006",
                bioguideId: "m000639",
                eliteSchool: false,
                email: "menendez.senate.gov/contact",
                firstName: "Robert",
                lastName: "Menendez",
                leadershipPosition: null,
                leadershipType: null,
                party: "D",
                phone: "(202) 224-4744",
                portrait: "nj-robert-menendez",
                senateClass: "Class I",
                state: "New Jersey",
                website: "menendez.senate.gov",
            },
            {
                address1: "531 Hart Senate Office Building",
                address2: "Washington DC 20510",
                assumedOffice: "January 3, 2009",
                bioguideId: "m001176",
                eliteSchool: true, //Stanford, Princeton
                email: "merkley.senate.gov/contact",
                firstName: "Jeff",
                lastName: "Merkley",
                leadershipPosition: null,
                leadershipType: null,
                party: "D",
                phone: "(202) 224-3753",
                portrait: "or-jeff-merkley",
                senateClass: "Class II",
                state: "Oregon",
                website: "merkley.senate.gov",
            },
            {
                address1: "521 Dirksen Senate Office Building",
                address2: "Washington DC 20510",
                assumedOffice: "January 3, 2011",
                bioguideId: "m000934",
                eliteSchool: false,
                email: "moran.senate.gov/public/index.cfm/e-mail-jerry",
                firstName: "Jerry",
                lastName: "Moran",
                leadershipPosition: null,
                leadershipType: null,
                party: "R",
                phone: "(202) 224-6521",
                portrait: "ks-jerry-moran",
                senateClass: "Class III",
                state: "Kansas",
                website: "moran.senate.gov",
            },
            {
                address1: "522 Hart Senate Office Building",
                address2: "Washington DC 20510",
                assumedOffice: "December 20, 2002",
                bioguideId: "m001153",
                eliteSchool: true, //Georgetown
                email: "murkowski.senate.gov/public/index.cfm/contact",
                firstName: "Lisa",
                lastName: "Murkowski",
                leadershipPosition: null,
                leadershipType: null,
                party: "R",
                phone: "(202) 224-6665",
                portrait: "ak-lisa-murkowski",
                senateClass: "Class III",
                state: "Alaska",
                website: "murkowski.senate.gov",
            },
            {
                address1: "136 Hart Senate Office Building",
                address2: "Washington DC 20510",
                assumedOffice: "January 3, 2013",
                bioguideId: "m001169",
                eliteSchool: true, //Williams
                email: "murphy.senate.gov/contact",
                firstName: "Christopher",
                lastName: "Murphy",
                leadershipPosition: null,
                leadershipType: null,
                party: "D",
                phone: "(202) 224-4041",
                portrait: "ct-christopher-murphy",
                senateClass: "Class I",
                state: "Connecticut",
                website: "murphy.senate.gov",
            },
            {
                address1: "154 Russell Senate Office Building",
                address2: "Washington DC 20510",
                assumedOffice: "January 3, 1993",
                bioguideId: "m001111",
                eliteSchool: false,
                email: "murray.senate.gov/write-to-patty/",
                firstName: "Patty",
                lastName: "Murray",
                leadershipPosition: "Assistant Democratic Leader",
                leadershipType: "leader",
                party: "D",
                phone: "(202) 224-2621",
                portrait: "wa-patty-murray",
                senateClass: "Class III",
                state: "Washington",
                website: "murray.senate.gov",
            },
            {
                address1: "455 Russell Senate Office Building",
                address2: "Washington DC 20510",
                assumedOffice: "January 20, 2021",
                bioguideId: "o000174",
                eliteSchool: true, //Georgetown, London School of Econ
                email: "ossoff.senate.gov/contact-us/",
                firstName: "Jon",
                lastName: "Ossoff",
                leadershipPosition: null,
                leadershipType: null,
                party: "D",
                phone: "(202) 224-3521",
                portrait: "ga-jon-ossoff",
                senateClass: "Class II",
                state: "Georgia",
                website: "ossoff.senate.gov",
            },
            {
                address1: "112 Hart Senate Office Building",
                address2: "Washington DC 20510",
                assumedOffice: "January 20, 2021",
                bioguideId: "p000145",
                eliteSchool: true, //MIT
                email: "padilla.senate.gov/contact",
                firstName: "Alex",
                lastName: "Padilla",
                leadershipPosition: null,
                leadershipType: null,
                party: "D",
                phone: "(202) 224-3553",
                portrait: "ca-alex-padilla",
                senateClass: "Class III",
                state: "California",
                website: "padilla.senate.gov",
            },
            {
                address1: "167 Russell Senate Office Building",
                address2: "Washington DC 20510",
                assumedOffice: "January 3, 2011",
                bioguideId: "p000603",
                eliteSchool: true, //Duke
                email: "paul.senate.gov/connect/email-rand",
                firstName: "Rand",
                lastName: "Paul",
                leadershipPosition: null,
                leadershipType: null,
                party: "R",
                phone: "(202) 224-4343",
                portrait: "ky-rand-paul",
                senateClass: "Class III",
                state: "Kentucky",
                website: "paul.senate.gov",
            },
            {
                address1: "724 Hart Senate Office Building",
                address2: "Washington DC 20510",
                assumedOffice: "January 3, 2015",
                bioguideId: "p000595",
                eliteSchool: false,
                email: "peters.senate.gov/contact/email-gary",
                firstName: "Gary C.",
                lastName: "Peters",
                leadershipPosition: null,
                leadershipType: null,
                party: "D",
                phone: "(202) 224-6221",
                portrait: "mi-gary-peters",
                senateClass: "Class II",
                state: "Michigan",
                website: "peters.senate.gov",
            },
            {
                address1: "448 Russell Senate Office Building",
                address2: "Washington DC 20510",
                assumedOffice: "January 3, 2011",
                bioguideId: "p000449",
                eliteSchool: true, //Dartmouth
                email: "portman.senate.gov/public/index.cfm/contact?p=contact-form",
                firstName: "Rob",
                lastName: "Portman",
                leadershipPosition: null,
                leadershipType: null,
                party: "R",
                phone: "(202) 224-3353",
                portrait: "oh-rob-portman",
                senateClass: "Class III",
                state: "Ohio",
                website: "portman.senate.gov",
            },
            {
                address1: "728 Hart Senate Office Building",
                address2: "Washington DC 20510",
                assumedOffice: "January 3, 1997",
                bioguideId: "r000122",
                eliteSchool: true, //West Point, Harvard
                email: "reed.senate.gov/contact",
                firstName: "Jack",
                lastName: "Reed",
                leadershipPosition: null,
                leadershipType: null,
                party: "D",
                phone: "(202) 224-4642",
                portrait: "ri-jack-reed",
                senateClass: "Class II",
                state: "Rhode Island",
                website: "reed.senate.gov",
            },
            {
                address1: "483 Russell Senate Office Building",
                address2: "Washington DC 20510",
                assumedOffice: "January 3, 2009",
                bioguideId: "r000584",
                eliteSchool: false,
                email: "risch.senate.gov/public/index.cfm?p=Email",
                firstName: "James E.",
                lastName: "Risch",
                leadershipPosition: null,
                leadershipType: null,
                party: "R",
                phone: "(202) 224-2752",
                portrait: "id-james-risch",
                senateClass: "Class II",
                state: "Idaho",
                website: "risch.senate.gov",
            },
            {
                address1: "354 Russell Senate Office Building",
                address2: "Washington DC 20510",
                assumedOffice: "January 3, 2019",
                bioguideId: "r000615",
                eliteSchool: true, //Harvard
                email: "romney.senate.gov/contact-senator-romney",
                firstName: "Mitt",
                lastName: "Romney",
                leadershipPosition: null,
                leadershipType: null,
                party: "R",
                phone: "(202) 224-5251",
                portrait: "ut-mitt-romney",
                senateClass: "Class I",
                state: "Utah",
                website: "romney.senate.gov",
            },
            {
                address1: "713 Hart Senate Office Building",
                address2: "Washington DC 20510",
                assumedOffice: "January 3, 2019",
                bioguideId: "r000608",
                eliteSchool: false,
                email: "rosen.senate.gov/contact_jacky",
                firstName: "Jacky",
                lastName: "Rosen",
                leadershipPosition: null,
                leadershipType: null,
                party: "D",
                phone: "(202) 224-6244",
                portrait: "nv-jacky-rosen",
                senateClass: "Class I",
                state: "Nevada",
                website: "rosen.senate.gov",
            },
            {
                address1: "716 Hart Senate Office Building",
                address2: "Washington DC 20510",
                assumedOffice: "January 3, 2015",
                bioguideId: "r000605",
                eliteSchool: false,
                email: "rounds.senate.gov/contact/email-mike",
                firstName: "Mike",
                lastName: "Rounds",
                leadershipPosition: null,
                leadershipType: null,
                party: "R",
                phone: "(202) 224-5842",
                portrait: "sd-mike-rounds",
                senateClass: "Class II",
                state: "South Dakota",
                website: "rounds.senate.gov",
            },
            {
                address1: "284 Russell Senate Office Building",
                address2: "Washington DC 20510",
                assumedOffice: "January 3, 2011",
                bioguideId: "r000595",
                eliteSchool: false,
                email: "rubio.senate.gov/public/index.cfm/contact",
                firstName: "Marco",
                lastName: "Rubio",
                leadershipPosition: null,
                leadershipType: null,
                party: "R",
                phone: "(202) 224-3041",
                portrait: "fl-marco-rubio",
                senateClass: "Class III",
                state: "Florida",
                website: "rubio.senate.gov",
            },
            {
                address1: "332 Dirksen Senate Office Building",
                address2: "Washington DC 20510",
                assumedOffice: "January 3, 2007",
                bioguideId: "s000033",
                eliteSchool: true, //Univ of Chicago
                email: "sanders.senate.gov/contact",
                firstName: "Bernard",
                lastName: "Sanders",
                leadershipPosition: null,
                leadershipType: null,
                party: "I",
                phone: "(202) 224-5141",
                portrait: "vt-bernie-sanders",
                senateClass: "Class I",
                state: "Vermont",
                website: "sanders.senate.gov",
            },
            {
                address1: "139 Russell Senate Office Building",
                address2: "Washington DC 20510",
                assumedOffice: "January 3, 2015",
                bioguideId: "s001197",
                eliteSchool: true, //Harvard, Yale
                email: "sasse.senate.gov/public/index.cfm/email-ben",
                firstName: "Ben",
                lastName: "Sasse",
                leadershipPosition: null,
                leadershipType: null,
                party: "R",
                phone: "(202) 224-4224",
                portrait: "ne-ben-sasse",
                senateClass: "Class II",
                state: "Nebraska",
                website: "sasse.senate.gov",
            },
            {
                address1: "722 Hart Senate Office Building",
                address2: "Washington DC 20510",
                assumedOffice: "December 26, 2012",
                bioguideId: "s001194",
                eliteSchool: false,
                email: "schatz.senate.gov/contact",
                firstName: "Brian",
                lastName: "Schatz",
                leadershipPosition: null,
                leadershipType: null,
                party: "D",
                phone: "(202) 224-3934",
                portrait: "hi-brian-schatz",
                senateClass: "Class III",
                state: "Hawaii",
                website: "schatz.senate.gov",
            },
            {
                address1: "322 Hart Senate Office Building",
                address2: "Washington DC 20510",
                assumedOffice: "January 3, 1999",
                bioguideId: "s000148",
                eliteSchool: true, //Harvard
                email: "schumer.senate.gov/contact/email-chuck",
                firstName: "Charles E.",
                lastName: "Schumer",
                leadershipPosition: "Democratic Leader",
                leadershipType: "leader",
                party: "D",
                phone: "(202) 224-6542",
                portrait: "ny-chuck-schumer",
                senateClass: "Class III",
                state: "New York",
                website: "schumer.senate.gov",
            },
            {
                address1: "502 Hart Senate Office Building",
                address2: "Washington DC 20510",
                assumedOffice: "January 8, 2019",
                bioguideId: "s001217",
                eliteSchool: false,
                email: "rickscott.senate.gov/contact/contact",
                firstName: "Rick",
                lastName: "Scott",
                leadershipPosition: null,
                leadershipType: null,
                party: "R",
                phone: "(202) 224-5274",
                portrait: "fl-rick-scott",
                senateClass: "Class I",
                state: "Florida",
                website: "rickscott.senate.gov",
            },
            {
                address1: "104 Hart Senate Office Building",
                address2: "Washington DC 20510",
                assumedOffice: "January 3, 2013",
                bioguideId: "s001184",
                eliteSchool: false,
                email: "scott.senate.gov/contact/email-me",
                firstName: "Tim",
                lastName: "Scott",
                leadershipPosition: null,
                leadershipType: null,
                party: "R",
                phone: "(202) 224-6121",
                portrait: "sc-tim-scott",
                senateClass: "Class III",
                state: "South Carolina",
                website: "scott.senate.gov",
            },
            {
                address1: "506 Hart Senate Office Building",
                address2: "Washington DC 20510",
                assumedOffice: "January 3, 2009",
                bioguideId: "s001181",
                eliteSchool: false,
                email: "shaheen.senate.gov/contact/contact-jeanne",
                firstName: "Jeanne",
                lastName: "Shaheen",
                leadershipPosition: null,
                leadershipType: null,
                party: "D",
                phone: "(202) 224-2841",
                portrait: "nh-jeanne-shaheen",
                senateClass: "Class II",
                state: "New Hampshire",
                website: "shaheen.senate.gov",
            },
            {
                address1: "304 Russell Senate Office Building",
                address2: "Washington DC 20510",
                assumedOffice: "January 3, 1987",
                bioguideId: "s000320",
                eliteSchool: false,
                email: "shelby.senate.gov/public/index.cfm/emailsenatorshelby",
                firstName: "Richard C.",
                lastName: "Shelby",
                leadershipPosition: null,
                leadershipType: null,
                party: "R",
                phone: "(202) 224-5744",
                portrait: "al-richard-shelby",
                senateClass: "Class III",
                state: "Alabama",
                website: "shelby.senate.gov",
            },
            {
                address1: "317 Hart Senate Office Building",
                address2: "Washington DC 20510",
                assumedOffice: "January 3, 2019",
                bioguideId: "s001191",
                eliteSchool: false,
                email: "sinema.senate.gov/contact-kyrsten",
                firstName: "Kyrsten",
                lastName: "Sinema",
                leadershipPosition: null,
                leadershipType: null,
                party: "D",
                phone: "(202) 224-4521",
                portrait: "az-kyrsten-sinema",
                senateClass: "Class I",
                state: "Arizona",
                website: "sinema.senate.gov",
            },
            {
                address1: "720 Hart Senate Office Building",
                address2: "Washington DC 20510",
                assumedOffice: "January 3, 2018",
                bioguideId: "s001203",
                eliteSchool: true, //Stanford, Dartmouth
                email: "smith.senate.gov/contact-tina",
                firstName: "Tina",
                lastName: "Smith",
                leadershipPosition: null,
                leadershipType: null,
                party: "D",
                phone: "(202) 224-5641",
                portrait: "mn-tina-smith",
                senateClass: "Class II",
                state: "Minnesota",
                website: "smith.senate.gov",
            },
            {
                address1: "731 Hart Senate Office Building",
                address2: "Washington DC 20510",
                assumedOffice: "January 3, 2001",
                bioguideId: "s000770",
                eliteSchool: false,
                email: "stabenow.senate.gov/contact",
                firstName: "Debbie",
                lastName: "Stabenow",
                leadershipPosition: null,
                leadershipType: null,
                party: "D",
                phone: "(202) 224-4822",
                portrait: "mi-debbie-stabenow",
                senateClass: "Class I",
                state: "Michigan",
                website: "stabenow.senate.gov",
            },
            {
                address1: "302 Hart Senate Office Building",
                address2: "Washington DC 20510",
                assumedOffice: "January 3, 2015",
                bioguideId: "s001198",
                eliteSchool: true, //Harvard, Georgetown
                email: "sullivan.senate.gov/contact/email",
                firstName: "Dan",
                lastName: "Sullivan",
                leadershipPosition: null,
                leadershipType: null,
                party: "R",
                phone: "(202) 224-3004",
                portrait: "ak-dan-sullivan",
                senateClass: "Class II",
                state: "Alaska",
                website: "sullivan.senate.gov",
            },
            {
                address1: "311 Hart Senate Office Building",
                address2: "Washington DC 20510",
                assumedOffice: "January 3, 2007",
                bioguideId: "t000464",
                eliteSchool: false,
                email: "tester.senate.gov/?p=email_senator",
                firstName: "Jon",
                lastName: "Tester",
                leadershipPosition: null,
                leadershipType: null,
                party: "D",
                phone: "(202) 224-2644",
                portrait: "mt-jon-tester",
                senateClass: "Class I",
                state: "Montana",
                website: "tester.senate.gov",
            },
            {
                address1: "511 Dirksen Senate Office Building",
                address2: "Washington DC 20510",
                assumedOffice: "January 3, 2005",
                bioguideId: "t000250",
                eliteSchool: false,
                email: "thune.senate.gov/public/index.cfm/contact",
                firstName: "John",
                lastName: "Thune",
                leadershipPosition: "Whip",
                leadershipType: "whip",
                party: "R",
                phone: "(202) 224-2321",
                portrait: "sd-john-thune",
                senateClass: "Class III",
                state: "South Dakota",
                website: "thune.senate.gov",
            },
            {
                address1: "113 Dirksen Senate Office Building",
                address2: "Washington DC 20510",
                assumedOffice: "January 3, 2015",
                bioguideId: "t000476",
                eliteSchool: false,
                email: "tillis.senate.gov/public/index.cfm/email-me",
                firstName: "Thom",
                lastName: "Tillis",
                leadershipPosition: null,
                leadershipType: null,
                party: "R",
                phone: "(202) 224-6342",
                portrait: "nc-thom-tillis",
                senateClass: "Class II",
                state: "North Carolina",
                website: "tillis.senate.gov",
            },
            {
                address1: "455 Dirksen Senate Office Building",
                address2: "Washington DC 20510",
                assumedOffice: "January 3, 2011",
                bioguideId: "t000461",
                eliteSchool: true, //Harvard
                email: "toomey.senate.gov/?p=contact",
                firstName: "Patrick J.",
                lastName: "Toomey",
                leadershipPosition: null,
                leadershipType: null,
                party: "R",
                phone: "(202) 224-4254",
                portrait: "pa-pat-toomey",
                senateClass: "Class III",
                state: "Pennsylvania",
                website: "toomey.senate.gov",
            },
            {
                address1: "142 Russell Senate Office Building",
                address2: "Washington DC 20510",
                assumedOffice: "January 3, 2021",
                bioguideId: "t000278",
                eliteSchool: false,
                email: "tuberville.senate.gov/contact/contact-form/",
                firstName: "Tommy",
                lastName: "Tuberville",
                leadershipPosition: null,
                leadershipType: null,
                party: "R",
                phone: "(202) 224-4124",
                portrait: "al-tommy-tuberville",
                senateClass: "Class II",
                state: "Alabama",
                website: "tuberville.senate.gov",
            },
            {
                address1: "110 Hart Senate Office Building",
                address2: "Washington DC 20510",
                assumedOffice: "January 3, 2017",
                bioguideId: "v000128",
                eliteSchool: true, //Harvard, Georgetown
                email: "vanhollen.senate.gov/contact/email",
                firstName: "Chris",
                lastName: "Van Hollen",
                leadershipPosition: null,
                leadershipType: null,
                party: "D",
                phone: "(202) 224-4654",
                portrait: "md-chris-van-hollen",
                senateClass: "Class III",
                state: "Maryland",
                website: "vanhollen.senate.gov",
            },
            {
                address1: "703 Hart Senate Office Building",
                address2: "Washington DC 20510",
                assumedOffice: "January 3, 2009",
                bioguideId: "w000805",
                eliteSchool: true, //Harvard
                email: "warner.senate.gov/public/index.cfm?p=Contact",
                firstName: "Mark R.",
                lastName: "Warner",
                leadershipPosition: null,
                leadershipType: null,
                party: "D",
                phone: "(202) 224-2023",
                portrait: "va-mark-warner",
                senateClass: "Class II",
                state: "Virginia",
                website: "warner.senate.gov",
            },
            {
                address1: "388 Russell Senate Office Building",
                address2: "Washington DC 20510",
                assumedOffice: "January 20, 2021",
                bioguideId: "w000790",
                eliteSchool: false,
                email: "warnock.senate.gov/contact",
                firstName: "Raphael G.",
                lastName: "Warnock",
                leadershipPosition: null,
                leadershipType: null,
                party: "D",
                phone: "(202) 224-3643",
                portrait: "ga-raphael-warnock",
                senateClass: "Class III",
                state: "Georgia",
                website: "warnock.senate.gov",
            },
            {
                address1: "309 Hart Senate Office Building",
                address2: "Washington DC 20510",
                assumedOffice: "January 3, 2013",
                bioguideId: "w000817",
                eliteSchool: false,
                email: "warren.senate.gov/?p=email_senator",
                firstName: "Elizabeth",
                lastName: "Warren",
                leadershipPosition: null,
                leadershipType: null,
                party: "D",
                phone: "(202) 224-4543",
                portrait: "ma-elizabeth-warren",
                senateClass: "Class I",
                state: "Massachusetts",
                website: "warren.senate.gov",
            },
            {
                address1: "530 Hart Senate Office Building",
                address2: "Washington DC 20510",
                assumedOffice: "January 3, 2007",
                bioguideId: "w000802",
                eliteSchool: true, //Yale
                email: "whitehouse.senate.gov/contact/email-sheldon",
                firstName: "Sheldon",
                lastName: "Whitehouse",
                leadershipPosition: null,
                leadershipType: null,
                party: "D",
                phone: "(202) 224-2921",
                portrait: "ri-sheldon-whitehouse",
                senateClass: "Class I",
                state: "Rhode Island",
                website: "whitehouse.senate.gov",
            },
            {
                address1: "555 Dirksen Senate Office Building",
                address2: "Washington DC 20510",
                assumedOffice: "December 31, 2007",
                bioguideId: "w000437",
                eliteSchool: false,
                email: "wicker.senate.gov/public/index.cfm/contact",
                firstName: "Roger F.",
                lastName: "Wicker",
                leadershipPosition: null,
                leadershipType: null,
                party: "R",
                phone: "(202) 224-6253",
                portrait: "ms-roger-wicker",
                senateClass: "Class I",
                state: "Mississippi",
                website: "wicker.senate.gov",
            },
            {
                address1: "221 Dirksen Senate Office Building",
                address2: "Washington DC 20510",
                assumedOffice: "February 5, 1996",
                bioguideId: "w000779",
                eliteSchool: true, //Stanford
                email: "wyden.senate.gov/contact",
                firstName: "Ron",
                lastName: "Wyden",
                leadershipPosition: null,
                leadershipType: null,
                party: "D",
                phone: "(202) 224-5244",
                portrait: "or-ron-wyden",
                senateClass: "Class III",
                state: "Oregon",
                website: "wyden.senate.gov",
            },
            {
                address1: "185 Dirksen Senate Office Building",
                address2: "Washington DC 20510",
                assumedOffice: "January 3, 2017",
                bioguideId: "y000064",
                eliteSchool: true, //West Point, Univ of Chicago
                email: "young.senate.gov/contact",
                firstName: "Todd",
                lastName: "Young",
                leadershipPosition: null,
                leadershipType: null,
                party: "R",
                phone: "(202) 224-5623",
                portrait: "in-todd-young",
                senateClass: "Class III",
                state: "Indiana",
                website: "young.senate.gov",
            },
        ],
        stats: {
            alabama: {
                population: 5024279,
                rank: 24,
                houseSeats: 7,
            },
            alaska: {
                population: 733391,
                rank: 48,
                houseSeats: 1,
            },
            arizona: {
                population: 7151502,
                rank: 14,
                houseSeats: 9,
            },
            arkansas: {
                population: 3011524,
                rank: 33,
                houseSeats: 4,
            },
            california: {
                population: 39538223,
                rank: 1,
                houseSeats: 52,
            },
            colorado: {
                population: 5773714,
                rank: 21,
                houseSeats: 8,
            },
            connecticut: {
                population: 3605944,
                rank: 29,
                houseSeats: 5,
            },
            delaware: {
                population: 989948,
                rank: 45,
                houseSeats: 1,
            },
            florida: {
                population: 21538187,
                rank: 3,
                houseSeats: 28,
            },
            georgia: {
                population: 10711908,
                rank: 8,
                houseSeats: 14,
            },
            hawaii: {
                population: 1455271,
                rank: 40,
                houseSeats: 2,
            },
            idaho: {
                population: 1839106,
                rank: 38,
                houseSeats: 2,
            },
            illinois: {
                population: 12812508,
                rank: 6,
                houseSeats: 17,
            },
            indiana: {
                population: 6785528,
                rank: 17,
                houseSeats: 9,
            },
            iowa: {
                population: 3190369,
                rank: 31,
                houseSeats: 4,
            },
            kansas: {
                population: 2937880,
                rank: 35,
                houseSeats: 4,
            },
            kentucky: {
                population: 4505836,
                rank: 26,
                houseSeats: 6,
            },
            louisiana: {
                population: 4657757,
                rank: 25,
                houseSeats: 6,
            },
            maine: {
                population: 1362359,
                rank: 42,
                houseSeats: 2,
            },
            maryland: {
                population: 6177224,
                rank: 18,
                houseSeats: 8,
            },
            massachusetts: {
                population: 7029917,
                rank: 15,
                houseSeats: 9,
            },
            michigan: {
                population: 10077331,
                rank: 10,
                houseSeats: 13,
            },
            minnesota: {
                population: 5706494,
                rank: 22,
                houseSeats: 8,
            },
            mississippi: {
                population: 2961279,
                rank: 34,
                houseSeats: 4,
            },
            missouri: {
                population: 6154913,
                rank: 19,
                houseSeats: 8,
            },
            montana: {
                population: 1084225,
                rank: 44,
                houseSeats: 2,
            },
            nebraska: {
                population: 1961504,
                rank: 37,
                houseSeats: 3,
            },
            nevada: {
                population: 3104614,
                rank: 32,
                houseSeats: 4,
            },
            newHampshire: {
                population: 1377529,
                rank: 41,
                houseSeats: 2,
            },
            newJersey: {
                population: 9288994,
                rank: 11,
                houseSeats: 12,
            },
            newMexico: {
                population: 2117522,
                rank: 36,
                houseSeats: 3,
            },
            newYork: {
                population: 20201249,
                rank: 4,
                houseSeats: 26,
            },
            northCarolina: {
                population: 10439388,
                rank: 9,
                houseSeats: 14,
            },
            northDakota: {
                population: 779094,
                rank: 47,
                houseSeats: 1,
            },
            ohio: {
                population: 11799448,
                rank: 7,
                houseSeats: 15,
            },
            oklahoma: {
                population: 3959353,
                rank: 28,
                houseSeats: 5,
            },
            oregon: {
                population: 4237256,
                rank: 27,
                houseSeats: 6,
            },
            pennsylvania: {
                population: 13002700,
                rank: 5,
                houseSeats: 17,
            },
            rhodeIsland: {
                population: 1097379,
                rank: 43,
                houseSeats: 2,
            },
            southCarolina: {
                population: 5118425,
                rank: 23,
                houseSeats: 7,
            },
            southDakota: {
                population: 886667,
                rank: 46,
                houseSeats: 1,
            },
            tennessee: {
                population: 6910840,
                rank: 16,
                houseSeats: 9,
            },
            texas: {
                population: 29145505,
                rank: 2,
                houseSeats: 38,
            },
            utah: {
                population: 3271616,
                rank: 30,
                houseSeats: 4,
            },
            vermont: {
                population: 643077,
                rank: 49,
                houseSeats: 1,
            },
            virginia: {
                population: 8631393,
                rank: 12,
                houseSeats: 11,
            },
            washington: {
                population: 7705281,
                rank: 13,
                houseSeats: 10,
            },
            westVirginia: {
                population: 1793716,
                rank: 39,
                houseSeats: 2,
            },
            wisconsin: {
                population: 5893718,
                rank: 20,
                houseSeats: 8,
            },
            wyoming: {
                population: 576851,
                rank: 50,
                houseSeats: 1,
            },
        },
    },
    getters: {
        getAlabama: (state) => {
            return state.senators.filter(
                (senator) => senator.state === "Alabama"
            );
        },
        getAlaska: (state) => {
            return state.senators.filter(
                (senator) => senator.state === "Alaska"
            );
        },
        getArizona: (state) => {
            return state.senators.filter(
                (senator) => senator.state === "Arizona"
            );
        },
        getArkansas: (state) => {
            return state.senators.filter(
                (senator) => senator.state === "Arkansas"
            );
        },
        getCalifornia: (state) => {
            return state.senators.filter(
                (senator) => senator.state === "California"
            );
        },
        getColorado: (state) => {
            return state.senators.filter(
                (senator) => senator.state === "Colorado"
            );
        },
        getConnecticut: (state) => {
            return state.senators.filter(
                (senator) => senator.state === "Connecticut"
            );
        },
        getDelaware: (state) => {
            return state.senators.filter(
                (senator) => senator.state === "Delaware"
            );
        },
        getFlorida: (state) => {
            return state.senators.filter(
                (senator) => senator.state === "Florida"
            );
        },
        getGeorgia: (state) => {
            return state.senators.filter(
                (senator) => senator.state === "Georgia"
            );
        },
        getHawaii: (state) => {
            return state.senators.filter(
                (senator) => senator.state === "Hawaii"
            );
        },
        getIdaho: (state) => {
            return state.senators.filter(
                (senator) => senator.state === "Idaho"
            );
        },
        getIllinois: (state) => {
            return state.senators.filter(
                (senator) => senator.state === "Illinois"
            );
        },
        getIndiana: (state) => {
            return state.senators.filter(
                (senator) => senator.state === "Indiana"
            );
        },
        getIowa: (state) => {
            return state.senators.filter((senator) => senator.state === "Iowa");
        },
        getKansas: (state) => {
            return state.senators.filter(
                (senator) => senator.state === "Kansas"
            );
        },
        getKentucky: (state) => {
            return state.senators.filter(
                (senator) => senator.state === "Kentucky"
            );
        },
        getLouisiana: (state) => {
            return state.senators.filter(
                (senator) => senator.state === "Louisiana"
            );
        },
        getMaine: (state) => {
            return state.senators.filter(
                (senator) => senator.state === "Maine"
            );
        },
        getMaryland: (state) => {
            return state.senators.filter(
                (senator) => senator.state === "Maryland"
            );
        },
        getMassachusetts: (state) => {
            return state.senators.filter(
                (senator) => senator.state === "Massachusetts"
            );
        },
        getMichigan: (state) => {
            return state.senators.filter(
                (senator) => senator.state === "Michigan"
            );
        },
        getMinnesota: (state) => {
            return state.senators.filter(
                (senator) => senator.state === "Minnesota"
            );
        },
        getMississippi: (state) => {
            return state.senators.filter(
                (senator) => senator.state === "Mississippi"
            );
        },
        getMissouri: (state) => {
            return state.senators.filter(
                (senator) => senator.state === "Missouri"
            );
        },
        getMontana: (state) => {
            return state.senators.filter(
                (senator) => senator.state === "Montana"
            );
        },
        getNebraska: (state) => {
            return state.senators.filter(
                (senator) => senator.state === "Nebraska"
            );
        },
        getNevada: (state) => {
            return state.senators.filter(
                (senator) => senator.state === "Nevada"
            );
        },
        getNewHampshire: (state) => {
            return state.senators.filter(
                (senator) => senator.state === "New Hampshire"
            );
        },
        getNewJersey: (state) => {
            return state.senators.filter(
                (senator) => senator.state === "New Jersey"
            );
        },
        getNewMexico: (state) => {
            return state.senators.filter(
                (senator) => senator.state === "New Mexico"
            );
        },
        getNewYork: (state) => {
            return state.senators.filter(
                (senator) => senator.state === "New York"
            );
        },
        getNorthCarolina: (state) => {
            return state.senators.filter(
                (senator) => senator.state === "North Carolina"
            );
        },
        getNorthDakota: (state) => {
            return state.senators.filter(
                (senator) => senator.state === "North Dakota"
            );
        },
        getOhio: (state) => {
            return state.senators.filter((senator) => senator.state === "Ohio");
        },
        getOklahoma: (state) => {
            return state.senators.filter(
                (senator) => senator.state === "Oklahoma"
            );
        },
        getOregon: (state) => {
            return state.senators.filter(
                (senator) => senator.state === "Oregon"
            );
        },
        getPennsylvania: (state) => {
            return state.senators.filter(
                (senator) => senator.state === "Pennsylvania"
            );
        },
        getRhodeIsland: (state) => {
            return state.senators.filter(
                (senator) => senator.state === "Rhode Island"
            );
        },
        getSouthCarolina: (state) => {
            return state.senators.filter(
                (senator) => senator.state === "South Carolina"
            );
        },
        getSouthDakota: (state) => {
            return state.senators.filter(
                (senator) => senator.state === "South Dakota"
            );
        },
        getTennessee: (state) => {
            return state.senators.filter(
                (senator) => senator.state === "Tennessee"
            );
        },
        getTexas: (state) => {
            return state.senators.filter(
                (senator) => senator.state === "Texas"
            );
        },
        getUtah: (state) => {
            return state.senators.filter((senator) => senator.state === "Utah");
        },
        getVermont: (state) => {
            return state.senators.filter(
                (senator) => senator.state === "Vermont"
            );
        },
        getVirginia: (state) => {
            return state.senators.filter(
                (senator) => senator.state === "Virginia"
            );
        },
        getWashington: (state) => {
            return state.senators.filter(
                (senator) => senator.state === "Washington"
            );
        },
        getWestVirginia: (state) => {
            return state.senators.filter(
                (senator) => senator.state === "West Virginia"
            );
        },
        getWisconsin: (state) => {
            return state.senators.filter(
                (senator) => senator.state === "Wisconsin"
            );
        },
        getWyoming: (state) => {
            return state.senators.filter(
                (senator) => senator.state === "Wyoming"
            );
        },
        getStatsAlabama: (state) => {
            return {
                pop: state.stats.alabama.population.toLocaleString(),
                rank: state.stats.alabama.rank,
                seats: state.stats.alabama.houseSeats,
            };
        },
        getStatsAlaska: (state) => {
            return {
                pop: state.stats.alaska.population.toLocaleString(),
                rank: state.stats.alaska.rank,
                seats: state.stats.alaska.houseSeats,
            };
        },
        getStatsArizona: (state) => {
            return {
                pop: state.stats.arizona.population.toLocaleString(),
                rank: state.stats.arizona.rank,
                seats: state.stats.arizona.houseSeats,
            };
        },
        getStatsArkansas: (state) => {
            return {
                pop: state.stats.arkansas.population.toLocaleString(),
                rank: state.stats.arkansas.rank,
                seats: state.stats.arkansas.houseSeats,
            };
        },
        getStatsCalifornia: (state) => {
            return {
                pop: state.stats.california.population.toLocaleString(),
                rank: state.stats.california.rank,
                seats: state.stats.california.houseSeats,
            };
        },
        getStatsColorado: (state) => {
            return {
                pop: state.stats.colorado.population.toLocaleString(),
                rank: state.stats.colorado.rank,
                seats: state.stats.colorado.houseSeats,
            };
        },
        getStatsConnecticut: (state) => {
            return {
                pop: state.stats.connecticut.population.toLocaleString(),
                rank: state.stats.connecticut.rank,
                seats: state.stats.connecticut.houseSeats,
            };
        },
        getStatsDelaware: (state) => {
            return {
                pop: state.stats.delaware.population.toLocaleString(),
                rank: state.stats.delaware.rank,
                seats: state.stats.delaware.houseSeats,
            };
        },
        getStatsFlorida: (state) => {
            return {
                pop: state.stats.florida.population.toLocaleString(),
                rank: state.stats.florida.rank,
                seats: state.stats.florida.houseSeats,
            };
        },
        getStatsGeorgia: (state) => {
            return {
                pop: state.stats.georgia.population.toLocaleString(),
                rank: state.stats.georgia.rank,
                seats: state.stats.georgia.houseSeats,
            };
        },
        getStatsHawaii: (state) => {
            return {
                pop: state.stats.hawaii.population.toLocaleString(),
                rank: state.stats.hawaii.rank,
                seats: state.stats.hawaii.houseSeats,
            };
        },
        getStatsIdaho: (state) => {
            return {
                pop: state.stats.idaho.population.toLocaleString(),
                rank: state.stats.idaho.rank,
                seats: state.stats.idaho.houseSeats,
            };
        },
        getStatsIllinois: (state) => {
            return {
                pop: state.stats.illinois.population.toLocaleString(),
                rank: state.stats.illinois.rank,
                seats: state.stats.illinois.houseSeats,
            };
        },
        getStatsIndiana: (state) => {
            return {
                pop: state.stats.indiana.population.toLocaleString(),
                rank: state.stats.indiana.rank,
                seats: state.stats.indiana.houseSeats,
            };
        },
        getStatsIowa: (state) => {
            return {
                pop: state.stats.iowa.population.toLocaleString(),
                rank: state.stats.iowa.rank,
                seats: state.stats.iowa.houseSeats,
            };
        },
        getStatsKansas: (state) => {
            return {
                pop: state.stats.kansas.population.toLocaleString(),
                rank: state.stats.kansas.rank,
                seats: state.stats.kansas.houseSeats,
            };
        },
        getStatsKentucky: (state) => {
            return {
                pop: state.stats.kentucky.population.toLocaleString(),
                rank: state.stats.kentucky.rank,
                seats: state.stats.kentucky.houseSeats,
            };
        },
        getStatsLouisiana: (state) => {
            return {
                pop: state.stats.louisiana.population.toLocaleString(),
                rank: state.stats.louisiana.rank,
                seats: state.stats.louisiana.houseSeats,
            };
        },
        getStatsMaine: (state) => {
            return {
                pop: state.stats.maine.population.toLocaleString(),
                rank: state.stats.maine.rank,
                seats: state.stats.maine.houseSeats,
            };
        },
        getStatsMaryland: (state) => {
            return {
                pop: state.stats.maryland.population.toLocaleString(),
                rank: state.stats.maryland.rank,
                seats: state.stats.maryland.houseSeats,
            };
        },
        getStatsMassachusetts: (state) => {
            return {
                pop: state.stats.massachusetts.population.toLocaleString(),
                rank: state.stats.massachusetts.rank,
                seats: state.stats.massachusetts.houseSeats,
            };
        },
        getStatsMichigan: (state) => {
            return {
                pop: state.stats.michigan.population.toLocaleString(),
                rank: state.stats.michigan.rank,
                seats: state.stats.michigan.houseSeats,
            };
        },
        getStatsMinnesota: (state) => {
            return {
                pop: state.stats.minnesota.population.toLocaleString(),
                rank: state.stats.minnesota.rank,
                seats: state.stats.minnesota.houseSeats,
            };
        },
        getStatsMississippi: (state) => {
            return {
                pop: state.stats.mississippi.population.toLocaleString(),
                rank: state.stats.mississippi.rank,
                seats: state.stats.mississippi.houseSeats,
            };
        },
        getStatsMissouri: (state) => {
            return {
                pop: state.stats.missouri.population.toLocaleString(),
                rank: state.stats.missouri.rank,
                seats: state.stats.missouri.houseSeats,
            };
        },
        getStatsMontana: (state) => {
            return {
                pop: state.stats.montana.population.toLocaleString(),
                rank: state.stats.montana.rank,
                seats: state.stats.montana.houseSeats,
            };
        },
        getStatsNebraska: (state) => {
            return {
                pop: state.stats.nebraska.population.toLocaleString(),
                rank: state.stats.nebraska.rank,
                seats: state.stats.nebraska.houseSeats,
            };
        },
        getStatsNevada: (state) => {
            return {
                pop: state.stats.nevada.population.toLocaleString(),
                rank: state.stats.nevada.rank,
                seats: state.stats.nevada.houseSeats,
            };
        },
        getStatsNewHampshire: (state) => {
            return {
                pop: state.stats.newHampshire.population.toLocaleString(),
                rank: state.stats.newHampshire.rank,
                seats: state.stats.newHampshire.houseSeats,
            };
        },
        getStatsNewJersey: (state) => {
            return {
                pop: state.stats.newJersey.population.toLocaleString(),
                rank: state.stats.newJersey.rank,
                seats: state.stats.newJersey.houseSeats,
            };
        },
        getStatsNewMexico: (state) => {
            return {
                pop: state.stats.newMexico.population.toLocaleString(),
                rank: state.stats.newMexico.rank,
                seats: state.stats.newMexico.houseSeats,
            };
        },
        getStatsNewYork: (state) => {
            return {
                pop: state.stats.newYork.population.toLocaleString(),
                rank: state.stats.newYork.rank,
                seats: state.stats.newYork.houseSeats,
            };
        },
        getStatsNorthCarolina: (state) => {
            return {
                pop: state.stats.northCarolina.population.toLocaleString(),
                rank: state.stats.northCarolina.rank,
                seats: state.stats.northCarolina.houseSeats,
            };
        },
        getStatsNorthDakota: (state) => {
            return {
                pop: state.stats.northDakota.population.toLocaleString(),
                rank: state.stats.northDakota.rank,
                seats: state.stats.northDakota.houseSeats,
            };
        },
        getStatsOhio: (state) => {
            return {
                pop: state.stats.ohio.population.toLocaleString(),
                rank: state.stats.ohio.rank,
                seats: state.stats.ohio.houseSeats,
            };
        },
        getStatsOklahoma: (state) => {
            return {
                pop: state.stats.oklahoma.population.toLocaleString(),
                rank: state.stats.oklahoma.rank,
                seats: state.stats.oklahoma.houseSeats,
            };
        },
        getStatsOregon: (state) => {
            return {
                pop: state.stats.oregon.population.toLocaleString(),
                rank: state.stats.oregon.rank,
                seats: state.stats.oregon.houseSeats,
            };
        },
        getStatsPennsylvania: (state) => {
            return {
                pop: state.stats.pennsylvania.population.toLocaleString(),
                rank: state.stats.pennsylvania.rank,
                seats: state.stats.pennsylvania.houseSeats,
            };
        },
        getStatsRhodeIsland: (state) => {
            return {
                pop: state.stats.rhodeIsland.population.toLocaleString(),
                rank: state.stats.rhodeIsland.rank,
                seats: state.stats.rhodeIsland.houseSeats,
            };
        },
        getStatsSouthCarolina: (state) => {
            return {
                pop: state.stats.southCarolina.population.toLocaleString(),
                rank: state.stats.southCarolina.rank,
                seats: state.stats.southCarolina.houseSeats,
            };
        },
        getStatsSouthDakota: (state) => {
            return {
                pop: state.stats.southDakota.population.toLocaleString(),
                rank: state.stats.southDakota.rank,
                seats: state.stats.southDakota.houseSeats,
            };
        },
        getStatsTennessee: (state) => {
            return {
                pop: state.stats.tennessee.population.toLocaleString(),
                rank: state.stats.tennessee.rank,
                seats: state.stats.tennessee.houseSeats,
            };
        },
        getStatsTexas: (state) => {
            return {
                pop: state.stats.texas.population.toLocaleString(),
                rank: state.stats.texas.rank,
                seats: state.stats.texas.houseSeats,
            };
        },
        getStatsUtah: (state) => {
            return {
                pop: state.stats.utah.population.toLocaleString(),
                rank: state.stats.utah.rank,
                seats: state.stats.utah.houseSeats,
            };
        },
        getStatsVermont: (state) => {
            return {
                pop: state.stats.vermont.population.toLocaleString(),
                rank: state.stats.vermont.rank,
                seats: state.stats.vermont.houseSeats,
            };
        },
        getStatsVirginia: (state) => {
            return {
                pop: state.stats.virginia.population.toLocaleString(),
                rank: state.stats.virginia.rank,
                seats: state.stats.virginia.houseSeats,
            };
        },
        getStatsWashington: (state) => {
            return {
                pop: state.stats.washington.population.toLocaleString(),
                rank: state.stats.washington.rank,
                seats: state.stats.washington.houseSeats,
            };
        },
        getStatsWestVirginia: (state) => {
            return {
                pop: state.stats.westVirginia.population.toLocaleString(),
                rank: state.stats.westVirginia.rank,
                seats: state.stats.westVirginia.houseSeats,
            };
        },
        getStatsWisconsin: (state) => {
            return {
                pop: state.stats.wisconsin.population.toLocaleString(),
                rank: state.stats.wisconsin.rank,
                seats: state.stats.wisconsin.houseSeats,
            };
        },
        getStatsWyoming: (state) => {
            return {
                pop: state.stats.wyoming.population.toLocaleString(),
                rank: state.stats.wyoming.rank,
                seats: state.stats.wyoming.houseSeats,
            };
        },
        getClassOne: (state) => {
            return state.senators.filter(
                (senator) => senator.senateClass === "Class I"
            );
        },
        getClassTwo: (state) => {
            return state.senators.filter(
                (senator) => senator.senateClass === "Class II"
            );
        },
        getClassThree: (state) => {
            return state.senators.filter(
                (senator) => senator.senateClass === "Class III"
            );
        },
        getDemocrats: (state) => {
            return state.senators.filter((senator) => senator.party === "D");
        },
        getIndependents: (state) => {
            return state.senators.filter((senator) => senator.party === "I");
        },
        getRepublicans: (state) => {
            return state.senators.filter((senator) => senator.party === "R");
        },
        getLeaders: (state) => {
            return state.senators.filter(
                (senator) => senator.leadershipType === "leader"
            );
        },
        getWhips: (state) => {
            return state.senators.filter(
                (senator) => senator.leadershipType === "whip"
            );
        },
        getPros: (state) => {
            return state.senators.filter(
                (senator) => senator.leadershipType === "pro tempore"
            );
        },
    },
    mutations: {},
    actions: {},
    modules: {},
});
