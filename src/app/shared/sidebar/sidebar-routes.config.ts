import { RouteInfo } from './sidebar.metadata';

// Sidebar menu Routes and data
export const ROUTES: RouteInfo[] = [
    // Ruta Administracion
    {
        path: '',
        title: 'Administración',
        icon: 'ft-clipboard',
        class: 'has-sub',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: [
            {
                path: '/admin/usuarios',
                title: 'Usuarios',
                icon: '',
                class: '',
                badge: '',
                badgeClass: '',
                isExternalLink: false,
                submenu: []
            },
            {
                path: '/admin/palegria',
                title: 'Proyectos Alegria',
                icon: '',
                class: '',
                badge: '',
                badgeClass: '',
                isExternalLink: false,
                submenu: []
            },
            {
                path: '/admin/pcarnavalito',
                title: 'Proyectos Carnavalito',
                icon: '',
                class: '',
                badge: '',
                badgeClass: '',
                isExternalLink: false,
                submenu: []
            },
            // {
            //     path: '/admin/roles',
            //     title: 'Roles',
            //     icon: '',
            //     class: '',
            //     badge: '',
            //     badgeClass: '',
            //     isExternalLink: false,
            //     submenu: []
            // }
        ]
    },
    // Ruta Modalidades
    {
        path: '',
        title: 'Modalidades',
        icon: 'ft-layout',
        class: 'has-sub',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: [

            {
                path: '/modalidades/introduccion',
                title: 'Introducción',
                icon: '',
                class: '',
                badge: '',
                badgeClass: '',
                isExternalLink: false,
                submenu: []
            },
            {
                path: '/modalidades/aporte',
                title: 'Aporte Pedagógico',
                icon: '',
                class: '',
                badge: '',
                badgeClass: '',
                isExternalLink: false,
                submenu: []
            },
            {
                path: '/modalidades/colectivocoreografico',
                title: 'Colectivo Coreografico',
                icon: '',
                class: '',
                badge: '',
                badgeClass: '',
                isExternalLink: false,
                submenu: []
            },
            {
                path: '/modalidades/murguita',
                title: 'Murguita',
                icon: '',
                class: '',
                badge: '',
                badgeClass: '',
                isExternalLink: false,
                submenu: []
            },
            {
                path: '/modalidades/carrocita',
                title: 'Carrocita',
                icon: '',
                class: '',
                badge: '',
                badgeClass: '',
                isExternalLink: false,
                submenu: []
            },
            {
                path: '/modalidades/comparsa',
                title: 'Comparsa',
                icon: '',
                class: '',
                badge: '',
                badgeClass: '',
                isExternalLink: false,
                submenu: []
            },
            {
                path: '/modalidades/disfrazindividual',
                title: 'Disfraz Individual',
                icon: '',
                class: '',
                badge: '',
                badgeClass: '',
                isExternalLink: false,
                submenu: []
            }
        ]
    },
    // Ruta Herramientas
    {
        path: '',
        title: 'Talleres',
        icon: 'ft-scissors',
        class: 'has-sub',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: [
            {
                path: '/herramientas/introduccion',
                title: 'Presentación',
                icon: '',
                class: '',
                badge: '',
                badgeClass: '',
                isExternalLink: false,
                submenu: []
            },
            {
                path: '/herramientas/musica',
                title: 'Música',
                icon: '',
                class: '',
                badge: '',
                badgeClass: '',
                isExternalLink: false,
                submenu: []
            },
            {
                path: '/herramientas/cartografia',
                title: 'Cartografía',
                icon: '',
                class: '',
                badge: '',
                badgeClass: '',
                isExternalLink: false,
                submenu: []
            },
            {
                path: '/herramientas/maquillaje',
                title: 'Maquillaje',
                icon: '',
                class: '',
                badge: '',
                badgeClass: '',
                isExternalLink: false,
                submenu: []
            },
            {
                path: '/herramientas/modelado',
                title: 'Modelado',
                icon: '',
                class: '',
                badge: '',
                badgeClass: '',
                isExternalLink: false,
                submenu: []
            },
            {
                path: '/herramientas/movimiento',
                title: 'Movimiento',
                icon: '',
                class: '',
                badge: '',
                badgeClass: '',
                isExternalLink: false,
                submenu: []
            },
            {
                path: '/herramientas/glosario',
                title: 'Glosario',
                icon: '',
                class: '',
                badge: '',
                badgeClass: '',
                isExternalLink: false,
                submenu: []
            }
        ]
    },
    // Ruta Proyectos
    {
        path: '',
        title: 'Gestión Proyectos',
        icon: 'ft-award',
        class: 'has-sub',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: [
            {
                path: '/proyectos/presentacion',
                title: 'Presentación',
                icon: '',
                class: '',
                badge: '',
                badgeClass: '',
                isExternalLink: false,
                submenu: []
            },
            {
                path: '/proyectos/convocatorias',
                title: 'Convocatorias',
                icon: '',
                class: '',
                badge: '',
                badgeClass: '',
                isExternalLink: false,
                submenu: []
            },
            {
                path: '/proyectos/carnavalito',
                title: 'Carnavalito',
                icon: '',
                class: '',
                badge: '',
                badgeClass: '',
                isExternalLink: false,
                submenu: []
            },
            {
                path: '/proyectos/carnavalalegria',
                title: 'Carnaval Alegria',
                icon: '',
                class: '',
                badge: '',
                badgeClass: '',
                isExternalLink: false,
                submenu: []
            }
        ]
    },
    // Ruta galeria
    {
        path: '/galeria/galeriamunay',
        title: 'Galeria',
        icon: 'ft-image',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
    },
    // Ruta Links de interés
    {
        path: '/links/links',
        title: 'Links De Interes',
        icon: 'ft-paperclip',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
    },
    // Ruta Bibliografia
    {
        path: '/info/bibliografia',
        title: 'Bibliografia',
        icon: 'ft-book',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
    },
    // Ruta Información
    {
        path: '/info/autores',
        title: 'Equipo de Trabajo',
        icon: 'ft-info',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
    }
];
