# Proyecto Final - Backend

API REST desarrollada con **Node.js y Express.js** como proyecto final de un curso de Backend.

El proyecto permite gestionar productos almacenados en Firebase Firestore y cuenta con un sistema de autenticación mediante JSON Web Tokens (JWT) para proteger las rutas correspondientes.

## Tecnologías utilizadas

- **Node.js:** entorno de ejecución de JavaScript.
- **Express.js:** framework para desarrollar la API REST.
- **Firebase Firestore:** base de datos NoSQL para almacenar los productos.
- **JSON Web Token (JWT):** autenticación y protección de rutas.
- **Dotenv:** gestión de variables de entorno.
- **CORS:** configuración de acceso entre diferentes orígenes.
- **Nodemon:** reinicio automático del servidor durante el desarrollo.

## Estructura del proyecto

```text
Proyecto_Final_Back_End/
│
├── src/
│   ├── controllers/
│   │   ├── auth.controller.js
│   │   └── products.controller.js
│   │
│   ├── data/
│   │   └── data.js
│   │
│   ├── middlewares/
│   │   └── authentication.js
│   │
│   ├── models/
│   │   └── products.models.js
│   │
│   ├── routes/
│   │   ├── auth.routes.js
│   │   └── products.routes.js
│   │
│   ├── services/
│   │   └── products.services.js
│   │
│   └── utils/
│       └── token-generator.js
│
├── .env
├── .gitignore
├── index.js
├── package.json
└── README.md
```

## Instalación

Para ejecutar el proyecto localmente:

1. Clonar el repositorio:

```bash
git clone https://github.com/EnzhooCarp1996/Proyecto_Final_Back_End.git
```

2. Ingresar a la carpeta:

```bash
cd Proyecto_Final_Back_End
```

3. Instalar las dependencias:

```bash
npm install
```

4. Configurar las variables de entorno en un archivo `.env`.

5. Iniciar el servidor:

```bash
npm run dev
```

También se puede iniciar con:

```bash
npm start
```

El servidor se ejecuta en:

```text
http://localhost:3000
```

## Variables de entorno

Para conectar Firebase y configurar la autenticación, se deben definir las siguientes variables en el archivo `.env`:

```env
JWT_SECRET_KEY=tu_clave_secreta

FIREBASE_API_KEY=tu_api_key
FIREBASE_AUTH_DOMAIN=tu_auth_domain
FIREBASE_PROJECT_ID=tu_project_id
FIREBASE_STORAGE_BUCKET=tu_storage_bucket
FIREBASE_MESSAGING_SENDER_ID=tu_messaging_sender_id
FIREBASE_APP_ID=tu_app_id
```

Los valores deben corresponder a la configuración de tu proyecto de Firebase.

**Importante:** el archivo `.env` contiene información privada y no debe subirse al repositorio.

## Endpoints de la API

La API cuenta con las siguientes rutas:

### Autenticación

| Método | Endpoint | Descripción |
|---|---|---|
| POST | `/auth/login` | Iniciar sesión y obtener un token JWT. |

### Productos

Las rutas de productos requieren autenticación mediante un token JWT.

| Método | Endpoint | Descripción |
|---|---|---|
| GET | `/api/products` | Obtener todos los productos. |
| GET | `/api/products?categoria=galletitas` | Obtener productos filtrados por categoría. |
| GET | `/api/products/:id` | Obtener un producto por su ID. |
| POST | `/api/products/create` | Crear un nuevo producto. |
| DELETE | `/api/products/:id` | Eliminar un producto por su ID. |

## Autenticación

Para acceder a las rutas protegidas, primero se debe realizar una solicitud POST a:

```text
/auth/login
```

En el body se envían las credenciales en formato JSON:

```json
{
  "email": "correo@example.com",
  "password": "contraseña"
}
```

Si las credenciales son correctas, la API devuelve un token JWT.

Luego, ese token debe enviarse en el encabezado `Authorization` de las solicitudes protegidas:

```text
Authorization: Bearer TU_TOKEN
```

## Organización del código

El proyecto utiliza una arquitectura separada por responsabilidades:

- **Routes:** definen los endpoints de la API.
- **Controllers:** reciben las solicitudes y envían las respuestas HTTP.
- **Services:** gestionan la lógica de las operaciones.
- **Models:** realizan las consultas y operaciones sobre Firebase Firestore.
- **Middlewares:** verifican la autenticación de las solicitudes.
- **Utils:** contienen funciones auxiliares, como la generación de tokens.

## Autor

Proyecto desarrollado como trabajo final de un curso de Backend.

**GitHub:** [EnzhooCarp1996](https://github.com/EnzhooCarp1996)