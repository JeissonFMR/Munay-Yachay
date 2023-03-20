import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProyectoService } from 'app/servicios/servicios.index';
import swal from 'sweetalert2';
import { Router } from '@angular/router';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';


import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-alegria',
  templateUrl: './alegria.component.html',
  styleUrls: ['./alegria.component.scss']
})
export class AlegriaComponent implements OnInit {

  closeResult: string;
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
   * Puertas registradas en el sistema
   */
  proyectosAlegria: any[] = [];

  /**
   * Cabeceras de las columnas de la tabla
   */
  cabecerasColumnas: string[] = [
    'modalidad',
    'nombre_propuesta',
    'entidad',
    'responsable',
    'cant_ninios',
    'cant_adolecentes',
    'cant_adultos',
    'cant_masculino',
    'cant_femenino',
    'cant_rural',
    'cant_urbano',
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
   * Formulario de registro de proyectos de carnavalito
   */
  formularioProyectoAlegria: FormGroup;

  /**
   * Identificador del proyecto a eliminar
   */
  idProyectoEliminar = '';

  // -------------------------------------------------------------------------
  // Constructor
  // -------------------------------------------------------------------------

  constructor(
    private router: Router,
    private _proyectosService: ProyectoService,
    private modalService: NgbModal
  ) { }

  ngOnInit() {
    this.inicializarFormulario();
    this.consultarProyectos();
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
    this.formularioProyectoAlegria = new FormGroup({
      modalidad: new FormControl('0', Validators.required),
      nombre_propuesta: new FormControl(null, Validators.required),
      entidad: new FormControl(null, Validators.required),
      responsable: new FormControl(null, Validators.required),
      justificacion: new FormControl(null, Validators.required),
      objetivos: new FormControl(null, Validators.required),
      resenia: new FormControl(null, Validators.required),
      // Areas del proyecto
      areap_artes: new FormControl(false),
      areap_musica: new FormControl(false),
      areap_edfisica: new FormControl(false),
      areap_csociales: new FormControl(false),
      areap_otra: new FormControl(false),
      areap_cual: new FormControl(null),
      // Cantidades participantes
      cant_ninios: new FormControl(null, Validators.required),
      cant_adolecentes: new FormControl(null, Validators.required),
      cant_adultos: new FormControl(null, Validators.required),
      cant_masculino: new FormControl(null, Validators.required),
      cant_femenino: new FormControl(null, Validators.required),
      cant_rural: new FormControl(null, Validators.required),
      cant_urbano: new FormControl(null, Validators.required),
      cant_primaria: new FormControl(null, Validators.required),
      cant_bachillerato: new FormControl(null, Validators.required),
      descripcion_propuesta: new FormControl(null, Validators.required),
      // Si su propuesta corresponde a las modalidades de Colectivo coreográfico, comparsa o murga,
      // diligencia los siguientes aspectos:
      estructura_coreografica: new FormControl(null),
      vestuario: new FormControl(null),
      recursos: new FormControl(null),
      archivo: new FormControl(null)
    });
  }

  /**
   * Consulta los proyectos de carnavalito que tiene registrado el usuario loggeado
   */
  consultarProyectos() {
    this.cargando = true;
    this._proyectosService.consultarProyectosAlegria().subscribe(
      (resp: any) => {
        if (resp.status) {
          this.cargando = false;
          this.proyectosAlegria = resp.reg;
          this.dataSource = new MatTableDataSource<any>(this.proyectosAlegria);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
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
  opcionEditar(pProyectoEditar) {
    this.oculta = false;
    this.editar = true;

    this.formularioProyectoAlegria = new FormGroup({
      _id: new FormControl(pProyectoEditar._id, Validators.required),
      modalidad: new FormControl(pProyectoEditar.modalidad, Validators.required),
      nombre_propuesta: new FormControl(pProyectoEditar.nombre_propuesta, Validators.required),
      entidad: new FormControl(pProyectoEditar.entidad, Validators.required),
      responsable: new FormControl(pProyectoEditar.responsable, Validators.required),
      justificacion: new FormControl(pProyectoEditar.justificacion, Validators.required),
      objetivos: new FormControl(pProyectoEditar.objetivos, Validators.required),
      resenia: new FormControl(pProyectoEditar.resenia, Validators.required),
      // Areas del proyecto
      areap_artes: new FormControl(pProyectoEditar.areap_artes),
      areap_musica: new FormControl(pProyectoEditar.areap_musica),
      areap_edfisica: new FormControl(pProyectoEditar.areap_edfisica),
      areap_csociales: new FormControl(pProyectoEditar.areap_csociales),
      areap_otra: new FormControl((pProyectoEditar.areap_otra) ? true : false),
      areap_cual: new FormControl(pProyectoEditar.areap_otra),
      // Cantidades participantes
      cant_ninios: new FormControl(pProyectoEditar.cant_ninios, Validators.required),
      cant_adolecentes: new FormControl(pProyectoEditar.cant_adolecentes, Validators.required),
      cant_adultos: new FormControl(pProyectoEditar.cant_adultos, Validators.required),
      cant_masculino: new FormControl(pProyectoEditar.cant_masculino, Validators.required),
      cant_femenino: new FormControl(pProyectoEditar.cant_femenino, Validators.required),
      cant_rural: new FormControl(pProyectoEditar.cant_rural, Validators.required),
      cant_urbano: new FormControl(pProyectoEditar.cant_urbano, Validators.required),
      cant_primaria: new FormControl(pProyectoEditar.cant_primaria, Validators.required),
      cant_bachillerato: new FormControl(pProyectoEditar.cant_bachillerato, Validators.required),
      descripcion_propuesta: new FormControl(pProyectoEditar.descripcion_propuesta, Validators.required),
      // Si su propuesta corresponde a las modalidades de Colectivo coreográfico, comparsa o murga,
      // diligencia los siguientes aspectos:
      estructura_coreografica: new FormControl(pProyectoEditar.estructura_coreografica),
      vestuario: new FormControl(pProyectoEditar.vestuario),
      recursos: new FormControl(pProyectoEditar.recursos),
      archivo: new FormControl(pProyectoEditar.archivo)
    });
  }

  /**
   * Accion del boton cancelar del formulario
   */
  opcionCancelar() {
    this.editar = false;
    this.oculta = true;
    this.consultarProyectos();
  }

  /**
   * Elimina un proyecto del sistema
   */
  eliminarProyecto() {
    this._proyectosService.eliminarProyectoAlegria(this.idProyectoEliminar).subscribe(
      (resp: any) => {
        if (resp.status) {
          this.consultarProyectos();
          this.idProyectoEliminar = '';
        }
      }
    );
  }

  /**
   * Guarda el proyecto de carnavalito en el sistema
   */
  guardarCambios() {

    if (
      !this.formularioProyectoAlegria.value.areap_artes &&
      !this.formularioProyectoAlegria.value.areap_musica &&
      !this.formularioProyectoAlegria.value.areap_edfisica &&
      !this.formularioProyectoAlegria.value.areap_csociales &&
      !this.formularioProyectoAlegria.value.areap_otra
    ) {
      swal('Error', 'Debe seleccionar al menos un área participante', 'error');
      return;
    }

    if (!this.formularioProyectoAlegria.valid) {
      swal('Error', 'Debe diligenciar los campos obligatorios', 'error');
      return;
    }

    const proyecto = {
      modalidad: this.formularioProyectoAlegria.value.modalidad,
      nombre_propuesta: this.formularioProyectoAlegria.value.nombre_propuesta,
      entidad: this.formularioProyectoAlegria.value.entidad,
      responsable: this.formularioProyectoAlegria.value.responsable,
      justificacion: this.formularioProyectoAlegria.value.justificacion,
      objetivos: this.formularioProyectoAlegria.value.objetivos,
      resenia: this.formularioProyectoAlegria.value.resenia,
      // Areas del proyecto
      areap_artes: this.formularioProyectoAlegria.value.areap_artes,
      areap_musica: this.formularioProyectoAlegria.value.areap_musica,
      areap_edfisica: this.formularioProyectoAlegria.value.areap_edfisica,
      areap_csociales: this.formularioProyectoAlegria.value.areap_csociales,
      areap_otra: this.formularioProyectoAlegria.value.areap_cual,
      // Cantidades participantes
      cant_ninios: this.formularioProyectoAlegria.value.cant_ninios,
      cant_adolecentes: this.formularioProyectoAlegria.value.cant_adolecentes,
      cant_adultos: this.formularioProyectoAlegria.value.cant_adultos,
      cant_masculino: this.formularioProyectoAlegria.value.cant_masculino,
      cant_femenino: this.formularioProyectoAlegria.value.cant_femenino,
      cant_rural: this.formularioProyectoAlegria.value.cant_rural,
      cant_urbano: this.formularioProyectoAlegria.value.cant_urbano,
      cant_primaria: this.formularioProyectoAlegria.value.cant_primaria,
      cant_bachillerato: this.formularioProyectoAlegria.value.cant_bachillerato,
      descripcion_propuesta: this.formularioProyectoAlegria.value.descripcion_propuesta,
      estructura_coreografica: this.formularioProyectoAlegria.value.estructura_coreografica,
      vestuario: this.formularioProyectoAlegria.value.vestuario,
      recursos: this.formularioProyectoAlegria.value.recursos,
      archivo: this.formularioProyectoAlegria.value.archivo
    };

    if (this.editar) {
      proyecto['_id'] = this.formularioProyectoAlegria.value._id;
      this.editarProyecto(proyecto);
    } else {
      this.registrarProyecto(proyecto);
    }
  }

  /**
   * Registra un nuevo proyecto al sistema
   */
  registrarProyecto(pProyecto) {
    this._proyectosService.registrarProyectoAlegria(pProyecto).subscribe(
      (resp: any) => {
        if (resp.status) {
          swal('Èxito', resp.msg, 'success');
          this.oculta = true;
          this.editar = false;
          this.consultarProyectos();
        } else {
          swal('Error', resp.msg, 'error');
        }
      }
    );
  }

  /**
   * Registra un nuevo proyecto al sistema
   */
  editarProyecto(pProyecto) {
    this._proyectosService.editarProyectoAlegria(pProyecto).subscribe(
      (resp: any) => {
        if (resp.status) {
          swal('Èxito', resp.msg, 'success');
          this.oculta = true;
          this.editar = false;
          this.consultarProyectos();
        } else {
          swal('Error', resp.msg, 'error');
        }
      }
    );
  }




}
