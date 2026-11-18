
# Stardust

Sitio web de Stardust, un proyecto enfocado en compartir conocimientos de tecnología desde la práctica y presentar soluciones de desarrollo de software.

🌐 https://stardustui.com

## Acerca del proyecto

Stardust combina contenido técnico, experimentos y proyectos reales relacionados con:

- Linux y sistemas operativos.
- Desarrollo de software y aplicaciones web.
- Servidores, infraestructura y self-hosting.
- Herramientas y tecnologías de desarrollo.

El sitio también funciona como portafolio de proyectos y punto de contacto para servicios profesionales.

## Tecnologías

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS 4
- HeroUI
- Motion
- Docker
- pnpm

## Estado de desarrollo

### Implementado

- Página de inicio y diseño responsive.
- Presentación de Stardust.
- Proyectos seleccionados y destacados.
- Vista previa de artículos y experimentos.
- Sección "Trabajemos juntos".
- Navbar y footer.
- Metadatos SEO y Open Graph.
- Integración de analíticas con Umami.

### Pendiente

- Listado y páginas individuales de artículos.
- Portafolio y páginas individuales de proyectos.
- Página de servicios.
- Página de contacto.
- Conexión de navegación a las nuevas rutas.
- Pruebas finales de accesibilidad y rendimiento.

## Desarrollo local

### Requisitos

- Node.js 24
- pnpm

### Instalación

Clonar el repositorio:

```bash
git clone https://github.com/Daniuy3/stardust-front.git
cd stardust-front
```

Instalar las dependencias:

```bash
pnpm install --frozen-lockfile
```

Iniciar el servidor:

```bash
pnpm dev
```

Abrir http://localhost:3000.

## Comandos disponibles

| Comando | Descripción |
| --- | --- |
| `pnpm dev` | Servidor de desarrollo |
| `pnpm build` | Compilación de producción |
| `pnpm start` | Servidor de producción |
| `pnpm lint` | Análisis estático con ESLint |

## Estructura principal

```text
src/
├── app/
│   ├── (notLogged)/
│   │   ├── (home)/
│   │   │   ├── components/
│   │   │   └── page.tsx
│   │   └── layout.tsx
│   ├── globals.css
│   └── layout.tsx
└── components/
    ├── buttons/
    ├── Footer.tsx
    ├── NavBar.tsx
    └── PageContainer.tsx

public/
```

Las nuevas rutas y módulos se incorporarán conforme avance el desarrollo.

## Docker

El proyecto incluye un Dockerfile multietapa y utiliza la salida `standalone` de Next.js.

Construcción y ejecución local:

```bash
docker compose up --build -d
```

El servicio queda disponible en el puerto 3000 de localhost.

## CI/CD

El repositorio incluye un workflow de GitHub Actions que se ejecuta al recibir cambios en `master`.

El workflow construye la imagen Docker y la publica en Docker Hub como `daniuy/stardust-front`.

El despliegue al servidor se gestiona por separado.

## Próximos hitos

1. Artículos y experimentos.
2. Portafolio de proyectos.
3. Servicios y contacto.
4. Optimización y validación de producción.
