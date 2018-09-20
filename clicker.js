//....model.....................................................................

var model = {
  currentCat: null,
  cats: [

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
    },
    {
      clickCount: 0,
      name: 'Fluffy',
      imgSrc: 'images/fluffy.jpg'
    },
    {
      clickCount: 0,
      name: 'Kitty',
      imgSrc: 'images/kitty.png'
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
    adminView.init();
  },
  getCats: function(){
    return model.cats;
  },
  getCurrentCat: function(){
  return model.currentCat;
  },
  setCurrentCat: function(cat){
  model.currentCat = cat;
  },
  incrementCounter: function(){
  model.currentCat.clickCount ++;
  console.log('click');
  catView.render();
},
  saveButton: function(){
    model.currentCat.name = adminView.adminName.value;
    model.currentCat.clickCount = adminView.adminClicks.value;
    model.currentCat.imgSrc = adminView.adminImg.value;

    catView.render();
    catListView.render();
  }
};

//....catView..................................................................
var catView = {
init: function(){
  this.catArea = document.querySelector('#cat');
  this.catName = document.querySelector('#cat-name');
  this.catClicks = document.querySelector('#cat-clicks');
  this.catImg= document.querySelector('#cat-img');

  this.catImg.addEventListener('click', function(){
  octopus.incrementCounter();
  adminView.render();
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
      el.onclick = (function(catCopy){
        return function() {
            octopus.setCurrentCat(catCopy);
            catView.render();
            adminView.render();
        };
      })(cat);

      this.catListElem.appendChild(el);
    }
  }
};
//....admin view...........................................................
adminView = {
  init: function(){
    var currentCat = octopus.getCurrentCat();
    var formSec = document.querySelector('#formSection');
    this.saveBtn = document.querySelector('#save-btn');
    this.cancelBtn = document.querySelector('#cancel-btn');
    this.adminBtn = document.querySelector('#admin-btn');

    this.adminName = document.querySelector('#adminCatName');
    this.adminClicks = document.querySelector('#adminCatClicks');
    this.adminImg= document.querySelector('#adminCatImg');

    //add event listeners to buttons
    this.cancelBtn.addEventListener('click', function(e){
      e.preventDefault();
      formSec.classList.toggle("hidden");
  });
  this.adminBtn.addEventListener('click', function(){
    formSec.classList.toggle("hidden");
  });
  this.saveBtn.addEventListener('click', function(e){
      e.preventDefault();
      // console.log(this.adminName.value);
      octopus.saveButton();
      formSec.classList.toggle("hidden");
});
    this.render();
  },
  render: function(){
     var currentCat = octopus.getCurrentCat(); //calls current cat
     this.adminName.value = currentCat.name;
     this.adminImg.value = currentCat.imgSrc;
     this.adminClicks.value = currentCat.clickCount;
 }
};

octopus.init();
