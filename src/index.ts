let nota, suma, promedio, contador: number;
suma = 0;

for (let contador = 1; contador < 11; contador++) {
  let nota: number = Number(prompt("ingrese notas", +contador + ":"));
  suma += nota;
}

promedio = suma / 10;
console.log("EL promedio es de", +promedio);
