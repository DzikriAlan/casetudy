const WA_NUMBER = "6282317908355"

const WA_TEMPLATE = `Halo kak, saya tertarik untuk mengunggah case study. Kira-kira proses atau langkah-langkahnya seperti apa ya? Terima kasih`

export function openWhatsApp() {
  const url = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(WA_TEMPLATE)}`
  window.open(url, "_blank")
}
