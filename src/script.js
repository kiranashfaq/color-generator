var gradient_div = document.getElementById("gradient-div");
var dropdown = document.querySelector(".dropdown-div select");
// var input_1 = document.getElementById("color1")
//  var input_2 = document.getElementById("color2")
 var refresh_button = document.getElementById("refresh-button");
 var copy_button = document.getElementById("copy-button");
 var inputs_color = document.querySelectorAll(".color-input-div input");
 var color_code = document.getElementById("color-code")

 const updateGradient = () =>{
const gradient = `linear-gradient(${dropdown.value}, ${inputs_color[0].value}, ${inputs_color[1].value})`;
gradient_div.style.background = gradient
 color_code.textContent = `background: ${gradient}`;
 document.body.style.background = gradient

 }
const copyCode = () =>{
   navigator.clipboard.writeText(color_code.innerText)
   copy_button.innerText = "Code Copied "
   
   setTimeout(() => {
      copy_button.innerText = "Copy Code"
   }, (1600));
}


 inputs_color.forEach(input =>{
    input.addEventListener("input", updateGradient)
 })
 dropdown.addEventListener("change",updateGradient)



 refresh_button.addEventListener("click",function(){
   var randomColor1 = Math.floor(Math.random() * 16777215).toString(16);
 var randomColor2 = Math.floor(Math.random() * 16777215).toString(15);
 inputs_color.forEach(input =>{
  
   inputs_color[0].value = `#${randomColor1}`
   inputs_color[1].value = `#${randomColor2}`

   updateGradient()
})
 });
copy_button.addEventListener("click", copyCode)

