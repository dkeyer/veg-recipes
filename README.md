# veg-recipes

This repository contains my final project for the Code Louisville Front End Web Development program. My website is a recipe site that I will use for myself, but that will also work well for any other recipe site. I designed the site to meet the requirements of the Code Louisville final project, and will detail some of the requirements I fulfilled below. 

For starters, I created two media queries with mobile-first principles so that content moves based on the size of the browser. I used media queries to create different displays for mobile-view, tablet-view, and desktop-view. The number of columns changes in accordance to the size of the device, and are detailed below.

CSS Requirements:

Flexbox - I used flexbox to organize content based on mobile, tablet, and desktop views. The layout moves from one column (mobile), to two columns (tablet), to three columns (desktop)

-nth Child - I used -nth child to style my recipe cards so that the evens have one color scheme, and the odds have another

Javascript Requirements:

Contact Us Form - I created a “Contact Us” form that accepts two values (email and message) and are validated by Javascript. An alert specific to the completion (or lack thereof) of the form is issued afterwards.

Javascript Loop - I created a Javascript loop that loops through and adds things like the ingredients and the rest of the recipe, and subsequently displays them in HTML

Javascript Array - I created a js array for my recipes and all of their information, and displayed it on my page by first looping through and adding the ingredients to the ingredient list and steps to the step list, and then displaying those values along with others in “html”

Create at least 3 Variables - I created six variables (const), set their values in my js file, and then displayed them on my page
