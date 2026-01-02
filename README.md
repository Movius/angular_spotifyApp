# Spotify App 🎵

Esta es una aplicación desarrollada con **Angular 6** que consume la API de Spotify para buscar artistas, ver sus lanzamientos y escuchar vistas previas de sus canciones más populares con un diseño responsive.

## 🚀 Características

- **Visualización de Lanzamientos**: Descubre los últimos álbumes lanzados en Spotify.
- **Buscador de Artistas**: Busca a cualquier artista y obtén información detallada.
- **Top Tracks**: Lista de las canciones más populares de un artista con reproductor embebido.
- **Refresco Automático de Token**: La aplicación gestiona internamente el ciclo de vida del token de Spotify, renovándolo automáticamente si expira.
- **Diseño Responsivo**: Adaptado para dispositivos móviles y escritorio usando Bootstrap.

## 🛠️ Tecnologías

- **Angular 6** (Framework)
- **Spotify Web API** (Datos)
- **RxJS** (Programación reactiva)
- **Bootstrap** (Estilos)
- **GitHub Actions** (Despliegue automático)

## 📦 Instalación y Uso

1. Instalar dependencias:
   ```bash
   npm install
   ```

2. Ejecutar servidor de desarrollo:
   ```bash
   npm start
   ```
   Navega a `http://localhost:4200/`.

3. Construir para producción:
   ```bash
   npm run build
   ```

## 🌐 Despliegue

La aplicación se despliega automáticamente en **GitHub Pages** al realizar un push a la rama `main` mediante GitHub Actions.

Puedes ver la demo en vivo aquí: [https://Movius.github.io/angular_spotifyApp/](https://Movius.github.io/angular_spotifyApp/)

---
*Este proyecto fue generado con [Angular CLI](https://github.com/angular/angular-cli) versión 6.0.1.*
