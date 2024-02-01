import eventsData from "./events.js";

document.addEventListener("DOMContentLoaded", ()=> {

const eventSection = document.getElementById("eventSection");

eventsData.events.forEach((event) => {
  // Create event card container
  const eventCard = document.createElement("div");
  eventCard.className = "event-card";

  // Create event content container
  const eventContent = document.createElement("div");
  eventContent.className = "event-content";

  // Create date div
  const eventDate = document.createElement("div");
  eventDate.className = "event-date";
  eventDate.innerHTML = `<span class="text-sm font-bold">Event Date: ${event.date}</span>`;

  // Create image link and image
  const imageLink = document.createElement("a");
  imageLink.setAttribute("referrerpolicy", "no-referrer");
  imageLink.setAttribute("target", "_blank");
  imageLink.href = event.learnmoreandimageanchorlink;

  const eventImage = document.createElement("div");
  eventImage.className = "event-image";
  eventImage.innerHTML = `<img draggable="false" style="width: 450px; height: 250px; text-align: center" width="200px" height="300px" src="${event.imageurl}" alt="${event.title}" />`;

  imageLink.appendChild(eventImage);

  // Append elements to their respective containers
  eventContent.appendChild(eventDate);
  eventContent.appendChild(imageLink);
  eventCard.appendChild(eventContent);

  // Create and append title, description, and learn more link
  const titleElement = document.createElement("h3");
  titleElement.className = "text-2xl font-semibold";
  titleElement.innerText = event.title;

  const descriptionElement = document.createElement("p");
  descriptionElement.innerText = event.description;

  const learnMoreLink = document.createElement("a");
  learnMoreLink.setAttribute("referrerpolicy", "no-referrer");
  learnMoreLink.setAttribute("target", "_blank");
  learnMoreLink.href = event.learnmoreandimageanchorlink;
  learnMoreLink.className = "event-link";
  learnMoreLink.innerText = "Learn More";

  eventCard.appendChild(titleElement);
  eventCard.appendChild(descriptionElement);
  eventCard.appendChild(learnMoreLink);

  // Append the event card to the section
  eventSection.appendChild(eventCard);
});
});
