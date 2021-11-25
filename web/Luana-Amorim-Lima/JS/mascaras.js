function abre(x)
{
	cor = (x ? "Preta" : "Branca");
	document.getElementById("texto").innerHTML = "Mascara " + cor;
	document.getElementById("divMas").style.display = "block";
	document.getElementById("imgMas").src = "./imagens/Mascara" + cor + "Lado150.png";
}

function fechar()
{
	document.getElementById("divMas").style.display = "none";
}