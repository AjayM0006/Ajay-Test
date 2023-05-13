// JS for Variant Change Doprdown 

let addtocart = document.getElementsByClassName("product-form__buttons")[0]; 
addtocart.classList.add("disable-button");

document.getElementsByClassName("product-form__input")[1].classList.add("hide-size");
function selectOption() {
  let dropdown = document.getElementById('dropdown');
  let selectedIndex = dropdown.selectedIndex;
  let selectedValue = dropdown.options[selectedIndex].text;
  let addtocart = document.getElementsByClassName("product-form__buttons")[0];  
  
  if(selectedIndex == 1){
      console.log("ajay");
      document.getElementsByClassName("color-swatching")[3].click();
      addtocart.classList.remove("disable-button");
  }     
  else if(selectedIndex == 2){
      console.log("ajay");
      document.getElementsByClassName("color-swatching")[4].click();
      addtocart.classList.remove("disable-button");
  }
  else if(selectedIndex == 3){
      console.log("ajay");
      document.getElementsByClassName("color-swatching")[5].click();
      addtocart.classList.remove("disable-button");
  }
  else if(selectedIndex == 4){
      console.log("ajay");
      document.getElementsByClassName("color-swatching")[6].click();
      addtocart.classList.remove("disable-button");
  }
  else if(selectedIndex == 5){
      console.log("ajay");
      document.getElementsByClassName("color-swatching")[7].click();
      addtocart.classList.remove("disable-button");
  }
  else if(selectedIndex == 0){
      console.log("ajay Yoooo");
      addtocart.classList.add("disable-button");
      
  }
}