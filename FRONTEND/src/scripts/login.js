// JUMP TO HOMEPAGE
document.getElementById("logo").addEventListener("click",()=>{
    window.location.assign("index.html")
  })
// JUMP TO SIGNUP PAGE
let btn=document.getElementById("jumptosignup");
btn.addEventListener("click",()=>{
    window.location.assign('signup.html')
})

// LOGIN THE USER
let form=document.getElementById("loginForm");
form.addEventListener("submit",async (e)=>{
    e.preventDefault();
    let email=document.getElementById("email").value;
    let password=document.getElementById("pass").value;
    let userObj={email,password};
    try {
        let req=await fetch("https://alive-pig-kimono.cyclic.app/users/login",{
          method:'POST',
          headers:{
            'Content-Type':'application/json'
          },
          body:JSON.stringify(userObj)
        })
        let res=await req.json();
        let token=res.token;
        let username=res.username;
        if(req.ok){
          sessionStorage.setItem("accessToken",token);
          sessionStorage.setItem("username",username);
          window.location.assign('index.html');
        }
        else{
          alert('wrong credentials!');
        }
    } catch (error) {
        console.log(error);
    }
})