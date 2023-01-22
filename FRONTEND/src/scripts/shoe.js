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

let jwell= document.getElementById("jwell");
let jwelldrop=document.getElementById("jwelldrop");

shoes.addEventListener("mouseover", myFunction);
shoedrop.addEventListener("mouseout", myFunction);
function myFunction() {
  bagdrop.style.display = "none";
  jwelldrop.style.display = "none";
  if (shoedrop.style.display === "none") {
    shoedrop.style.display = "flex";
  } else if (drop.style.display === "flex") {
    shoedrop.style.display = "none";
  }
   else {
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
  }
   else {
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
  }
   else {
    jwelldrop.style.display = "flex";
  }
}

// TRENDING COLLECTIONS
getdata();
async function getdata() {
  try {
    let req = await fetch("https://alive-pig-kimono.cyclic.app/shoes");
    let data = await req.json();
    displayData(data);
  } catch (error) {
    console.log(error);
  }
}
//TRENDING DISPLAY FUNCTION
function displayData(data) {
  let mainDiv = document.getElementById("mainDiv");
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
    mainDiv.append(div);
  });
}
