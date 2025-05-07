
# Novo Estilo Public

**Novo Estilo Public** es la interfaz pública del sitio web de Novo Estilo, una aplicación desarrollada con **Create React App**, **TypeScript** y **Firebase**. Está diseñada para mostrar contenido dinámico gestionado desde un panel de administración (por ejemplo, mediante Novo Estilo Admin), brindando una experiencia clara y atractiva al usuario final.

## Características

- Carga de contenido desde Firebase Firestore en tiempo real.
- Diseño responsivo y moderno basado en React.
- Navegación intuitiva y accesible.
- Alta velocidad de carga gracias al uso de Firebase Hosting y buenas prácticas de desarrollo.

## Tecnologías Utilizadas

- [Create React App](https://create-react-app.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [React](https://reactjs.org/)
- [Firebase](https://firebase.google.com/) (Firestore, Hosting)

## Requisitos Previos

- Node.js v14 o superior
- Cuenta en Firebase con Firestore configurado

## Instalación y Configuración

1. Clona el repositorio:

   ```bash
   git clone https://github.com/estebangf/novo-estilo-public.git
   cd novo-estilo-public
   ```

2. Instala las dependencias:

   ```bash
   npm install
   ```

3. Configura Firebase:

   - Crea un nuevo proyecto en [Firebase Console](https://console.firebase.google.com/).
   - Habilita Firestore.
   - Copia el archivo `.env.example` a `.env` y reemplaza los valores con tu configuración de Firebase.

4. Inicia la aplicación en modo desarrollo:

   ```bash
   npm start
   ```

   La aplicación estará disponible en `http://localhost:3000/`.

## Despliegue

Para desplegar la aplicación en Firebase Hosting:

1. Inicia sesión en Firebase CLI:

   ```bash
   firebase login
   ```

2. Inicializa Firebase en el proyecto (si no se ha hecho previamente):

   ```bash
   firebase init
   ```

3. Construye la aplicación para producción:

   ```bash
   npm run build
   ```

4. Despliega a Firebase Hosting:

   ```bash
   firebase deploy
   ```

Desarrollado por [Esteban García Fernández](https://github.com/estebangf).
