# Testing

Whilst testing my game, I mainly used a combination of a live server extension (port 800 on Gitpod), and Chrome DevTools.
I used DevTools to create a responsive site that maintains solid design structure down to a width of 320px, with the last media query necessary at 413px.

To test responsiveness, I also opened the site on the different screen sizes of my iPhone and iPad. This gave me the opportunity to see if the proportions felt natural on these screen sizes and also to test the compatability with Safari, as most of the development was with Chrome.

Further to this, once the game was deployed, I sent the link to the live site to potential users with different devices (such as Android) and browsers for testing. There were no reported issues regarding layout or browse limitations, but there was helpful feedback regarding design pertaining to the use of hover effects on touch devices (see the Fixed Bugs section below).

Having learnt from my previous project, I took a 'mobile first' approach when designing Rock, Paper, Scissors as a browser based game, with a simple layout and ample horizontal space to accomodate smaller screen sizes without much need for reconfiguration.

## Fixed bugs

Whilst testing the live site at different stages of building Rock, Paper, Scissors and testing on different devices, I encountered some unexpected results and bugs. Many of these occured in my Javascript files. To solve these, I largely experimented with changing code and spent a lot of time researching on sites such as [W3Schools](https://www.w3schools.com/html/), [Stack Overflow](https://stackoverflow.com/) and browsing resources on [Google](https://www.google.com/).

I found in order to find the right help and information, I had to really think about what I was trying to do and how best to describe my issue. Upon finding the relevant information, I took some time to understand the solution and how I could implement that into my project.

### Broken image links
- When I first deployed my project and pushed the data to gitHub, I was surprised to see that my images hadn't loaded. As the alt text was visible, I concluded that the error must lie within the file path I had used. After reviewing the filepaths content on W3C I as quickly able to see that the '/' I had used at the start of the filepath needed removing in order to make the filepath relative, thus solving the issue when deployed.

### Hover effect
- I implemented a hover effect across the buttons in my game to give user feedback and to increase interactivity within the site. I found that this worked great on the computer that I built the project on, however when I sent the live site out for users to test, it was fed back that the buttons were 'stuck' after being pressed.
This was particularly noticeable with the 'rock', 'paper' and 'scissors' in play.html which stayed in their white hover effect state after being pressed and until the next choice was selected. This led to some confusion amongst users.
- After a bit of research I found a solution in a tech blog which disables the hover effect for devices that does not support it or have a touch functionality, whilst continuing the enable it for others.
- There is a limitation to this fix as it also removes the hover effect for devices that have both touch and mouse/cursor functionality. However, I weighed up the smaller benefits for the fewer users affected by this limitation compared to the larger number of users affected more adversely by the effects if I had not implemented this change.

## W3C Validator

To ensure my .html files were compliant with HTML standards, I passed them through the [W3C Validator](https://validator.w3.org/). Originally I had a few issues flag:
- In index.html I had one unclosed ol tag
- Within the form element on the index.html page, the label 'for' the username input did not match the id on the input box
- In play.html, I had made an error with two of my br tags. I had input /bt in error

All of these were easily rectified and upon running 
![Screenshot of W3C HTML Validator pass for index.html](docs-images/html-validator-index.png)
![Screenshot of W3C HTML Validator pass for index.html](docs-images/html-validator-play.png)

## Jigsaw CSS Validator

No issues were found within the CSS code and it passes through the W3C Jigsaw CSS validator with 0 errors. There is 1 warning which just relates to to the validator not being able to check the external Google Font file that was imported.
![Screenshot of Jigsaw CSS Validator warning](docs-images/css-validator-warning.png)
![Screenshot of Jigsaw CSS Validator pass](docs-images/css-validation.png)

## Lighthouse

