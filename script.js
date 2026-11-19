/* =========================================================
   DATOS DE LAS TRES MODALIDADES
   ========================================================= */

const dataModalidades = {
    tesis: {
        titulo: "Tesis de Grado",

        definicion: "Definición: Una tesis de grado es un trabajo de investigación original y argumentado que permite obtener un título académico. Consiste en plantear un problema, formular una hipótesis o objetivos, analizar evidencia y presentar conclusiones propias respaldadas bajo un rigor metodológico y científico.",

tribunal: [
    {
        rol: "TUTOR",
        desc: `
            <p>
                El Tutor es el <strong>guía y asesor principal metodológico y técnico</strong>
                del estudiante durante todo el proceso de elaboración de su modalidad
                de graduación. Su nombramiento o aprobación está a cargo de la
                Dirección de Carrera.
            </p>

            <h5 class="font-bold text-black mt-4 mb-2">
                Funciones principales en Taller de Grado I:
            </h5>

            <ul class="list-disc pl-5 space-y-2">
                <li>
                    <strong>Orientación y delimitación:</strong>
                    Ayuda a estructurar el tema, el problema de investigación,
                    los alcances y la metodología, velando por la coherencia
                    del proyecto.
                </li>

                <li>
                    <strong>Revisiones y seguimiento:</strong>
                    Realiza revisiones periódicas del trabajo y presenta el
                    <strong>Acta de Seguimiento</strong> al Docente de
                    Taller de Grado I.
                </li>

                <li>
                    <strong>Autorización para defensa:</strong>
                    Emite la <strong>Carta de Autorización</strong>
                    (visto bueno) que habilita al estudiante a pasar a la
                    defensa del Primer Panel.
                </li>

                <li>
                    <strong>Carga horaria:</strong>
                    Tiene una dedicación asignada de <strong>8 horas</strong>
                    en Taller de Grado I.
                </li>

            <p>

            </p>
            </ul>
        `
    },

    {
        rol: "PANELISTA",
        desc: `
            <p>
                El Panelista (o Docente Lector) se desempeña como
                <strong>evaluador continuo y asesor complementario</strong>,
                encargado de realizar el control de calidad intermedio
                del proyecto.
            </p>

            <h5 class="font-bold text-black mt-4 mb-2">
                Funciones principales en Taller de Grado I:
            </h5>

            <ul class="list-disc pl-5 space-y-2">
                <li>
                    <strong>Revisión técnica y metodológica:</strong>
                    Revisa el avance del documento y elabora un acta oficial
                    con sus observaciones.
                </li>

                <li>
                    <strong>Registro de seguimiento:</strong>
                    Presenta el <strong>Acta de Seguimiento</strong>
                    requerida al Docente de Taller de Grado I.
                </li>

                <li>
                    <strong>Emisión de aval:</strong>
                    Firma la <strong>Carta de Autorización de Panelista</strong>
                    para dar el visto bueno al trabajo.
                </li>

                <li>
                    <strong>Evaluación en panel:</strong>
                    Asiste y evalúa al estudiante durante la
                    <strong>Defensa del Primer Panel</strong>.
                </li>

                <li>
                    <strong>Carga horaria:</strong>
                    Tiene una dedicación asignada de <strong>5 horas</strong>
                    en Taller de Grado I.
                </li>
            </ul>
        `
    },
],

        elementos: [
            "<strong>Tema de Investigación:</strong> Plantea el tema de investigación de manera exploratoria, para construir la fundamentación teórica en base al proceso científico.",
            "<strong>Fundamentación teórica de investigación:</strong> Construye una fundamentación teórica de los enfoques y hallazgos existentes, relacionado al tema de investigación.",
            "<strong>Problema de Investigación:</strong> Formula el tema, el problema, los objetivos y los impactos de una investigación para sustentar una propuesta de tesis rigurosa y pertinente, con fundamentación teórica, coherencia metodológica y relevancia contextual.",
            "<strong>Método de Investigación:</strong> Propone un diseño metodológico adecuado para la investigación, con objetividad."
        ],

        proceso: [
            {
                paso: "1",
                titulo: "Registro de Tema",
                desc: "Presentación de la ficha de inscripción y aprobación inicial por la Dirección de Carrera."
            },
            {
                paso: "2",
                titulo: "Asignación de Tutor",
                desc: "Designación del docente guía acorde al área temática seleccionada."
            },
            {
                paso: "3",
                titulo: "Desarrollo del Perfil",
                desc: "Redacción del perfil de tesis con tutorías periódicas y verificación de avances."
            },
            {
                paso: "4",
                titulo: "Solicitud de Primer Panel",
                desc: "Entrega del perfil finalizado y aprobación formal para fecha de defensa."
            },
            {
                paso: "5",
                titulo: "Defensa Primer Panel",
                desc: "Exposición oral ante el tribunal asignado y recepción de dictamen."
            }
        ],

        cronograma: [
            {
                fecha: "Semana 1 - 2",
                actividad: "Presentación y aprobación de Perfiles Generales"
            },
            {
                fecha: "Semana 3 - 6",
                actividad: "Semanas de Tutoría e Investigación de Campo"
            },
            {
                fecha: "Semana 7",
                actividad: "Entrega oficial del Borrador del Perfil"
            },
            {
                fecha: "Semana 9 - 10",
                actividad: "Sesiones de Defensa de Primer Panel"
            }
        ],

        materialApoyo: [
            {
                nombre: "Acta de Seguimiento Tutor TGI_MKD",
                url: "https://docs.google.com/document/d/1bQdE-I9sEnbUZk5wm8ebykeYV2NSl2dA/edit?usp=drive_link&ouid=110600722653600398805&rtpof=true&sd=true"
            },
            {
                nombre: "Acta de Seguimiento Tutor TGI_ICO",
                url: "https://docs.google.com/document/d/1B92AitnVweqenRaRZaXquJc0V9MqEu3V/edit?usp=drive_link&ouid=110600722653600398805&rtpof=true&sd=true"
            },
            {
                nombre: "Acta de Seguimiento Panelista TGI_MKD",
                url: "https://docs.google.com/document/d/1XNp9mXypnKy0bJFJdFl-BAaSvuH0HSln/edit?usp=drive_link&ouid=110600722653600398805&rtpof=true&sd=true"
            },
            {
                nombre: "Acta de Seguimiento Panelista TGI_ICO",
                url: "https://docs.google.com/document/d/1JZoOQl8XVq417H597_2zG6Yz_Ojr6BSD/edit?usp=drive_link&ouid=110600722653600398805&rtpof=true&sd=true"
            },
            {
                nombre: "Carta Conformidad TUTOR. Primer Panel",
                url: "https://docs.google.com/document/d/1OQtDOe65GqlR-3ngt5nP_GyzsFt1W9ER/edit?usp=drive_link&ouid=110600722653600398805&rtpof=true&sd=true"
            },
            {
                nombre: "Carta Conformidad PANELISTA. Primer Panel",
                url: "https://docs.google.com/document/d/1LIuxwCEDimg3N1CnbDS9iKbHg3EX9gmG/edit?usp=drive_link&ouid=110600722653600398805&rtpof=true&sd=true"
            }
        ],

        docs: {
            tribunal: "https://drive.google.com/file/d/1jAvWPa4rOfqxUgHO4FTHiZU7uF2i8rd6/view?usp=sharing",
            elementos: "https://docs.google.com/document/d/ejemplo-tesis-elementos",
            proceso: "https://docs.google.com/document/d/ejemplo-tesis-proceso",
            cronograma: "https://docs.google.com/document/d/ejemplo-tesis-cronograma"
        }
    },


    plan: {
        titulo: "Plan de Negocio",

        definicion: "Definición: Un plan de negocio es un documento formal donde se evalúa la viabilidad comercial, técnica, operativa y financiera de un nuevo emprendimiento o unidad de negocio. Permite diseñar estrategias de mercado sustentables y modelos de monetización sólidos.",

        tribunal: [
            {
                rol: "TUTOR",
                desc: "Asesora la estructuración del modelo de negocio, análisis financiero y propuesta de valor comercial."
            },
            {
                rol: "PANELISTA",
                desc: "Evaluador enfocado en la factibilidad de mercado, rentabilidad, escalabilidad y coherencia estratégica."
            },
            {
                rol: "RELATOR",
                desc: "Supervisa la defensa del modelo de negocio y vela por el cumplimiento de los criterios institucionales de evaluación."
            }
        ],

        elementos: [
            "Competencia 1: Identificación de la oportunidad de mercado y propuesta de valor única.",
            "Competencia 2: Estudio de mercado, análisis de la competencia y segmento objetivo.",
            "Competencia 3: Plan de marketing, ventas y canales de distribución.",
            "Competencia 4: Plan de operaciones, estructura organizacional y legal.",
            "Competencia 5: Evaluación financiera (VAN, TIR, flujo de caja y análisis de sensibilidad)."
        ],

        proceso: [
            {
                paso: "1",
                titulo: "Validación de Idea",
                desc: "Aprobación de la oportunidad de negocio propuesta por parte del comité de carrera."
            },
            {
                paso: "2",
                titulo: "Designación de Tutor",
                desc: "Asignación del mentor en estrategia comercial y financiamiento."
            },
            {
                paso: "3",
                titulo: "Elaboración del Plan",
                desc: "Desarrollo del estudio de mercado y corridas financieras iniciales."
            },
            {
                paso: "4",
                titulo: "Revisión Pre-Panel",
                desc: "Revisión final de indicadores financieros y viabilidad técnica."
            },
            {
                paso: "5",
                titulo: "Defensa Primer Panel",
                desc: "Sustentación del modelo de negocio ante el jurado evaluador."
            }
        ],

        cronograma: [
            {
                fecha: "Semana 1 - 2",
                actividad: "Presentación de la propuesta de negocio"
            },
            {
                fecha: "Semana 3 - 6",
                actividad: "Investigación de mercado y proyecciones financieras"
            },
            {
                fecha: "Semana 7",
                actividad: "Presentación del plan de operaciones y modelo económico"
            },
            {
                fecha: "Semana 9 - 10",
                actividad: "Evaluación y defensa en Primer Panel"
            }
        ],

        docs: {
            tribunal: "https://docs.google.com/document/d/ejemplo-plan-tribunal",
            elementos: "https://docs.google.com/document/d/ejemplo-plan-elementos",
            proceso: "https://docs.google.com/document/d/ejemplo-plan-proceso",
            cronograma: "https://docs.google.com/document/d/ejemplo-plan-cronograma"
        }
    },

    trabajo: {
        titulo: "Trabajo Dirigido",

        definicion: "Definición: Consiste en el desarrollo de una solución práctica e innovadora aplicada a un problema real dentro de una empresa o institución externa. Permite aplicar competencias profesionales para la optimización de procesos de marketing, gestión comercial o transformación digital.",

        tribunal: [
            {
                rol: "TUTOR ACADÉMICO",
                desc: "Supervisa la calidad técnica, metodológica y la aplicación teórica en la resolución del problema."
            },
            {
                rol: "TUTOR INSTITUCIONAL",
                desc: "Representante de la empresa receptora que valida la aplicabilidad y efectividad del proyecto en la práctica."
            },
            {
                rol: "PANELISTA / RELATOR",
                desc: "Evalúan los resultados alcanzados, el impacto organizacional e integran las observaciones institucionales."
            }
        ],

        elementos: [
            "Competencia 1: Diagnóstico organizacional y detección precisa de necesidades/problemas.",
            "Competencia 2: Fundamentación técnica y estratégica del plan de intervención.",
            "Competencia 3: Implementación o diseño detallado de la solución propuesta.",
            "Competencia 4: Medición de impacto e indicadores clave de rendimiento (KPIs).",
            "Competencia 5: Transferencia de conocimientos y entregables finales a la organización."
        ],

        proceso: [
            {
                paso: "1",
                titulo: "Convenio Institucional",
                desc: "Firma de acuerdo entre la Universidad y la empresa receptora."
            },
            {
                paso: "2",
                titulo: "Aprobación del Diagnóstico",
                desc: "Validación del problema detectado e hitos a resolver."
            },
            {
                paso: "3",
                titulo: "Ejecución de Tutorías",
                desc: "Reuniones de seguimiento conjunto entre la universidad y la empresa."
            },
            {
                paso: "4",
                titulo: "Presentación de Informe",
                desc: "Aprobación formal de la institución y del tutor académico."
            },
            {
                paso: "5",
                titulo: "Defensa Primer Panel",
                desc: "Exposición de propuesta de intervención y resultados del diagnóstico."
            }
        ],

        cronograma: [
            {
                fecha: "Semana 1 - 2",
                actividad: "Formalización de convenio y diagnóstico de la empresa"
            },
            {
                fecha: "Semana 3 - 6",
                actividad: "Diseño e implementación del plan de trabajo"
            },
            {
                fecha: "Semana 7",
                actividad: "Evaluación de avances por el Tutor Institucional"
            },
            {
                fecha: "Semana 9 - 10",
                actividad: "Defensa oficial del Primer Panel"
            }
        ],

        docs: {
            tribunal: "https://docs.google.com/document/d/ejemplo-trabajo-tribunal",
            elementos: "https://docs.google.com/document/d/ejemplo-trabajo-elementos",
            proceso: "https://docs.google.com/document/d/ejemplo-trabajo-proceso",
            cronograma: "https://docs.google.com/document/d/ejemplo-trabajo-cronograma"
        }
    }
};


/* =========================================================
   NAVEGACIÓN ENTRE MODALIDADES
   ========================================================= */

function openModalidad(key) {
    const data = dataModalidades[key];

    if (!data) {
        console.error("No existe la modalidad:", key);
        return;
    }

    document.getElementById("modalidad-title").textContent =
        data.titulo;

    document.getElementById("modalidad-definition").textContent =
        data.definicion;


    // Funciones del tribunal
    const tribunalContainer =
        document.getElementById("tribunal-content");

    tribunalContainer.innerHTML = data.tribunal.map(item => `
        <div class="mb-3">
            <h4 class="font-bold text-black font-typewriter text-base sm:text-lg">
                • ${item.rol}:
            </h4>
            <p class="text-sm sm:text-base text-gray-800 ml-4">
                ${item.desc}
            </p>
        </div>
    `).join("");


    // Elementos de competencia
    const elementosContainer =
        document.getElementById("elementos-content");

    elementosContainer.innerHTML = `
        <ul class="space-y-2">
            ${data.elementos.map(elemento => `
                <li class="flex items-start gap-2 text-sm sm:text-base text-gray-800">
                    <i class="fa-solid fa-check text-black mt-1"></i>
                    <span>${elemento}</span>
                </li>
            `).join("")}
        </ul>
    `;


    // Proceso para el primer panel
    const procesoContainer =
        document.getElementById("proceso-content");

    procesoContainer.innerHTML = `
        <div class="space-y-4">
            ${data.proceso.map(paso => `
                <div class="flex items-start gap-4 p-3 bg-cream/40 rounded-xl border border-black/10">
                    <div class="w-8 h-8 rounded-full bg-black text-cream flex items-center justify-center font-bold text-sm shrink-0">
                        ${paso.paso}
                    </div>

                    <div>
                        <h5 class="font-bold text-gray-900">
                            ${paso.titulo}
                        </h5>

                        <p class="text-xs sm:text-sm text-gray-700">
                            ${paso.desc}
                        </p>
                    </div>
                </div>
            `).join("")}
        </div>
    `;


    // Cronograma
    const cronogramaContainer =
        document.getElementById("cronograma-content");

    cronogramaContainer.innerHTML = `
        <div class="overflow-x-auto">
            <table class="w-full text-left text-xs sm:text-sm border-collapse">
                <thead>
                    <tr class="border-b-2 border-black bg-black/5">
                        <th class="p-2 font-bold font-typewriter">
                            Fecha / Periodo
                        </th>
                        <th class="p-2 font-bold font-typewriter">
                            Actividad / Hito
                        </th>
                    </tr>
                </thead>

                <tbody>
                    ${data.cronograma.map(item => `
                        <tr class="border-b border-black/10 hover:bg-black/5">
                            <td class="p-2 font-semibold text-gray-900 whitespace-nowrap">
                                ${item.fecha}
                            </td>
                            <td class="p-2 text-gray-800">
                                ${item.actividad}
                            </td>
                        </tr>
                    `).join("")}
                </tbody>
            </table>
        </div>
    `;
// ==========================================
// RENDERIZAR MATERIAL DE APOYO
// ==========================================

const materialContainer = document.getElementById("material-content");

if (materialContainer) {

    const botonesMaterial = data.materialApoyo.map(item => {

        const clases = `
            w-full min-h-[64px]
            flex items-center gap-3
            px-4 py-3
            rounded-xl
            bg-black text-cream
            text-left text-sm font-semibold
            transition-colors
            hover:bg-gray-800
        `;

        const icono = `
            <i class="fa-solid fa-file-lines text-lg"></i>
            <span class="flex-1">${item.nombre}</span>
        `;

        // Si existe una URL, generar un enlace funcional.
        if (item.url && item.url.trim() !== "") {

            return `
                <a
                    href="${item.url}"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="${clases}"
                >
                    ${icono}

                    <i class="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
            `;

        }

        // Si todavía no existe una URL, mostrar el botón deshabilitado.
        return `
            <button
                type="button"
                disabled
                title="Enlace pendiente de configuración"
                class="${clases} opacity-50 cursor-not-allowed"
            >
                ${icono}

                <i class="fa-solid fa-lock"></i>
            </button>
        `;

    }).join("");


    // Mostrar los seis botones en una cuadrícula adaptable.
    materialContainer.innerHTML = `

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">

            ${botonesMaterial}

        </div>

        <p class="text-xs text-gray-500 mt-3">
            Selecciona el material de apoyo que necesites consultar.
        </p>

    `;

}

    // Enlaces a los documentos
    document.getElementById("btn-doc-tribunal").href =
        data.docs.tribunal;

    document.getElementById("btn-doc-proceso").href =
        data.docs.proceso;

    document.getElementById("btn-doc-cronograma").href =
        data.docs.cronograma;


    // Cerrar acordeones anteriores
    closeAllAccordions();


    // Mostrar la sección
    const screen = document.getElementById("section-screen");

    screen.classList.remove("hidden");

    // Reiniciar la animación si se vuelve a abrir
    screen.classList.remove("slide-up-enter");
    void screen.offsetWidth;
    screen.classList.add("slide-up-enter");

    document.body.style.overflow = "hidden";
}


function closeModalidad() {
    const screen = document.getElementById("section-screen");

    screen.classList.add("hidden");
    screen.classList.remove("slide-up-enter");

    document.body.style.overflow = "auto";
}


/* =========================================================
   ACORDEONES
   ========================================================= */

function toggleAccordion(contentId, arrowId) {
    const content = document.getElementById(contentId);
    const arrow = document.getElementById(arrowId);

    if (!content || !arrow) {
        console.error(
            "No se encontró el acordeón:",
            contentId,
            arrowId
        );
        return;
    }

    const isOpen = content.classList.contains("active");

    if (isOpen) {
        content.classList.remove("active");
        arrow.classList.remove("rotate");
    } else {
        content.classList.add("active");
        arrow.classList.add("rotate");
    }
}


function closeAllAccordions() {
    document.querySelectorAll(".accordion-content").forEach(content => {
        content.classList.remove("active");
    });

    document.querySelectorAll(".triangle-icon").forEach(arrow => {
        arrow.classList.remove("rotate");
    });
}


/* =========================================================
   PREPARACIÓN PARA GOOGLE SHEETS
   ========================================================= */

async function loadDataFromGoogleSheets() {
    // La conexión real se implementará posteriormente.
    console.log(
        "Estructura lista para consumir Google Sheets API / Apps Script."
    );
}


/* =========================================================
   PANTALLA DE CARGA
   ========================================================= */

(function () {
    const inicioCarga = Date.now();
    const tiempoMinimo = 2000;
    const tiempoMaximo = 8000;

    let ocultamientoProgramado = false;


    function iniciarPantallaCarga() {
        const pantallaCarga =
            document.getElementById("pantalla-carga");

        if (!pantallaCarga) {
            console.error(
                "No se encontró el elemento #pantalla-carga."
            );
            return;
        }


        function ocultarPantallaCarga() {
            if (ocultamientoProgramado) {
                return;
            }

            ocultamientoProgramado = true;

            const tiempoTranscurrido =
                Date.now() - inicioCarga;

            const tiempoRestante = Math.max(
                0,
                tiempoMinimo - tiempoTranscurrido
            );


            setTimeout(function () {
                pantallaCarga.classList.add("ocultar");

                // Retirar el elemento cuando termine el desvanecimiento.
                setTimeout(function () {
                    if (pantallaCarga.isConnected) {
                        pantallaCarga.remove();
                    }
                }, 700);

            }, tiempoRestante);
        }


        // Si ya terminó la carga, no esperamos otro evento.
        if (document.readyState === "complete") {
            ocultarPantallaCarga();
        } else {
            window.addEventListener(
                "load",
                ocultarPantallaCarga,
                { once: true }
            );
        }


        // Respaldo para que no permanezca bloqueada indefinidamente.
        const tiempoRestanteMaximo = Math.max(
            0,
            tiempoMaximo - (Date.now() - inicioCarga)
        );

        setTimeout(
            ocultarPantallaCarga,
            tiempoRestanteMaximo
        );
    }


    // Esperar a que exista el HTML de la pantalla de carga.
    if (document.readyState === "loading") {
        document.addEventListener(
            "DOMContentLoaded",
            iniciarPantallaCarga,
            { once: true }
        );
    } else {
        iniciarPantallaCarga();
    }

})();


// Hacer accesibles las funciones desde los onclick del HTML.
window.openModalidad = openModalidad;
window.closeModalidad = closeModalidad;
window.toggleAccordion = toggleAccordion;


// Ejecutar la carga de datos preliminar.
window.addEventListener("DOMContentLoaded", function () {
    loadDataFromGoogleSheets();
});