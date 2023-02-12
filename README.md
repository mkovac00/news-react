# news-app

React application for showcasing news articles

# About the application

MyNews is a web application that allows you to read the latest news happening around the world, quickly glance at the featured news or search news with the thematic of your liking.

# Technologies

Technologies used: React (Typescript, SASS)

# Setup

The application utilizes a news fetching API for which you need an API key that is not provided for security reasons. If you wish to obtain the API key to test the application, contact me at *mkovac25122512@gmail.com*

_After obtaining the API key:_
To run the application for yourself you can clone the git repository and then start the application through your console. run **npm install** which will install needed dependencies after which you can start the application locally by typing **npm start**.

Don't know how to clone a repository?
Instructions: https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository

Don't know how to start a NodeJS application?
Instructions:

- Go into the folder where you cloned the application and run **npm install**
- After the installation finishes, run the application with **npm start**

# Approach

I structured the application in 3 different directories.

Components directory for components shared throughout the whole application.
Features directory for different features of the web application.
Modules directory with a collection of related components that provide some kind of a service when combined together.

The assets directory contains necessary assets such as images or any additional application data.

The design of the application is kept very simple yet modern using simple bright colors and smooth animations for navigating through the application itself.

# Design decisions

For most of the project I was following a design, but I was left to implement the **Favorite articles** module by myself for which I chose a really simple yet effective method.

I added a button (star shaped) on every article that you are allowed to add to favorites and simply clicking the button adds the article to your favorites list (which can be browsed).

All articles saved to favorites have the star shaped button colored gold to indicate that they are already saved to favorites.
To remove the article from your favorites list, simply click on the star shaped button again and the article will be removed.

For the purpose of this application, all articles that are added to favorites are saved inside the browsers _local storage_.

# Status

Project is done, but as always, I'm open for any suggestions on how to improve it.

# License

MIT
