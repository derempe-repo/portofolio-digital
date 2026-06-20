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
  image: string;
  imageAlt: string;
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
  { label: "Fokus utama", value: "Full-Stack Web Development" },
  { label: "Tujuan karier", value: "Menjadi Web Developer yang membangun produk digital berdampak." },
];

export const projects: Project[] = [
  {
    title: "Sistem Informasi Akademik Mini",
    type: "Tugas kuliah",
    summary: "Prototipe sistem akademik untuk mengelola data mahasiswa, mata kuliah, dan nilai secara terstruktur.",
    image: "/project-akademik.png",
    imageAlt: "Mockup dashboard sistem informasi akademik dengan tabel data dan grafik ringkasan",
    link: "https://github.com/bayuwidiartana/sistem-informasi-akademik-mini",
    background: "Administrasi data akademik sering tersebar di banyak dokumen sehingga proses pencarian dan pembaruan data menjadi lambat.",
    goal: "Membuat prototipe sistem yang membantu pengelolaan data mahasiswa, mata kuliah, dan nilai secara lebih terstruktur.",
    role: "Merancang alur fitur, membangun antarmuka, membuat skema basis data, dan menguji alur input data.",
    tools: ["React", "Node.js", "PostgreSQL", "Supabase"],
    result: "Prototipe berjalan dengan fitur pencatatan data, pencarian cepat, dan tampilan ringkasan akademik.",
  },
  {
    title: "Dashboard Analisis Data UMKM",
    type: "Proyek pribadi",
    summary: "Dashboard analitik untuk membaca tren penjualan, produk unggulan, dan performa mingguan UMKM.",
    image: "/project-umkm.png",
    imageAlt: "Mockup dashboard analisis data UMKM dengan grafik tren dan metrik penjualan",
    link: "https://github.com/bayuwidiartana/dashboard-analisis-umkm",
    background: "Pelaku UMKM membutuhkan cara sederhana untuk membaca tren penjualan tanpa harus membuka banyak lembar kerja manual.",
    goal: "Menyajikan data transaksi menjadi insight visual yang mudah dipahami untuk evaluasi penjualan mingguan.",
    role: "Membersihkan data, menentukan metrik utama, membuat visualisasi, dan menyusun dashboard responsif.",
    tools: ["Python", "Pandas", "React", "Chart.js"],
    result: "Dashboard menampilkan tren omzet, produk unggulan, dan ringkasan performa yang siap dipresentasikan.",
  },
  {
    title: "Website Kampanye Organisasi",
    type: "Proyek organisasi",
    summary: "Landing page kampanye organisasi dengan struktur informasi publik, agenda, dan ajakan partisipasi.",
    image: "/project-kampanye.png",
    imageAlt: "Mockup website kampanye organisasi dengan tampilan desktop dan mobile",
    link: "https://github.com/bayuwidiartana/website-kampanye-organisasi",
    background: "Kegiatan organisasi membutuhkan halaman publik yang mampu menjelaskan program, agenda, dan ajakan partisipasi secara jelas.",
    goal: "Membangun landing page informatif dengan struktur konten ringkas, visual kuat, dan navigasi yang mudah dipahami.",
    role: "Menyusun copy, membuat rancangan visual, membangun halaman frontend, dan mengoptimalkan tampilan mobile.",
    tools: ["Figma", "Vite", "React", "Motion"],
    result: "Halaman kampanye siap digunakan untuk publikasi kegiatan dan membantu calon peserta memahami program.",
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Technical Skill",
    icon: Code,
    items: ["Frontend development", "Responsive layout", "API integration", "Database modeling"],
  },
  {
    title: "Bahasa Pemrograman",
    icon: BracketsCurly,
    items: ["JavaScript", "TypeScript", "Python", "PHP"],
  },
  {
    title: "Software dan Tools",
    icon: FigmaLogo,
    items: ["Figma", "GitHub", "VS Code", "Supabase"],
  },
  {
    title: "Desain dan Motion",
    icon: Palette,
    items: ["UI design", "Design system dasar", "Micro-interaction", "Prototyping"],
  },
  {
    title: "Analisis Data",
    icon: ChartLineUp,
    items: ["Data cleaning", "Dashboard", "Visualisasi data", "Machine learning dasar"],
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
