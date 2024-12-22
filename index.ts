 
$(document).ready(function () {
   $('#cep').mask('00000-000', { reverse: true });
   const cep = (<HTMLInputElement>document.getElementById("cep")).value
   console.log("cep"+cep)
 })
 
const seach_Cep = async () =>{
    const cep = (<HTMLInputElement>document.getElementById("cep")).value
    const url = `http://viacep.com.br/ws/${cep}/json/`;
    const dados = await fetch(url);
    const address = await dados.json();
    
    let result = (<HTMLInputElement>document.getElementById("address")).innerHTML= "Neighborhood: " + address.bairro +"\n" 
    +"State: " + address.uf  +"\n"
    + "City: " + address.localidade +"\n"
    + "Street: " + address.logradouro

    return result 
 }

const clearInput =()=>{
    (<HTMLInputElement>document.getElementById("address")).innerHTML=""
}
const erro_cep =() =>{
  let cep = (<HTMLInputElement>document.getElementById("cep")).value
  let cont = 9
  let resto = cont-cep.length
  if(cep.length < 9 && cep.length > 0){
    (<HTMLInputElement>document.getElementById("address")).innerHTML='Number incomplete zip code, enter another ' + " " + resto + ' Number'
  console.log(resto)
  }
} 

 /*buscar endereço*/
document.getElementById('cep')
addEventListener('input', seach_Cep );

//limpar campos
document.getElementById('cep')
addEventListener('input', clearInput );

/*buscar endereço*/
document.getElementById('cep')
addEventListener('input', erro_cep );
