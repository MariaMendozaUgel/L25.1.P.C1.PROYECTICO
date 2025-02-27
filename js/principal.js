import Cl_vExamen from "./Cl_vExamen.js";
import Cl_mExamen from "./Cl_mExamen.js";
import Cl_controlador from "./Cl_controlador.js";

export default class principal {
    constructor () {
        let vista = new Cl_vExamen ();
        let modelo = new Cl_mExamen ();
        let controlador = new Cl_controlador (modelo, vista);
        vista.controlador = controlador;
    }
}
