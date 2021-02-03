export interface Serie {
    fecha: Date;
    valor: number;
}

export interface ResponseIndicatorDetail {
    version: string;
    autor: string;
    codigo: string;
    nombre: string;
    unidad_medida: string;
    serie: Serie[];
}