
export class Usuario {
    constructor(

        public identificacion: string,
        public nombres: string,
        public apellidos: string,
        public email: string,
        public telefono: string,
        public direccion: string,
        public activo: boolean,
        public entidad: string,
        public password?: string,
        public passwordActual?: string,
        public img?: string,
        public role?: string

    ) {
    }
}

// const object = {
//     'identificacion': '123123',
//     'nombres': 'Ensayo',
//     'apellidos': 'MontufarBurbano',
//     'email': 'ensayo@hotmail.com',
//     'password': '123',
//     'role': '5bafbe6cee3a601afc62da70',
//     'img': 'imagen.png',
//     'telefono': '3122233211',
//     'direccion': 'direccion',
//     'entidad': 'particular'
// }
