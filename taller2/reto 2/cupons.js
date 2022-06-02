const coupons = [
    "JuanDC_es_Batman",
    "pero_no_le_digas_a_nadie",
    "es_un_secreto",
];


function calcularPrecioConDescuento(precio, descuento) {

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

function onClickButtonCouponDiscount() {    
    const inputCoupon = document.getElementById("InputCoupon");
    const couponValue = inputCoupon.value;

    if (!coupons.includes(couponValue)) {
        alert("El cupón " + couponValue + "no es válido");
    } else if (couponValue === "JuanDC_es_Batman") {
        descuento = 15;
    } else if (couponValue === "pero_no_le_digas_a_nadie") {
        descuento = 30;
    } else if (couponValue === "es_un_secreto") {
        descuento = 25;
    }

    return descuento;

}