# MyNews

MyNews is a Web application coded fully and solely by me. The design is _not_ mine.  
All design credits go to [Profico](https://profi.co/).

# Description

### What is MyNews

MyNews is a Web application that allows you to read the latest news happening around the world, quickly glance at the featured news or search news with the thematic of your liking.

### Technologies used

To build and finish this project I have used **React** combined together with **TypeScript**. For styling the application I chose **Sass**, as to make cleaner code for styling parts of the application.  
This was my first time using TypeScript on a project of this size. I decided to use TypeScript to learn more about it and get used to it because writing code in TypeScript means writing better and cleaner code than in JavaScript.

### Project structure approach

I structured the application in 3 different directories.

Components directory for components shared throughout the whole application.
Features directory for different features of the Web application.
Modules directory with a collection of related components that provide some kind of a service when combined together.

The assets directory contains necessary assets such as images or any additional application data.

The design of the application is kept very simple yet modern using simple bright colors and smooth animations for navigating through the application itself.

### Design decisions

For most of the project I was following a design, but I was left to implement the **Favorite articles** module by myself for which I chose a really simple yet effective method.

I added a button (star shaped) on every article that you are allowed to add to favorites and simply clicking the button adds the article to your favorites list (which can be browsed).

All articles saved to favorites have the star shaped button colored gold to indicate that they are already saved to favorites.
To remove the article from your favorites list, simply click on the star shaped button again and the article will be removed.

For the purpose of this application, all articles that are added to favorites are saved inside the browsers _local storage_.

### Challenges I faced

**My biggest challenge** on this project was figuring out how to implement the _infinite scroll_ feature that my Latest News component provides.  
After some research and trying multiple solutions, I ended up using a library suited for making infinite scroll components.  
To gather info about news categories such as featured news, latest news, science news, sports news etc. I utilized the NY Times API.

To get the starting application template I used Create React App.

# How to check out the project

You can visit the project at: "LINK"

# Status

Project is done, but as always, I'm open for any suggestions on how to improve it.

# License

MIT
