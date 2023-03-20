import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { UsuarioService, ImagenesService } from 'app/servicios/servicios.index';
import { Usuario } from 'app/models/usuario.model';
import { DOCUMENT } from '@angular/platform-browser';
import swal from 'sweetalert2';
import { Router } from '@angular/router';

import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { URL_SERVICIOS } from 'app/config/config';
@Component({
    selector: 'app-register-page',
    templateUrl: './register-page.component.html',
    styleUrls: ['./register-page.component.scss'],
    providers: [{
        provide: STEPPER_GLOBAL_OPTIONS, useValue: { showError: true }
    }]
})

export class RegisterPageComponent implements OnInit {


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


    // ----------------------------------------------------------------------------------------------------------
    // Constructor
    // ----------------------------------------------------------------------------------------------------------

    constructor(
        @Inject(DOCUMENT) private _document,
        private _usuarioService: UsuarioService,
        private _imgService: ImagenesService,
        private router: Router,
        private _formBuilder: FormBuilder
    ) {

    }


    ngOnInit() {
        this.inicializaFormulario();
        this.consultarImagenes();
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
                this.personajes = resp.registros;
                this.imgPersonaje = this.personajes[0];
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
            nombres: new FormControl(null, Validators.required),
            apellidos: new FormControl(null, Validators.required),
            identificacion: new FormControl(null, Validators.required),
            telefono: new FormControl(null, Validators.required),
            direccion: new FormControl(null, Validators.required)
        });

        this.segundoFormulario = new FormGroup({
            activo: new FormControl(true),
            entidad: new FormControl(null, Validators.required),
            // role: new FormControl(null, Validators.required),
            email: new FormControl(null, [Validators.required, Validators.email]),
            password1: new FormControl(null, Validators.required),
            password2: new FormControl(null, Validators.required)
        });
    }

    /**
     * Registra un usuario en el sistema
     */
    registrarUsuario() {

        // this.validar(2);

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
            '',
            this.imgPersonaje._id
            // this.segundoFormulario.value.role,
        );

        console.log('ENTRO');

        this._usuarioService
            .registrarUsuario(usuarioRegistrar)
            .subscribe(
                (resp: any) => {
                    if (resp.status === true) {
                        this.router.navigate(['pages', 'login']);
                    } else {

                    }
                },
                (error: any) => {
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
