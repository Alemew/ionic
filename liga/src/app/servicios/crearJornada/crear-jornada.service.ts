import { Injectable } from '@angular/core';
import { CrearPartidoService } from '../crearPartido/crear-partido.service';

@Injectable({
  providedIn: 'root'
})
export class CrearJornadaService {

  constructor() { 
    let jornada= new Map();
    jornada = generadorJornadas(jornada);
  }
}

function generadorJornadas(jornada:Map<String,Array<string>>){
  let equipos: string[] = ["ale","carlos","marcos","jareño","juanma","felix","alonso","adil","fernando","juancarlos"];
  let inverso = equipos.reverse();
  jornada.set("jugada",equipos)
  for (let i = 1; i < 17; i++) {
    if (i>8) {
      equipos = inverso;
    };
    if (i%2!=0) {
      equipos =cambioImparPar(equipos);
      if (i>9) {
        equipos = cambioImpar(equipos);
        jornada.set("noJugada",equipos)
        equipos = cambioImpar(equipos);
      }else{
        jornada.set("noJugada",equipos)
      }
    }else{
      equipos = cambioParImpar(equipos);
      if (i>9) {
        equipos = cambioPar(equipos);
        jornada.set("noJugada",equipos)
        equipos = cambioPar(equipos);
      }else{
        jornada.set("noJugada",equipos)
      }
    } 
  }
  return jornada;
}

function cambioImparPar(equipo:string[]){
  let j = 9;
  let cambio = equipo[j-1];
  equipo [j-1] = equipo[j-8];
  while (j>0) {
    let variableUno = equipo[j];
    equipo[j] = cambio;
    cambio = equipo[j-3];
    equipo[j-3] = variableUno;
    j-=2;
  }
  return equipo;
}

function cambioParImpar(equipo:string[]){
  let j = 2;
  let cambio = equipo[j-1];
  equipo [j-1] = equipo[j+7];
  while (j<10) {
    let variableUno = equipo[j];
    equipo[j] = cambio;
    cambio = equipo[j+1];
    equipo[j+1] = variableUno;
    j+=2;
  }
  return equipo;
}

function cambioImpar(equipo:string[]) {
  let cambio = equipo[0];
  equipo[0] = equipo[1];
  equipo[1] = cambio;
  return equipo;
}

function cambioPar(equipo:string[]) {
  let cambio = equipo[8];
  equipo[8] = equipo[9];
  equipo[9] = cambio;
  return equipo;
}
