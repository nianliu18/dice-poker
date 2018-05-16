Dice Poker Project Nov 9th 2017


In Dice Poker there are two players that each hold 5 dices each. Possible combinations each player can have is high card, pairs, two pairs, three of a kind, four of a kind, and five of a kind! Each player has one rebuttal(second chance) and shakes their dice at the start of the game. 

How rebuttals work is: the player with the lower hand or a lower combination, picks the die or dices they want to keep and shake the rest hoping to get something higher than their opponents. 

Example:
Each player's goal is to try to get a poker combination that is bigger than the others. If Player One gets a higher combination than Player Two, Player Two selects which dices he wants to keep and shakes the dices he doesnt using his/her second shake. If Player Two ends up getting something bigger than Player One on their rebuttal, its Player Ones turn to use his/her second shake to beat Players Two's combination. Lastly if each player gets same high card or combination in their first shake, and gets nothing on their rebuttal shakes. They end in Draw!  

Sounds like a lot to take in! But trust me, play a couple of rounds and you'll get the hang of it! 


PROJECT Schedule/Phases
--------------------------------
-Thursday: Set HTML Divs and Borders

-Friday: Set app.js Dice combinations and test functionality of JQ/JS on HTML page. 

-Saturday: Improve HTML, JQ/JS code along with game logic. Smooth things out

-Sunday: CSS and Addon's for Game. Smooth things out even more. 

-Monday: DeBug presentation prep. 


PROBLEMS NEED TO BE FIXED
----------------------------------------------
Main problem is to get the winning condition to accept the right information. For now I have a proble with grabbing the right combination1 and combination2 to render the right results. If we console log all the way down to scoring the dice, they all add up. Just when I try to check winCondition, the game fails. 

CSS clean up. Still need to create an input box that takes in user information and pushes to next page. Media Query and need to find method on stopping divs from overlapping when window resizing. 

Turn Based Player game. Need to add and remove eventListeners to stop players from rolling infinite amount of times and tapping keep more than once per turn. 

Able to append dice images to the dice divs but have trouble resizing the images to make them smaller and fit the screen of HandBox. 

Technologies Used
-----------------------------------------------
Javascript
J Query
CSS 
HTML

Steps to completion of game. 
-------------------------------------------------
Pseudo Code logic belonging to the game.
Create a visual of how the board and game would look. Used Wireframe from balsamiq.cloud (free trial 30 days)
Create needed HTML content. Divs, buttons, img, and arrage them accordingly.
Load CSS with basic borders, colors, and preferences. 
Started JS filed named app.js and began with a page loader, along with a landing view and game view.
Javascript will be written in app.js.
HTML in index.html
CSS will be style.css
All work in JS was referenced back to the pseudo code. Each word of source code was translated/communicated with JS or JQuery for game to work. 
