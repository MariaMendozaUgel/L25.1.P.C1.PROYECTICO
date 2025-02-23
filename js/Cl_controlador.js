export default class Cl_controlador{
    constructor (modelo, vista) {
        this.modelo = modelo;
        this.vista = vista;
    }
    procesarEstudiante () {
        this.modelo.procesarEstudiante(this.vista.procesarEstudiante());
        this.vista.reportarEstudiante(
            this.modelo.porcentajeAprobados(),
            this.modelo.porcentajeChicasAprobadas(),
            this.modelo.estudianteConMejorNota()
            );
    }
}