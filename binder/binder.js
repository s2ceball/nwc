/********************
*
* New Work of Composing, Journet, Ball, & Trauman, eds.
* binder.js
* 
* v. 0.1
* 07/01/2011
*
* see https://github.com/karlstolley/nwc
*
*********************/

$(document).ready(function() {
  $('html').addClass('hasjs'); /*Put hasjs on html*/
  $('#nwctitle a').click(function() { /*Listen for clicks/keyboard activation on #nwctitle a*/
    $('html').toggleClass('nwcvisible'); /*Toggle the nwcvisible class on alternating clicks*/
    return false; /*Prevent the default behavior*/
  });
});