##Tech Stack

- **React** (Functional Components & Hooks)
- **Tailwind CSS** (Styling & Gradients)
- **Intersection Observer API** (Scroll detection)
- **React Icon** (Optional - for icons)
- **Framer Motion** (for animation)

## 🚀 Features

- **Cursor Animation**:
- **Scroll-Triggered Number Counter**: Statistics (like "150+ Product Launches") count up automatically when they enter the user's viewport.
- **Intersection Observer Reveal**: Content sections fade in and slide up smoothly as the user scrolls down.
- **Custom Tailwind Gradients**: Implements a sophisticated diagonal gradient background from light lavender to deep violet.

## 📡 API Details

- **Base URL**: `https://dummyjson.com`
- **Endpoints Used**: `/products`
- **Library**: [Axios](https://axios-http.com/)

### Logic Flow for API

1. **Component Mounts**: `useEffect` triggers the Axios request.
2. **Request Starts**: `setLoading(true)` is called.
3. **Try Block**: Fetches data. If successful, updates `data` and clears any previous `error`.
4. **Catch Block**: If the API is down or the URL is wrong, the error message is saved to the `error` state.
5. **Finally Block**: `setLoading(false)` runs regardless of the outcome to stop the loading indicator.

## If you are running this project locally, ensure you have the animation library installed

1. **npm install framer-motion**:
2. **npm install axios**:
3. **npm install react-icons react-router-dom**:
4. **npm install -D tailwindcss autoprefixer postcss**:

### want get project

1. **https://github.com/HninSuWai12/testing-motion.git**:
2. **npm install**

## Start the Project:

3. **npm run dev**
