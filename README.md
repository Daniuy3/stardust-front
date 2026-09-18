# Stardust Front

Frontend de Stardust, una aplicación dirigida a profesores y estudiantes para impartir y tomar cursos. La landing page da a conocer los servicios de desarrollo de software del equipo. La aplicación incluye páginas públicas, acceso de usuarios, un área de aprendizaje, pantallas de enseñanza y administración de usuarios.

Esta guía está dirigida a desarrolladores que necesitan instalar y mantener el proyecto. Este repositorio contiene la aplicación web; la autenticación y las operaciones de datos dependen de un backend desarrollado con Laravel, que debe configurarse por separado. El backend aún no cuenta con una URL pública.

## Estado de la implementación

Las funcionalidades se incorporan al frontend conforme están disponibles en el backend. Por ello, el proyecto combina integraciones con la API y pantallas que todavía utilizan datos de ejemplo. Esta descripción corresponde al código del repositorio; no implica una validación en producción.

| Área | Implementación actual |
| --- | --- |
| Sitio público | Inicio, servicios y catálogo de cursos con datos de ejemplo. |
| Autenticación | Registro, inicio y cierre de sesión, acceso con Google y renovación de sesión mediante la API. |
| Administración | Listado, consulta de detalle, creación y actualización de usuarios mediante la API. |
| Aprendizaje | Exploración y «Mis cursos», con datos de ejemplo en las interfaces. Existe una función para consultar `/courses`. |
| Enseñanza | Listado con datos de ejemplo y pantalla de creación de cursos sin guardado conectado. |
| Otras secciones | Calendario, certificados, favoritos, administración de cursos y estadísticas aparecen como enlaces deshabilitados. |

## Tecnologías

- Next.js 16.1.6 con App Router, React 19.2.3 y TypeScript.
- Tailwind CSS 4, Material UI y Emotion para la interfaz.
- Formik y Yup para formularios y validación.
- Axios para peticiones, JOSE para la sesión y Zustand para estado de interfaz.
- Motion, Recharts, Day.js y React Icons para animaciones, gráficos, fechas e iconos.
- pnpm para dependencias y Docker para empaquetado.

Las versiones declaradas están en [package.json](package.json); [pnpm-lock.yaml](pnpm-lock.yaml) registra la resolución de dependencias.

## Desarrollo local

### Requisitos

- Node.js 24 para mantener la misma versión principal utilizada por Docker. El `Dockerfile` usa `24.13.0-slim`.
- pnpm instalado. El repositorio no fija una versión del gestor.
- Acceso al backend para utilizar autenticación y operaciones con datos reales.

Solicita al equipo el acceso al repositorio Laravel, sus instrucciones de instalación y las URLs de tu entorno. Este repositorio no incluye la configuración de base de datos, migraciones ni credenciales del backend.

### Instalación

Desde la raíz del repositorio:

```bash
pnpm install --frozen-lockfile
```

Crea un archivo `.env` en la raíz con los valores de tu entorno. Si ya existe, actualiza únicamente los valores necesarios:

```dotenv
API_URL=https://api.example.com/api
PUBLIC_REDIRECT_URL=https://api.example.com/api
SESSION_SECRET=reemplazar_por_un_secreto_aleatorio
```

Las URLs anteriores son ilustrativas. Incluye el prefijo que utilice tu backend, por ejemplo `/api`, y evita la barra final, ya que el código añade rutas que comienzan con `/`.

| Variable | Uso |
| --- | --- |
| `API_URL` | URL base del backend para autenticación, usuarios, cursos y renovación del token. Debe ser accesible desde el servidor Next.js. |
| `PUBLIC_REDIRECT_URL` | Base accesible desde el navegador para iniciar OAuth con Google. El frontend añade `/auth/oauth/google/redirect`. |
| `SESSION_SECRET` | Secreto del servidor para firmar y verificar la sesión con HS256. Utiliza un valor aleatorio de al menos 32 bytes. |

Puedes generar un secreto con Node.js:

```bash
node -e "console.log(require('node:crypto').randomBytes(32).toString('hex'))"
```

El archivo `.env` está excluido de Git. `API_URL` y `PUBLIC_REDIRECT_URL` se incorporan mediante `next.config.ts` durante la compilación y no deben contener secretos. `SESSION_SECRET` se utiliza en el servidor.

Inicia el servidor:

```bash
pnpm dev
```

Abre <http://localhost:3000>. Reinicia el servidor si cambias las variables de entorno.

### Comandos disponibles

| Comando | Propósito |
| --- | --- |
| `pnpm dev` | Ejecutar el servidor de desarrollo. |
| `pnpm lint` | Revisar el código con ESLint. |
| `pnpm build` | Compilar la aplicación para producción. |
| `pnpm start` | Iniciar el servidor de producción después de compilar. |

No hay un script de pruebas automatizadas definido en `package.json`.

## Estructura del código

```text
src/
├── app/
│   ├── (notLogged)/       # Sitio público, registro, login y callback OAuth
│   ├── (loggedIn)/        # Área de usuarios autenticados
│   │   ├── administracion/
│   │   ├── home/          # Aprendizaje y exploración de cursos
│   │   └── teaching/      # Pantallas de enseñanza
│   ├── globals.css
│   └── layout.tsx
├── components/           # Componentes compartidos
├── data/                 # Datos de ejemplo de cursos
├── hooks/                # Hooks compartidos
├── lib/                  # Cliente HTTP y manejo de sesión
└── proxy.ts              # Validación y renovación de sesión por ruta
public/                   # Imágenes, logotipos y otros recursos estáticos
.github/workflows/        # Construcción y publicación de imagen Docker
```

Los directorios entre paréntesis agrupan rutas sin formar parte de la URL. Cada módulo puede reunir sus propios componentes, funciones de API, hooks, interfaces, esquemas y stores. Los archivos `api/index.ts` de los módulos contienen funciones de integración; no representan por sí mismos endpoints HTTP de Next.js.

### Rutas principales

| Ruta | Contenido |
| --- | --- |
| `/` | Página de inicio. |
| `/servicios` | Presentación de servicios de desarrollo. |
| `/cursos` | Catálogo público de cursos. |
| `/login` y `/register` | Acceso y registro. |
| `/auth/[provider]/callback` | Retorno de autenticación OAuth. |
| `/home/mis-cursos` | Área de cursos del usuario. |
| `/home/cursos` | Exploración de cursos dentro de la plataforma. |
| `/administracion/usuarios` | Administración de usuarios. |
| `/administracion/usuarios/[id]` | Detalle de un usuario. |
| `/teaching/mis-cursos` | Cursos del área de enseñanza. |
| `/teaching/crear-curso` | Interfaz de creación de cursos. |

## Backend y sesión

Las funciones de autenticación utilizan `/auth/login`, `/public-register`, `/auth/logout` y `/auth/refresh`. La administración consulta `/users` y `/users/{id}`. Estas rutas son relativas a `API_URL`.

El acceso con Google redirige el navegador al backend usando `PUBLIC_REDIRECT_URL`. Al regresar a `/auth/[provider]/callback`, el frontend envía `code` y `state` al endpoint `/auth/oauth/{provider}/callback` de la API. El proveedor y el backend requieren su propia configuración de OAuth.

La aplicación guarda el token del backend y los datos del usuario en una cookie `session` con un JWT firmado. La cookie se configura con `httpOnly`, `secure` y `sameSite: strict`, y tiene una duración de una hora.

El proxy comprueba las rutas `/home/*` y `/administracion/*` e intenta renovar la sesión cuando quedan cinco minutos o menos. El layout compartido del área autenticada también comprueba la sesión, incluidas las pantallas de enseñanza. Las peticiones protegidas utilizan `fetchWithAuth` y envían el token como `Authorization: Bearer ...`.

## Docker

Con las variables definidas en `.env`:

```bash
docker compose up --build -d
```

La aplicación queda publicada en <http://localhost:3000>. Compose ejecuta únicamente el frontend; no crea un backend ni una base de datos. Dentro del contenedor, `localhost` identifica al propio contenedor: utiliza una dirección de API alcanzable desde él.

```bash
docker compose logs -f front
docker compose down
```

La imagen se construye en tres etapas: dependencias, compilación y ejecución. El contenedor final utiliza la salida `standalone` de Next.js, ejecuta `node server.js` con el usuario `node` y escucha en el puerto 3000.

`API_URL` y `PUBLIC_REDIRECT_URL` se pasan como argumentos de construcción. Si cambian, reconstruye la imagen. `SESSION_SECRET` se proporciona al contenedor en ejecución.

### Publicación de imágenes

El workflow [docker-image.yml](.github/workflows/docker-image.yml) se ejecuta al hacer push a `master`. Calcula una versión, construye y publica `daniuy/stardust-front` en Docker Hub con etiquetas de versión y `latest`, y crea un tag Git `v<versión>`.

Utiliza los secretos de GitHub Actions `DOCKERHUB_USER`, `DOCKERHUB_PASSWORD`, `API_URL` y `PUBLIC_REDIRECT_URL`. La configuración actual reconoce `major(` y `feat(` como patrones para el versionado. El workflow publica la imagen; no contiene pasos para desplegarla en un servidor. Compose tiene su propia etiqueta fija, `0.1.0`.

## Problemas frecuentes

- **La API no responde:** revisa `API_URL`, su prefijo y la conectividad desde el proceso o contenedor de Next.js.
- **Google no inicia el acceso:** verifica que `PUBLIC_REDIRECT_URL` sea accesible desde el navegador y que el backend tenga configurado el proveedor y el retorno al frontend.
- **El login regresa a la pantalla de acceso:** revisa la respuesta del backend y la cookie `session`. En entornos fuera de localhost, utiliza HTTPS para la cookie `secure`; mantén el mismo `SESSION_SECRET` entre instancias.
- **Una URL de API anterior sigue en uso:** reinicia el entorno de desarrollo o vuelve a compilar la aplicación o imagen después de cambiar las variables.
- **Los cursos no reflejan los datos del backend:** varias pantallas importan `src/data/courses-example.ts`; consulta el estado de implementación antes de asumir que están conectadas a la API.

## Documentación pendiente

- Repositorio del backend e instrucciones para levantarlo y configurar OAuth.
- Convenciones de contribución, responsables y condiciones de uso del código.

Al conectar una funcionalidad al backend, actualiza la tabla de estado de implementación y documenta cualquier cambio de configuración necesario para ejecutarla.
