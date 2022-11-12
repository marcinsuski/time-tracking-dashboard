# Frontend Mentor -  Time tracking dashboard


This is a solution to the Time tracking dashboard challenge on Frontend Mentor. Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents
- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)


## Overview
I chose this challenge to further practice accessing json data from external files and grid layout.

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Switch between viewing Daily, Weekly, and Monthly stats

### Screenshot

![](./src/design/desktop-preview.jpg)


### Links
- Live Site URL: [Link][(https://fluffy-semolina-35226f.netlify.app/)]

## My process
1. I planned whole structure - grid for pc view and flex for mobile view (changing to flex took just several lines and it was much nicer to style).
2. I started from html structure, immediately setting neccesary classes for styling and javascript.
3. Afterwards I created media query for mobile view, filled default view with static data and started working on javascript. 
4. In JS I defined variables to catch necessary classes, then I added eventlisteners and fetched json file.
5. First I accessed data from json and pushed them to first category (work). When I saw it work, then I moved forward to create the same for all other categories and timeframes.

### Built with
- HTML
- CSS
- Vanilla Javascript


### What I learned
I practiced more json and async/await functions. I still feel my javascript could be much better.


## Author
- GitHub - [Marcin Suski](https://github.com/marcinsuski)
