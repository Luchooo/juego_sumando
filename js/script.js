$(function()
{
	//Para generar la ecuación de la respuesta a buscar...
	var respuesta = 0;
	var numCifras = 2;
	 contCorrectas = 0;
	var tiempo=0;
	var contador=0;
	var ecu='';





	//Para generar la ecuación en función del resultado dado...
	var ecuacionAdivina = function()
	{
		var operacion = "";
		if(numCifras >= 2)
		{
			var signoOpera = ["+", "-"];
			do
			{
				operacion = "";
				for(var i = 1; i <= numCifras; i++)
				{
					operacion += Math.floor(Math.random() * 3) + 1;
					if(i < numCifras)
					{
						operacion += " " + signoOpera[Math.floor(Math.random() * 2)] + " ";

					}
				}
				var valor = eval(operacion);

				

				if(valor === respuesta)
				{



					break;
				}
			}while(1);
		}
		return operacion;


	};


	
	for(var i = 1; i <= 3; i++)
		{
			$("#respuesta_" + i).click(function(event) {
				var ind = Number(this.id.split("_")[1]);
				console.log("lol"+ind);
				validar(ind);
			

			});

		}


function validar (ind) {

clearInterval(tiempo);

					if(ind==respuesta){

						swal({   title: "!Bien Hecho!",    imageUrl: "img/bien.gif" });

							 contCorrectas++;
							 $("#titulo").html("Respuesta correctas ("+contCorrectas+")");

											nuevoJuego();
					}

					else{

						
						
						swal({

						title: ind+",no me digas :)",
						text: ecu + " = "+ respuesta,
						showCancelButton: false,
						confirmButtonColor: "#DD6B55",
						confirmButtonText: "Aceptar",
						closeOnConfirm:false,
						imageUrl : "img/reir.gif"
},
function  () {

	location.reload();


						})

					

					}
	
}






	//Para iniciar un nuevo Juego...
	var nuevoJuego = (function nuevoJuego()
	{
	contador = 15;
		tiempo = setInterval(function()
		{
			contador--;
			$("#tiempo").html("Tiempo: " + contador);
			if (contador==0)
			{


				validar(0);
	
		};

							}, 1000);

		


		if(contCorrectas % 2 === 0 && contCorrectas !== 0)
		{
			
			numCifras++;



		}
		respuesta = Math.floor(Math.random() * 3) + 1;
		ecu=ecuacionAdivina();
		$("#ecuacion").html(ecu + " = ?");
		return  nuevoJuego;
	})();
});