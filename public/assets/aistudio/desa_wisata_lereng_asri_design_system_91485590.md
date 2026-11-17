---
name: "Lereng Asri Design System"
description: "Sistem desain mobile-first hangat, ramah, dan bernuansa alam pedesaan untuk Desa Wisata Lereng Asri."
---

## Overview

Sistem desain untuk website Desa Wisata Lereng Asri menghadirkan suasana alam pegunungan yang asri, hangat, dan menyambut ramah bagi calon wisatawan (keluarga, pemuda, rombongan). Gaya visual memadukan ketenangan hijau daun pegunungan, kehangatan aksen terakota pedesaan, serta latar krem bersih yang membuat informasi wisata mudah dicerna di layar ponsel.

Antarmuka berfokus pada keterbacaan tinggi (teks isi 17px line-height 1.6), kemudahan sentuh di perangkat bergerak (tombol min-h 56px, touch target min 48px), serta visual foto desa nyata yang bersahaja tanpa efek gradien berlebihan atau bayangan tebal.

## Colors

Palet warna terinspirasi dari bentang alam lereng pegunungan, sawah terasering, dan kehangatan sambutan warga desa.

- **Deep Leaf Green (#2F6B3F):** Warna utama untuk judul, bilah navigasi, dan aksen alam pegunungan yang menyejukkan.
- **Sprout Green (#8DB580):** Warna hijau pucuk daun untuk latar kartu sekunder, penanda kategori, dan aksen latar yang lembut.
- **Earthy Terracotta (#D9822B):** Warna oranye tanah hangat untuk tombol utama (Call-to-Action) dan penonjolan harga paket.
- **Warm Cream (#FAF5EA):** Latar belakang halaman yang ramah di mata, bersih, dan menghindari kesan steril warna putih murni.
- **Dark Bark (#2B2A26):** Warna teks isi utama dengan kontras optimal terhadap latar krem.
- **WhatsApp Green (#25D366):** Khusus aksi pemesanan dan komunikasi langsung via WhatsApp.

```yaml
colors:
  primary: "#2F6B3F"
  on-primary: "#FFFFFF"
  sprout: "#8DB580"
  on-sprout: "#1A3822"
  accent: "#D9822B"
  on-accent: "#303030"
  whatsapp: "#25D366"
  on-whatsapp: "#494949"
  surface: "#FFFFFF"
  on-surface: "#2B2A26"
  background: "#FAF5EA"
  on-background: "#2B2A26"
  surface-variant: "#F3ECE0"
  on-surface-variant: "#4A473F"
  outline: "#D8CEBE"
```

## Typography

Sistem tipografi menggunakan kombinasi serif hangat (Lora) untuk judul yang berkarakter ramah khas cerita desa, dipadukan dengan sans-serif bersih (Nunito Sans) untuk teks bacaan yang mudah dibaca di ponsel.

```yaml
typography:
  display-lg:
    fontFamily: "Lora"
    fontSize: 34px
    fontWeight: 700
    lineHeight: 42px
    letterSpacing: -0.2px
  display-lg-mobile:
    fontFamily: "Lora"
    fontSize: 28px
    fontWeight: 700
    lineHeight: 36px
    letterSpacing: -0.1px
  headline-lg:
    fontFamily: "Lora"
    fontSize: 26px
    fontWeight: 700
    lineHeight: 34px
  headline-lg-mobile:
    fontFamily: "Lora"
    fontSize: 22px
    fontWeight: 700
    lineHeight: 30px
  headline-md:
    fontFamily: "Lora"
    fontSize: 20px
    fontWeight: 600
    lineHeight: 28px
  headline-sm:
    fontFamily: "Lora"
    fontSize: 18px
    fontWeight: 600
    lineHeight: 26px
  body-lg:
    fontFamily: "Nunito Sans"
    fontSize: 17px
    fontWeight: 400
    lineHeight: 27px
  body-md:
    fontFamily: "Nunito Sans"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 24px
  body-sm:
    fontFamily: "Nunito Sans"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 21px
  label-lg:
    fontFamily: "Nunito Sans"
    fontSize: 18px
    fontWeight: 700
    lineHeight: 24px
  label-md:
    fontFamily: "Nunito Sans"
    fontSize: 15px
    fontWeight: 600
    lineHeight: 20px
  label-sm:
    fontFamily: "Nunito Sans"
    fontSize: 13px
    fontWeight: 600
    lineHeight: 18px
```

## Layout & Spacing

Tata letak memprioritaskan antarmuka mobile-first (lebar viewport 390px standar) dengan ruang sentuh yang longgar dan padding yang konsisten.

```yaml
spacing:
  gutter-xs: 4px
  gutter-sm: 8px
  gutter-md: 12px
  gutter-lg: 16px
  gutter-xl: 24px
  section: 32px
  page-margin: 16px
```

## Elevation & Depth

Desain mengutamakan estetika bersih dan datar dengan bayangan sangat tipis (ambient soft shadow) dan batas garis lembut bernuansa tanah `#D8CEBE` untuk memisahkan kartu tanpa beban visual berlebih. Tidak ada efek gradien neon atau glassy blur.

## Shapes

Bentuk sudut membulat 12px hingga 16px pada kartu konten, wadah gambar, dan tombol untuk memperkuat kesan ramah, akrab, dan organik.

```yaml
rounded:
  sm: 6px
  md: 12px
  lg: 16px
  xl: 20px
  full: 9999px
```

## Motion & Micro-interaction

Transisi sederhana pada penekanan tombol dan kartu interaktif dengan durasi halus 150ms agar aplikasi terasa gesit dan responsif di genggaman.

```yaml
motion:
  state-change:
    duration: 150ms
    delay: 0ms
    timingFunction: ease-out
```

## Voice & Content Strategy

- **Nada Bicara:** Hangat, bersahabat, sopan, dan mengayomi seperti tuan rumah pedesaan yang menyambut tamu keluarga.
- **Bahasa:** Bahasa Indonesia baku yang santun dan akrab.
- **Format Aksi:** Tombol dengan instruksi langsung dan jelas ("Lihat Paket Wisata", "Pesan lewat WhatsApp", "Buka di Google Maps").

## Components

Component implementations live as individual HTML sticker sheet files in
`components/`. Each file contains the canonical, styled HTML components with
`<!-- COMPONENT: name -->` comment markers. Read each file before use.

- **Button** → `@components/button.html`: `button-primary`, `button-icon`, `button-with-icon`
- **Card** → `@components/card.html`: `card-elevated`, `card-action`, `card-interactive`, `card-interactive-2`
- **Typography** → `@components/typography.html`: `typography-display`, `typography-body`, `typography-label`
