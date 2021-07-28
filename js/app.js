let products = [{
  productName: 'Nike Man\'s Flex',
  image: `<img src="images/nike-shoes.jpg" alt="nike-shoes-red" width="173" height="120" class = "imageClass">`,
  isLiked: false,
  tag: "footwear",
  price: "$100"
},
{
  productName: "Nike shoes black",
  image:`<img src="images/nike-black-shoes.jpg" alt="nike-shoes-black" width="173" height="120" class = "imageClass">`,
  isLiked: true,
  tag: "footwear",
  price: "$1100"
},
{
  productName: "Shirt",
  image:`<img src="images/shirt-image.jpg" alt="shirt" width="173" height="120" class = "imageClass">`,
  isLiked: true,
  tag: "clothes",
  price: "$1200"
},
{
  productName: "juicer-machine",
  image:`<img src="images/juicer-machine.png" alt="juicer-machine" width="173" height="120" class = "imageClass">`,
  isLiked: false,
  tag: "electronics",
  price: "$1500"
},
{
  productName:"Iron",
  image:`<img src="images/iron.jpg" alt="iron" width="173" height="120" class = "imageClass">`,
  isLiked: true,
  tag: "electronics",
  price: "$1700"
}
];

filterSelection("all")

function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show"); //try with not != -1
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

let classLength = document.getElementsByClassName("productName").length;
for (let i=0; i<products.length; i++){
  for (let j=0; j<=classLength; j++){
      document.getElementsByClassName("productName")[j].innerHTML = products[i+j].productName;
      document.getElementsByClassName("price")[j].innerHTML = products[i+j].price;
      document.getElementsByClassName("imageDiv")[j].innerHTML = products[i+j].image;
      //console.log("ElementsByClassName array's length: ", document.getElementsByClassName("productName").length);
  }
}

function addItem(){
 alert("Item added to Cart!");
}

// let products = [{
//         productName: 'Nike Man\'s Flex',
//         image: `<img src="nike-shoes.jpg" alt="nike-shoes" width="173" height="120" class = "imageClass">`,
//         isLiked: false,
//         tag: "footwear",
//         price: "$100"
//       },
//       {
//         productName: "Nike shoes black",
//         image:`<img src="nike-black-shoes.jpg" alt="nike-shoes" width="173" height="120" class = "imageClass">`,
//         isLiked: true,
//         tag: "footwear",
//         price: "$1100"
//       },
//       {
//         productName: "Shirt",
//         image:`<img src="shirt-image.jpg" alt="nike-shoes" width="173" height="120" class = "imageClass">`,
//         isLiked: true,
//         tag: "clothes",
//         price: "$1200"
//       },
//       {
//         productName: "juicer-machine",
//         image:`<img src="nike-shoes.jpg" alt="nike-shoes" width="173" height="120" class = "imageClass">`,
//         isLiked: false,
//         tag: "electronics",
//         price: "$1500"
//       },
//       {
//         productName:"Iron",
//         image:`<img src="nike-shoes.jpg" alt="nike-shoes" width="173" height="120" class = "imageClass">`,
//         isLiked: true,
//         tag: "footwear",
//         price: "$1700"
//       }
// ];

// for (let i=0; i<products.length; i++){
//     for (let j=0; j<4; j++){
//         document.getElementsByClassName("productName")[j].innerHTML = products[i+j].productName;
//         document.getElementsByClassName("price")[j].innerHTML = products[i+j].price;
//         document.getElementsByClassName("imageDiv")[j].innerHTML = products[i+j].image;
//   }
// }

// const result1 = products.filter(product => product.tag == "footwear");
// console.log(result1);

// for (let i=0; i<result1.length; i++){

// }

// // const result2 = products.filter(product => product.tag == "clothes");
// // console.log(result2);

// // const result3 = products.filter(product => product.tag == "electronics");
// // console.log(result3);


// div.style.display = "none";