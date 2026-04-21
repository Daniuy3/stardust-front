
export interface Course {
    id: number;
    teacher_id: number;
    title: string;
    slug: string;
    short_description: string;
    full_description: string;
    thumbnail_url: string;
    trailer_video_url: string;
    level: "beginner" | "intermediate" | "advanced";
    language: string;
    is_free: boolean;
    price: number;
    currency: string;
    status: string;
    visibility: string;
    estimated_duration_hours: number;
    created_at: string;
    updated_at: string;

}

export const courses : Course[] = [
    {
      "id": 1,
      "teacher_id": 101,
      "title": "Docker desde cero para desarrolladores web",
      "slug": "docker-desde-cero-para-desarrolladores-web",
      "short_description": "Aprende a usar Docker para crear entornos reproducibles y desplegar aplicaciones web modernas.",
      "full_description": "En este curso aprenderás los fundamentos de Docker orientados al desarrollo web. Verás qué son las imágenes, contenedores, volúmenes y redes, además de cómo crear entornos locales para proyectos con Node.js, bases de datos y herramientas de desarrollo. También trabajarás con Docker Compose para levantar múltiples servicios y entenderás buenas prácticas para desarrollo y despliegue.",
      "thumbnail_url": "/courses/docker-thumbnail.png",
      "trailer_video_url": "https://example.com/trailers/docker-desde-cero.mp4",
      "level": "beginner",
      "language": "es",
      "is_free": false,
      "price": 899,
      "currency": "MXN",
      "status": "published",
      "visibility": "public",
      "estimated_duration_hours": 14,
      "created_at": "2026-04-21T10:00:00Z",
      "updated_at": "2026-04-21T10:00:00Z"
    },
    {
      "id": 4,
      "teacher_id": 104,
      "title": "React práctico: componentes, estado y consumo de APIs",
      "slug": "react-practico-componentes-estado-consumo-apis",
      "short_description": "Aprende React construyendo interfaces dinámicas con componentes reutilizables.",
      "full_description": "En este curso aprenderás React desde una perspectiva práctica. Trabajarás con JSX, props, state, hooks, renderizado condicional, listas, formularios y consumo de APIs. Además, desarrollarás pequeños proyectos para comprender cómo estructurar componentes reutilizables y escalar una aplicación frontend de forma ordenada. Es ideal para quienes ya conocen JavaScript y quieren entrar al ecosistema React.",
      "thumbnail_url": "/courses/react-practico-thumbnail.png",
      "trailer_video_url": "https://example.com/trailers/react-practico.mp4",
      "level": "intermediate",
      "language": "es",
      "is_free": false,
      "price": 999,
      "currency": "MXN",
      "status": "published",
      "visibility": "public",
      "estimated_duration_hours": 22,
      "created_at": "2026-04-21T10:15:00Z",
      "updated_at": "2026-04-21T10:15:00Z"
    },
    {
      "id": 5,
      "teacher_id": 105,
      "title": "Next.js desde cero: SSR, rutas y apps modernas",
      "slug": "nextjs-desde-cero-ssr-rutas-apps-modernas",
      "short_description": "Crea aplicaciones modernas con Next.js usando renderizado híbrido y rutas avanzadas.",
      "full_description": "Este curso te guía paso a paso en la construcción de aplicaciones modernas con Next.js. Aprenderás enrutamiento, layouts, rendering del lado del servidor, generación estática, manejo de datos, optimización y estructura de proyectos. También verás cómo integrar APIs y preparar una aplicación para despliegue. Está orientado a desarrolladores que ya manejan React y quieren dar el siguiente paso.",
      "thumbnail_url": "/courses/nextjs-thumbnail.png",
      "trailer_video_url": "https://example.com/trailers/nextjs-desde-cero.mp4",
      "level": "intermediate",
      "language": "es",
      "is_free": false,
      "price": 1199,
      "currency": "MXN",
      "status": "published",
      "visibility": "public",
      "estimated_duration_hours": 24,
      "created_at": "2026-04-21T10:20:00Z",
      "updated_at": "2026-04-21T10:20:00Z"
    },
    {
      "id": 2,
      "teacher_id": 102,
      "title": "JavaScript moderno: fundamentos y práctica real",
      "slug": "javascript-moderno-fundamentos-y-practica-real",
      "short_description": "Domina JavaScript moderno con ejercicios prácticos y casos comunes del desarrollo frontend.",
      "full_description": "Este curso cubre los fundamentos esenciales de JavaScript moderno, desde variables, funciones, objetos y arreglos hasta promesas, async/await, manipulación del DOM y módulos. Está pensado para quienes quieren construir una base sólida antes de avanzar a frameworks. Incluye ejercicios prácticos, resolución de problemas comunes y ejemplos aplicados al desarrollo web real.",
      "thumbnail_url": "/courses/javascript-moderno-thumbnail.png",
      "trailer_video_url": "https://example.com/trailers/javascript-moderno.mp4",
      "level": "beginner",
      "language": "es",
      "is_free": true,
      "price": 0,
      "currency": "MXN",
      "status": "published",
      "visibility": "public",
      "estimated_duration_hours": 18,
      "created_at": "2026-04-21T10:05:00Z",
      "updated_at": "2026-04-21T10:05:00Z"
    },
    
    {
      "id": 6,
      "teacher_id": 106,
      "title": "Laravel completo: APIs, autenticación y buenas prácticas",
      "slug": "laravel-completo-apis-autenticacion-buenas-practicas",
      "short_description": "Desarrolla aplicaciones backend con Laravel aplicando arquitectura limpia y seguridad básica.",
      "full_description": "Aprende a construir aplicaciones backend con Laravel desde una base sólida. En este curso desarrollarás rutas, controladores, migraciones, modelos, relaciones, validaciones, autenticación y APIs REST. También revisarás organización del código, buenas prácticas y estructura de proyectos mantenibles. Está pensado para desarrolladores que quieren crear backends robustos y listos para integrarse con frontend modernos.",
      "thumbnail_url": "/courses/laravel-thumbnail.png",
      "trailer_video_url": "https://example.com/trailers/laravel-completo.mp4",
      "level": "advanced",
      "language": "es",
      "is_free": false,
      "price": 1099,
      "currency": "MXN",
      "status": "published",
      "visibility": "public",
      "estimated_duration_hours": 26,
      "created_at": "2026-04-21T10:25:00Z",
      "updated_at": "2026-04-21T10:25:00Z"
    }
  ]
