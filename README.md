# Portfolio

Portfolio project that showcases all the creations.

## Home

![image](https://i.postimg.cc/SsLMZvJm/Zaid-Khan.png)

## About

![image](https://i.postimg.cc/bJ4RCVFp/Zaid-Khan.png)

## Projects

![image](https://i.postimg.cc/15QG8qkC/Zaid-Khan-1.png)

## Project Card

![image](https://i.postimg.cc/MHFJFwJX/Zaid-Khan-2.png)

## Contact

![image](https://i.postimg.cc/hvJ5h7NP/Zaid-Khan-3.png)

## Installation and Setup Instructions

To make below steps work, You will need node and npm installed globally on your machine.

```bash
# Clone this repository
$ git clone https://github.com/ZaidKhan144/portfolio-webpack-html-css.git

# Enter the Git folder
$ cd portfolio-webpack-html-css

# Install dependencies
$ npm install

# Start the project
$ npm start
```
Then open [localhost:9000](http://localhost:9000) to see the live app.

## Tech used
- JavaScript ES6
- jQuery
- AOS Library
- Webpack
- HTML
- SASS
- Balsamiq
- ESLint - A linter tool to standardize code
- Prettier - Code formatter
- HostGator

## Reflection

This project's main goal was to design and develop a portfolio project in a clean and accessible way. The project consists of 3 sections About, Projects, and Contact. 

I started this project by first creating mockups on `Balsamiq` for all screens, then used a `mobile-first approach` to layout `HTML` and composed `SASS` components for styling. Later I deployed `webpack` to setup production build, create module bundler, and eliminate dependency issues. 

One of the main challenges I faced was when designing the project section's modals. I wanted to display one modal at a time, but other modals were also accessible while already a modal was in action. I didn't want the user to experience unexpected behavior outside the modals. One other possibility I thought that when the user clicks anywhere on the window, the already opened modal gets close. This way, it will stop the other modal from opening on click. 

So after a bit of research, I came across a `CSS` concept, `mask`. `Mask` will create an invisible wall so that any mouse event doesn't penetrate beyond it. This case `mask` will sit behind the displayed modal, block the interaction with all the background elements, and remain blocked until it is clicked. Only when it is closed you can interact again. Right above the modals, I positioned a fixed `mask` with a 100% `width` and `height`. After implementing it, only the clicked modal was in view, and no other modal was accessible. 

Another challenge I faced was when implementing `webpack`. My `SASS` styles were not being generated because `webpack` couldn't find the image path in one of the files. I set the path from my actual file to the image folder without realizing it being imported in `main.scss` file. And `main.scss` file gets transformed into a `CSS` file. So I had to set the path relative to the entry point, which was `main.css`. Huge thanks to the Stack Overflow guy who help me come out of this issue. 

At the end of the day, the technologies implemented in this project are `JavaScript`, `jQuery`, `webpack`, `HTML`, `SASS`. I have made this responsive to give an optimized browsing experience. I also opt `60/30/10 principle` to create a well-balanced color design that allows users to navigate comfortably from one focal point to another.

In the future, I will convert this project into `React` so that it can be easier to maintain. 

You can visit the portfolio app at: https://personal-web-v1.netlify.app/

