"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
$(document).ready(function () {
    $('#cep').mask('00000-000', { reverse: true });
    const cep = document.getElementById("cep").value;
    console.log("cep" + cep);
});
const seach_Cep = () => __awaiter(void 0, void 0, void 0, function* () {
    const cep = document.getElementById("cep").value;
    const url = `http://viacep.com.br/ws/${cep}/json/`;
    const dados = yield fetch(url);
    const address = yield dados.json();
    let result = document.getElementById("address").innerHTML = "Neighborhood: " + address.bairro + "\n"
        + "State: " + address.uf + "\n"
        + "City: " + address.localidade + "\n"
        + "Street: " + address.logradouro;
    return result;
});
const clearInput = () => {
    document.getElementById("address").innerHTML = "";
};
const erro_cep = () => {
    let cep = document.getElementById("cep").value;
    let cont = 9;
    let resto = cont - cep.length;
    if (cep.length < 9 && cep.length > 0) {
        document.getElementById("address").innerHTML = 'Number incomplete zip code, enter another ' + " " + resto + ' Number';
        console.log(resto);
    }
};
/*buscar endereço*/
document.getElementById('cep');
addEventListener('input', seach_Cep);
//limpar campos
document.getElementById('cep');
addEventListener('input', clearInput);
/*buscar endereço*/
document.getElementById('cep');
addEventListener('input', erro_cep);
