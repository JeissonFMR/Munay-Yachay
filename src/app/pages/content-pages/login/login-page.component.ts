import { Component, ViewChild, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UsuarioService } from '../../../servicios/servicios.index';
import swal from 'sweetalert2';

@Component({
    selector: 'app-login-page',
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.scss']
})

export class LoginPageComponent implements OnInit {

    // -------------------------------------------------------------------------
    // Propiedades
    // -------------------------------------------------------------------------

    /**
     * Bandera cargando
     */
    cargando = false;

    // -------------------------------------------------------------------------
    // Constructor
    // -------------------------------------------------------------------------

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private _usuarioService: UsuarioService
    ) {
    }

    ngOnInit() {
        this.verificarLogin();
    }

    // -------------------------------------------------------------------------
    // Métodos
    // -------------------------------------------------------------------------

    /**
     * Verifica si el token del localstorage es valido
     */
    verificarLogin() {
        if (localStorage.getItem('token')) {
            this._usuarioService.verificarLogin().subscribe(
                (resp: any) => {
                    if (resp.status === true) {
                        this.router.navigate(['/dashboard/dashboard1']);
                    }
                }
            );
        }
    }

    /**
     * Ingresa al sistema
     * @param pFormulario Método submit del Formulario
     */
    ingresar(pFormulario: NgForm) {
        if (pFormulario.invalid) {
            return;
        }
        const email = pFormulario.value.inputEmail;
        const password = pFormulario.value.inputPass;

        this.cargando = true;

        this._usuarioService.login(email, password).subscribe(
            (resp: any) => {
                if (resp.status === true) {
                    this.cargando = false;
                    swal('Petición éxitosa', resp.msg, 'success');
                    this.router.navigate(['/dashboard/dashboard1']);
                } else {
                    this.cargando = false;
                    swal('Petición fallida', resp.msg, 'warning');
                }
            },
            (error) => {
                this.cargando = false;
                console.log('Error - Login');
                console.log(error);
                swal(
                    'Petición fallida',
                    'Ocurrió un error ingresando al sistema. Por favor intente nuevamente',
                    'warning'
                );
            }
        );
    }

    // On Forgot password link click
    onForgotPassword() {
        this.router.navigate(['forgotpassword'], { relativeTo: this.route.parent });
    }
    // On registration link click
    onRegister() {
        this.router.navigate(['register'], { relativeTo: this.route.parent });
    }
}
