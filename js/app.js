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
  image:`<img src="images/iron1.jpg" alt="iron" width="173" height="120" class = "imageClass">`,
  isLiked: true,
  tag: "electronics",
  price: "$1700"
}
];

filterSelection("all")

function filterSelection(c) {
  let x = document.getElementsByClassName("product-card");
  if (c == "all") c = "";
  for (let i = 0; i < x.length; i++) {
    removeProduct(x[i], "show");
    if (x[i].className.indexOf(c) > -1) addProduct(x[i], "show"); //i will try with != -1
  }
}

function addProduct(element, name) {
  let arr1, arr2;
  arr1 = element.className.split(" ");
  //console.log(arr1);
  arr2 = name.split(" ");
  //console.log(arr2);
  for (let i = 0; i < arr2.length; i++) {

    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

function removeProduct(element, name) {
  let arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (let i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
let btnContainer = document.getElementById("filter-buttons");
let btns = btnContainer.getElementsByClassName("btn");
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    let current = document.getElementsByClassName("active");
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
  }
}

function addItem(){
 alert("Item added to Cart!");

 let totalItems = document.getElementById("cart");
 // Increase count of cart.
 totalItems.textContent = + totalItems.textContent + 1;
}







// function filterSelection() {
//  let x;
//       for (let a = 0; a < products.length; a++){
//         if ( products[a].tag == "footwear"){
//           x = document.getElementsByClassName(products[a].tag);
//         }
//       }
//       for (let i = 0; i < x.length; i++) {
//               addProduct(x[i], "show"); 
//         }  
// }

// const result1 = products.filter(product => product.tag == "footwear");
// console.log(result1);

// for (let i=0; i<result1.length; i++){

// }

// let toSearch = 'footwear'; 

// let result = products.filter(product => product.tag === toSearch);

// console.log(result);

