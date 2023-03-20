import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { throwError } from 'rxjs';
import { URL_SERVICIOS } from '../../config/config';
import swal from 'sweetalert2';
import { Usuario } from 'app/models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {

  // -------------------------------------------------------------------------
  // Propiedades
  // -------------------------------------------------------------------------

  /**
   * Headers para las peticiones http
   */
  headers: HttpHeaders;

  /**
   * Token del proyecto
   */
  token: string;

  /**
   * Usuario loggeado
   */
  usuario: Usuario;

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
  // Métodos Carnavalito
  // -------------------------------------------------------------------------

  /**
   * Consulta todos los proyectos registrados en el sistema
   */
  consultarProyectosCarnavalito() {
    this.cargarStorage();
    const url = URL_SERVICIOS + '/proyectocarnavalito/query';
    const params = 'authorization=' + this.token;

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
   * Consulta todos los proyectos registrados en el sistema
   */
  consultarTodosProyectosCarnavalito() {
    this.cargarStorage();
    const url = URL_SERVICIOS + '/proyectocarnavalito/queryall';
    const params = 'authorization=' + this.token;

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
   * Registra un proyecto a la base de datos
   */
  registrarProyectoCarnavalito(pProyecto: any) {
    this.cargarStorage();
    const url = URL_SERVICIOS + '/proyectocarnavalito/new';
    const params = 'authorization=' + this.token + '&json=' + JSON.stringify(pProyecto);

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
   * Edita un proyecto en la base de datos
   * @param pProyecto proyecto a editar
   */
  editarProyectoCarnavalito(pProyecto: any) {
    this.cargarStorage();
    const url = URL_SERVICIOS + '/proyectocarnavalito/edit';
    const params = 'authorization=' + this.token + '&json=' + JSON.stringify(pProyecto);

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
   * Edita un proyecto en la base de datos
   * @param pProyecto proyecto a editar
   */
  eliminarProyectoCarnavalito(pIdProyecto: any) {
    this.cargarStorage();
    const url = URL_SERVICIOS + '/proyectocarnavalito/remove';
    const params = 'authorization=' + this.token + '&_id=' + pIdProyecto;

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

  // -------------------------------------------------------------------------
  // Métodos Carnaval de la alegria
  // -------------------------------------------------------------------------


  /**
   * Consulta todos los proyectos registrados en el sistema
   */
  consultarTodosProyectosAlegria() {
    this.cargarStorage();
    const url = URL_SERVICIOS + '/proyectoalegria/queryall';
    const params = 'authorization=' + this.token;

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
   * Consulta todos los proyectos registrados en el sistema
   */
  consultarProyectosAlegria() {
    this.cargarStorage();
    const url = URL_SERVICIOS + '/proyectoalegria/query';
    const params = 'authorization=' + this.token;

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
   * Registra un proyecto a la base de datos
   */
  registrarProyectoAlegria(pProyecto: any) {
    this.cargarStorage();
    const url = URL_SERVICIOS + '/proyectoalegria/new';
    const params = 'authorization=' + this.token + '&json=' + JSON.stringify(pProyecto);

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
   * Edita un proyecto en la base de datos
   * @param pProyecto proyecto a editar
   */
  editarProyectoAlegria(pProyecto: any) {
    this.cargarStorage();
    const url = URL_SERVICIOS + '/proyectoalegria/edit';
    const params = 'authorization=' + this.token + '&json=' + JSON.stringify(pProyecto);

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
   * Edita un proyecto en la base de datos
   * @param pProyecto proyecto a editar
   */
  eliminarProyectoAlegria(pIdProyecto: any) {
    this.cargarStorage();
    const url = URL_SERVICIOS + '/proyectoalegria/remove';
    const params = 'authorization=' + this.token + '&_id=' + pIdProyecto;

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
      this.usuario = JSON.parse(localStorage.getItem('usuario'));
    } else {
      this.token = '';
      this.usuario = null;
    }
  }


}
