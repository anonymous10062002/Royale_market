let form=document.getElementById("pform");

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    alert("Payment Successfull");
    window.location.assign('./index.html');
})