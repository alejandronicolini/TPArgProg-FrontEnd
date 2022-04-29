import { Educacion } from "./Educacion";
import { ExperienciaLaboral } from "./ExperienciaLaboral";
import { Habilidades } from "./Habilidades";
import { Proyectos } from "./Proyectos";


export class Persona {
    id_persona: number;
    nombre: string;
    apellido: string;
    email: string;
    expLaboralLista: ExperienciaLaboral[];
    educacionLista: Educacion[];
    habilidadesLista: Habilidades[];
    proyectosLista: Proyectos[];

}