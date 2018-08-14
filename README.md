# learnia-interactive

> Aplicación para la creación y visualización de cursos interactivos.

#### Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:9080
npm run dev

# build electron application for production
npm run build


```

---

This project was generated with [electron-vue](https://github.com/SimulatedGREG/electron-vue)@[4c6ee7b](https://github.com/SimulatedGREG/electron-vue/tree/4c6ee7bf4f9b4aa647a22ec1c1ca29c2e59c3645) using [vue-cli](https://github.com/vuejs/vue-cli). Documentation about the original structure can be found [here](https://simulatedgreg.gitbooks.io/electron-vue/content/index.html).


## Descripción más detallada

LearniaInteractive es un set de herramientas para la educación. Las cuales son:

1. Crear actividades educativas interactivas gamificadas.
2. Explorar las actividades.
3. Crear cursos.
4. Explorar cursos.

*A futuro puede que se añadan más herramientas para la educación, pero de momento estas son las principales.*

Además de otras características:

* Medallas
* Puntaje

### 1) Crear actividades educativas interactivas gamificadas

Por medio de LearniaInteractive y la herramienta de creación de actividades (En la zona creador) se podra crear actividad para uso en la aula de clases o simplemente para el uso de los estudiantes.

El creador puede elegir varias opciones para crear sus actividades y campos a rellenar, algunos de ellos son:

* Nombre de la actividad
* Descripción de la actividad
* Es imprimible o no: Puede ser impresa en papel o no.
* Es gamificada o no: Contiene algún tipo de elementos de juego como por ejemplo: puntaje, juegos, medallas, etc. Las actividades gamificada no pueden ser imprimibles.
* Es monetizable: El educador puede decidir vender la actividad. O también puede decidir ofrecer la actividad de forma gratuita y que otros puedan copiar, y editar.
* Filtros como: País, Nivel de estudio, Grado, edad, etc.

### 2) Explorar las actividades

Se podrá explorar actividades en el apartado de exploración. Esta pueden estar filtradas por:

* Categoría
* Sub-Categoría
* Es imprimible
* Es gamificada
* País del creador: También depende del país se aplican diferentes filtros, como por ejemplo chile: Nivel de estudio: Ninguno, Enseñanza Básica, Enseñanza Media, Enseñanza Superior. En el caso de Enseñanza básica podría ser: 1 Grado hasta 8 Grado.
* Edad del estudiante: Diferentes rangos de edades del estudiante.

### 3) Crear cursos

Por medio de LearniaInteractive y la herramienta de creación de cursos (En la zona creador) se podra crear cursos. Estos cursos son cursos en formato video y/o texto los cuales puede poseer o no actividades como contenido adicional al curso.

El creador del curso puede elegir varias opciones y campos a rellenar, algunos de estos son:

* Nombre del curso
* Descripción del curso
* Categoría
* Sub-Categoría
* Título del capítulo
* Descripción de capítulo
* Video: Título, descripción, tags, etc.
* Texto: Titulo, descripción, texto, tags, etc.
* Actividad: Titulo, descripcion, es imprimible, es gamificada, etc.

### 4) Explorar cursos

Se podrá explorar los cursos existentes en la plataforma. Estos pueen estar filtrados por:

* Categoría
* Sub-Categoría
* Es gamificado

## Aclaración

** Este archivo no indica como será exactamente el proyecto, solo es una introducción a este. **
