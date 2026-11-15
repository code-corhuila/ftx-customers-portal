
# Customers Portal

Frontend del contexto de clientes. Este repositorio contiene la interfaz web del dominio de clientes y está construido con React, JavaScript y Vite.

## Estado del proyecto

Actualmente se encuentra implementada la estructura visual inicial del portal.

Las funcionalidades que dependan de servicios externos se incorporarán cuando estén definidos y aprobados los contratos de integración.

## Tecnologías

- React 19
- JavaScript
- Vite
- ESLint
- CSS

## Requisitos

- Node.js 22
- npm

## Instalación

```bash
npm ci
```

## Desarrollo

```bash
npm run dev
```

## Validaciones

Ejecutar ESLint:

```bash
npm run lint
```

Generar compilación de producción:

```bash
npm run build
```

Vista previa de producción:

```bash
npm run preview
```

## Integración

Este portal corresponde a la interfaz del contexto de clientes.

La composición de portales, la sesión, la autenticación y el cliente HTTP compartido corresponden al frontend principal. Este repositorio no debe conectarse directamente a bases de datos ni inventar endpoints o contratos de servicios.

## Estructura

```text
src/
├── assets/
├── App.jsx
├── App.css
├── index.css
└── main.jsx

public/
.github/
```

## Flujo de trabajo Git

- Las tareas se desarrollan en ramas `feat/`, `fix/` o `chore/`.
- Los cambios se integran a `develop` mediante Pull Request.
- Las promociones a `qa` y `main` siguen la política de ramas del proyecto.
- No se realizan commits directamente sobre ramas permanentes.

## Estado

Fundación visual inicial. La integración funcional queda pendiente de los contratos oficiales del sistema.
