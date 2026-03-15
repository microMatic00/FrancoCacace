// =========================================================
//  PLAYER DATA — editar solo este archivo para cambiar jugador
// =========================================================
const PLAYER = {
  // --- PERSONAL ---
  name: "Juan Franco Cacace",
  nickname: "Franco",
  age: 25,
  birthdate: "2001-04-30", // ajustar fecha real
  height: "1.84 m",
  weight: "82 kg",
  nationality: "Argentina",
  flag: "🇦🇷",
  passport: "ARG", // "UE" si tiene pasaporte europeo
  hasEUPassport: false,

  // --- PERFIL TÉCNICO ---
  position: {
    primary: "LD",
    primaryFull: "Lateral Derecho",
    secondary: "LI",
    secondaryFull: "Lateral Izquierdo",
    tertiary: "DFC",
    tertiaryFull: "Defensor Central",
  },
  foot: "Derecho",
  club: "Águila CD",
  league: "Liga Mayor de Futbol de El Salvador",
  contractEnd: "Dic 2025",

  // --- LINKS ---
  links: {
    highlights: [
      {
        label: "Highlights 2024",
        youtubeId: "NprvLVxlhGo",
        url: "https://youtu.be/NprvLVxlhGo",
      },
      {
        label: "Resumen Temporada",
        youtubeId: "p_19BPx9Mbc",
        url: "https://www.youtube.com/watch?v=p_19BPx9Mbc",
      },
      {
        label: "Video 3",
        youtubeId: "AGxGqy19Bsw",
        url: "https://www.youtube.com/watch?v=AGxGqy19Bsw",
      },
    ],
    transfermarkt:
      "https://www.transfermarkt.com.ar/franco-cacace/profil/spieler/1015243",
    whatsapp: "5492215715299",
    whatsappMessage: "Hola Franco! Vi tu perfil y me interesa ",
  },

  // --- ESTADÍSTICAS (temporada actual) ---
  stats: [
    { label: "Partidos Jugados", value: "5" },
    { label: "Goles", value: "0" },
    { label: "Asistencias", value: "1" },
    { label: "Minutos Jugados", value: "2.240'" },
    { label: "Tiros a Puerta", value: "4" },
    { label: "Duelos Ganados", value: "61%" },
    { label: "Pases Clave / 90", value: "2.4" },
    { label: "Regates / 90", value: "3.1" },
  ],

  // --- AGENTE / CONTACTO ---
  agentName: "Representante",
};
