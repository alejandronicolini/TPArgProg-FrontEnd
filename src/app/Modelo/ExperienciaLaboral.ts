import { Persona } from "./Persona";

export class ExperienciaLaboral{
    id_expLaboral: number;
    puesto: string;
    empresa: string;
    fecha_inicio: number;
    fecha_fin: number;
    img_logo: string;
    personaExpLab: Persona;
}