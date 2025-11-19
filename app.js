const form = document.getElementById('questionForm');
const questionInput = document.getElementById('question');
const responseDiv = document.getElementById('response');
const n8nResponseDiv = document.getElementById('n8nResponse');
const button = form.querySelector('button');
const botAvatar = document.getElementById('botAvatar');
const botStatus = document.getElementById('botStatus');

form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const question = questionInput.value.trim();
    if (!question) return;

    const webhookUrl = window.APP_CONFIG.WEBHOOK_URL;

    // Reset visual
    responseDiv.textContent = '';
    responseDiv.className = '';
    n8nResponseDiv.textContent = 'Procesando tu pregunta...';
    n8nResponseDiv.classList.remove('visible');
    n8nResponseDiv.classList.add('loading', 'answer-loading-text');

    // Bot pensando
    botAvatar.classList.add('thinking');
    botStatus.innerHTML = '<i class="fas fa-circle-notch fa-spin"></i> Analizando tu pregunta...';

    // Botón loading
    button.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
    button.disabled = true;

    const payload = {
        question,
        timestamp: new Date().toISOString()
    };

    try {
        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), 120000);

        const response = await fetch(webhookUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload),
            signal: controller.signal
        });

        clearTimeout(timeout);

        const responseText = await response.text();

        if (response.ok) {
            responseDiv.textContent = '✅ ¡Pregunta enviada exitosamente!';
            responseDiv.className = 'success';

            try {
                const json = JSON.parse(responseText);
                const finalText = json.resultado || json.respuesta || JSON.stringify(json, null, 2);
                n8nResponseDiv.textContent = finalText;
            } catch {
                n8nResponseDiv.textContent = responseText;
            }

        } else {
            responseDiv.textContent = `❌ Error ${response.status}: ${response.statusText}`;
            responseDiv.className = 'error';
            n8nResponseDiv.textContent = 'Error al obtener respuesta de n8n.';
        }

    } catch (error) {
        responseDiv.className = 'error';

        if (error.name === 'AbortError') {
            responseDiv.textContent = '⚠️ Tiempo de espera agotado (timeout)';
        } else {
            responseDiv.textContent = '❌ Error de conexión: ' + error.message;
        }

        n8nResponseDiv.textContent = 'Error de conexión con el webhook.';

    } finally {
        button.innerHTML = '<i class="fas fa-paper-plane"></i> Enviar Pregunta';
        button.disabled = false;

        botAvatar.classList.remove('thinking');
        botStatus.innerHTML = '<i class="fas fa-circle"></i> Listo para recibir otra pregunta.';

        n8nResponseDiv.classList.remove('loading', 'answer-loading-text');
        n8nResponseDiv.classList.add('visible');
    }
});
