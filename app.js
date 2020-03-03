/*
'use strict';




var productsImages = [
  'bag.jpg',
  'banana.jpg',
  'bathroom.jpg',
  'boots.jpg',
  'breakfast.jpg',
  'bubblegum.jpg',
  'chair.jpg',
  'cthulhu.jpg',
  'dog-duck.jpg',
  'dragon.jpg',
  'pen.jpg',
  'pet-sweep.jpg',
  'scissors.jpg',
  'shark.jpg',
  'sweep.png',
  'tauntaun.jpg',
  'unicorn.jpg',
  'usb.gif',
  'water-can.jpg',
  'wine-glass.jpg',

];

//helper functions
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


// Globals
var count = 0;
var leftProductImage = document.querySelector('#left_product_img');
var rightProductImage = document.querySelector('#right_product_img');
var middleProductImage = document.querySelector('#middle_product_img');

var groupImageSection = document.getElementById('all_products');



function Product(name) {
  this.name = name;
  this.urlImage = `images/${this.name}`;
  this.votes = 0;
  this.views = 0;
  Product.all.push(this);
}


Product.all = [];


for (var i = 0; i < productsImages.length; i++) {
  new Product(productsImages[i]);
}








function render() {


  while (rightProduct === leftProduct || rightProduct === middleProduct || leftProduct === middleProduct) {

    var leftProduct = Product.all[randomNumber(0, Product.all.length - 1)];

    var rightProduct = Product.all[randomNumber(0, Product.all.length - 1)];
    var middleProduct = Product.all[randomNumber(0, Product.all.length - 1)];
    leftProduct.views++;
    middleProduct.views++;
    rightProduct.views++;
    console.log(leftProduct);


  }


  leftProductImage.setAttribute('src', leftProduct.urlImage);
  leftProductImage.setAttribute('alt', leftProduct.name);
  leftProductImage.setAttribute('title', leftProduct.name);

  rightProductImage.setAttribute('src', rightProduct.urlImage);
  rightProductImage.setAttribute('alt', rightProduct.name);
  rightProductImage.setAttribute('title', rightProduct.name);


  middleProductImage.setAttribute('src', middleProduct.urlImage);
  middleProductImage.setAttribute('alt', middleProduct.name);
  middleProductImage.setAttribute('title', middleProduct.name);


}



render();








groupImageSection.addEventListener('click', function (e) {

  count++;

  if (count < 25) {

    if (event.target.id !== "all_products") {

      for (var i = 0; i < Product.all.length; i++) {


        if (event.target.title === Product.all[i].name) {

          Product.all[i].votes++;
        }
      }

      render();

    }

  }

  if (count === 25) {

    List();


  }

});

function List() {


  var votes = [];
  var views = [];
  var labels = [];

  var container = document.getElementById("listAppear");
  var ulEl = document.createElement("ul");
  container.appendChild(ulEl);

  for (var j = 0; j < Product.all.length; j++) {

    var liEl = document.createElement("li");
    ulEl.appendChild(liEl);
    liEl.textContent = ` ${Product.all[j].name}  had  ${Product.all[j].votes}  votes and was shown  
    ${Product.all[j].views}  times  `;

    labels.push(Product.all[j].name);
    votes.push(Product.all[j].votes);
    views.push(Product.all[j].views);


  }


}


*/




/*
function clickImage(e){
if( e.target.id === 'left_product_img' || e.target.id === 'right_product_img' || e.target.id === 'middle_product_img'  ){
  pickRandomImages();
  totalClicks++;
}
if(totalClicks === 26){
  //remove event listener
  leftProductImage.remove();
  rightProductImage.remove();
  middleProductImage.remove();
  console.log('finished');
  var text=document.getElementById('text');

for(var i=0 ;i<products.length ; i++ ){




  var li = document.createElement('li');
  li.innerText= products[i].name +      'had '    + products[i].timesSelected +    'votes and was shown'    + products[i].timesShown + 'times';
  text.appendChild(li);
}



}
}

groupImageSection.addEventListener('click' , clickImage);

//when they reach total max clicks, remove the clicky function


*/


'use strict';




var productsImages = [
  'bag.jpg',
  'banana.jpg',
  'bathroom.jpg',
  'boots.jpg',
  'breakfast.jpg',
  'bubblegum.jpg',
  'chair.jpg',
  'cthulhu.jpg',
  'dog-duck.jpg',
  'dragon.jpg',
  'pen.jpg',
  'pet-sweep.jpg',
  'scissors.jpg',
  'shark.jpg',
  'sweep.png',
  'tauntaun.jpg',
  'unicorn.jpg',
  'usb.gif',
  'water-can.jpg',
  'wine-glass.jpg',

];

//helper functions
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


// Globals
var count = 0;
var leftProductImage = document.querySelector('#left_product_img');
var rightProductImage = document.querySelector('#right_product_img');
var middleProductImage = document.querySelector('#middle_product_img');

var groupImageSection = document.getElementById('all_products');

var unique =[];


function Product(name) {
  this.name = name;
  this.urlImage = `images/${this.name}`;
  this.votes = 0;
  this.views = 0;
  Product.all.push(this);
}


Product.all = [];


for (var i = 0; i < productsImages.length; i++) {
  new Product(productsImages[i]);
}








function render() {

  var leftProduct = Product.all[randomNumber(0, Product.all.length - 1)];

  var rightProduct = Product.all[randomNumber(0, Product.all.length - 1)];
  var middleProduct = Product.all[randomNumber(0, Product.all.length - 1)];

  while (rightProduct === leftProduct || rightProduct === middleProduct || leftProduct === middleProduct ||
    (unique.includes(leftProduct.name))||
    (unique.includes(rightProduct.name))||
    (unique.includes(middleProduct.name))) {

      var leftProduct = Product.all[randomNumber(0, Product.all.length - 1)];

      var rightProduct = Product.all[randomNumber(0, Product.all.length - 1)];
     
      var middleProduct = Product.all[randomNumber(0, Product.all.length - 1)];
   

  }

  

  leftProductImage.setAttribute('src', leftProduct.urlImage);
  leftProductImage.setAttribute('alt', leftProduct.name);
  leftProductImage.setAttribute('title', leftProduct.name);

  rightProductImage.setAttribute('src', rightProduct.urlImage);
  rightProductImage.setAttribute('alt', rightProduct.name);
  rightProductImage.setAttribute('title', rightProduct.name);


  middleProductImage.setAttribute('src', middleProduct.urlImage);
  middleProductImage.setAttribute('alt', middleProduct.name);
  middleProductImage.setAttribute('title', middleProduct.name);

  leftProduct.views++;
  middleProduct.views++;
  rightProduct.views++;
  console.log(leftProduct);
  unique=[];
  unique.push(leftProduct.name,rightProduct.name,middleProduct.name);


}



render();








groupImageSection.addEventListener('click', function (e) {

  count++;

  if (count < 25) {

    if (event.target.id !== "all_products") {

      for (var i = 0; i < Product.all.length; i++) {


        if (event.target.title === Product.all[i].name) {

          Product.all[i].votes++;
        }
      }

      render();

    }

  }

  if (count === 25) {

    List();


  }

});

function List() {


  var votes = [];
  var views = [];
  var labels = [];

  

  for (var j = 0; j < Product.all.length; j++) {

    

    labels.push(Product.all[j].name);
    votes.push(Product.all[j].votes);
    views.push(Product.all[j].views);
  }

  var ctx = document.getElementById('myProducts').getContext('2d');
  var ourChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [{
        label: '# of Votes',
        data: votes,
        backgroundColor: 'rgb(235, 45, 45)',
        borderColor: 'black',
        borderWidth: 3
      }, {

        label: '# of Views',
        data: views,
        backgroundColor: 'rgb(50, 50, 224)',
        borderColor: 'black',
        borderWidth: 3

        
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });
}






