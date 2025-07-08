# COMPANY-MANAGER-FRONT

## 💻 Frontend - Guía de uso

Este es un proyecto frontend desarrollado con **React**, **Vite** y **TypeScript**, que utiliza TailwindCSS para los estilos y Redux Toolkit para el manejo de estado global.

---

### 📦 Instalación

1. Asegúrate de tener [Node.js](https://nodejs.org/) instalado.
2. Clona el repositorio y ejecuta:

```bash
npm install
```

Esto instalará todas las dependencias necesarias.

---

### 🛠️ Scripts disponibles

```json
"scripts": {
  "dev": "vite",
  "build": "tsc -b && vite build",
  "lint": "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
  "preview": "vite preview"
}
```

#### ▶️ `npm run dev`

Inicia el servidor de desarrollo de Vite. Ideal para desarrollo local con recarga automática en caliente.

```bash
npm run dev
```

---

#### 🏗️ `npm run build`

Compila el proyecto para producción. Utiliza TypeScript (`tsc -b`) y luego Vite para generar los archivos optimizados.

```bash
npm run build
```

---

#### ✅ `npm run lint`

Ejecuta **ESLint** sobre los archivos `.ts` y `.tsx` para detectar errores de estilo o buenas prácticas.

```bash
npm run lint
```

---

#### 🔍 `npm run preview`

Sirve la versión de producción del proyecto, útil para testear cómo se verá tras el build.

```bash
npm run preview
```

---

## 🗂️ Estructura del Proyecto Frontend

Este proyecto sigue una arquitectura modular organizada dentro de la carpeta `src`, facilitando la escalabilidad y el mantenimiento. A continuación se describen las carpetas principales:

```bash
src/
│
├── app/             # Punto de entrada principal de la aplicación (setup del store, router, etc.)
│
├── assets/          # Archivos estáticos como imágenes, fuentes o estilos globales
│
├── components/      # Componentes reutilizables en distintas partes de la app (botones, inputs, tablas, etc.)
│
├── features/        # Lógica de Redux Toolkit, incluyendo slices, thunks y estados globales agrupados por dominio
│
├── guards/          # Componentes que controlan el acceso a rutas protegidas (por ejemplo: AuthGuard)
│
├── hooks/           # Custom hooks, tanto generales como específicos de Redux (por ejemplo: useAppDispatch, useAuth)
│
├── layout/          # Componentes de diseño general (por ejemplo: Navbar, Sidebar, Footer, Layouts de página)
│
├── pages/           # Vistas o páginas completas de la app, organizadas por ruta
│
├── types/           # Definiciones TypeScript globales (tipos, interfaces, enums, etc.)
│
├── utils/           # Funciones auxiliares y utilitarias (formateadores, validaciones, helpers generales)
```

## 📚 Principales dependencias

### 🔧 Core

- **React** – Biblioteca principal para construir interfaces de usuario.
- **React DOM** – Renderizado del DOM con React.
- **React Router DOM** – Enrutamiento en el navegador.
- **Redux Toolkit** y **React Redux** – Manejo eficiente del estado global.
- **TypeScript** – Tipado estático para JavaScript.

### 🖼️ UI y utilidades

- **TailwindCSS** – Utilidad de clases para estilos rápidos y responsivos.
- **Lucide React** – Íconos SVG personalizables.
- **React Modal** – Modales accesibles y reutilizables.
- **Formik + Yup** – Manejo y validación de formularios.
- **XLSX**, **jsPDF**, **jspdf-autotable** – Generación de archivos Excel y PDF.

### 🧪 Herramientas de desarrollo

- **Vite** – Bundler ultra rápido para desarrollo.
- **ESLint + Prettier** – Estilo de código consistente.
- **Tailwind Prettier Plugin** – Orden automático de clases Tailwind.