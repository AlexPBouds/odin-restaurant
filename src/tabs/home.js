export const homePage = document.createElement("div");

const taglineContainer = document.createElement("div");
const hoursContainer = document.createElement("div");
const locationContainer = document.createElement("div");

const taglineHeader = document.createElement("h1");
taglineHeader.classList.add("title");
taglineHeader.innerText = "The Claw & Barrel";
taglineContainer.append(taglineHeader);

const taglineText = document.createElement("div");
taglineText.classList.add("tagline");
taglineText.innerText = "Butter, brine, and good times!";
taglineContainer.append(taglineText);

const hoursHeader = document.createElement("h1");
hoursHeader.classList.add("title");
hoursHeader.innerText = "Restaurant Hours";
hoursContainer.append(hoursHeader);

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
for (let i = 0; i < days.length; i++) {
  const storeHour = document.createElement("div");
  const currentDay = days[i];
  switch (currentDay) {
    case "Sunday":
      storeHour.innerText = `${currentDay}: 8am - 8pm`;
      break;
    case "Friday":
      storeHour.innerText = `${currentDay}: 6am - 10pm`;
      break;
    case "Saturday":
      storeHour.innerText = `${currentDay}: 8am - 10pm`;
      break;
    default:
      storeHour.innerText = `${currentDay}: 6am - 6pm`;
      break;
  }
  hoursContainer.append(storeHour);
}

const locationHeader = document.createElement("h1");
locationHeader.classList.add("title");
locationHeader.innerHTML = "Store Location";
locationContainer.append(locationHeader);

const locationAddress = document.createElement("div");
locationAddress.innerText = "229 Main St Rotary Park, Shediac, New Brunswick";
locationContainer.append(locationAddress);

homePage.append(taglineContainer);
homePage.append(hoursContainer);
homePage.append(locationContainer);
