import { Injectable } from '@angular/core';
import { map, catchError } from 'rxjs/operators';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { throwError } from 'rxjs';
import { URL_SERVICIOS } from '../../config/config';
import swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  // -------------------------------------------------------------------------
  // Propiedades
  // -------------------------------------------------------------------------

  /**
   * Headers para las peticiones http
   */
  headers: HttpHeaders;

  /**
   * Token del role
   */
  token: string;


  // -------------------------------------------------------------------------
  // Constructor
  // -------------------------------------------------------------------------


  constructor(
    public _httpClient: HttpClient
  ) {
    this.headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    this.cargarStorage();
  }

  // -------------------------------------------------------------------------
  // Métodos
  // -------------------------------------------------------------------------

  /**
   * Consulta todos los roles registrados en el sistema
   */
  consultarRoles() {
    const url = URL_SERVICIOS + '/role/query';
    // tslint:disable-next-line:max-line-length
    const params = 'authorization=' + this.token;

    return this._httpClient.post(url, params, { headers: this.headers })
      .pipe(
        map((resp: any) => {
          return resp;
        })
      );
  }

  /**
   * Registra un role a la base de datos
   */
  crearRole(pRole) {
    const url = URL_SERVICIOS + '/role/new';
    const params = 'json=' + JSON.stringify(pRole);

    return this._httpClient.post(url, params, { headers: this.headers })
      .pipe(
        map((resp: any) => {
          return resp;
        })
      ).pipe(
        catchError(err => {
          swal('ERROR', err.error.mensaje, 'error');
          return throwError(err);
        })
      );
  }

  /**
   * Edita un role en la base de datos
   * @param pRole role a editar
   */
  editarRole(pRole) {
    const url = URL_SERVICIOS + '/role/edit';
    const params = 'json=' + JSON.stringify(pRole);

    return this._httpClient.post(url, params, { headers: this.headers })
      .pipe(
        map((resp: any) => {
          return resp;
        })
      ).pipe(
        catchError(err => {
          swal('ERROR', err.error.mensaje, 'error');
          return throwError(err);
        })
      );
  }



  /**
   * Carga la información del localStorage
   */
  cargarStorage() {
    if (localStorage.getItem('token')) {
      this.token = localStorage.getItem('token');
    } else {
      this.token = '';
    }
  }

}
