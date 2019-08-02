# List Pagination And Filterting
# url:http://127.0.0.1:5502/

# Day 1:
* Today I started project 2 by creating variables to select the DOM elements from 64students.html. I targeted the '.page' and 'li' elements.
* I tested the results with `console.log` and no errors.
* After that I moved on to creating a function that will create the pages for the students. 
* After that I posted my day 1 progress on slack to see if I was on the right track.
	
# Day 2:
* I checked slack for any responses and got feedback on taking a closer look at my `showPage` function.
* A slack moderater suggested me to do some practice exercises that he kindly linked for me and after spending some time doing those practice exercises I was able to see my mistake and apply changes to my function.
* After the changes were made I checked the variable `console.log` and got a few token errors then fixed them.
* Once the variable was running without errors I moved onto writing my for loops. I didn't fully understand for loops in javascript so I googled it and did the javascript loops practice available in the Library. From there I got a better understanding of for loops and applied them to my project and ran the `console.log` to test the loop.

# Day 3:
* Today I worked on creating the `appendPageLinks` to add functionally to the pagination buttons.
* I added active pagination links in the `index.html` on lines 560-570.
* I didn't fully understand how to write the `appendPageLinks` function and `appenChild` as well as the `for` loops for it. So I went back and rewatched some of the videos but I feel like I still don't fully understand.
* Tomorrow I will do more research and look for exercises to help me better understand manipulating the DOM.

# Day 4:
* Today I posted my project up for a peer review on Slack and got feedback to go relook at my for loops.
* My code wasn't working as intended because I got the directions saying to "Use lines 119-137 in the examples/example-meets.html file as your template." then took a look at the HTML saying `<!-- dynamically add pagination links here -->` and thought I had to add the HTML elements in there.
* A fellow Treehouse member pointed out the difference between static and dynamic links and am super grateful that I made that mistake to learn from it

# Day 5:
* I went back and re wrote my code and got most of it to work with only 5 pages showing in the showPage function.
* Asked for help in Slack and a fellow Treehouse member pointed out that my `list.length / maxItems` was causing issues with my 6th page showing up because I had it in my `for` loop.
* I also had to add `+ 1` to my addEventListener. After those changes were made my code showed the 6th page with the last 4 students.
