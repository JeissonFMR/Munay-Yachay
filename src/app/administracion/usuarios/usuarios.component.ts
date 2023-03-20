import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsuarioService, ImagenesService, RoleService } from 'app/servicios/servicios.index';
import swal from 'sweetalert2';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';


import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { URL_SERVICIOS } from 'app/config/config';
import { Usuario } from 'app/models/usuario.model';


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss'],
  providers: [NgbModal]
})
export class UsuariosComponent implements OnInit {

  // closeResult: string;

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

  // -------------------------------------------------------------------------
  // Propiedades
  // -------------------------------------------------------------------------

  /**
   * Bandera para ocultar o mostrar el formulario con la tabla de datos
   */
  oculta = true;

  /**
   * Bandera para editar
   */
  editar = true;

  /**
   * Bandera para la barra de progreso
   */
  cargando = false;

  /**
   * Usuarios registradas en el sistema
   */
  usuarios: any[] = [];

  /**
   * Roles registradas en el sistema
   */
  roles: any[] = [];

  /**
   * Cabeceras de las columnas de la tabla
   */
  cabecerasColumnas: string[] = [
    'identificacion',
    'nombre',
    'email',
    'role',
    'img',
    'telefono',
    'direccion',
    'activo',
    'entidad',
    'actions'
  ];

  /**
   * Datos a mostrar en la tabla
   */
  dataSource: MatTableDataSource<any>;

  /**
   * Paginador de la tabla
   */
  @ViewChild(MatPaginator) paginator: MatPaginator;

  /**
   * Organizador de la tabla
   */
  @ViewChild(MatSort) sort: MatSort;

  /**
   * Identificador del proyecto a eliminar
   */
  idUsuarioEliminar = '';

  /**
   * Usuario a editar
   */
  usuarioEditar: any;

  // -------------------------------------------------------------------------
  // Constructor
  // -------------------------------------------------------------------------

  constructor(
    private _roleService: RoleService,
    private _usuariosService: UsuarioService,
    private _imgService: ImagenesService,
    private modalService: NgbModal
  ) { }

  ngOnInit() {
    this.inicializarFormulario();
    this.consultarUsuarios();
    this.consultarImagenes();
    this.consultarRoles();
  }
  // -------------------------------------------------------------------------
  // Métodos
  // -------------------------------------------------------------------------

  /**
   * Abre el modal
   */
  open(content) {
    this.modalService.open(content);
  }

  /**
   * Inicializa el formulario de registro de proyectos
   */
  inicializarFormulario() {

    this.primerFormulario = new FormGroup({
      nombres: new FormControl(null, Validators.required),
      apellidos: new FormControl(null, Validators.required),
      identificacion: new FormControl(null, Validators.required),
      telefono: new FormControl(null, Validators.required),
      role: new FormControl(null, Validators.required),
      direccion: new FormControl(null, Validators.required)
    });

    this.segundoFormulario = new FormGroup({
      activo: new FormControl(true),
      entidad: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password1: new FormControl(null),
      password2: new FormControl(null)
    });
  }

  /**
   * Inicializa el formulario de edicion de usuarios
   */
  inicializarFormularioEditar() {

    this.primerFormulario = new FormGroup({
      _id: new FormControl(this.usuarioEditar._id, Validators.required),
      nombres: new FormControl(this.usuarioEditar.nombres, Validators.required),
      apellidos: new FormControl(this.usuarioEditar.apellidos, Validators.required),
      identificacion: new FormControl(this.usuarioEditar.identificacion, Validators.required),
      telefono: new FormControl(this.usuarioEditar.telefono, Validators.required),
      role: new FormControl(this.usuarioEditar.role._id, Validators.required),
      direccion: new FormControl(this.usuarioEditar.direccion, Validators.required)
    });

    this.segundoFormulario = new FormGroup({
      activo: new FormControl(this.usuarioEditar.activo),
      entidad: new FormControl(this.usuarioEditar.entidad, Validators.required),
      email: new FormControl(this.usuarioEditar.email, [Validators.required, Validators.email]),
      password1: new FormControl(this.usuarioEditar.password1),
      password2: new FormControl(this.usuarioEditar.password2)
    });
  }

  /**
   * Consulta los usuarios registrados en el sistema
   */
  consultarUsuarios() {
    this.cargando = true;
    this._usuariosService.consultarUsuarios().subscribe(
      (resp: any) => {
        if (resp.status) {
          this.cargando = false;
          this.usuarios = resp.reg;
          this.dataSource = new MatTableDataSource<any>(this.usuarios);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        } else {

        }
      }
    );
  }

  /**
   * Consulta los roles registrados en el sistema
   */
  consultarRoles() {
    this.cargando = true;
    this._roleService.consultarRoles().subscribe(
      (resp: any) => {
        if (resp.status) {
          this.cargando = false;
          this.roles = resp.reg;
        } else {

        }
      }
    );
  }

  /**
   * Opción del botón nuevo proyecto
   */
  opcionNuevo() {
    this.oculta = false;
    this.editar = false;
    this.inicializarFormulario();
  }

  /**
   * Opción del boton editar
   */
  opcionEditar(pUsuarioEditar) {
    this.seleccionarPersonaje(pUsuarioEditar.img);
    // this.imgPersonaje = pUsuarioEditar.img;
    this.oculta = false;
    this.editar = true;
    this.usuarioEditar = pUsuarioEditar;
    this.inicializarFormularioEditar();
    console.log(this.usuarioEditar);
  }

  /**
   * Accion del boton cancelar del formulario
   */
  opcionCancelar() {
    this.editar = false;
    this.oculta = true;
    this.consultarUsuarios();
  }

  /**
   * Elimina un proyecto del sistema
   */
  eliminarUsuario() {
    this._usuariosService.eliminarUsuario(this.idUsuarioEliminar).subscribe(
      (resp: any) => {
        if (resp.status) {
          this.consultarUsuarios();
          this.idUsuarioEliminar = '';
        }
      }
    );
  }

  /**
   * Guarda el proyecto de usuarios en el sistema
   */
  guardarCambios() {
    if (!this.segundoFormulario.valid) {
      swal('ERROR', 'Debe completar los campos obligatorios', 'error');
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
      this.imgPersonaje._id,
      this.primerFormulario.value.role
    );

    if (this.editar) {
      usuarioRegistrar['_id'] = this.primerFormulario.value._id;
      this.editarProyecto(usuarioRegistrar);
    } else {
      this.registrarUsuario(usuarioRegistrar);
    }
  }

  /**
   * Registra un nuevo proyecto al sistema
   */
  registrarUsuario(pUsuario) {
    this._usuariosService.registrarUsuario(pUsuario).subscribe(
      (resp: any) => {
        if (resp.status) {
          swal('Èxito', resp.msg, 'success');
          this.oculta = true;
          this.editar = false;
          this.consultarUsuarios();
        } else {
          swal('Error', resp.msg, 'error');
        }
      }
    );
  }

  /**
   * Registra un nuevo proyecto al sistema
   */
  editarProyecto(pUsuario) {
    this._usuariosService.editarUsuario(pUsuario).subscribe(
      (resp: any) => {
        if (resp.status) {
          swal('Èxito', resp.msg, 'success');
          this.oculta = true;
          this.editar = false;
          this.consultarUsuarios();
        } else {
          swal('Error', resp.msg, 'error');
        }
      }
    );
  }

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
          this.imgPersonaje = this.personajes[0];
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
   * Retorna el indice de la imagen del usuario a editar
   */
  obtenerIndiceImagen(): number {
    var result = -1;
    this.personajes.filter((img, i) => {
      if (img._id === this.usuarioEditar.img) {
        result = i;
      }
    });
    return result;
  }
}
