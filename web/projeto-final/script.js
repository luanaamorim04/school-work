const arr=["nomeD", "senhaD", "emailD"];
const materias = ["MAT", "BIO", "FDI", "ACED", "QUIM", "FIS", "HIST", "PORT", "ING", "FILO", "SOCIO", "BD"];
const alunos = ["Luana", "João", "Rafael"];

function change(x){
	document.getElementById("nomeD").style.display = "none";
	document.getElementById("senhaD").style.display = "none";
	document.getElementById("emailD").style.display = "none";
	document.getElementById(arr[x]).style.display = "block";
}

function confirmarSenha(){
	var a = document.getElementById("senha1").value;
	var b = document.getElementById("senha2").value;
	if (a!=b)
	{
		alert("Certifique se as senhas estão iguais");
	}
	else
	{
		alert("Senha atualizada com sucesso!");
		window.location.href = "./index.html";
	}
}	

function confirmarEmail(){
	var a = document.getElementById("email1").value;
	var b = document.getElementById("email2").value;
	if (a!=b)
	{
		alert("Certifique se os emails estão iguais");
	}
	else
	{
		alert("email atualizado com sucesso!");
		window.location.href = "./index.html";
	}
}

function criaMat(classe, id, valor, r)
{
    let resp = document.createElement('td');
    let a = document.createElement('input');
    a.classList.add(classe);
    a.id = id;
    a.value = valor;
    resp.append(a);
    a.readOnly = r;
    return resp;
}




