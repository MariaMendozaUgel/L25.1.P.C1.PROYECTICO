import Cl_mEstudiante from "./Cl_mEstudiante.js";
export default class Cl_mExamen {
    constructor() {
       this.contEstudiante = 0;
       this.contChicas = 0;
       this.contChicasAprobadas = 0;
       this.aprobados = 0;
       this.minPrueba = 9.6;
       this.mejorNota = 0;
       this.estudianteMejorNota = 0;
    }
    procesarEstudiante (e) {
        this.contEstudiante ++;
        if (e.sexo == "F") 
            this.contChicas++;
        if (e.nota >= this.minPrueba) {
            this.aprobados ++}
            if (e.sexo == "F" && e.nota >= this.minPrueba) {
                this.contChicasAprobadas ++;
            }
        if (e.nota > this.mejorNota) {
            this.mejorNota = e.nota;
            this.estudianteMejorNota = e.nombre;
        }
    }
    porcentajeAprobados () {
        return (this.aprobados / this.contEstudiante) * 100;
    }
    estudianteConMejorNota () {
        return this.estudianteMejorNota;
    }
    porcentajeChicasAprobadas () {
        return (this.contChicasAprobadas / this.contChicas) * 100;
    }
}
