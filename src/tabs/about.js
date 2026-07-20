export const aboutPage = document.createElement("div");
aboutPage.classList.add("page-tab");

const historyContainer = document.createElement("div");
historyContainer.classList.add("container");
const contactContainer = document.createElement("div");
contactContainer.classList.add("container");

const historyHeader = document.createElement("h1");
historyHeader.classList.add("title");
historyHeader.innerText = "A Brief History";
historyContainer.append(historyHeader);

const historyText = document.createElement("div");
historyText.classList.add("tagline");
historyText.innerText = "Founded in 1833 by local fisherman Cleetus Finn, The Claw & Barrel was originally constructed in Blue Rocks, Nova Scotia, from scrap wood taken from old boats and docks. Recognized as a place to not only consume the delicious catches made by the various fishermen in the area, but this establishment was also as a place to honor and respect crabs as the superior form of crustacean. Feasting on its greatest rival, the lobster, became a way of celebrating in the area whenever big accomplishments were to be had!";
historyContainer.append(historyText);

const contactHeader = document.createElement("h1");
contactHeader.classList.add("title");
contactHeader.innerText = "Contact Us";
contactContainer.append(contactHeader);

const contactName = document.createElement("div");
contactName.innerHTML = "Cleetus Finn Jr - Manager";
contactContainer.append(contactName);

const contactNumber = document.createElement("div");
contactNumber.innerHTML = "(123) 456-7890";
contactContainer.append(contactNumber);

const contactEmail = document.createElement("div");
contactEmail.innerHTML = "cleetusfinnjr@email.com";
contactContainer.append(contactEmail);

aboutPage.append(historyContainer);
aboutPage.append(contactContainer);