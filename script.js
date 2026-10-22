/* ========================================================================
   BASE DE DATOS COMPLETA DE MODALIDADES
   (Fácilmente extensible o reemplazable mediante API / Google Sheets)
   ======================================================================== */

const dataModalidades = {
    tesis: {
        titulo: "Tesis de Grado",
        definicion: "Definición: Una tesis de grado es un trabajo de investigación original y argumentado que permite obtener un título académico. Consiste en plantear un problema, formular una hipótesis o objetivos, analizar evidencia y presentar conclusiones propias respaldadas bajo un rigor metodológico y científico.",
        tribunal: [
            {
                rol: "TUTOR",
                desc: "Guía metodológica y disciplinarmente al estudiante durante todo el proceso de investigación. Revisa avances, aprueba el documento preliminar y valida el cumplimiento académico."
            },
            {
                rol: "PANELISTA",
                desc: "Especialista académico o profesional encargado de evaluar el rigor del perfil, realizar observaciones constructivas y dictaminar la pertinencia técnica del trabajo."
            },
            {
                rol: "RELATOR",
                desc: "Responsable de coordinar las sesiones formales de evaluación, fiscalizar la transparencia del procedimiento e integrar el acta final del tribunal."
            }
        ],
        elementos: [
            "Competencia 1: Definición clara del problema de investigación y justificación científica/comercial.",
            "Competencia 2: Construcción de un marco teórico robusto y estado del arte actualizado.",
            "Competencia 3: Diseño metodológico cuantitativo o cualitativo riguroso.",
            "Competencia 4: Levantamiento, procesamiento y análisis crítico de datos empíricos.",
            "Competencia 5: Formulación de conclusiones, recomendaciones e impacto disciplinar."
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
        docs: {
            tribunal: "https://docs.google.com/document/d/ejemplo-tesis-tribunal",
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
            proceso: "https://docs.google