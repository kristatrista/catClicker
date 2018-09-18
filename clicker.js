//model

var model = {
  currentCat: null,
  cats: [
    {
      clickCount: 3,
      name: 'Fluffy',
      imgSrc: 'images/fluffy.jpg'
    },
    {
      clickCount: 0,
      name: 'Kitty',
      imgSrc: 'images/kitty.png'
    },
    {
      clickCount: 0,
      name: 'Mittens',
      imgSrc: 'images/mittens.jpg'
    },
    {
      clickCount: 0,
      name: 'Tiger',
      imgSrc: 'images/tiger.jpg'
    },
    {
      clickCount: 0,
      name: 'whiskers',
      imgSrc: 'images/whiskers.jpg'
    }
  ]
};

//octopus
var octopus = {
// 
// var getCurrentCat;
// var currentCat;
// var setCurrentCat;
// incrementCounter = function(cat){
//     console.log(clickCount ++);
//   };
//   init: function(){};
//   render: function(){};
// };

//catView

var catView = {

var catArea = document.querySelector('#cat');
var catName = document.querySelector('#cat-name');
var catClicks = document.querySelector('#cat-clicks');
var catImg= document.querySelector('#cat-img');

catImg.addEventListener('click', incrementCounter);
//set current cat img
document.querySelector('#cat-img').src = model.cats[0].imgSrc;


init: function(){};
render: function(){};


};

//catListView

var catListView = {
  init: function() {};
  render: function(){};

}
