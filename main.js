const productos = [
    {id: 1, producto: "Hoodie azul", precio: 64},
    {id: 2, producto: "Hoodie lila", precio: 64},
    {id: 3, producto: "Hoodie rojo", precio: 64},
    {id: 4, producto: "Sweatshirt celeste", precio: 59},
    {id: 5, producto: "Sweatshirt negro", precio: 59},
    {id: 6, producto: "Sweatshirt violeta", precio: 59},
    {id: 7, producto: "Remera blanca", precio: 29},
    {id: 8, producto: "Remera negra", precio: 29},
    {id: 9, producto: "Remera roja", precio: 29},
];

let cantHoodie1 = 0
let cantHoodie2 = 0
let cantHoodie3 = 0
let cantSweatshirt1 = 0
let cantSweatshirt2 = 0
let cantSweatshirt3 = 0
let cantRemera1 = 0
let cantRemera2 = 0
let cantRemera3 = 0
let carro = 0

//evento boton hoodie1
let btnHoodie1 = document.getElementById("btnHoodie1")
btnHoodie1.addEventListener("click", comprarHoodie1)
function comprarHoodie1(){
    cantHoodie1++;
    let buscarId1 = productos.find(producto => producto.id === 1);
    carro += buscarId1.precio

    //agregar dom al carrito
    if(cantHoodie1 == 1){
        $(() => {
            $("#carritoHoodie1").append(`<p id="prod1">${buscarId1.producto} - cantidad: ${cantHoodie1} - valor: US$${buscarId1.precio}</p>`)
            $("#carritoVacio").remove()
        })
    }else if(cantHoodie1 > 1){
        $(() => {
            $("#prod1").remove()
            $("#carritoHoodie1").append(`<p id="prod1">${buscarId1.producto} - cantidad: ${cantHoodie1} - valor: US$${buscarId1.precio*cantHoodie1}</p>`)
        })
    }
}

//evento boton hoodie2
let btnHoodie2 = document.getElementById("btnHoodie2")
btnHoodie2.addEventListener("click", comprarHoodie2)
function comprarHoodie2(){
    cantHoodie2++;
    let buscarId2 = productos.find(producto => producto.id === 2);
    carro += buscarId2.precio

    //agregar dom al carrito
    if(cantHoodie2 == 1){
        $(() => {
            $("#carritoHoodie2").append(`<p id="prod2">${buscarId2.producto} - cantidad: ${cantHoodie2} - valor: US$${buscarId2.precio}</p>`)
            $("#carritoVacio").remove()
        })
    }else if(cantHoodie2 > 1){
        $(() => {
            $("#prod2").remove()
            $("#carritoHoodie2").append(`<p id="prod2">${buscarId2.producto} - cantidad: ${cantHoodie2} - valor: US$${buscarId2.precio*cantHoodie2}</p>`)
        })
    }
}

//evento boton hoodie3
let btnHoodie3 = document.getElementById("btnHoodie3")
btnHoodie3.addEventListener("click", comprarHoodie3)
function comprarHoodie3(){
    cantHoodie3++;
    let buscarId3 = productos.find(producto => producto.id === 3);
    carro += buscarId3.precio

    //agregar dom al carrito
    if(cantHoodie3 == 1){
        $(() => {
            $("#carritoHoodie3").append(`<p id="prod3">${buscarId3.producto} - cantidad: ${cantHoodie3} - valor: US$${buscarId3.precio}</p>`)
            $("#carritoVacio").remove()
        })
    }else if(cantHoodie3 > 1){
        $(() => {
            $("#prod3").remove()
            $("#carritoHoodie3").append(`<p id="prod3">${buscarId3.producto} - cantidad: ${cantHoodie3} - valor: US$${buscarId3.precio*cantHoodie3}</p>`)
        })
    }
}

//evento boton sweatshirt1
let btnSweatshirt1 = document.getElementById("btnSweatshirt1")
btnSweatshirt1.addEventListener("click", comprarSweatshirt1)
function comprarSweatshirt1(){
    cantSweatshirt1++;
    let buscarId4 = productos.find(producto => producto.id == 4);
    carro += buscarId4.precio

    //agregar dom al carrito
    if(cantSweatshirt1 == 1){
        $(() => {
            $("#carritoSweatshirt1").append(`<p id="prod4">${buscarId4.producto} - cantidad: ${cantSweatshirt1} - valor: US$${buscarId4.precio}</p>`)
            $("#carritoVacio").remove()
        })
    }else if(cantSweatshirt1 > 1){
        $(() => {
            $("#prod4").remove()
            $("#carritoSweatshirt1").append(`<p id="prod4">${buscarId4.producto} - cantidad: ${cantSweatshirt1} - valor: US$${buscarId4.precio*cantSweatshirt1}</p>`)
        })
    }
}

//evento boton sweatshirt2
let btnSweatshirt2 = document.getElementById("btnSweatshirt2")
btnSweatshirt2.addEventListener("click", comprarSweatshirt2)
function comprarSweatshirt2(){
    cantSweatshirt2++;
    let buscarId5 = productos.find(producto => producto.id == 5);
    carro += buscarId5.precio

    //agregar dom al carrito
    if(cantSweatshirt2 == 1){
        $(() => {
            $("#carritoSweatshirt2").append(`<p id="prod5">${buscarId5.producto} - cantidad: ${cantSweatshirt2} - valor: US$${buscarId5.precio}</p>`)
            $("#carritoVacio").remove()
        })
    }else if(cantSweatshirt2 > 1){
        $(() => {
            $("#prod5").remove()
            $("#carritoSweatshirt2").append(`<p id="prod5">${buscarId5.producto} - cantidad: ${cantSweatshirt2} - valor: US$${buscarId5.precio*cantSweatshirt2}</p>`)
        })
    }
}

//evento boton sweatshirt3
let btnSweatshirt3 = document.getElementById("btnSweatshirt3")
btnSweatshirt3.addEventListener("click", comprarSweatshirt3)
function comprarSweatshirt3(){
    cantSweatshirt3++;
    let buscarId6 = productos.find(producto => producto.id == 6);
    carro += buscarId6.precio

    //agregar dom al carrito
    if(cantSweatshirt3 == 1){
        $(() => {
            $("#carritoSweatshirt3").append(`<p id="prod6">${buscarId6.producto} - cantidad: ${cantSweatshirt3} - valor: US$${buscarId6.precio}</p>`)
            $("#carritoVacio").remove()
        })
    }else if(cantSweatshirt3 > 1){
        $(() => {
            $("#prod6").remove()
            $("#carritoSweatshirt3").append(`<p id="prod6">${buscarId6.producto} - cantidad: ${cantSweatshirt3} - valor: US$${buscarId6.precio*cantSweatshirt3}</p>`)
        })
    }
}

//evento boton remera1
let btnRemera1 = document.getElementById("btnRemera1")
btnRemera1.addEventListener("click", comprarRemera1)
function comprarRemera1(){
    cantRemera1++;
    let buscarId7 = productos.find(producto => producto.id == 7);
    carro += buscarId7.precio

    //agregar dom al carrito
    if(cantRemera1 == 1){
        $(() => {
            $("#carritoRemera1").append(`<p id="prod7">${buscarId7.producto} - cantidad: ${cantRemera1} - valor: US$${buscarId7.precio}</p>`)
            $("#carritoVacio").remove()
        })
    }else if(cantRemera1 > 1){
        $(() => {
            $("#prod7").remove()
            $("#carritoRemera1").append(`<p id="prod7">${buscarId7.producto} - cantidad: ${cantRemera1} - valor: US$${buscarId7.precio*cantRemera1}</p>`)
        })
    }
}

//evento boton remera2
let btnRemera2 = document.getElementById("btnRemera2")
btnRemera2.addEventListener("click", comprarRemera2)
function comprarRemera2(){
    cantRemera2++;
    let buscarId8 = productos.find(producto => producto.id == 8);
    carro += buscarId8.precio

    //agregar dom al carrito
    if(cantRemera2 == 1){
        $(() => {
            $("#carritoRemera2").append(`<p id="prod8">${buscarId8.producto} - cantidad: ${cantRemera2} - valor: US$${buscarId8.precio}</p>`)
            $("#carritoVacio").remove()
        })
    }else if(cantRemera2 > 1){
        $(() => {
            $("#prod8").remove()
            $("#carritoRemera2").append(`<p id="prod8">${buscarId8.producto} - cantidad: ${cantRemera2} - valor: US$${buscarId8.precio*cantRemera2}</p>`)
        })
    }
}

//evento boton remera3
let btnRemera3 = document.getElementById("btnRemera3")
btnRemera3.addEventListener("click", comprarRemera3)
function comprarRemera3(){
    cantRemera3++;
    let buscarId9 = productos.find(producto => producto.id == 9);
    carro += buscarId9.precio

    //agregar dom al carrito
    if(cantRemera3 == 1){
        $(() => {
            $("#carritoRemera3").append(`<p id="prod9">${buscarId9.producto} - cantidad: ${cantRemera3} - valor: US$${buscarId9.precio}</p>`)
            $("#carritoVacio").remove()
        })
    }else if(cantRemera3 > 1){
        $(() => {
            $("#prod9").remove()
            $("#carritoRemera3").append(`<p id="prod9">${buscarId9.producto} - cantidad: ${cantRemera3} - valor: US$${buscarId9.precio*cantRemera3}</p>`)
        })
    }
}

// evento boton finalizar compra y uso de api
document.getElementById("finalizarCompra").addEventListener("click", () => {
    fetch('https://criptoya.com/api/dolar')
    .then(response => response.json())
    .then(data => {
        for (let dolar in data) {
            if(dolar == "oficial")
                valorDolar = data[dolar];
                carroDolares = carro * valorDolar;
                if(carroDolares > 0){
                    divFin.innerHTML = `
                    <p id="carroDolares"> Valor total en moneda local: AR$${carroDolares.toFixed(2)}
                `
                }else{
                    divFin.innerHTML = `
                    <p id="carroDolares"> No hay ningún producto en el carrito
                `
                }

        }
    })
})

// evento vaciar carrito
document.getElementById("vaciarCarrito")
vaciarCarrito.addEventListener("click", vaciarCarro)
function vaciarCarro(){
    carro = 0
    carroDolares = 0
    cantHoodie1 = 0
    cantHoodie2 = 0
    cantHoodie3 = 0
    cantSweatshirt1 = 0
    cantSweatshirt2 = 0
    cantSweatshirt3 = 0
    cantRemera1 = 0
    cantRemera2 = 0
    cantRemera3 = 0
    $(() => {
        $("#prod1").remove()
        $("#prod2").remove()
        $("#prod3").remove()
        $("#prod4").remove()
        $("#prod5").remove()
        $("#prod6").remove()
        $("#prod7").remove()
        $("#prod8").remove()
        $("#prod9").remove()
        $("#carroDolares").remove()
    })
}

let productosJSON = JSON.stringify(productos);
localStorage.setItem("Productos", productosJSON);

















































