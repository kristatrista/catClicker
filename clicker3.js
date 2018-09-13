//object where cats and data are stored
var model = {
  currentCat: null,
  cats:[
    {
    clickCount : 0,
    name: 'Fluffy',
    imgSrc: 'images/fluffy.jpg'
  },
  {
    clickCount : 0,
    name: 'Whiskers',
    imgSrc: 'images/whiskers.jpg'
  },
  {
    clickCount : 0,
    name: 'Mittens',
    imgSrc: 'images/mittens.jpg'
  },
  {
    clickCount : 0,
    name: 'Tiger',
    imgSrc: 'images/tiger.jpg'
  },
  {
    clickCount : 0,
    name: 'Kitty',
    imgSrc: 'images/luna.jpg'
  }
  ]
};

//octopus object where main functionality is carried out

var octopus = {
  init: function(){
    var currentCat = model.cats[0];
  }
}
