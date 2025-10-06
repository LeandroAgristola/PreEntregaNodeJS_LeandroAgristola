# PreEntregaNodeJS_LeandroAgristola# TechLab CLI - Herramienta de Gestión de Productos

Este es un proyecto para el curso de Node.js que implementa una herramienta de línea de comandos (CLI) para interactuar con la FakeStore API.

## Instalación

1. Clona el repositorio:
   `git clone <URL-de-tu-repositorio>`
2. Navega a la carpeta del proyecto:
   `cd techlab-cli`
3. Instala las dependencias:
   `npm install`

## Uso

La herramienta soporta las siguientes operaciones CRUD:

### 1. Obtener todos los productos
`npm run start -- GET products`

### 2. Obtener un producto por su ID
`npm run start -- GET products/15`

### 3. Crear un nuevo producto
`npm run start -- POST products "Nuevo Producto" 19.99 "Categoría Genial"`

### 4. Eliminar un producto
`npm run start -- DELETE products/7`