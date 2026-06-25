import { BracketsCurly, ChartLineUp, Code, Database, DeviceMobile, FigmaLogo, GithubLogo, GlobeHemisphereWest, LinkedinLogo, Palette, Phone, PresentationChart, UsersThree } from "@phosphor-icons/react";
import type { Icon } from "@phosphor-icons/react";

export type NavItem = {
  href: string;
  label: string;
};

export type ProfileFact = {
  label: string;
  value: string;
};

export type Project = {
  title: string;
  type: string;
  summary: string;
  cardImage: {
    desktop: string;
    mobile: string;
    alt: string;
    width: number;
    height: number;
  };
  detailImage: {
    desktop: string;
    alt: string;
    width: number;
    height: number;
  };
  link: string;
  background: string;
  goal: string;
  role: string;
  tools: string[];
  result: string;
};

export type SkillGroup = {
  title: string;
  icon: Icon;
  items: string[];
};

export type ContactItem = {
  label: string;
  value: string;
  href: string;
  icon: Icon;
};

export const navItems: NavItem[] = [
  { href: "#home", label: "Home" },
  { href: "#profile", label: "Profil" },
  { href: "#projects", label: "Proyek" },
  { href: "#skills", label: "Skill" },
  { href: "#contact", label: "Kontak" },
];

export const profileFacts: ProfileFact[] = [
  { label: "Nama lengkap", value: "I Putu Bayu Widiartana" },
  { label: "Program studi", value: "Teknologi Informasi" },
  { label: "Fokus utama", value: "Fokus pada pengembangan web full-stack dengan optimasi performa" },
  { label: "Tujuan karier", value: "Menjadi Web Developer yang membangun produk digital berdampak." },
];

export const projects: Project[] = [
  {
    title: "Landing Page ForeverBarber Bali",
    type: "Lomba Web Creation Competition - 2026",
    summary: "Landing page untuk ForeverBarber Bali yang menampilkan layanan, galeri, dan formulir pemesanan online.",
    cardImage: {
      desktop: "/forever-barber-depan-desktop.webp",
      mobile: "/forever-barber-depan-mobile.webp",
      alt: "hero section landing page ForeverBarber Bali dengan gambar layanan dan tombol pemesanan",
      width: 1280,
      height: 720,
    },
    detailImage: {
      desktop: "/forever-barber-detail-desktop.webp",
      alt: "Mockup detail website ForeverBarber Bali dengan layanan, galeri, dan formulir reservasi",
      width: 1280,
      height: 2276,
    },
    link: "https://foreverbarber.web.id/",
    background:
      "Proyek ini dibuat dalam rangka Lomba Web Creation Competition - 2026 yang bertemakan digitalisasi UMKM, yang dilatarbelakangi untuk membantu Forever Barber Bali memiliki media promosi dan layanan digital yang modern, informatif, serta memudahkan pelanggan melihat layanan, memilih barber, memperoleh rekomendasi gaya rambut, dan melakukan reservasi.",
    goal: "Meningkatkan pengalaman pelanggan melalui website barbershop yang responsif, sekaligus menyediakan fitur konsultasi gaya rambut berbasis AI dan reservasi terintegrasi WhatsApp.",
    role: "Front-end developer dan UI/UX designer, meliputi perancangan antarmuka, pengembangan fitur interaktif, integrasi AI Advisor/chatbot, galeri, serta formulir booking.",
    tools: ["HTML5", "CSS3", "JavaScript", "Bootstrap 5"],
    result:
      "Website company profile barbershop yang responsif dengan katalog layanan dan harga, profil barber, galeri gaya rambut, lokasi, formulir reservasi WhatsApp, chatbot layanan pelanggan, serta AI Advisor untuk menganalisis bentuk wajah dan memberikan rekomendasi gaya rambut.",
  },
  {
    title: "Web LMS (Learning Management System) Edutrack-COE",
    type: "Tugas Kuliah - 2026",
    summary: "Web LMS untuk mendukung proses pembelajaran digital dengan fitur manajemen kelas, materi, tugas, kuis, nilai, dan sertifikat digital.",
    cardImage: {
      desktop: "/edutrack-depan-desktop.webp",
      mobile: "/edutrack-depan-mobile.webp",
      alt: "Tampilan dashboard Learning Management System Edutrack-COE",
      width: 1280,
      height: 801,
    },
    detailImage: {
      desktop: "/edutrack-detail-desktop.webp",
      alt: "Tampilan detail Learning Management System Edutrack-COE",
      width: 1280,
      height: 1600,
    },
    link: "https://edutrack-coe.vercel.app/login",
    background:
      "Proyek merupakan tugas UAS mata kuliah Proyek Pengembangan TI, latarbelakang proyek ini dibuat untuk mendukung proses pembelajaran digital yang terstruktur, mulai dari penyampaian materi hingga evaluasi hasil belajar. Sistem dirancang agar mahasiswa, dosen, admin, dan super admin memiliki akses serta fitur sesuai perannya.",
    goal: "Memudahkan pengelolaan kelas, modul pembelajaran, tugas, kuis, nilai, progres belajar, forum diskusi, dan penerbitan sertifikat digital dalam satu platform web.",
    role: "Full-stack developer, meliputi perancangan antarmuka, pengembangan fitur frontend dan backend, perancangan database, implementasi autentikasi berbasis peran, pengelolaan file, serta pengujian aplikasi.",
    tools: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Supabase", "Drizzle ORM", "Vercel"],
    result:
      "Aplikasi LMS berbasis web dengan dashboard khusus untuk empat role pengguna, pengelolaan kelas dan materi, pengumpulan tugas, kuis dengan koreksi otomatis, pelacakan progres serta nilai, forum dan notifikasi, pengecekan plagiarisme sederhana, export laporan PDF/Excel, serta sertifikat digital dengan QR code untuk verifikasi.",
  },
  {
    title: "Web Company Profile Coffee Toffe",
    type: "Proyek Mandiri - 2023",
    summary: "Website company profile Coffee Toffe yang menampilkan menu, galeri, lokasi, dan formulir pemesanan online.",
    cardImage: {
      desktop: "/coffe-toffe-depan-desktop.webp",
      mobile: "/coffe-toffe-depan-mobile.webp",
      alt: "hero section landing page Coffee Toffe dengan gambar menu dan tombol pemesanan",
      width: 1280,
      height: 720,
    },
    detailImage: {
      desktop: "/coffe-toffe-detail-desktop.webp",
      alt: "Mockup detail website Coffee Toffe dengan menu, galeri, lokasi, dan formulir pemesanan",
      width: 1280,
      height: 1707,
    },
    link: "https://tubayu.github.io/",
    background: "Proyek ini merupakan latihan pribadi yang dilatarbelakangi oleh kebutuhan Coffe Toffe untuk memiliki media digital yang mampu memperkenalkan brand dan produk secara lebih luas dan profesional.",
    goal: "Tujuannya adalah membangun website company profile yang informatif, menarik, dan mudah diakses oleh pengguna.",
    role: "Membuat rancangan visual, membangun halaman frontend, dan mengoptimalkan tampilan mobile.",
    tools: ["HTML5", "CSS3", "JavaScript", "Bootstrap 5"],
    result: "Hasilnya adalah website company profile Coffe Toffe yang mampu menampilkan identitas brand dengan lebih kuat dan memberikan informasi secara efektif kepada pengunjung.",
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Technical Skill",
    icon: Code,
    items: ["Frontend development", "Responsive layout", "Database modeling"],
  },
  {
    title: "Bahasa Pemrograman",
    icon: BracketsCurly,
    items: ["JavaScript", "TypeScript", "Python", "PHP"],
  },
  {
    title: "Software dan Tools",
    icon: FigmaLogo,
    items: ["Figma", "GitHub", "Vercel", "Supabase"],
  },
  {
    title: "Desain dan Motion",
    icon: Palette,
    items: ["UI/UX design", "Graphic design", "Motion graphics"],
  },
  {
    title: "Analisis Data",
    icon: ChartLineUp,
    items: ["Data cleaning", "Machine learning dasar"],
  },
  {
    title: "Soft Skill",
    icon: UsersThree,
    items: ["Komunikasi", "Kepemimpinan", "Kolaborasi", "Manajemen waktu"],
  },
];

export const contactItems: ContactItem[] = [
  {
    label: "Email",
    value: "putuwidiart105@gmail.com",
    href: "mailto:putuwidiart105@gmail.com",
    icon: GlobeHemisphereWest,
  },
  {
    label: "Telepon",
    value: "+62 812-3456-7890",
    href: "tel:+6281234567890",
    icon: Phone,
  },
  {
    label: "LinkedIn",
    value: "www.linkedin.com/in/bayu-widiartana",
    href: "https://www.linkedin.com/in/bayu-widiartana-7503251a8",
    icon: LinkedinLogo,
  },
  {
    label: "GitHub",
    value: "github.com/tubayu",
    href: "https://github.com/tubayu?tab=repositories",
    icon: GithubLogo,
  },
];

export const profileHighlights = [
  {
    icon: DeviceMobile,
    title: "Antarmuka yang adaptif",
    text: "Membangun halaman yang tetap nyaman dibaca di layar kecil dan besar.",
  },
  {
    icon: Database,
    title: "Data yang terstruktur",
    text: "Menyusun informasi menjadi alur yang rapi dari input, proses, hingga output.",
  },
  {
    icon: PresentationChart,
    title: "Presentasi yang jelas",
    text: "Mengubah hasil kerja menjadi cerita visual yang mudah dipahami.",
  },
];
