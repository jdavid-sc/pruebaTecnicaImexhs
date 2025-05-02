# PruebaTecnica1

para clonar este proyecto y correrlo se debe ejejcutar el comando:
npm i

Resumen de propiedades de Angular utilizadas
🔹 Componentes
Componentes para dividir la aplicación (AppComponent, SearchUserComponent, etc.)

Uso de @Component para definir la vista, el selector y los estilos de cada bloque.

🔹 Routing
Navegación entre páginas usando RouterModule y provideRouter.

Configuración de rutas en app.routes.ts.

Uso de <router-outlet> para cargar componentes según la ruta.

🔹 Directivas estructurales
@for (*ngFor) → Para iterar y mostrar dinámicamente los repositorios.

@if (*ngIf) → Para mostrar u ocultar contenido basado en condiciones.

ngClass → Para aplicar clases dinámicamente (por ejemplo, cuando querías estilos condicionales).

🔹 Servicios
Creación de un servicio (ReposService) para consumir la API de GitHub.

Inyección de servicios usando inject en componentes standalone.

Uso de HttpClient para llamadas HTTP (gracias a provideHttpClient).

🔹 Observables
Manejo de Observables en la respuesta de HTTP.

Suscripción (.subscribe) para recibir datos asincrónicamente.

Uso de map para transformar la respuesta del API antes de asignarla.

🔹 Forms
Formularios reactivos (Reactive Forms) para capturar el nombre de usuario:

FormBuilder

FormGroup

FormControl

Validaciones básicas (como requerir el nombre de usuario).

🔹 HTTP Client
Uso del módulo HttpClientModule para consumir APIs REST externas (GitHub).

Manejo de errores de la petición (cuando el usuario no existe o no tiene repos).

🔹 Standalone Components
Configuración de tu app sin AppModule usando bootstrapApplication y ApplicationConfig (Angular Standalone).

Registro de providers globales (provideHttpClient, provideRouter, provideZoneChangeDetection).

🔹 Bootstrap
Aplicación de estilos rápidos usando Bootstrap 5:

Grid system (col-md-6, row, container, etc.).

Cards para mostrar repositorios.

Botones estilizados (btn, btn-primary, etc.).

Paginación (pagination de Bootstrap).

🔹 Paginación Manual
Dividir el array de repositorios en páginas de 8 elementos.

Controlar qué página está activa y actualizar la vista.

🔹 Pruebas Unitarias (incompleto)
Intento de generación de archivo .spec.ts para componentes.

(Se podría hacer más, pero mínimo ya sabes que los tests van en archivos .spec.ts).

Este proyecto fue generado usando [Angular CLI](https://github.com/angular/angular-cli) versión 19.2.4.

## Servidor de desarrollo

Para iniciar un servidor de desarrollo local, ejecuta

```bash
ng serve
```

Una vez que el servidor esté funcionando, abre tu navegador y navega hasta `http://localhost:4200/`. La aplicación se recargará automáticamente cada vez que modifiques alguno de los archivos fuente.



## Construcción

Para construir el proyecto ejecuta:

```bash
ng build
```

Esto compilará tu proyecto y almacenará los artefactos de compilación en el directorio `dist/`. Por defecto, la compilación de producción optimiza el rendimiento y la velocidad de tu aplicación.


## Ejecutar pruebas de extremo a extremo

Para las pruebas de extremo a extremo (e2e), ejecute:

```bash
ng e2e
```

Angular CLI no viene con un framework de pruebas end-to-end por defecto. Puedes elegir uno que se adapte a tus necesidades.

