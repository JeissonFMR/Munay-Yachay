import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { throwError } from 'rxjs';
import { URL_SERVICIOS } from '../../config/config';
import swal from 'sweetalert2';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ImagenesService {
  // -------------------------------------------------------------------------
  // Propiedades
  // -------------------------------------------------------------------------

  /**
   * Headers para las peticiones http
   */
  headers: HttpHeaders;

  /**
   * Token del usuario
   */
  token: string;

  // -------------------------------------------------------------------------
  // Constructor
  // -------------------------------------------------------------------------


  constructor(
    public _httpClient: HttpClient
  ) {
    this.headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
  }

  // -------------------------------------------------------------------------
  // Métodos
  // -------------------------------------------------------------------------

  /**
   * Consulta todas las imagenes de personajes registradas en el sistema
   * @param pGenero Genero del personaje (masculino o femenino)
   * @param pNombre Nombre de la imagen del personaje
   */
  consultarImgPersonaje(pGenero, pNombre) {
    const url = URL_SERVICIOS + '/img/' + pGenero + '/' + pNombre;
    // tslint:disable-next-line:max-line-length
    const params = 'authorization=' + this.token;

    return this._httpClient.get(url)
      .pipe(
        map((resp: any) => {
          return resp;
        })
      );
  }


  /**
   * Consulta todas las imagenes de personajes registradas en el sistema
   */
  consultarImgGenero(pGenero) {
    const url = URL_SERVICIOS + '/img/query';
    const params = 'genero=' + pGenero;

    return this._httpClient.post(url, params, { headers: this.headers })
      .pipe(
        map((resp: any) => {
          return resp;
        })
      );
  }

  getTotken() {

    if (localStorage.getItem('token')) {
      this.token = localStorage.getItem('token');
    } else {
      this.token = '';
    }
  }

}
