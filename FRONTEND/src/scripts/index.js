// DROPDOWN
let shoes=document.getElementById("shoes");
let drop=document.getElementById("drop");
shoes.addEventListener("mouseover",myFunction);
drop.addEventListener("mouseout",myFunction);
function myFunction() {
    if (drop.style.display === "none") {
      drop.style.display = "flex";
      shoes.style.color="red"
    } else {
      drop.style.display = "none";
    }
}
// SLIDER
function first(){
    document.getElementById("sliderImage").src="https://images.bloomingdalesassets.com/is/image/BcomMedia/media/0117_0118_D_02_CAR_c_RTW_Coats.jpg?scl=1&fmt=webp&wid=1440"
}
function second(){
    document.getElementById("sliderImage").src="https://images.bloomingdalesassets.com/is/image/BcomMedia/media/0117_0118_D_02_CAR_e_MEN_Denim.jpg?scl=1&fmt=webp&wid=1440"
}
function third(){
    document.getElementById("sliderImage").src="https://images.bloomingdalesassets.com/is/image/BcomMedia/media/0117_0118_D_02_CAR_a_MULTI_LNY_WaterRabbit.jpg?scl=1&fmt=webp&wid=1440"
}
setInterval(first,3000);
setInterval(second,6000);
setInterval(third,9000);