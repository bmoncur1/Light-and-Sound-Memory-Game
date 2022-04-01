# Light-and-Sound-Memory-Game
CodePath pre-work for SITE program

# Pre-work - *Light & Sound Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Binta Moncur**

Time spent: **30+** hours spent in total

Link to project: https://glitch.com/edit/#!/codepath-site-prework-bm?path=index.html%3A30%3A7

## Required Functionality

The following **required** functionality is complete:

* [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [x] "Start" button toggles between "Start" and "Stop" when clicked. 
* [x] Game buttons each light up and play a sound when clicked. 
* [x] Computer plays back sequence of clues including sound and visual cue for each button
* [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [x] User wins the game after guessing a complete pattern
* [x] User loses the game after an incorrect guess (3 incorrect guesses)

The following **optional** features are implemented:

* [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [ ] Buttons use a pitch (frequency) other than the ones in the tutorial
* [ ] More than 4 functional game buttons
* [ ] Playback speeds up on each turn
* [x] Computer randomly picks a different pattern each time the game is played/the game is refreshed.
* [X] Player only loses after 3 mistakes (instead of on the first mistake)
* [X] Game button appearance change goes beyond color (brightness of buttons change when pressed)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [X] All elements including heading, paragraph, start/stop button, and game buttons are positioned in center of webpage
- [X] Animation added to heading and paragraph/directions
- [X] Glowing effect added to heading
- [X] Game buttons positioned with two on top, two on bottom
- [X] Game buttons shapes changed from square-shaped to quarter-circle shaped 
- [X] Glowing effect added to all game buttons when pressed to give an appearance of button glowing
- [X] User gets three strikes before losing game
- [X] User is alerted each time they make a strike

## Video Walkthrough (GIF)

If you recorded multiple GIFs for all the implemented features, you can add them here:

<iframe src="https://giphy.com/embed/PhfxfdhikKYjX8OVTa" width="480" height="262" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/PhfxfdhikKYjX8OVTa">via GIPHY</a> 1. Game Intro Animation featuring h1 tag, p tag, and all game buttons. </p>

<iframe src="https://giphy.com/embed/vtEdgPlmMiHQL9tJ14" width="480" height="262" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/vtEdgPlmMiHQL9tJ14">via GIPHY</a> 2. Start/Stop button toggle when pressed </p>

<iframe src="https://giphy.com/embed/Ok1DpJWRaGNdOOqxyC" width="480" height="262" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/Ok1DpJWRaGNdOOqxyC">via GIPHY</a> 3. Three strikes and out! Player alerted with each strike. </p>

<iframe src="https://giphy.com/embed/enBxrGzYCLV4UAeKug" width="480" height="262" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/enBxrGzYCLV4UAeKug">via GIPHY</a> 4. Part 1 recording of game won and game buttons light up and play a sound when clicked. </p>

<iframe src="https://giphy.com/embed/0jgtSVobi1dRvsvhpG" width="480" height="262" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/0jgtSVobi1dRvsvhpG">via GIPHY</a> 5. Part 2 recording of game won with message </p>

<iframe src="https://giphy.com/embed/fXuw4CPtFWSg2xnPJz" width="480" height="262" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/fXuw4CPtFWSg2xnPJz">via GIPHY</a> 6. Random sequence plays when screen is refreshed </p>


## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 

I used the following resources to help improve the function and look of the Light & Sound Memory Game:

(a) https://www.youtube.com/watch?v=IhbSuNXNnnU (making shapes with CSS)

(b) https://www.youtube.com/watch?v=Nloq6uzF8RQ (ease-in-out property for animation in heading)

(c ) https://www.youtube.com/watch?v=uICsP_UInps (center start/stop button)

(d) https://www.teachucomp.com/special-characters-in-html-tutorial/ (add ampersand)

(e) https://www.youtube.com/watch?v=Syg_9iB1vco (animate title)

(f) https://www.youtube.com/watch?v=Okgk2XQJKYY (glowing effect on heading and buttons)

(g) https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random (used to help generate random numbers within a range)


2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words)
 
The initial stages of the project went smoothly. Once the basic features of the game were successfully implemented, I created a checklist of additional features I wanted to implement. One-by-one, I created a plan for each task on my checklist. Since this was my first time working with HTML, CSS, and JavaScript, I started out by performing internet research about each task. Depending on the task, I either referenced a “developer website" or watched a tutorial. I used an HTML/CSS/JS text editor to practice. Here is a detailed example of one problem I faced while implementing the randomization functionality.

Challenge: Instead of using hard coded numbers in my “pattern array” (ex: var pattern = [2, 2, 4, 3, 2, 1, 2, 4]), I wanted to randomize the numbers each time a new game was played, so that the player would receive a different/random pattern each game.

Solution: To achieve this, I decided to create a function that would fill an empty array of eight elements with integers ranging from 1 to 4 (to correspond with the 4 game buttons). I separated this task into two parts: 1. creating a function that fills an array, and 2. generating random  numbers in the range 1 to 10. I started out by creating a function that would fill an array of eight elements with any digit. Once that worked, I began working on generating random numbers. I researched ways to generate random numbers in JS. Using the JS Developer site, I was able to generate random integers ranging from 1 to 10. I then added the random generator to my function for filling an eight-element array. 

At that point, the random number generator function getRandNum() could produce a result such as: [2, 6, 3, 9, 9, 5, 10, 3]. While I was able to fill an 8 element array with random integers, the problem with this result is that I did not have 5, 6, 9, or 10 game buttons. I only had 4 buttons, which meant I had to limit the random numbers being generated to numbers between 1 and 4. I was stumped. I watched tutorials, read about and practiced creating ranges of random numbers in a text editor. Once I felt comfortable doing so, I added the code to my project. I updated the pattern variable and the getRandNum() function. It worked! 
 
 

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 

Working on this project has definitely sparked an interest in web development. This was my first experience with HTML, CSS and Javascript, and I enjoyed learning about different elements to help bring my project to life. In fact, I have been inspired to continue my learning by registering for a self-paced online web development bootcamp.

Throughout the learning process, I was left with a few technical and general questions about web development. Many of these questions are listed below.

Technical Questions: 

* How should code be organized? How do you make code look neat, easily readable? Spacing/tabs?
* How to optimize code? How could I make the project run more efficiently?
* Does it matter if you use (#) or a (.) when referencing an id in CSS. Ex: .button1 vs #button1?
* How would you label the position of pixels in reference to a monitor?
* What is the difference between relative and absolute position?
* What’s the difference between using “id” vs “class” as selectors?
* What's the difference between a span and a div tag?
* How do you test your work on various size screens?
* How to create fully responsive web-design?
* How to run tests?
* Memory management?
* How are websites deployed?
* What tools would a front- end developer use compared to a back-end developer?

General Questions:

* Typically, what is the day-to-day life of a web-developer (front-end, back-end, full-stack) like?
* What are some recommended sites/classes to become better at web-development?
* What percentage of the job is spent on various aspects of the job, i.e. coding, meetings, writing, etc?


4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 

If given more time to work on this project, I would do the following:

* Implement all of the optional features that I had not worked on yet such as adding more game buttons, speeding up the game, and adding a ticking clock. 
* Attempt to make the game’s interface look more like the original Simon game.
* Work to optimize code by refactoring duplicate code
* Properly test my code to ensure it works and is presentable across various devices and monitor sizes (responsive web design)
* Attempt to give the game console a 3-d appearance
* Implement different modes such as dark mode/light mode
* Vary the levels and allow users to choose a level at the start of the game
* Research the answers to many of the questions above
* Take more time to ensure code is organized and easily readable
* Learn about audio and how to change the pitch of each tone.




## Interview Recording URL Link

[My 5-minute Interview Recording](your-link-here)


## License

    Copyright Binta Moncur

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
