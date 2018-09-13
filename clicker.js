

var imageClicker = document.querySelector('.catpic');
var addClicksText =   document.querySelector('.clicks');
 var addClicks= 0;

   imageClicker.addEventListener('click', function(){
     addClicks ++;
      addClicksText.textContent = addClicks;
     console.log('click');
 });


 var imageClicker2 = document.querySelector('.catpic2');
 var addClicksText2 =   document.querySelector('.clicks2');
  var addClicks2= 0;

    imageClicker2.addEventListener('click', function(){
      addClicks2 ++;
       addClicksText2.textContent = addClicks2;
       console.log('click2');
  });


 // //first class
 // function Cat (name){
 //
 //   this.name = name;
 // };

//prototype
// Cat.prototype.increment = function(){
//
//   imageClicker.addEventListener('click', function(){
//     addClicks ++;
//      addClicksText.textContent = addClicks;
//    console.log('click');
// });
// };

// // first cat
// const cat1 = new Cat('Wiskers');
// // second cat
// const cat2 = new Cat('Fluffy');
//
// //Clone
//  var item = document.querySelector('#cat1');
//  var cln = item.cloneNode(true);
//  cln.id = 'cat2';
// document.body.appendChild(cln);
//


// var Cat = function(){
//   var imageClicker = document.querySelector('img');
//   var addClicksText =   document.querySelector('.clicks');
//   addClicks= 0;
//   imageClicker.addEventListener('click', function(){
//     addClicks ++;
//      addClicksText.textContent = addClicks;
//    console.log('click');
//   });
// };
//  Cat();



// cln.getElementsByClassName('catpic').src.replace("https://phz8.petinsurance.com/-/media/all-phz-images/2016-images-850/catonbed850.jpg",'https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg?auto=compress&cs=tinysrgb&h=350');
