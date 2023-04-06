const getCurrentTime = () => {
  let hours = Math.round(Math.random() * 24);
  let minutes = Math.round(Math.random() * 60);

  let hoursFormat = hours < 10 ? "0" : "";
  let minutesFormat = minutes < 10 ? "0" : "";

  if (hours === 24) {
    hours = 0;
  }

  if (hoursFormat && minutesFormat) {
    return `0${hours}:0${minutes}`;
  } else if (hoursFormat) {
    return `0${hours}:${minutes}`;
  } else if (minutesFormat) {
    return `${hours}:0${minutes}`;
  } else {
    return `${hours}:${minutes}`;
  }
};

export const infiniteScrollArticles = [
  {
    title:
      "Science Museums Take Stock of 1.1 Billion Objects From Around the World",
    publishedAt: getCurrentTime(),
  },
  {
    title: "Outsiders Solve Problems. Just Ask Goats",
    publishedAt: getCurrentTime(),
  },
  {
    title: "China Publishes Data Showing Raccoon Dog DNA at Wuhan Market",
    publishedAt: getCurrentTime(),
  },
  {
    title:
      "Moderate Drinking Has No Health Benefits, Analysis of Decades of Research Finds",
    publishedAt: getCurrentTime(),
  },
  {
    title:
      "Virgin Orbit Files for Bankruptcy After Failed Launch and Lack of Funding",
    publishedAt: getCurrentTime(),
  },
  {
    title:
      "New Marburg Outbreaks in Africa Raise Alarm About the Deadly Virus Spread",
    publishedAt: getCurrentTime(),
  },
  {
    title: "Mass Yellowstone Hunt Kills 1,150 Bison",
    publishedAt: getCurrentTime(),
  },
  {
    title:
      "April Space Events: Artemis Astronauts, a Journey to Jupiter and More",
    publishedAt: getCurrentTime(),
  },
  {
    title: "A Failure to Launch Appears to Sink Virgin Orbit",
    publishedAt: getCurrentTime(),
  },
  {
    title: "Imagine T. Rex. Now Imagine It With Lips",
    publishedAt: getCurrentTime(),
  },
  {
    title:
      "Science Museums Take Stock of 1.1 Billion Objects From Around the World",
    publishedAt: getCurrentTime(),
  },
  {
    title: "Outsiders Solve Problems. Just Ask Goats",
    publishedAt: getCurrentTime(),
  },
  {
    title: "China Publishes Data Showing Raccoon Dog DNA at Wuhan Market",
    publishedAt: getCurrentTime(),
  },
  {
    title:
      "Moderate Drinking Has No Health Benefits, Analysis of Decades of Research Finds",
    publishedAt: getCurrentTime(),
  },
  {
    title:
      "Virgin Orbit Files for Bankruptcy After Failed Launch and Lack of Funding",
    publishedAt: getCurrentTime(),
  },
  {
    title:
      "New Marburg Outbreaks in Africa Raise Alarm About the Deadly Virus Spread",
    publishedAt: getCurrentTime(),
  },
  {
    title: "Mass Yellowstone Hunt Kills 1,150 Bison",
    publishedAt: getCurrentTime(),
  },
  {
    title:
      "April Space Events: Artemis Astronauts, a Journey to Jupiter and More",
    publishedAt: getCurrentTime(),
  },
  {
    title: "A Failure to Launch Appears to Sink Virgin Orbit",
    publishedAt: getCurrentTime(),
  },
  {
    title: "Imagine T. Rex. Now Imagine It With Lips",
    publishedAt: getCurrentTime(),
  },
  {
    title:
      "Science Museums Take Stock of 1.1 Billion Objects From Around the World",
    publishedAt: getCurrentTime(),
  },
  {
    title: "Outsiders Solve Problems. Just Ask Goats",
    publishedAt: getCurrentTime(),
  },
  {
    title: "China Publishes Data Showing Raccoon Dog DNA at Wuhan Market",
    publishedAt: getCurrentTime(),
  },
  {
    title:
      "Moderate Drinking Has No Health Benefits, Analysis of Decades of Research Finds",
    publishedAt: getCurrentTime(),
  },
  {
    title:
      "Virgin Orbit Files for Bankruptcy After Failed Launch and Lack of Funding",
    publishedAt: getCurrentTime(),
  },
  {
    title:
      "New Marburg Outbreaks in Africa Raise Alarm About the Deadly Virus Spread",
    publishedAt: getCurrentTime(),
  },
  {
    title: "Mass Yellowstone Hunt Kills 1,150 Bison",
    publishedAt: getCurrentTime(),
  },
  {
    title:
      "April Space Events: Artemis Astronauts, a Journey to Jupiter and More",
    publishedAt: getCurrentTime(),
  },
  {
    title: "A Failure to Launch Appears to Sink Virgin Orbit",
    publishedAt: getCurrentTime(),
  },
  {
    title: "Imagine T. Rex. Now Imagine It With Lips",
    publishedAt: getCurrentTime(),
  },
  {
    title:
      "Science Museums Take Stock of 1.1 Billion Objects From Around the World",
    publishedAt: getCurrentTime(),
  },
  {
    title: "Outsiders Solve Problems. Just Ask Goats",
    publishedAt: getCurrentTime(),
  },
  {
    title: "China Publishes Data Showing Raccoon Dog DNA at Wuhan Market",
    publishedAt: getCurrentTime(),
  },
  {
    title:
      "Moderate Drinking Has No Health Benefits, Analysis of Decades of Research Finds",
    publishedAt: getCurrentTime(),
  },
  {
    title:
      "Virgin Orbit Files for Bankruptcy After Failed Launch and Lack of Funding",
    publishedAt: getCurrentTime(),
  },
  {
    title:
      "New Marburg Outbreaks in Africa Raise Alarm About the Deadly Virus Spread",
    publishedAt: getCurrentTime(),
  },
  {
    title: "Mass Yellowstone Hunt Kills 1,150 Bison",
    publishedAt: getCurrentTime(),
  },
  {
    title:
      "April Space Events: Artemis Astronauts, a Journey to Jupiter and More",
    publishedAt: getCurrentTime(),
  },
  {
    title: "A Failure to Launch Appears to Sink Virgin Orbit",
    publishedAt: getCurrentTime(),
  },
  {
    title: "Imagine T. Rex. Now Imagine It With Lips",
    publishedAt: getCurrentTime(),
  },
  {
    title:
      "Science Museums Take Stock of 1.1 Billion Objects From Around the World",
    publishedAt: getCurrentTime(),
  },
  {
    title: "Outsiders Solve Problems. Just Ask Goats",
    publishedAt: getCurrentTime(),
  },
  {
    title: "China Publishes Data Showing Raccoon Dog DNA at Wuhan Market",
    publishedAt: getCurrentTime(),
  },
  {
    title:
      "Moderate Drinking Has No Health Benefits, Analysis of Decades of Research Finds",
    publishedAt: getCurrentTime(),
  },
  {
    title:
      "Virgin Orbit Files for Bankruptcy After Failed Launch and Lack of Funding",
    publishedAt: getCurrentTime(),
  },
  {
    title:
      "New Marburg Outbreaks in Africa Raise Alarm About the Deadly Virus Spread",
    publishedAt: getCurrentTime(),
  },
  {
    title: "Mass Yellowstone Hunt Kills 1,150 Bison",
    publishedAt: getCurrentTime(),
  },
  {
    title:
      "April Space Events: Artemis Astronauts, a Journey to Jupiter and More",
    publishedAt: getCurrentTime(),
  },
  {
    title: "A Failure to Launch Appears to Sink Virgin Orbit",
    publishedAt: getCurrentTime(),
  },
  {
    title: "Imagine T. Rex. Now Imagine It With Lips",
    publishedAt: getCurrentTime(),
  },
  {
    title:
      "Science Museums Take Stock of 1.1 Billion Objects From Around the World",
    publishedAt: getCurrentTime(),
  },
  {
    title: "Outsiders Solve Problems. Just Ask Goats",
    publishedAt: getCurrentTime(),
  },
  {
    title: "China Publishes Data Showing Raccoon Dog DNA at Wuhan Market",
    publishedAt: getCurrentTime(),
  },
  {
    title:
      "Moderate Drinking Has No Health Benefits, Analysis of Decades of Research Finds",
    publishedAt: getCurrentTime(),
  },
  {
    title:
      "Virgin Orbit Files for Bankruptcy After Failed Launch and Lack of Funding",
    publishedAt: getCurrentTime(),
  },
  {
    title:
      "New Marburg Outbreaks in Africa Raise Alarm About the Deadly Virus Spread",
    publishedAt: getCurrentTime(),
  },
  {
    title: "Mass Yellowstone Hunt Kills 1,150 Bison",
    publishedAt: getCurrentTime(),
  },
  {
    title:
      "April Space Events: Artemis Astronauts, a Journey to Jupiter and More",
    publishedAt: getCurrentTime(),
  },
  {
    title: "A Failure to Launch Appears to Sink Virgin Orbit",
    publishedAt: getCurrentTime(),
  },
  {
    title: "Imagine T. Rex. Now Imagine It With Lips",
    publishedAt: getCurrentTime(),
  },
  {
    title:
      "Science Museums Take Stock of 1.1 Billion Objects From Around the World",
    publishedAt: getCurrentTime(),
  },
  {
    title: "Outsiders Solve Problems. Just Ask Goats",
    publishedAt: getCurrentTime(),
  },
  {
    title: "China Publishes Data Showing Raccoon Dog DNA at Wuhan Market",
    publishedAt: getCurrentTime(),
  },
  {
    title:
      "Moderate Drinking Has No Health Benefits, Analysis of Decades of Research Finds",
    publishedAt: getCurrentTime(),
  },
  {
    title:
      "Virgin Orbit Files for Bankruptcy After Failed Launch and Lack of Funding",
    publishedAt: getCurrentTime(),
  },
  {
    title:
      "New Marburg Outbreaks in Africa Raise Alarm About the Deadly Virus Spread",
    publishedAt: getCurrentTime(),
  },
  {
    title: "Mass Yellowstone Hunt Kills 1,150 Bison",
    publishedAt: getCurrentTime(),
  },
  {
    title:
      "April Space Events: Artemis Astronauts, a Journey to Jupiter and More",
    publishedAt: getCurrentTime(),
  },
  {
    title: "A Failure to Launch Appears to Sink Virgin Orbit",
    publishedAt: getCurrentTime(),
  },
  {
    title: "Imagine T. Rex. Now Imagine It With Lips",
    publishedAt: getCurrentTime(),
  },
  {
    title:
      "Science Museums Take Stock of 1.1 Billion Objects From Around the World",
    publishedAt: getCurrentTime(),
  },
  {
    title: "Outsiders Solve Problems. Just Ask Goats",
    publishedAt: getCurrentTime(),
  },
  {
    title: "China Publishes Data Showing Raccoon Dog DNA at Wuhan Market",
    publishedAt: getCurrentTime(),
  },
  {
    title:
      "Moderate Drinking Has No Health Benefits, Analysis of Decades of Research Finds",
    publishedAt: getCurrentTime(),
  },
  {
    title:
      "Virgin Orbit Files for Bankruptcy After Failed Launch and Lack of Funding",
    publishedAt: getCurrentTime(),
  },
  {
    title:
      "New Marburg Outbreaks in Africa Raise Alarm About the Deadly Virus Spread",
    publishedAt: getCurrentTime(),
  },
  {
    title: "Mass Yellowstone Hunt Kills 1,150 Bison",
    publishedAt: getCurrentTime(),
  },
  {
    title:
      "April Space Events: Artemis Astronauts, a Journey to Jupiter and More",
    publishedAt: getCurrentTime(),
  },
  {
    title: "A Failure to Launch Appears to Sink Virgin Orbit",
    publishedAt: getCurrentTime(),
  },
  {
    title: "Imagine T. Rex. Now Imagine It With Lips",
    publishedAt: getCurrentTime(),
  },
  {
    title:
      "Science Museums Take Stock of 1.1 Billion Objects From Around the World",
    publishedAt: getCurrentTime(),
  },
  {
    title: "Outsiders Solve Problems. Just Ask Goats",
    publishedAt: getCurrentTime(),
  },
  {
    title: "China Publishes Data Showing Raccoon Dog DNA at Wuhan Market",
    publishedAt: getCurrentTime(),
  },
  {
    title:
      "Moderate Drinking Has No Health Benefits, Analysis of Decades of Research Finds",
    publishedAt: getCurrentTime(),
  },
  {
    title:
      "Virgin Orbit Files for Bankruptcy After Failed Launch and Lack of Funding",
    publishedAt: getCurrentTime(),
  },
  {
    title:
      "New Marburg Outbreaks in Africa Raise Alarm About the Deadly Virus Spread",
    publishedAt: getCurrentTime(),
  },
  {
    title: "Mass Yellowstone Hunt Kills 1,150 Bison",
    publishedAt: getCurrentTime(),
  },
  {
    title:
      "April Space Events: Artemis Astronauts, a Journey to Jupiter and More",
    publishedAt: getCurrentTime(),
  },
  {
    title: "A Failure to Launch Appears to Sink Virgin Orbit",
    publishedAt: getCurrentTime(),
  },
  {
    title: "Imagine T. Rex. Now Imagine It With Lips",
    publishedAt: getCurrentTime(),
  },
];
