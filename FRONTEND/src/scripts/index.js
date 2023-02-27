// CHECKING LOGGED IN OR NOT
if(sessionStorage.getItem("accessToken")){
  let username=sessionStorage.getItem("username");
  let options=document.getElementById("options");
  options.innerHTML=`<div id="leftWel">Welcome ${username}</div>
  <div id="rightWel">
  MY CART
  <button id="logoutBtn">Logout</button>
  </div>`
}
// JUMP TO CART PAGE
let myCart=document.getElementById("rightWel");
myCart.addEventListener("click",()=>{
  window.location.assign('cart.html');
});
// LOGOUT BY BTN
if(sessionStorage.getItem("accessToken")){
  let logoutBtn=document.getElementById("logoutBtn");
  logoutBtn.addEventListener("click",()=>{
  sessionStorage.clear();
  location.reload();
  })
}
// JUMP TO HOMEPAGE
document.getElementById("logo").addEventListener("click",()=>{
  window.location.assign("index.html")
})
// DROPDOWNS
let shoes = document.getElementById("shoes");
let shoedrop = document.getElementById("drop");

let bags = document.getElementById("handbag");
let bagdrop = document.getElementById("bagdrop");

let jwell = document.getElementById("jwell");
let jwelldrop = document.getElementById("jwelldrop");

shoes.addEventListener("mouseover", myFunction);
shoedrop.addEventListener("mouseout", myFunction);
function myFunction() {
  bagdrop.style.display = "none";
  jwelldrop.style.display = "none";
  if (shoedrop.style.display === "none") {
    shoedrop.style.display = "flex";
  } else if (drop.style.display === "flex") {
    shoedrop.style.display = "none";
  } else {
    shoedrop.style.display = "flex";
  }
}

bags.addEventListener("mouseover", myFunction2);
bagdrop.addEventListener("mouseout", myFunction2);
function myFunction2() {
  shoedrop.style.display = "none";
  jwelldrop.style.display = "none";
  if (bagdrop.style.display === "none") {
    bagdrop.style.display = "flex";
  } else if (bagdrop.style.display === "flex") {
    bagdrop.style.display = "none";
  } else {
    bagdrop.style.display = "flex";
  }
}

jwell.addEventListener("mouseover", myFunction3);
jwelldrop.addEventListener("mouseout", myFunction3);
function myFunction3() {
  shoedrop.style.display = "none";
  bagdrop.style.display = "none";
  if (jwelldrop.style.display === "none") {
    jwelldrop.style.display = "flex";
  } else if (jwelldrop.style.display === "flex") {
    jwelldrop.style.display = "none";
  } else {
    jwelldrop.style.display = "flex";
  }
}

// SLIDER
function first() {
  document.getElementById("sliderImage").src =
    "https://images.bloomingdalesassets.com/is/image/BcomMedia/media/0117_0118_D_02_CAR_c_RTW_Coats.jpg?scl=1&fmt=webp&wid=1440";
}
function second() {
  document.getElementById("sliderImage").src =
    "https://images.bloomingdalesassets.com/is/image/BcomMedia/media/0117_0118_D_02_CAR_e_MEN_Denim.jpg?scl=1&fmt=webp&wid=1440";
}
function third() {
  document.getElementById("sliderImage").src =
    "https://images.bloomingdalesassets.com/is/image/BcomMedia/media/0117_0118_D_02_CAR_a_MULTI_LNY_WaterRabbit.jpg?scl=1&fmt=webp&wid=1440";
}
setInterval(first, 3000);
setInterval(second, 6000);
setInterval(third, 9000);
// TRENDING COLLECTIONS
getdata();
async function getdata() {
  try {
    let req = await fetch("http://localhost:5050/products?category=Sneakers&limit=8");
    let data = await req.json();
    displayData(data);
  } catch (error) {
    console.log(error.msg);
  }
}
//TRENDING DISPLAY FUNCTION
function displayData(data) {
  let trendingDiv = document.getElementById("trending");
  data.forEach((item) => {
    let div = document.createElement("div");
    div.setAttribute("id","productDiv");
    let img = document.createElement("img");
    img.setAttribute("src", item.product);
    let title = document.createElement("h4");
    title.innerText = item.description;
    let price = document.createElement("p");
    price.innerText = `INR ${item.price}`;
    let btnDiv=document.createElement("div");
    btnDiv.setAttribute("id","btnDiv");
    let buyBtn=document.createElement("button");
    buyBtn.setAttribute("id","buyBtn");
    buyBtn.innerText="Buy now";
    let addCartBtn=document.createElement("button");
    addCartBtn.setAttribute("id","addCartBtn");
    addCartBtn.innerText="Add to cart";
    btnDiv.append(buyBtn,addCartBtn);
    div.append(img, title, price,btnDiv);
    trendingDiv.append(div);
    img.addEventListener("click",()=>{
      localStorage.setItem("productID",item._id);
      location.assign("./product.html");
    })
  });
}
