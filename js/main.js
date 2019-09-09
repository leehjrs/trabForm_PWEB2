const nome = document.querySelector("#nome");
const endereco = document.querySelector("#end");
const cidade = document.querySelector("#city");
const estado = document.querySelector("#uf");
const telefone = document.querySelector("#tel");
const celular = document.querySelector("#cel");
const email = document.querySelector("#email");
const profissao = document.querySelector("#prof");
const rg = document.querySelector("#rg");
const cnh = document.querySelector("#cnh");
const cpf = document.querySelector("#cpf");
const titulo = document.querySelector("#titulo");
const passaporte = document.querySelector("#pass");


MaskJS(nome).mascararPalavras();

MaskJS(endereco).mascararAlfanumerico();

MaskJS(cidade).mascararLetras();

MaskJS(estado).mascararPadrao("AA");

MaskJS(telefone).mascararPadrao("(99) 9999-9999");

MaskJS(celular).mascararPadrao("(99) 9-9999-9999");

MaskJS(email).mascararEmail();


MaskJS(profissao).mascararLetras();

MaskJS(rg).mascararPadrao("9999999999-9");

MaskJS(cnh).mascararPadrao("99999999999");

MaskJS(cpf).mascararPadrao("999.999.999-99");

MaskJS(titulo).mascararPadrao("9999 9999 9999");

MaskJS(passaporte).mascararPadrao("AA999999");


