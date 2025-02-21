import Cl_mEstudiante from "./Cl_mEstudiante.js";
import Cl_mExamen from "./Cl_mExamen.js";

let estudiante1 = new Cl_mEstudiante ("Luis", 1111, "M", 12);
let estudiante2 = new Cl_mEstudiante ("Carla", 2222, "F", 16.5);
let estudiante3 = new Cl_mEstudiante ("Mery", 3333, "F", 8);
let mExamen = new Cl_mExamen()

mExamen.procesarEstudiante(estudiante1);
mExamen.procesarEstudiante(estudiante2);
mExamen.procesarEstudiante(estudiante3);

alert ("El porcentaje de aprobados es: " + mExamen.porcentajeAprobados() + "%");
alert ("El estudiante con mejor nota es: " + mExamen.estudianteConMejorNota());
alert ("El porcentaje de chicas aprobadas es: " + mExamen.porcentajeChicasAprobadas() + "%");
