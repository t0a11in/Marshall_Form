import { Categoria } from "./categoria.model";
import { Cliente } from "./cliente.model";
import { OciDetalle } from "./oci-detalle.model";
import { Persona } from "./persona.model";

export interface Oci {
    id: number;
    oci: string;
    cliente: Cliente;
    estado: number;
    fechaInicio: Date;
    fechaTermino: Date;
    estimacionDias: number;
    nota: string;
    categoria: Categoria
    vendedor: Persona;
    prioridad: number;
    detalle: OciDetalle[];
}
