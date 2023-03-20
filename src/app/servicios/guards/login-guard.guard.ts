import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UsuarioService } from '../usuario/usuario.service';
import swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  respuesta = false;
  constructor(public _usuarioService: UsuarioService, public router: Router) { }

  canActivate(): Promise<boolean> | boolean {
    return this.verificaExpiracionToken();
  }

  verificaExpiracionToken(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this._usuarioService.verificarLogin().subscribe(
        (resp) => {
          if (resp.status !== true) {
            swal('ACCESO DENEGADO', 'Por favor inicie sesión', 'error');
            this._usuarioService.logout();
            this.router.navigate(['/pages/login']);
            resolve(false);
          } else {
            // //console.log('entro al resolve');
            resolve(true);
          }
        },
        () => {
          // //console.log('entro al reject');
          reject(false);
        }
      );
    });
  }
}
