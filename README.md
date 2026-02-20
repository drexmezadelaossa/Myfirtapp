# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is enabled on this template. See [this documentation](https://react.dev/learn/react-compiler) for more information.

Note: This will impact Vite dev & build performances.

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.



#  Mobiles Store - Carrito de Compras

##  Descripción

**Mobiles Store** es una aplicación web desarrollada para la gestión y compra de celulares mediante un sistema de carrito de compras. Permite visualizar productos, administrarlos y realizar un proceso básico de compra desde una interfaz moderna y sencilla.

---

## Características principales

* Visualización de productos en tarjetas.
* Gestión de productos (editar y eliminar).
* Buscador de artículos.
* Carrito de compras interactivo.
* Formulario de registro y pago.
* Interfaz responsive y fácil de usar.

---

## Interfaz gráfica

La aplicación cuenta con:

* Barra de navegación con buscador y carrito.
* Sección de ventas con tarjetas de productos.
* Botones de acción para editar y eliminar.
* Panel lateral con formulario de registro y pago.
* Diseño moderno basado en componentes reutilizables.

---

##  Arquitectura del proyecto

El proyecto está estructurado usando componentes reutilizables:

```
src/
 ├── features/
 │    └── layout/
 │         ├── Header
 │         ├── Content
 │         └── Footer
 ├── components/
 ├── assets/
 └── App.jsx
```

### Tecnologías utilizadas

* React.js
* React Router DOM
* CSS / Bootstrap
* JavaScript (ES6+)

---

## Datos del autor

**Autor:** Andres Mauricio Meza
**Proyecto:** Carrito de Compras - Mobiles Store
**Año:** 2026

---

## Notas importantes

* Proyecto académico orientado al aprendizaje de React y manejo de componentes.
* Implementa principios básicos de modularización y navegación SPA.
