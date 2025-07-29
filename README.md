# 🌐 Vaniverse – Bridging Bharat’s Dialects with AI

<div align="center">
  <img src="assets/WhatsApp Image 2025-07-30 at 00.22.39_9351e8d2.jpg" alt="Vaniverse Banner" width="700"/>
  
  **A project by Team VaniVerse for India's Real-Time Speech Challenge 2025**  
  [![Live Demo](https://img.shields.io/badge/Live_Demo-Coming_Soon-orange?style=for-the-badge&logo=vercel)](https://vaniverse.vercel.app)
</div>

---

## ✨ At a Glance

| Category | Details |
|----------|---------|
| **Purpose** | Real-time speech translation for Indian dialects |
| **Tech Stack** | Python, Whisper, IndicTrans2, Vakyansh, FastAPI, Flutter |
| **Deployment** | Docker + Mobile App |
| **Key Features** | Speech-to-Speech translation, Indian dialect support, Mobile-first |
| **Team** | 2 developers (AI + App) |

<div align="center">
  <img src="https://img.shields.io/badge/FastAPI-005571?style=for-the-badge&logo=fastapi" />
  <img src="https://img.shields.io/badge/Flutter-02569B?style=for-the-badge&logo=flutter" />
  <img src="https://img.shields.io/badge/Whisper-AI-blueviolet?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Vakyansh-TTS-ff9933?style=for-the-badge" />
</div>

---

## 🎯 Why Vaniverse?

> “Dialects are not a barrier, they're cultural bridges.”

Vaniverse empowers speakers of rural and regional dialects (like Awadhi, Bhojpuri, Haryanvi) to communicate effortlessly with others by translating their spoken language into Hindi or English – **live and on the go**.

---

## 🔑 Core Features

- 🎤 Real-Time Mic-to-Mic Translation (Speech → Text → Translate → Speech)
- 🗣️ Dialect Focus: Awadhi, Bhojpuri, Haryanvi (more coming)
- 📱 Mobile-first with Flutter
- 🧠 AI Stack: Whisper (STT), IndicTrans2 (Translate), Vakyansh/Mozilla TTS
- 💡 Fully Open-Source Stack (no paid APIs)

---

## 📲 App Screens

> Coming soon after MVP completion!

---

## 🛠 Technical Architecture

### 🔄 Pipeline Overview

```plaintext
🎤 User Speaks on Mic
            ↓
📡 Audio sent to backend (via WebSocket)
            ↓
🧠 Whisper → Transcription (STT)
            ↓
🌐 IndicTrans2 → Translation (Dialect → Hindi/English)
            ↓
🔊 Vakyansh / Mozilla TTS → Audio Output
            ↓
📲 Audio sent back and played on app
```

---

## 📁 Folder Structure

```
vaniverse/
├── backend/
│   ├── app.py
│   ├── whisper_transcriber.py
│   ├── indictrans_translator.py
│   ├── tts_generator.py
│   └── utils/
├── mobile_app/
│   ├── main.dart (or App.js)
│   ├── MicCapture.dart
│   ├── AudioPlayer.dart
├── data_samples/
│   └── awadhi.wav etc.
├── README.md
└── requirements.txt
```

---

## 🔧 Getting Started

### Backend (Python)
```bash
cd backend
pip install -r requirements.txt
uvicorn app:app --reload
```

### Frontend (Flutter)
```bash
cd mobile_app
flutter pub get
flutter run
```

---

## 🚀 Deployment Strategy

- Dockerized backend
- App deployment via Play Store / App Store (post-MVP)
- Optional CI/CD with GitHub Actions

---

## 🧪 Testing Plan

- Real dialect samples (Awadhi, Bhojpuri)
- Backend tested via `ngrok` for mobile
- Device + Emulator testing
- Latency benchmarks

---

## 📈 What's Next?

| Feature | Status |
|---------|--------|
| 🌐 Language Auto-Detection | Planned |
| 🧠 Fine-tuned Whisper | Researching |
| 📡 Offline Mode | Future |
| 🕰️ Chat History | In Design |
| 📊 Analytics Dashboard | Optional |

---

## 👥 Meet the Makers

| Name | Role |
|------|------|
| Arjit | 🔧 Backend + AI Pipelines |
| Uday | 📱 Frontend + Integration |

---

## 🙏 Credits & Licenses

- Whisper – MIT License
- IndicTrans2 – Apache 2.0
- Vakyansh TTS – OSS
- Inspired by Bharat’s linguistic diversity ❤️

---

<div align="center">
  <strong>Vaniverse – Because every dialect deserves a voice.</strong>  
</div>
