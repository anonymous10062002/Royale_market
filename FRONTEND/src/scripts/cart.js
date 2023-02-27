// CHECKING LOGGED IN OR NOT
let token=sessionStorage.getItem("accessToken"); 
if(token){
    let username=sessionStorage.getItem("username");
    let options=document.getElementById("options");
    options.innerHTML=`<div id="leftWel">Welcome ${username}</div>
    <div id="rightWel">
    <button id="logoutBtn">Logout</button>
    </div>`
  }
  // LOGOUT BY BTN
  if(token){
    let logoutBtn=document.getElementById("logoutBtn");
    logoutBtn.addEventListener("click",()=>{
    sessionStorage.clear();
    window.location.assign('index.html');
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
    try {
      let req=await fetch(`http://localhost:5050/users/cart`,{
        headers:{
          'Authorization':token
        }
      });
      let res=await req.json();
      if(req.ok){
        displayCart(res);
      }
      else{
        let mainDiv=document.getElementById("mainDiv");
        mainDiv.innerHTML='<h2 id="oops">Oops! your cart is empty</h2><img id="empty" src="./src/images/empty-box.png">';
      }
    } catch (error) {
      console.log(error);
    }
}

// DISPLAY CART DATA
function displayCart(data){
  let total=0;
  let table=document.getElementById("checktable");
  let tbody=document.getElementById("tbd");
  document.getElementById("itembrand").innerText="Brand";
  document.getElementById("itemdes").innerText="Item";
  document.getElementById("itemqty").innerText="Qty.";
  document.getElementById("itemprice").innerText="Price";
  document.getElementById("subtotal").innerText="Subtotal";
  let mainDiv=document.getElementById("mainDiv");

    data.forEach((item)=>{
        total=total+ (item.price*item.quantity);
        let unikDiv=document.createElement("div");
        unikDiv.setAttribute("id","unikDiv");
        unikDiv.innerHTML=`<div id="fstDiv">
                          <img src=${item.product} alt="productImage">
                          </div>
                          <div id="secDiv">
                              <h3>${item.brand}</h3>
                              <p>${item.description}</p>
                              <p>Category: ${item.category}</p><br>
                              <button id="delcartbtn" data-id=${item._id}>Remove</button>
                          </div>
                          <div id="thrDiv">
                              <h3 id="ph">Price</h3>
                              <p id="prodprice">${item.price}/-</p>
                          </div>`
        mainDiv.append(unikDiv);
        let btns=document.querySelectorAll("#delcartbtn");
        btns.forEach((btn)=>{btn.addEventListener("click",funDelitem)});
        // //////////////////////////////////////////////////////////////
        let row=document.createElement("tr");
        let td1=document.createElement("td");
        td1.innerText=item.brand;
        let td2=document.createElement("td");
        td2.innerText=item.description;
        let td3=document.createElement("td");
        td3.innerText=item.quantity;                    
        let td4=document.createElement("td");
        td4.innerText=`${item.price}/-`;
        let td5=document.createElement("td");
        td5.innerText=`${item.price* item.quantity}/-`;  
        row.append(td1,td2,td3,td4,td5);
        tbody.append(row);
    })
    
    table.append(tbody);
    let checkout=document.getElementById("checkout");

    let totaldiv=document.createElement("div");
    totaldiv.setAttribute("id","totdiv");
    totaldiv.innerHTML=`<button id="totbtn">Total Order Amount: ${total}</button>`;

    let btndiv=document.createElement("div");
    btndiv.setAttribute("id","btndiv");
    btndiv.innerHTML=`<button id="checkbtn">CHECKOUT</button>`;
    checkout.append(totaldiv,btndiv);

    btndiv.addEventListener("click",()=>{
      window.location.assign('./payment.html');
    })
}

// DELETINF CART ITEMS
async function funDelitem(e){
  try {
    let req=await fetch(`http://localhost:5050/users/cart/delete/${e.target.dataset.id}`,{
      method:'DELETE',
      headers:{
        'Authorization':token
      }
    });
    let res=await req.json();
    if(req.ok){
      location.reload();
    }
  } catch (error) {
    console.log(error);
  }
}