
//const precioOriginal = parseInt(prompt("Ingrese el precio del producto: "));
//const descuento = parseInt(prompt("Ingrese el descuento del producto: "));

function calcularPrecioConDescuento(precio, descuento) {
    //const operacion = (precio - (precio * descuento));
    //return operacion;

    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

    return precioConDescuento;
}

function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById("inputPrice");
    const priceValue = inputPrice.value;

    const inputDiscount = document.getElementById("inputDiscount");
    const discountValue = inputDiscount.value;

    const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);

    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con descuento son: $ " + precioConDescuento;
}