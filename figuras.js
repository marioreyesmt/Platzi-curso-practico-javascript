//Código del cuadrado
function perimetroCuadrado(lado) {
    return lado * 4;
}

// Calcular área del cuadrado
function areaCuadrado(lado) {
    return lado * lado;
}






// Calcular perimetro del triangulo
function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}

// Calcular area del triangulo
function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}

//Calcular altura triangulo isosceles con teorema de pitágoras
function alturaTrianguloIsosceles(lado, base) {
    if (lado != base) {
        alert("Los lados no son iguales");
    } else {
        let formula = Math.sqrt((lado * lado) - (base / 2));
        return formula;
    }
}






//Calcular diámetro del circulo

const PI = Math.PI;

function diametroCirculo(radio) {
    return radio * 2;
}

//Calcular circunferencia del circulo
function circunferenciaCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI
}

//Calcular área del circulo
function areaCirculo(radio) {
 return (radio * radio) * PI;
}







// Interacción con html cuadrado

function calcularPerimetroCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = parseInt(input.value);
    alert(typeof value);

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}






// Interacción con html triangulo

function calcularPerimetroTriangulo() {
    const input1 = document.getElementById("inputTriangulo1");
    const input2 = document.getElementById("inputTriangulo2");
    const input3 = document.getElementById("inputTriangulo3");

    const value1 = Number(input1.value);
    const value2 = Number(input2.value);
    const value3 = Number(input3.value);

    alert(typeof value1);
    
    const perimetro = perimetroTriangulo(value1, value2, value3);
    alert(perimetro);
}

function calcularAreaTriangulo() {
    const input1 = document.getElementById("inputTriangulo5");
    const input2 = document.getElementById("inputTriangulo6");

    const value1 = Number(input1.value);
    const value2 = Number(input2.value);

    const area = areaTriangulo(value1, value2);
    alert(area);
}

function calcularAlturaTriangulo() {
    const input1 = document.getElementById("inputTriangulo7");
    const input2 = document.getElementById("inputTriangulo8");

    const value1 = Number(input1.value);
    const value2 = Number(input2.value);
    
    const altura = alturaTrianguloIsosceles(value1, value2);
    alert(altura);
}


// Interacción con html circulo

function calcularDiametroCirculo() {
    const input = document.getElementById("inputCirculo");
    const value = parseInt(input.value);
    alert(typeof value);

    const diametro = diametroCirculo(value);
    alert(diametro);
}

function calcularCircunferenciaCirculo() {
    const input = document.getElementById("inputCirculo");
    const value = parseInt(input.value);
    alert(typeof value);

    const diametro = circunferenciaCirculo(value);
    alert(diametro);
}

function calcularAreaCirculo() {
    const input = document.getElementById("inputCirculo");
    const value = parseInt(input.value);
    alert(typeof value);

    const area = areaCirculo(value);
    alert(area);
}