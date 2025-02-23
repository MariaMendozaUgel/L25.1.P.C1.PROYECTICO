import Cl_vEstudiante from "./Cl_vEstudiante.js"
import Cl_mEstudiante from "./Cl_mEstudiante.js";
export default class Cl_vExamen {
    constructor ()  {
        this.controlador = null;
        this.mEstudiante = null;
        this.vEstudiante = new Cl_vEstudiante();
        this.vista = document.getElementById("mainForm");
        this.tabla = document.getElementById("mainForm_tabla");
        this.btAgregar = document.getElementById("mainForm_btAgregar");
        this.lblAprobados = document.getElementById("mainForm_lblAprobados");
        this.lblMejorNota = document.getElementById("mainForm_lblMejorNota");
        this.lblChicasAprobadas = document.getElementById("mainForm_lblChicasAprobadas");
        this.btAgregar.onclick = () => this.ocultar();
        this.vEstudiante.btProcesar.onclick = () => 
            this.controlador.procesarEstudiante();
    }
    procesarEstudiante () {
        this.mEstudiante = new Cl_mEstudiante({
            nombre: this.vEstudiante.nombre,
            cedula: this.vEstudiante.cedula,
            sexo: this.vEstudiante.sexo,
            nota: this.vEstudiante.nota,
        });
        this.mostrar();
        return this.mEstudiante;
    }
    mostrar () {
        this.vista.hidden = false;
        this.vEstudiante.ocultar();
    }
    ocultar () {
        this.vista.hidden = true;
        this.vEstudiante.mostrar();
    }
    reportarEstudiante (
        porcentajeAprobados, 
        porcentajeChicasAprobadas, 
        estudianteConMejorNota){
        this.tabla.innerHTML += `
            <tr>
                <td>${this.vEstudiante.cedula}</td>
                <td>${this.vEstudiante.nombre}</td>
                <td>${this.vEstudiante.sexo}</td>
                <td>${this.vEstudiante.nota}</td>
            </tr>
        `;
        this.lblAprobados.innerHTML = `Porcentaje de aprobados: ${porcentajeAprobados}%` ;
        this.lblMejorNota.innerHTML = `Estudiante con mejor nota: ${estudianteConMejorNota}` ;
        this.lblChicasAprobadas.innerHTML = `Porcentaje de chicas aprobadas: ${porcentajeChicasAprobadas}%` ;    
    }
    }
