/*
$(document).ready(function(){

			$("#logotipo").on("mouseover",function(){

				//console.log("passou o mouse no logotipo!");
				$("#banner h1").addClass("efeito");

			}).on("mouseout",function(){

				$("#banner h1").removeClass("efeito");

			});

			$("input-search").on("focus", function(){

				$("li.search").addClass("ativo");

			}).on("blur", function(){

				$("li.search").removeClass("ativo");

			});
});
	final do comentario Testes Java */
		
		$(document).ready(function(){

			$(".thumbnails").owlCarousel({
		
						items: 4
			});

		});