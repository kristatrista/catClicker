//....model.....................................................................

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
      name: 'Whiskers',
      imgSrc: 'images/whiskers.jpg'
    }
  ]

};


//....octopus..............................................................
var octopus = {
  init: function(){
    //set current cat to first cat
    model.currentCat = model.cats[0];
    //initialize views
    catView.init();
    catListView.init();
  },
  incrementCounter: function(){
    return model.currentCat.clickCount ++;
    console.log('click');
    //render catview
    catView.render();
  },
  getCats: function(){
    return model.cats;
  },
  getCurrentCat: function(){
  return model.currentCat;
  },
  setCurrentCat: function(cat){
  model.currentCat = cat
  }
};
//document.querySelector('#cat-img').src = model.cats[0].imgSrc;
//....catView..................................................................
var catView = {
init: function(){
  this.catArea = document.querySelector('#cat');
  this.catName = document.querySelector('#cat-name');
  this.catClicks = document.querySelector('#cat-clicks');
  this.catImg= document.querySelector('#cat-img');

  this.catImg.addEventListener('click', function(){
  octopus.incrementCounter();
});
  this.render();
},
render: function(){
  //update DOM with current cat elements
  var currentCat = octopus.getCurrentCat();
  this.catClicks.textContent = currentCat.clickCount;
  this.catImg.src = currentCat.imgSrc;
  this.catName.textContent = currentCat.name;
}
};

//....catListView..............................................................

var catListView = {
  init: function(){
    //store DOM for quick access
    this.catListElem = document.querySelector('#cat-list');

    this.render();
  },
  render: function(){
    var cat, el, i;
    //get cats to render
    var cats = octopus.getCats();
    // empty the cat list
    this.catListElem.innerHTML = '';
    //loop over cats
    for(i = 0; i < cats.length; i ++){
      //current cat elem
      cat = cats[i];
      //make li for this cat
      el = document.createElement("li");
      el.textContent = cat.name;

      // on click, setCurrentCat and render the catView
      // (this uses our closure-in-a-loop trick to connect the value
      //  of the cat variable to the click event function)
      el.addEventListener('click', (function(catCopy) {
          return function() {
              octopus.setCurrentCat(catCopy);
              catView.render();
          };
      })(cat));

      this.catListElem.appendChild(el);
      	// var ol = document.getElementById("cat-list");
        // var catName = document.getElementById("cat-name");
        // li.setAttribute('id',catName.value);
        // li.appendChild(document.createTextNode(catName.value));
        // ol.appendChild(li);

    }
  }
};

octopus.init();
