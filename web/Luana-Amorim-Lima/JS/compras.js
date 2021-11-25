function continua() 
{
	location.replace("./Dados.html")
}

function ehMascara()
{
	var a = document.getElementById("camisa").value;
	return (a=="Mas. Lisa" || a=="Mas. Cometa");
}

function entrada(id, val)
{
	document.getElementById(id).disabled = val;
}

function limpa(id)
{
	document.getElementById(id).value = "---";
}

function valor(id)
{
	return document.getElementById(id).value; 
}

function prodSelect()
{
	entrada("cores", 0);
	entrada("tam", 0);
	if (ehMascara()&1)
	{
		limpa("cores");	
		limpa("modelo");
		limpa("tam");	
		entrada("azul", 1);
		entrada("lilas", 1);
		entrada("modelo", 1);
		entrada("GG", 1);
	}
	else
	{
		entrada("GG", 0);
		entrada("modelo", 0);
		entrada("azul", 0);
		entrada("lilas", 0);
	}
}

function estaPronto()
{
	var erro = 0;
	erro |= (valor("camisa") == "---");
	erro |= (valor("cores") == "---");
	erro |= (valor("tam") == "---");
	erro |= (valor("modelo") == "---" && !ehMascara());

	return !erro;
}

function desc()
{
	if (!estaPronto()) 
	{
		document.getElementById("descr").value = "";
		document.getElementById("price").value = "";
		return;
	}
	var resp;
	if (ehMascara())
	{
		resp = valor("camisa") + " - " + valor("cores") + " - " + valor("tam");
		document.getElementById("price").value = 35;
	}
	else
	{
		resp = "Cam. " + valor("camisa") + " - " + valor("cores") + " - " + valor("tam") + " - " + valor("modelo");
		document.getElementById("price").value = 70;
	}

	document.getElementById("descr").value = resp; 
}

function limparCampos()
{
	limpa("cores");
	limpa("modelo");
	limpa("tam");
	limpa("camisa");
	document.getElementById("descr").value = "";
	document.getElementById("price").value = "";
	entrada("cores", 1);
	entrada("modelo", 1);
	entrada("tam", 1);
}

function limparTudo()
{
	limparCampos();
	document.getElementById("lista").value = "";
	document.getElementById("tot").value = "";
}

function comprar()
{
	if (!estaPronto()) alert("Definição do produto não está completa!");
	else 
	{
		var r = parseInt(document.getElementById("tot").value); 
		document.getElementById("tot").value = r + parseInt(document.getElementById("price").value);
		document.getElementById("lista").value += document.getElementById("descr").value + '\n';
		limparCampos();
	}
}


