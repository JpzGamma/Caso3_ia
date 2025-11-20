## Gamma SOC Assistant – Frontend
Interfaz web sencilla para enviar preguntas a un flujo de n8n mediante un webhook. Permite probar un asistente SOC que usa RAG + guardrails + simulacion de consultas a SIEM.

## 📌 Requisitos
-Git

-Visual Studio Code

-Extensión Live Server

-Navegador 

-Webhook de n8n funcionando

## 📥 Clonar el repositorio

bash --> git clone https://github.com/JpzGamma/Caso3_ia.git

cd Caso3_ia.git

code .

## Instalar  (Live Server)

1) Abre la carpeta del repositorio en Visual Studio Code.

2) Instala la extensión Live Server:

-Ctrl + Shift + X

-Buscar Live Server

-Instalar

3) En el archivo index.html, clic derecho → Open with Live Server.

La interfaz se abrirá automáticamente en el navegador predeterminado

Nota : En config.js se configura el webhook que en este caso seria el de mi workflow Caso 3 sin http

## Agregar Flujos al N8N

1) Abrir la carpeta de PY_Caso3/Workflows.
   
3) Crear 3 flujos nuevos en n8n, click en import from file e importar los 3 archivos que estan dentro de la carpeta (Cada uno en flujos diferentes).

## 🧪 Pasos para probar todo el proyecto:

1) Ejecutar workflow Caso 3/Agente-clasificacion-malware
2) Validar que exista el workflow buscar_hash_en_siem_subworkflow
3) Ejecutar workflow  Caso3 sin http
4) Click derecho en index.html y ejecutar el live server
5) Ingresar pregunta de prueba :
   
-¿Qué técnicas utiliza la familia de malware TrickBot dentro de la red?

-Busca el hash 4e4e0b0e95 en nuestros logs y dime si se ha detectado.

-¿Cuál es la fórmula química del agua?

-Revisa en el SIEM si el hash aaaaaaaaaaaaaa se ha visto recientemente y en qué host.

-Revisa en el SIEM si el hash 7f8a9b1c2d se ha visto recientemente y en qué host.

-Revisa en el SIEM si el hash 9a8b7c6d5e se ha visto recientemente y en qué host.

-¿Cómo se caracteriza el ransomware Ryuk en nuestra base de datos de malware?

6) Click en enviar pregunta y esperar el resultado.