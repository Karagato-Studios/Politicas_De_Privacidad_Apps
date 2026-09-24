/**
 * Karagato Studios - Main JS Interactions
 * Handles copy-to-clipboard for Google Play Console URL,
 * DMCA notice email generator, and navigation helpers.
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Current Year auto-update
  const yearEls = document.querySelectorAll('.current-year');
  const currentYear = new Date().getFullYear();
  yearEls.forEach(el => el.textContent = currentYear);

  // 2. Play Store URL Copy Helper
  const copyBtn = document.getElementById('copyPlayStoreUrl');
  if (copyBtn) {
    copyBtn.addEventListener('click', async () => {
      const urlToCopy = window.location.href.split('#')[0];
      try {
        await navigator.clipboard.writeText(urlToCopy);
        const originalText = copyBtn.innerHTML;
        copyBtn.innerHTML = `
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
          <span style="color: #10b981;">¡URL Copiada para Play Console!</span>
        `;
        setTimeout(() => {
          copyBtn.innerHTML = originalText;
        }, 3000);
      } catch (err) {
        // Fallback for older browsers
        const textarea = document.createElement('textarea');
        textarea.value = urlToCopy;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        alert('URL copiada al portapapeles: ' + urlToCopy);
      }
    });
  }

  // 3. DMCA Form to Email Generator
  const dmcaForm = document.getElementById('dmcaComplaintForm');
  if (dmcaForm) {
    dmcaForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const claimantName = document.getElementById('claimantName')?.value.trim() || '';
      const claimantCompany = document.getElementById('claimantCompany')?.value.trim() || 'Titular Individual';
      const claimantEmail = document.getElementById('claimantEmail')?.value.trim() || '';
      const copyrightedWork = document.getElementById('copyrightedWork')?.value.trim() || '';
      const infringingMaterial = document.getElementById('infringingMaterial')?.value.trim() || '';
      const goodFaith = document.getElementById('goodFaithCheck')?.checked;

      if (!goodFaith) {
        alert('Debe confirmar la declaración de buena fe y bajo pena de perjurio para proceder.');
        return;
      }

      const recipient = 'karagatostudios@gmail.com'; // Correo de contacto oficial
      const subject = `[NOTIFICACION FORMAL DMCA] - Retro Game Studio - ${claimantCompany}`;
      
      const body = `AVISO FORMAL DE INFRACCIÓN DE DERECHOS DE AUTOR (DMCA)
A la atención del Agente de Derechos de Autor de Karagato Studios:

1. DATOS DEL RECLAMANTE / TITULAR DE DERECHOS:
- Nombre completo: ${claimantName}
- Organización / Titular: ${claimantCompany}
- Correo electrónico de contacto: ${claimantEmail}

2. IDENTIFICACIÓN DE LA OBRA PROTEGIDA POR DERECHOS DE AUTOR:
${copyrightedWork}

3. IDENTIFICACIÓN Y UBICACIÓN DEL MATERIAL PRESUNTAMENTE INFRACTOR:
- Aplicación: Retro Game Studio
- Detalle / Ubicación:
${infringingMaterial}

4. DECLARACIONES LEGALES DE BUENA FE:
- Declaro de buena fe que el uso del material protegido descrito no está autorizado por el titular de los derechos de autor, su agente o la ley.
- Declaro, bajo pena de perjurio, que la información proporcionada en esta notificación es exacta y verídica, y que estoy autorizado para actuar en nombre del titular de los derechos de autor presuntamente infringidos.

5. FIRMA ELECTRÓNICA:
/s/ ${claimantName}
Fecha: ${new Date().toLocaleDateString('es-ES')}

---
Generado a través del Centro Legal de Karagato Studios`;

      const mailtoUrl = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.location.href = mailtoUrl;
    });
  }
});
