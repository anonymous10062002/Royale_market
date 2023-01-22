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
// RENDER PRODUCT HERE
getProduct();
async function getProduct(){
    let pID=localStorage.getItem("productID");
    try {
        let req=await fetch(`https://alive-pig-kimono.cyclic.app/?_id=${pID}`);
        let res=await req.json();
        // console.log(data);
        displayProduct(res[0]);
    } catch (error) {
        console.log(error);
    }
}

function displayProduct(data){
    let mainDiv=document.getElementById("mainDiv");
    let imgDiv=document.getElementById("imgDiv");
    let note=document.createElement("i");
    note.innerText="NOTE: In case of product is different, please remember there is a return policy."
    let img=document.createElement("img");
    img.setAttribute("src",data.product);
    imgDiv.append(note,img);

    let detailDiv=document.getElementById("detailDiv");
    let brand=document.createElement("p");
    brand.setAttribute("id","brandhead");
    brand.innerText=data.brand;
    let des=document.createElement("p");
    des.setAttribute("id","deshead");
    des.innerText=data.description;
    let price=document.createElement("p");
    price.setAttribute("id","pricehead");
    price.innerText=`INR ${data.price}`;
    let color=document.createElement("p");
    color.setAttribute("id","colorhead");
    color.innerText="COLOR: GREY";
    let size=document.createElement("p");
    size.setAttribute("id","sizepara");
    size.innerText='SIZE:';
    let select=document.createElement("select");
    select.innerHTML=`
    <option value="Small">Select a size</option>
    <option value="Small">Small</option>
    <option value="Medium">Medium</option>
    <option value="Large">Large</option>`
    let br=document.createElement("br");
    let btn=document.createElement("button");
    btn.setAttribute("id","crtBtn");
    btn.innerText='ADD TO CART';
    let favBtn=document.createElement("button");
    favBtn.setAttribute("id","favBtn");
    favBtn.innerText="ADD TO FAVOURITES";
    detailDiv.append(brand,des,price,color,size,select,br,btn,br,favBtn);
    mainDiv.append(imgDiv,detailDiv);

  // ADD DATA TO CART API
    btn.addEventListener("click",async()=>{
      let token=sessionStorage.getItem("accessToken"); 
    try {
      let req=await fetch(`https://alive-pig-kimono.cyclic.app/users/cart/add`,{
        method:'POST',
        headers:{
          'Content-Type':'application/json',
          'Authorization': token
        },
        body:JSON.stringify(data)
      })
      let res=await req.json();
      if(req.ok){
        console.log(alert(res.msg));
      }
    } catch (error) {
      console.log(error);
    }
    });
}
// JUMP TO CART PAGE

let myCart=document.getElementById("rightWel");
myCart.addEventListener("click",()=>{
  window.location.assign('cart.html');
});








