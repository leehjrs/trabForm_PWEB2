const nome = document.querySelector("#nome");
const endereco = document.querySelector("#end");
const cidade = document.querySelector("#city");
const estado = document.querySelector("#uf");
const telefone = document.querySelector("#tel");
const celular = document.querySelector("#cel");
const emailErro = document.querySelector("#emailErro");
const email = document.querySelector("#email");
const profissao = document.querySelector("#prof");
const erroMotivo = document.querySelector("#motivoErro");
const motivoSolicitacao = document.querySelector(".motivoSolicitacao");
const erroTel = document.querySelector("#telErro");
const rg = document.querySelector("#rg");
const cnh = document.querySelector("#cnh");
const cpf = document.querySelector("#cpf");
const titulo = document.querySelector("#titulo");
const passaporte = document.querySelector("#pass");
let erro = false;

MaskJS(nome).mascararPalavras();

MaskJS(endereco).mascararAlfanumerico();

MaskJS(cidade).mascararLetras();

MaskJS(estado).mascararPadrao("AA");

MaskJS(telefone).mascararPadrao("(99) 9999-9999");

MaskJS(celular).mascararPadrao("(99) 9-9999-9999");

MaskJS(rg).mascararPadrao("9999999999-9");

MaskJS(cnh).mascararPadrao("9999999999999");

MaskJS(cpf).mascararPadrao("999.999.999-99");

MaskJS(titulo).mascararPadrao("9999 9999 9999");

MaskJS(passaporte).mascararPadrao("AA999999");

MaskJS(profissao).mascararLetras();


const validarEmail = valor => {
    let padrao = /[\w]{1,}[@]{1}[\w]{1}[.]{1}[\w]{1,}/gi;
    if(padrao.test(valor)){
       emailErro.innerText = " ";
    } else {
       emailErro.innerText = "Email invalido.";
       erro = true;
    }
}

const validarMotivo = valor =>{
	const padraoMotivo = ["Trabalho", "Turismo", "Estudo", "SairdoPais"];
	if (padraoMotivo.indexOf(valor)) {
		erroMotivo.innerText = " ";
	}else {
		erroMotivo.innerText = "Motivo invalido.";
		erro = true;
	}
}

const validarFormulario = function(){
	erro = false;
	validarEmail(email.value);
	validarMotivo(motivoSolicitacao.value);
}

form.onsubmit = function(e){
	validarFormulario();
	if(erro) {
		e.preventDefault();
	}
}
