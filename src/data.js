import Review_Link from "./Review_Link.js";
import Bio from "./Bio.js";
import Nav_Item from "./Nav_Item.js";

// Create arrays

// First is the article array for all Reviews
// Link and date intentionally left blank for now. Updated through a function later on.
// Review_Link: headline, subhead, link, image_169, imageArticle, caption, id, date, section, subsection
const articleArray = [
	new Review_Link(
		"Grand Electric",
		"This Parkdale based taco joint covers all the bases, great tacos, great margs, great atmosphere",
		"",
		"../images/16_9/grandelectric.jpeg",
		"../images/article/grandelectric.jpeg",
		"Patrons sitting at the bar in Grand Electric soaking up margs and the atmosphere",
		1627444800000,
		"",
		"articles",
		""
	),
	new Review_Link(
		"El Rey Mezcal Bar",
		"This taco place has a squid ink taco that will blow your socks off",
		"",
		"../images/16_9/elrey.jpeg",
		"../images/article/elrey.jpeg",
		"",
		1626840000000,
		"",
		"articles",
		""
	),
	new Review_Link(
		"Seven Lives",
		"Don't let the queue put you off, you need to try these take out tacos",
		"",
		"../images/16_9/sevenlives.jpeg",
		"../images/article/sevenlives.jpeg",
		"",
		1626235200000,
		"",
		"articles",
		""
	),
	new Review_Link(
		"Good Hombres",
		"Make your taco sets delivered to your door!",
		"",
		"../images/16_9/goodhombres.jpeg",
		"../images/article/goodhombres.jpeg",
		"",
		1625630400000,
		"",
		"articles",
		""
	),
	new Review_Link(
		"Mi Taco Taqueria",
		"This Parkdale based taco joint covers all the bases, great tacos, great margs, great atmosphere",
		"",
		"../images/16_9/grandelectric.jpeg",
		"../images/article/grandelectric.jpeg",
		"",
		1625025600000,
		"",
		"articles",
		""
	),
	new Review_Link(
		"Playa Cabana",
		"This taco place has a squid ink taco that will blow your socks off",
		"",
		"../images/16_9/elrey.jpeg",
		"../images/article/elrey.jpeg",
		"",
		1624420800000,
		"",
		"articles",
		""
	),
	new Review_Link(
		"El Nahual Tacos",
		"Don't let the queue put you off, you need to try these take out tacos",
		"",
		"../images/16_9/sevenlives.jpeg",
		"../images/article/sevenlives.jpeg",
		"",
		1623816000000,
		"",
		"articles",
		""
	),
	new Review_Link(
		"Campechano Taquería",
		"Make your taco sets delivered to your door!",
		"",
		"../images/16_9/goodhombres.jpeg",
		"../images/article/goodhombres.jpeg",
		"",
		1623211200000,
		"",
		"articles",
		""
	),
	new Review_Link(
		"La Carnita",
		"This Parkdale based taco joint covers all the bases, great tacos, great margs, great atmosphere",
		"",
		"../images/16_9/grandelectric.jpeg",
		"../images/article/grandelectric.jpeg",
		"",
		1622606400000,
		"",
		"articles",
		""
	),
	new Review_Link(
		"Wilbur Mexicana",
		"This taco place has a squid ink taco that will blow your socks off",
		"",
		"../images/16_9/elrey.jpeg",
		"../images/article/elrey.jpeg",
		"",
		1622001600000,
		"",
		"articles",
		""
	),
	new Review_Link(
		"Tacos El Asador",
		"Don't let the queue put you off, you need to try these take out tacos",
		"",
		"../images/16_9/sevenlives.jpeg",
		"../images/article/sevenlives.jpeg",
		"",
		1621396800000,
		"",
		"articles",
		""
	),
	new Review_Link(
		"El Catrin Destileria",
		"Make your taco sets delivered to your door!",
		"",
		"../images/16_9/goodhombres.jpeg",
		"../images/article/goodhombres.jpeg",
		"",
		1620792000000,
		"",
		"articles",
		""
	)
];

// Converts the month from a number to a string
const monthString = (date) => {
	let month;
	switch (date.getMonth()) {
		case 0:
			month = "January";
			break;
		case 1:
			month = "February";
			break;
		case 2:
			month = "March";
			break;
		case 3:
			month = "April";
			break;
		case 4:
			month = "May";
			break;
		case 5:
			month = "June";
			break;
		case 6:
			month = "July";
			break;
		case 7:
			month = "August";
			break;
		case 8:
			month = "September";
			break;
		case 9:
			month = "October";
			break;
		case 10:
			month = "November";
			break;
		case 11:
			month = "December";
			break;
	}
	return month;
};

// Format some of the parameters in the objects.
articleArray.forEach((item) => {
	let urlUpdate = item.headline.replace(/\s/g,'').toLowerCase();
	item.link = `#/articles/${item.id}/${urlUpdate}`;
	let dateUpdate = new Date(item.id);
	let month = monthString(dateUpdate);
	item.date = `${month} ${dateUpdate.getDate()}, ${dateUpdate.getFullYear()}`;
});

// Second is the main array for the most recent reviews showing on the home page

const mainArray = [];

for (let i = 0; i < 4; i++) {
	mainArray[i] = articleArray[i]
}

// This array hold the bio and social info
// Bio: firstName, surName, body, image, links
const bioArray = [
	new Bio(
		"Niall",
		"Bermingham",
		"Niall is a mainly self-taught frontend dev, and massive taco fan. He is working on expanding his skill set in HTML, CSS, JS, and more. He was born in Ireland and currently lives in Ontario, Canada where he spends most of his time annoying Myr about arrays and different types of for-loops. Reach out and connect with him on his social links below.",
		"images/ppics/niall.jpeg",
		[{link:"https://twitter.com/niallcsb", icon:"../images/icons/twitter.png"},
		{link:"https://github.com/niallcsb", icon:"../images/icons/github.png"},
		{link:"https://www.linkedin.com/in/niallcsb/", icon:"../images/icons/linkedin.png"}]
	),
	new Bio(
		"Myr",
		"Galarneau",
		"Myriam is a pretty great designer, but the real magic happens after a couple of margs. She loves functional and smart design which happens to look good while doing it's job. That's also why she loves tacos. They're aesthetic, delcious, and incredibly fun to eat.",
		"images/ppics/myr.jpeg",
		[{link:"https://www.myriamgalarneau.com/", icon:"../images/icons/home.png"},
		{link:"https://www.instagram.com/myrfest/", icon:"../images/icons/insta.png"},
		{link:"https://www.linkedin.com/in/myriamgalarneau/", icon:"../images/icons/linkedin.png"}]
	)
];

// This is the array with all of the FAQs
const faqArray = [
	{question:"Why are you making this site?",
	answer:["This is a project to build on and expand our skills in design, HTML, CSS, JavaScript and whatever else comes up along the way."]},
	{question:"Are you ever going to do actual restaurant reviews?",
	answer:["Maybe. That was the original plan but then a lot happened in 2020 and now those plans are on hold."]},
	{question:"How do you make a margarita?",
	answer:["We're glad you asked. You're going to need a tequila or mezcal of your choice, some agave syrup, and a shit load of limes.", "First step is to squeeze all the limes. This step is essential and really makes the marg all the more gratifying.", "Then you mix 3 parts lime juice with 1 and a half parts tequila and 1 and a half parts agave syrup. Add ice and shake together. Salt the rim of your favourite glass, pour your drink, and then enjoy."]},
	{question:"Have you ever been to Taco Bell?",
	answer:["Fuck you."]}
];

// Nav_Item: title, className, link,	subLinks

const navArray = [
	new Nav_Item(
		"Articles",
		"",
		"",
		[{name:"Latest", link:`${articleArray[0].link}`}],

	),
	new Nav_Item(
		"Store",
		"",
		"",
		[],

	),
	new Nav_Item(
		"Social",
		"",
		"",
		[{title:"Niall"},
		{name:"Twitter", link:"https://twitter.com/niallcsb"},
		{name:"GitHub", link:"https://github.com/niallcsb"},
		{name:"LinkedIn", link:"https://www.linkedin.com/in/niallcsb/"},
		{title:"Myr"},
		{name:"Website", link:"https://www.myriamgalarneau.com/"},
		{name:"Instagram", link:"https://www.instagram.com/myrfest/"},
		{name:"LinkedIn", link:"https://www.linkedin.com/in/myriamgalarneau/"}],

	),
	new Nav_Item(
		"Random",
		"",
		"",
		[],

	),
	new Nav_Item(
		"FAQ",
		"",
		"",
		[],

	)
];

navArray.forEach((item, i) => {
	item.className = item.title.toLowerCase();
	item.link = `#/${item.className}`;
	item.key = i;
});

// Export the arrays

export {articleArray, mainArray, bioArray, navArray, faqArray};
