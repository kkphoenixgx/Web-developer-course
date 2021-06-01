const a= 10;
const b= 30;

function somar(a,b){

	return  a+b;
}

document.querySelector("#calcular").addEventListener("click", function(){

		let valorA = document.querySelector("#valorA").value;
		let valorB = document.querySelector("#valorB").value;

		if (valorA.length > 0 && valorB.length > 0) {

			alert(parseInt(valorA)+ parseInt(valorB) + ", " + "vlw ai o fdp" );

		}else{
			alert("escreve um número ai o crlh")
		}

		

	});

