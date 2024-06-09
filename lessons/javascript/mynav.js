//our two list of items to drop down from menu.. each will be placed in the U

// for ID dropdown-one
var homeMenulist = [
    'lesson-one',
    'lesson-two',
    'lesson-three',
    'lesson-four',
    'new-lesson-five',
    'menu-item-five',
    'menu-item-six',
    'menu-item-seven',
    'navigation-idea'
];

// for ID dropdown-two
var secondMenulist = [
    'lesson-one',
    'lesson-two',
    'lesson-three',
    'lesson-four',
    'new-lesson-five',
    'menu-item-five',
    'menu-item-six',
    'menu-item-seven',
    'navigation-idea'
];


// run function createLinkMenu.... and send it the array 'homeMenulist', and tell it to use ID 'dropdown-one'
createLinkMenu(homeMenulist, 'dropdown-one');

// run function createLinkMenu ....and send it the array 'secondMenulist', and tell it to use ID 'dropdown-two'
createLinkMenu(secondMenulist, 'dropdown-two');







///////////////////////////////////////////////////////////   






// instead of a new loop code each list.. create ONE  function that can accept parameters..

//the function... that accepts two parameters.. menuList and elementID
//(which you can see we provide above when we call it.. twice)

function createLinkMenu(menuList, elementId) {

    // this is basically the loop.. go through each menu list ... build out the html <li> and <a href> pieces...          
    var buildLink = "";

    // create a loop, counting from 0, to the length... of the menuList provided... maybe is 1? maybe is 20 items 
    // if i is LESS than total length? keep counting and do another loop

    for (var i = 0; i < menuList.length; i++) {
        var link = menuList[i];
        var menuText = link.replace(/-/g, " ");


        // buildLink += means.. create then keep ADDING on to buildLink each time.. instead of overwrite.. 
        // so buildLink string gets larger and larger each loop through

        buildLink += "<li><a href='/link_from_here/to_file_folder" + link + ".html'>" + menuText + "</a></li>";
    }
    // loop again if needed



    // then once loops is done? write out all the combined 
    document.querySelector('#' + elementId + ' ul').innerHTML = buildLink;
}
// complete function