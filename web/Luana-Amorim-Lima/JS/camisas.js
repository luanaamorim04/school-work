const arr = ["mercurio", "venus", "terra", "marte", "jupiter", "saturno", "urano", "netuno", "plutao"];

function lisa()
{
	document.getElementById("texto").innerHTML = "Camisa lisa"
	document.getElementById("img-camisa").src = "./Camisas/camiseta-lisa.jpeg";	
}
function imagem(planeta)
{
	document.getElementById("texto").innerHTML = "Camisa " + arr[planeta];
	document.getElementById("img-camisa").src = "./Camisas/camiseta-" + arr[planeta] + ".png";
}