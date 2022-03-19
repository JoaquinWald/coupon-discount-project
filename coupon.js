function calcularPrecioConDescuento(precio, descuento){
  const porcentajePrecioConDescuento = 100 - descuento;
  const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

  return precioConDescuento;
}

let coupons = [
  "batman",
  "wason",
  "superman"
];

function onClickButtonCoupon(){
  const inputPrice = document.getElementById("InputPrice");
  const priceValue = inputPrice.value;

  const inputCoupon = document.getElementById("InputCoupon");
  const couponValue = inputCoupon.value;

  let descuentoCupon;


  if(!coupons.includes(couponValue)){
    alert("El cupón " + couponValue + "no es válido");
  }else if(couponValue === "batman"){
    descuentoCupon = 20;
  }else if(couponValue === "wason"){
    descuentoCupon = 15;
  }else if(couponValue === "superman"){
    descuentoCupon = 10;
  }


  const precioConDescuento = calcularPrecioConDescuento(priceValue, descuentoCupon);

  const parrafo = document.getElementById("ResultadoEnTexto");
  parrafo.innerHTML = "El precio con el cupón aplicado es de: $" + precioConDescuento;
}