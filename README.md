[![MIT License on GitHub](https://img.shields.io/github/license/seankelliher/us-senators?style=flat-square)](/LICENSE.txt)
## US Senators

Interactive Vue component with information on current United States Senators.

## Project Screen Shots

* Starting view - Senators by State.
![screen shot of project](/screenshots/us-senators-screenshot1.png?s=600)

* Senate Leaders.
![screen shot of project](/screenshots/us-senators-screenshot2.png?s=600)

* Senate Leaders - with Leaders "info panel" open.
![screen shot of project](/screenshots/us-senators-screenshot3.png?s=600)

* Detailed view - Senator Thom Tillis, North Carolina.
![screen shot of project](/screenshots/us-senators-screenshot4.png?s=600)

## Installation and Setup Instructions

Clone down this repository. You will need `node` and `npm` installed globally on your machine.

Installation:

`npm install`

Compiles and hot-reloads for development:

`npm run serve`

Compiles and minifies for production:

`npm run build`

Lints and fixes files:

`npm run lint`

Customize configuration:

See [Configuration Reference](https://cli.vuejs.org/config/).

## Reflection

I wanted to build a component with Vue. I choose the United States Senate as a subject. Unfortunately, there was no API that magically offered the information I wanted to display. I needed to gather it myself. This required time as there are 100 Senators.

I wanted to let users view Senators by the states they represent, their political parties, classes (when up for re-election), and leadership roles they hold (if any). The lists were long. I installed anchor links and a fixed menu so users can jump between sub-categories on a page. I also built show/hide elements so users can view supporting material about the Senate and states.

I also wanted users to be able to click on the photo of a Senator and go to a page with detailed information about him or her. This was challenging. I wanted the destination pages to have dedicated URLs that users could share. I wanted users to land at the top of the destination page, but also go back to where they were before if they clicked or tapped the browser's "back" button. I used "children" routes, the "scrollTo" method, and the browser’s native functionality to accomplish these things.

Lastly, I spent time exploring colors to try to get a design that looks a combination of respectable and engaging. Adobe Color was a big help here.

## Acknowledgments

* Readme guidance from [Brenna Martenson](https://gist.github.com/martensonbj/6bf2ec2ed55f5be723415ea73c4557c4).
* Senate roster from [US Senate(https://www.senate.gov/senators/index.htm).
* Information on Senate leadership (Leaders) from [US Senate(https://www.senate.gov/general/common/generic/officer_responsiblities.htm).
* Information on Senate leadership (Whips) from [US Senate[](https://www.senate.gov/artandhistory/history/common/briefing/Party_Whips.htm).
* Information on Senate leadership (Pro Tempore) from [US Senate(https://www.senate.gov/about/officers-staff/president-pro-tempore.htm).
* Population data from the [United States Census Bureau](https://www.census.gov/library/visualizations/interactive/2020-population-and-housing-state-data.html).
* House seats data from the [United States Census Bureau](https://www.census.gov/data/tables/2020/dec/2020-apportionment-data.html).
* Photographs of Senators are from each Senator's office.
* Design guidance from Google's [Material Design](https://material.io/design) and [Adobe Color](https://color.adobe.com/trends).
* Shields from [Shields](https://shields.io).