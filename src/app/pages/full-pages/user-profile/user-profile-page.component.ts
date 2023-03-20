import { Component, OnInit } from '@angular/core';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { URL_SERVICIOS } from 'app/config/config';
import { UsuarioService, ImagenesService } from 'app/servicios/servicios.index';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import swal from 'sweetalert2';
import { Usuario } from 'app/models/usuario.model';


@Component({
    selector: 'app-user-profile-page',
    templateUrl: './user-profile-page.component.html',
    styleUrls: ['./user-profile-page.component.scss'],
    providers: [{
        provide: STEPPER_GLOBAL_OPTIONS, useValue: { showError: true }
    }]
})

export class UserProfilePageComponent implements OnInit {

    /**
     * Url
     */
    url = URL_SERVICIOS;

    /**
     * Primer formulario
     */
    primerFormulario: FormGroup;

    /**
     * Segundo formulario
     */
    segundoFormulario: FormGroup;

    /**
     * Bandera para cambiar contraseña
     */
    cambiarContrasenia = false;

    // ----------------------------------------------------------------------------------------------------------
    // Propiedades
    // ----------------------------------------------------------------------------------------------------------

    /**
     * Imagen del personaje que selecciona el usuario
     */
    imgPersonaje = {
        '_id': '',
        'nombre': '',
        'genero': ''
    };

    /**
     * Arreglo de personajes
     */
    personajes: any[] = [];

    /**
     * Usuario loggeado
     */
    usuarioLog: any;

    // ----------------------------------------------------------------------------------------------------------
    // Constructor
    // ----------------------------------------------------------------------------------------------------------

    constructor(
        private _usuarioService: UsuarioService,
        private _imgService: ImagenesService,
        private router: Router
    ) {
    }


    ngOnInit() {
        this.usuarioLog = JSON.parse(localStorage.getItem('usuario'));
        this.inicializaFormulario();
        this.imgPersonaje = this.usuarioLog.img;
        this.consultarImagenes(this.imgPersonaje.genero);
    }

    // ----------------------------------------------------------------------------------------------------------
    // Métodos
    // ----------------------------------------------------------------------------------------------------------

    /**
     * Valida los formularios 1 o 2
     * @param idx numero de caso
     */
    validar(idx) {

        switch (idx) {
            case 1:
                if (!this.primerFormulario.valid) {
                    swal('ERROR', 'Debe completar los campos obligatorios', 'error');
                }
                break;
            case 2:
                if (!this.segundoFormulario.valid) {
                    swal('ERROR', 'Debe completar los campos obligatorios', 'error');
                }
                if (this.segundoFormulario.value.password1 !== this.segundoFormulario.value.password2) {
                    swal('ERROR', 'Las contraseñas no coinciden', 'error');
                }
                break;
        }

    }

    /**
     * Consulta los iconos de los personajes segun el genero
     * @param genero Genero a consultar
     */
    consultarImagenes(genero = 'masculino') {
        this._imgService.consultarImgGenero(genero).subscribe(
            (resp: any) => {
                if (resp.status) {
                    this.personajes = resp.registros;
                } else {
                    swal('ERROR', 'Ocurrio un error consultando personajes. Intente recargar la página.', 'error');
                }
                // this.imgPersonaje = this.personajes[0];
            }
        );
    }

    /**
     * Asigna un valor a imagen
     * @param idImagen identificador de la imagen
     */
    seleccionarPersonaje(idImagen) {
        this.imgPersonaje = idImagen;
    }

    /**
     * Método que inicializa el formulario de registro
     */
    inicializaFormulario() {

        this.primerFormulario = new FormGroup({
            nombres: new FormControl(this.usuarioLog.nombres, Validators.required),
            apellidos: new FormControl(this.usuarioLog.apellidos, Validators.required),
            identificacion: new FormControl(this.usuarioLog.identificacion, Validators.required),
            telefono: new FormControl(this.usuarioLog.telefono, Validators.required),
            direccion: new FormControl(this.usuarioLog.direccion, Validators.required)
        });

        this.segundoFormulario = new FormGroup({
            activo: new FormControl(true),
            entidad: new FormControl(this.usuarioLog.entidad, Validators.required),
            // role: new FormControl(null, Validators.required),
            email: new FormControl(this.usuarioLog.email, [Validators.required, Validators.email]),
            passwordActual: new FormControl(null),
            password1: new FormControl(null),
            password2: new FormControl(null)
        });
    }

    /**
     * Registra un usuario en el sistema
     */
    registrarUsuario() {
        // this.validar(2);

        if (
            this.cambiarContrasenia === true &&
            (
                (this.segundoFormulario.value.passwordActual === '' ||
                    this.segundoFormulario.value.password1 === '' ||
                    this.segundoFormulario.value.password2 === '') ||

                (this.segundoFormulario.value.passwordActual === null ||
                    this.segundoFormulario.value.password1 === null ||
                    this.segundoFormulario.value.password2 === null) ||

                (this.segundoFormulario.value.passwordActual === undefined ||
                    this.segundoFormulario.value.password1 === undefined ||
                    this.segundoFormulario.value.password2 === undefined)
            )
        ) {
            swal(
                'ERROR',
                'Si selecciona la opción de cambiar contraseña, ' +
                'debe completar todos los campos "Contraseña actual, Nueva contraseña y Confirmar contraseña".',
                'error'
            );
            return;
        }

        if (!this.segundoFormulario.valid) {
            swal('ERROR', 'Debe completar los campos obligatorios', 'error');
            return;
        }
        if (this.segundoFormulario.value.password1 !== this.segundoFormulario.value.password2) {
            swal('ERROR', 'Las contraseñas no coinciden', 'error');
            return;
        }

        const usuarioRegistrar = new Usuario(
            this.primerFormulario.value.identificacion,
            this.primerFormulario.value.nombres,
            this.primerFormulario.value.apellidos,

            this.segundoFormulario.value.email,

            this.primerFormulario.value.telefono,
            this.primerFormulario.value.direccion,

            this.segundoFormulario.value.activo,
            this.segundoFormulario.value.entidad,
            this.segundoFormulario.value.password1,
            this.segundoFormulario.value.passwordActual,
            this.imgPersonaje._id
            // this.segundoFormulario.value.role,
        );

        // console.log('ENTRO');

        this._usuarioService
            .editarMiUsuario(usuarioRegistrar)
            .subscribe(
                (resp: any) => {
                    if (resp.status === true) {
                        swal('Éxito', resp.msg, 'success');
                        this.inicializaFormulario();
                        this.cambiarContrasenia = false;
                    } else {
                        swal('Error', 'Se produjo un error al intentar editar su perfil.', 'error');
                    }
                },
                (error: any) => {
                    swal('Error', 'Se produjo un error al intentar editar su perfil.', 'error');
                    console.log(error);
                }
            );
    }

    /**
     * Cancela el registro de usuarios
     */
    cancelar() {
        this.router.navigate(['/pages/login']);
    }

}