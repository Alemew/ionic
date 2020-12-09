import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CrearPartidoService {

  constructor() { 
    
  }
}

function generadorGoles() : number{

  let goles = Math.round(Math.random()*9);
  return goles;
}

function generadorMinutos(goles) {
  let resultado = [];
  for (let index = 0; index < goles; index++) {
    let minuto = Math.round(Math.random()*90);
    resultado.push(minuto);
  }
  //prueba
  resultado = ordenarMinutos(resultado);
  return resultado;
}

function ordenarMinutos(resultado) {
  for (let index = 0; index < resultado.length; index++) {
    if (resultado[index]>resultado[index+1]) {
      let cambio = resultado[index+1];
      resultado[index+1] = resultado[index];
      resultado[index] = cambio;
      index-=2;
    }
    return resultado;
  }
}