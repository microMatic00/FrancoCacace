// =========================================================
//  PDF EXPORT — usa html2pdf.js (CDN, sin dependencias)
// =========================================================

function downloadPlayerPDF() {
    const btn = document.getElementById("btn-pdf");
    const originalText = btn.innerHTML;

    // Feedback visual mientras genera
    btn.innerHTML = `<svg class="animate-spin w-4 h-4 mr-2 inline" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path></svg> Generando...`;
    btn.disabled = true;

    const element = document.getElementById("player-card");

    const opt = {
        margin: [8, 8, 8, 8],           // top, left, bottom, right (mm)
        filename: `Ficha_${PLAYER.name.replace(/ /g, "_")}.pdf`,
        image: { type: "jpeg", quality: 0.95 },
        html2canvas: {
            scale: 2,
            useCORS: true,
            backgroundColor: "#0D0D0D",
            logging: false,
        },
        jsPDF: {
            unit: "mm",
            format: "a4",
            orientation: "portrait",
        },
        pagebreak: { mode: ["avoid-all", "css", "legacy"] },
    };

    html2pdf()
        .set(opt)
        .from(element)
        .save()
        .then(() => {
            btn.innerHTML = `✅ ¡Descargado!`;
            setTimeout(() => {
                btn.innerHTML = originalText;
                btn.disabled = false;
            }, 2500);
        })
        .catch(() => {
            btn.innerHTML = originalText;
            btn.disabled = false;
            alert("No se pudo generar el PDF. Intentá de nuevo.");
        });
}

function openWhatsApp() {
    const msg = encodeURIComponent(PLAYER.links.whatsappMessage);
    const url = `https://wa.me/${PLAYER.links.whatsapp}?text=${msg}`;
    window.open(url, "_blank");
}
