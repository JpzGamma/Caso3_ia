Gamma SOC Assistant – Frontend
Interfaz web sencilla para enviar preguntas a un flujo de n8n mediante un webhook. Permite probar un asistente SOC que usa RAG + guardrails + simulacion de consultas a SIEM.

📌 Requisitos
Git

Visual Studio Code

Extensión Live Server

Navegador moderno

Webhook de n8n funcionando

📥 Clonar el repositorio
bash --> git clone https://<URL_DEL_REPO>.git

cd <NOMBRE_DEL_REPO>

code .

Ejecutar el proyecto localmente (Live Server)
Abre la carpeta del repositorio en Visual Studio Code.

Instala la extensión Live Server:

Ctrl + Shift + X

Buscar Live Server

Instalar

En el archivo index.html, clic derecho → Open with Live Server.

La interfaz se abrirá automáticamente en el navegador predeterminado

🧪 Preguntas de prueba (para validar tu flujo n8n)
Utiliza estas preguntas para probar el asistente y verificar el comportamiento del RAG, guardrail y consultas simuladas al SIEM:

¿Qué técnicas utiliza la familia de malware TrickBot dentro de la red?

Busca el hash 4e4e0b0e95 en nuestros logs y dime si se ha detectado.

¿Cuál es la fórmula química del agua?

Revisa en el SIEM si el hash aaaaaaaaaaaaaa se ha visto recientemente y en qué host.

Revisa en el SIEM si el hash 7f8a9b1c2d se ha visto recientemente y en qué host.

Revisa en el SIEM si el hash 9a8b7c6d5e se ha visto recientemente y en qué host.

¿Cómo se caracteriza el ransomware Ryuk en nuestra base de datos de malware?
