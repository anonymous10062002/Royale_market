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

// GETTING CART DATA

getCartData();
async function getCartData(){
    let token=sessionStorage.getItem("accessToken"); 
    try {
      let req=await fetch(`https://alive-pig-kimono.cyclic.app/users/cart`,{
        headers:{
          'Authorization':token
        }
      });
      let res=await req.json();
      if(req.ok){
        displayCart(res);
      }
    } catch (error) {
      console.log(error);
    }
}

// DISPLAY CART DATA
function displayCart(data){
    let mainDiv=document.getElementById("mainDiv");
    data.forEach((item)=>{
        let unikDiv=document.createElement("div");
        unikDiv.setAttribute("id","unikDiv");
        unikDiv.innerHTML=`<div id="fstDiv">
        <img src=${item.product} alt="productImage">
    </div>
    <div id="secDiv">
        <h3>${item.brand}</h3>
        <p>${item.description}</p>
        <p>Category: ${item.category}</p><br>
        <button id="delcartbtn">Remove item</button>
    </div>
    <div id="thrDiv">
        <select name="quantity" id="qty">
            <option value="1">Qty</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
        </select>
        <h3 id="prodprice">${item.price}</h3>
    </div>`
        mainDiv.append(unikDiv);
    })
}