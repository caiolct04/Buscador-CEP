import './style.css'

const app = document.querySelector<HTMLDivElement>('#app')!

interface CepData {
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
  ibge: string;
  gia: string;
  ddd: string;
  siafi: string;
}

let cep : string | null = ""
while(cep?.length!=8){
  cep = prompt("Digite o CEP para verificar o endereço (8 dígitos):")
}

makeRequests(cep)

async function makeRequests(cep: string | null){
  
  const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
  const cepDataBusca: CepData = await response.json()
  
  const {logradouro, bairro, localidade, uf, ddd} = cepDataBusca
  
  app.innerHTML = `
  <h1>Endereço do CEP ${cep}: </h1>
  <h2>${logradouro} </h2>
  <h3>${bairro}</h3>
  <h4>${localidade} - ${uf}</h4>  
  <h5>DDD: ${ddd}</h5> 
  `
  console.log(cepDataBusca)
}
