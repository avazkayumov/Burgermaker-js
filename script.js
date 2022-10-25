const products = JSON.parse(localStorage.getItem("material")) || [];
let burger = document.querySelector(".burger-add");

// let cheaseValue = document.querySelector("#chease-value").value
// let cabbageValue = document.querySelector("#cabbage-value").value
// let cutletValue = document.querySelector("#cutlet-value").value

function renderProduct() {
  burger.innerHTML = "";
  products.forEach((product) => {
    if (product == "1") {
      burger.insertAdjacentHTML(
        "beforeend",
          `
              <div class="added-chease"></div>
          `
      );
    }
    if (product == "2") {
      burger.insertAdjacentHTML(
        "beforeend",
          `
              <div class="added-cabbage"></div>
          `
      );
    }
    if (product == "3") {
      burger.insertAdjacentHTML(
        "beforeend",
          `
              <div class="added-cutlet"></div>
          `
      );
    }
  }); 
}

function addProduct(element) {
  const id = element.dataset.id
  products.push(id)

  localStorage.setItem("material", JSON.stringify(products));
    
  renderProduct();
}


function removeProduct(element) {
  const id = element.dataset.id;
  const index = products.indexOf(id)

  if (index != -1) {
    products.splice(index, 1)
  }

  // sumFunc()
  renderProduct()
}

function restartBtn() {
  localStorage.removeItem("material")
  window.location.reload();
}
  
// function sumFunc() {
//   const cheaseSum = products.filter(product => product == 1)
//   cheaseValue = cheaseSum.length
// }



renderProduct();