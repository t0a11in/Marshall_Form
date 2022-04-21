import { Prenda } from "./prenda.model";
import { Tela } from "./tela.model";

export interface OciDetalle {
    // private Oci oci;
    // private Prenda prenda;
    // private Integer cantidad;
    // private String comentario;
    // private LocalDate fechaInicio;
    // private LocalDate fechaTermino;
    // private OciEstado estado;
    // private Tela tela;
    // private String color;
    prenda:Prenda;
    cantidad: number;
    comentario: string;
    fechaInicio: Date;
    fechaTermino: Date;
    estado: number;
    tela: Tela;
    color: string;
}
