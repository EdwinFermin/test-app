# 🏌️ Players App

A mobile app built with **React Native + Expo**, featuring a list of golf players fetched from Concentra external API.

---

## 🚀 Tech Stack

- **Expo SDK**
- **React Native**
- **TypeScript**

---

## 📦 Installation

### 1. Clone the repo

```bash
git clone https://github.com/your-username/players-app.git
cd players-app
```

### 2. Install dependencies

```bash
yarn install
```

### 3. Create .env file at the root of the project

```bash
API_BASE_URL=https://dev-api.iqtekgolf.innovix.com.do:440/api
API_TOKEN=F3J92ND9J5@493SBMDJW1344JEUDJ3TES3I/3
```

### 4. Start the app

```bash
yarn start
```

## 🧩 Project Structure

```hierarchy
/src
  ├── api               # Apisauce client
  ├── components        # Reusable UI components
  ├── navigation        # App navigator
  ├── redux             # Redux store, actions, sagas
  ├── screens           # App screens
  ├── assets            # Resources, Images and SVGs
  └── types             # Custom type declarations
  ```
