# 🌱 Smart Agriculture Platform

A modern **AI-powered Smart Agriculture Platform** designed to help farmers make better decisions through crop disease detection, soil analysis, weather information, crop planning, market prices, and real-time communication with agricultural experts.

🔗 **Live Website:** https://agriculture-delta-ochre.vercel.app/

---

## ✨ Features

### 💬 Farmer–Expert Chat

Real-time communication between farmers and agricultural experts using **Socket.IO**.

* Real-time messaging
* Farmer–expert conversation
* Online/offline status
* Persistent chat history
* PostgreSQL-based message storage


---

### 🌿 AI Disease Detection

Upload a crop/plant image and get an AI-powered disease analysis.

* Crop disease identification
* Disease name and scientific name
* Confidence score
* Visible symptoms
* Organic treatment recommendations
* Chemical treatment recommendations
* Disease prevention suggestions
* Bengali and English language support

---

### 🧪 AI Soil Analysis

Analyze soil images using AI to get useful information about the soil.

* Soil type detection
* Estimated pH
* Moisture level
* Organic matter estimation
* Suitable crops
* Soil characteristics
* Soil improvement recommendations
* Bengali and English language support

---

### 📅 Crop Calendar

Helps farmers plan agricultural activities according to the crop growth cycle.

* Crop planning
* Important agricultural activities
* Seasonal planning
* Crop growth schedule

---

### 🌦️ Weather

Provides weather information to help farmers make better agricultural decisions.

* Current weather information
* Weather forecast
* Temperature
* Humidity
* Wind information
* Weather alerts
* Agricultural advisory

---

### 📚 Disease Library

A knowledge base containing information about common crop diseases.

* Disease information
* Symptoms
* Causes
* Treatment
* Prevention
* Agricultural knowledge resources

---

### 💰 Market Prices

Provides agricultural market price information to help farmers understand current product prices.

* Crop/product prices
* Market-based price information
* Agricultural product monitoring
* Real-time data integration

---

## 🛠️ Technology Stack

### Frontend

* **Next.js**
* **React**
* **Tailwind CSS**
* **HeroUI**
* **Lucide React**
* **Socket.IO Client**

### Backend

* **Node.js**
* **Express.js**
* **Socket.IO**
* **PostgreSQL**

### Authentication

* **Better Auth**

### AI

* **Groq API**
* **Qwen Vision Model**
* AI-powered crop disease detection
* AI-powered soil analysis

### Cloud Services

* **Cloudinary** – Image upload and storage
* **Vercel** – Frontend deployment
* PostgreSQL hosting for application data

---

## 🏗️ Main Modules

```text
Smart Agriculture Platform
│
├── 🔐 Authentication
│   ├── Farmer
│   └── Agricultural Expert
│
├── 💬 Farmer–Expert Chat
│   └── Socket.IO
│
├── 🌿 AI Disease Detection
│   └── Groq + Qwen Vision
│
├── 🧪 AI Soil Analysis
│   └── Groq + Qwen Vision
│
├── 📅 Crop Calendar
│
├── 🌦️ Weather
│
├── 📚 Disease Library
│
└── 💰 Market Prices
```

---

## 🔥 AI-Powered Agriculture

The platform uses AI to help farmers analyze agricultural problems from images.

### Disease Detection Flow

```text
Crop Image
     ↓
Cloudinary Upload
     ↓
AI Vision Model
     ↓
Disease Analysis
     ↓
Symptoms + Treatment
     ↓
Database Storage
```

### Soil Analysis Flow

```text
Soil Image
     ↓
Cloudinary Upload
     ↓
AI Vision Model
     ↓
Soil Analysis
     ↓
Soil Information + Recommendations
     ↓
Database Storage
```

---

## 💬 Real-Time Chat Architecture

The farmer–expert communication system uses **Socket.IO** for real-time communication.

```text
Farmer
   │
   │ Socket.IO
   ▼
Backend Server
   │
   ├── Conversation
   │
   └── Messages
   │
   ▼
PostgreSQL
   │
   ▼
Expert
```

Messages are stored in PostgreSQL so that previous conversations remain available even after refreshing the page.

---

## 🌍 Language Support

The platform supports:

* 🇧🇩 Bengali
* 🇬🇧 English

AI-generated agricultural information can be provided in the selected language.

---

## 🔐 Authentication & Roles

The platform supports role-based users:

### 👨‍🌾 Farmer

Farmers can:

* Analyze crop diseases
* Analyze soil
* Check weather
* View crop calendar
* View market prices
* Browse disease information
* Chat with agricultural experts

### 👨‍🔬 Agricultural Expert

Experts can:

* Communicate with farmers
* Receive farmer questions
* Provide agricultural guidance
* Manage conversations

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone <your-repository-url>
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_SERVER_URL=your_backend_url
NEXT_PUBLIC_SOCKET_URL=your_socket_server_url

NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET=your_upload_preset

NEXT_PUBLIC_APP_URL=your_frontend_url
```

Backend environment variables should include the required database, authentication, AI, and other server-side secrets.

### 4. Run the Development Server

```bash
npm run dev
```

The application will be available at:

```text
http://localhost:3000
```


---

## 🎯 Project Goal

The goal of this project is to build a digital agricultural platform that makes useful agricultural information and AI-powered tools more accessible to farmers.

The platform combines:

**AI + Weather + Soil Analysis + Disease Detection + Market Information + Expert Consultation**

into one integrated agriculture solution.

---

## 👨‍💻 Developer

**Ashikur Rahman**

Built with ❤️ for Smart Agriculture 🌱

