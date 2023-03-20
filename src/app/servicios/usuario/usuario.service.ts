import { Injectable } from '@angular/core';
import { map, catchError } from 'rxjs/operators';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Usuario } from '../../models/usuario.model';
import { throwError } from 'rxjs';
import { URL_SERVICIOS } from '../../config/config';
import swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  // -------------------------------------------------------------------------
  // Propiedades
  // -------------------------------------------------------------------------

  /**
   * Headers para las peticiones http
   */
  headers: HttpHeaders;

  /**
   * Usuario loggeado
   */
  usuario: Usuario;

  /**
   * Token del usuario
   */
  token: string;

  menu: any[] = [];


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
   * Consulta todos los usuarios registrados en el sistema
   */
  consultarUsuarios() {
    const url = URL_SERVICIOS + '/usuario/query';
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
   * Registra un usuario a la base de datos
   */
  registrarUsuario(pUsuario: Usuario) {
    const url = URL_SERVICIOS + '/usuario/register';
    const params = 'json=' + JSON.stringify(pUsuario);

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
   * Registra un usuario a la base de datos
   */
  crearUsuario(pUsuario: Usuario) {
    const url = URL_SERVICIOS + '/usuario/new';
    const params = 'json=' + JSON.stringify(pUsuario);

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
   * Edita un usuario en la base de datos
   * @param pUsuario usuario a editar
   */
  editarUsuario(pUsuario: Usuario) {
    const url = URL_SERVICIOS + '/usuario/edit';
    const params = 'authorization=' + this.token + '&json=' + JSON.stringify(pUsuario);

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
   * Edita un usuario en la base de datos
   * @param pUsuario usuario a editar
   */
  editarMiUsuario(pUsuario: Usuario) {
    this.cargarStorage();
    const url = URL_SERVICIOS + '/usuario/editmy';
    const params = 'authorization=' + this.token + '&json=' + JSON.stringify(pUsuario);

    return this._httpClient.post(url, params, { headers: this.headers })
      .pipe(
        map((resp: any) => {
          if (resp.status === true) {
            this.guardarStorage(this.token, resp.usuario, resp.menu);
          }
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
   * Edita un usuario en la base de datos
   * @param pIdUsuario  usuario a editar
   */
  eliminarUsuario(pIdUsuario: any) {
    this.cargarStorage();
    const url = URL_SERVICIOS + '/usuario/remove';
    const params = 'authorization=' + this.token + '&_id=' + pIdUsuario;

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
   * Realiza el login al sistema admin pro
   * @param pUsuario Usuario a ingresar
   * @param pRecordar Variable para recordar en el navegador
   */
  login(pEmail: string, pPassword: string) {

    const url = URL_SERVICIOS + '/login';
    const params = 'email=' + pEmail + '&password=' + pPassword;

    return this._httpClient.post(url, params, { headers: this.headers })
      .pipe(
        map((resp: any) => {
          if (resp.status === true) {
            this.guardarStorage(resp.token, resp.usuario, resp.menu);
          }
          return resp;
        })
      ).pipe(
        catchError(err => {
          swal('ERROR', err.error.msg, 'error');
          return throwError(err);
        })
      );
  }

  /**
   * Guarda en el localStorage la información necesaria para el funcionamiento de la aplicación
   * @param pId id del usuario
   * @param pToken token del usuario
   * @param pUsuario usuario loggeado
   */
  guardarStorage(pToken: string, pUsuario: Usuario, pMenu: any) {
    localStorage.setItem('token', pToken);
    localStorage.setItem('usuario', JSON.stringify(pUsuario));
    localStorage.setItem('menu', JSON.stringify(pMenu));

    this.usuario = pUsuario;
    this.token = pToken;
    this.menu = pMenu;
  }

  /**
   * Verifica si el usuario se ha logeado en la aplicación
   */
  verificarLogin() {
    this.cargarStorage();

    const url = URL_SERVICIOS + '/usuario/token';
    const params = 'authorization=' + this.token;

    return this._httpClient.post(url, params, { headers: this.headers })
      .pipe(
        map((resp: any) => {
          return resp;
        })
      ).pipe(
        catchError(
          (err: any) => {
            this.logout();
            swal('ERROR', 'Por favor inicie sesión nuevamente', 'error');
            return throwError(err);
          }
        )
      );
  }

  /**
   * Cierra sesión en el sistema
   */
  logout() {
    this.limpiarStorage();
  }

  /**
   * Limpia el localstorage
   */
  limpiarStorage() {
    localStorage.clear();
  }

  /**
   * Carga la información del localStorage
   */
  cargarStorage() {
    if (localStorage.getItem('token')) {
      this.token = localStorage.getItem('token');
      this.usuario = JSON.parse(localStorage.getItem('usuario'));
      this.menu = JSON.parse(localStorage.getItem('menu'));
    } else {
      this.token = '';
      this.usuario = null;
      this.menu = [];
    }
  }

  getMenu() {
    this.cargarStorage();
    return this.menu;
  }

}
