# 🧑‍💻 Guía de Contribución y Convenciones de Código para QuickOrder

¡Bienvenido al proyecto QuickOrder! Este documento establece las convenciones de estilo de código y el flujo de trabajo ágil que utilizaremos para garantizar que nuestro código sea consistente, legible y fácil de mantener por todos los participantes del _bootcamp_.

## 1. ⚙️ Flujo de Trabajo Ágil (Linear & GitHub)

Nuestro flujo de trabajo se basa en la integración estricta entre **Linear** (Gestión de tareas) y **GitHub** (Control de versiones).

### A. Inicio de la Tarea y Creación de la Rama

1.  **Selección de Tarea:** Elige una tarea en estado **"Todo"** dentro de tu _Cycle_ actual en Linear.
2.  **Copiar Nombre de Rama:** Abre la tarea y haz clic en el botón de **"Copiar Nombre de Rama"** (Copy Branch Name).
3.  **Crear la Rama Local:** Utiliza el nombre copiado (ej: `jossandonmindhubweb/qojs-58`) para crear tu rama localmente:

    ```bash
    git checkout -b <nombre-de-rama-copiado>
    ```

    _El formato de la rama es siempre `[usuario]/[ID_del_issue]`._

### B. Pull Request (PR) y Automatización

1.  **Push Inicial:** Una vez que tengas código para compartir, haz un `push` a GitHub.
2.  **Creación del PR:** Ve a GitHub y crea un Pull Request.
    - **Importante:** Inicialmente, créalo como **Draft PR (Borrador)**. Esto mantiene el estado de la tarea en **"In Progress"** en Linear.
3.  **Título del PR (Obligatorio):** El título del PR debe seguir el formato estricto para mantener la claridad y la trazabilidad:

    ```
    [ID_del_issue]: Título de la tarea en Linear
    ```

    **Ejemplo:** `QOJS-58: Implementar la función addItemToCart`

4.  **Activación de Revisión:** Cuando tu código esté listo, complétalo y quita el estado **Draft (Borrador)** (o haz clic en "Ready for review").

    - **Automatización:** Al dejar de ser Draft, el estado de la tarea en Linear pasará **automáticamente** a **"In Review"**.

---

## 2. 💎 Estilos y Convenciones de Código (JavaScript / NodeJS)

El objetivo es escribir código que parezca escrito por una sola persona. Nos basaremos en buenas prácticas similares a las de **Airbnb** para la consistencia.

### A. Nomenclatura (Naming) - ¡Usa Inglés! 🇺🇸

Todas las variables, funciones, clases, archivos y _commits_ deben nombrarse en **inglés**. Esto es una práctica estándar de la industria.

| Elemento                  | Convención (Case Style) | Ejemplo (Bueno)             | Ejemplo (Malo)                | Razón                                  |
| :------------------------ | :---------------------- | :-------------------------- | :---------------------------- | :------------------------------------- |
| **Variables / Funciones** | `camelCase`             | `getUserData`, `isLoggedIn` | `get_user_data`, `isLogueado` | Estándar en JavaScript.                |
| **Constantes Globales**   | `SCREAMING_SNAKE_CASE`  | `MAX_PRODUCTS`, `API_KEY`   | `maxProducts`, `apiKey`       | Indica inmutabilidad y alcance global. |
| **Clases / Componentes**  | `PascalCase`            | `Product`, `OrderService`   | `product`, `order_service`    | Estándar para constructores y clases.  |

**Importancia de la Claridad:**

- **Bueno:** Nombres que expliquen **qué** son y **por qué** existen.
  ```javascript
  const userProfile = {};
  const hasPermission = true;
  ```
- **Malo:** Nombres de una sola letra, abreviaturas ambiguas o muy cortas.
  ```javascript
  const u = {}; // ¿Qué significa "u"?
  const p = true; // ¿Permiso? ¿Producto?
  ```

### B. Evitar "Magic Strings" y "Magic Numbers"

Un "número mágico" o _string_ mágico es un valor codificado directamente en el código sin ninguna explicación o contexto.

| Concepto          | Ejemplo (Malo)           | Ejemplo (Bueno)                                             |
| :---------------- | :----------------------- | :---------------------------------------------------------- |
| **Magic Numbers** | `if (user.status === 3)` | `const STATUS_ADMIN = 3; if (user.status === STATUS_ADMIN)` |
| **Magic Strings** | `if (role === 'admin')`  | `const ROLE = { ADMIN: 'admin' }; if (role === ROLE.ADMIN)` |

**Regla:** Si un número o _string_ tiene un significado especial, debe ser extraído a una **constante con nombre** que explique su propósito.

### C. Constantes y Mutabilidad

- Utiliza **`const`** por defecto.
- Utiliza **`let`** solo cuando sepas que la variable necesita ser reasignada (mutar su valor).
- **Nunca** uses `var`.

### D. Funciones de Flecha (Arrow Functions)

- Utiliza funciones de flecha (`=>`) para todas las funciones anónimas y para métodos de clase cuando necesites ligar el `this` léxicamente (como en callbacks o promesas).
- Utiliza la palabra clave `function` solo si necesitas una función constructora o si hay razones de _hoisting_ específicas.

### E. Espacios y Estructura

- **Indentación:** Usaremos **2 espacios** (no tabulaciones). Esto será forzado por Prettier.
- **Espacios en Operadores:** Siempre incluye un espacio antes y después de los operadores (`=`, `+`, `==`, `*`, etc.).
  - **Bueno:** `const x = a + b;`
  - **Malo:** `const x=a+b;`
- **Punto y Coma:** Siempre termina las sentencias con un punto y coma (**`;`**).

---

## 3. 🛡️ Consistencia Automática (Prettier & ESLint)

Para garantizar que todos sigamos las reglas anteriores, utilizaremos herramientas de formateo y linting que se ejecutarán automáticamente.

### A. Prettier (`.prettierrc` en el Repositorio)

**Propósito:** Formatea el código para aplicar estilos consistentes (espacios, indentación, punto y coma, etc.).

**Pasos a Seguir:**

1.  **Instalar Extensión:** Instala la extensión de **Prettier** en tu editor de código (VS Code).
2.  **Formatear al Guardar:** Configura tu editor para que **formatee automáticamente** al guardar un archivo. (Busca la opción `editor.formatOnSave` en la configuración de VS Code).
3.  **Ejecución:** Prettier leerá el archivo `.prettierrc` del repositorio y aplicará esas reglas.

### B. ESLint (`.eslintrc.js` en el Repositorio)

**Propósito:** Analiza el código estáticamente para encontrar errores de programación, convenciones de estilo (como el no uso de `var`), y problemas de _mala práctica_.

**Pasos a Seguir:**

1.  **Instalar Extensión:** Instala la extensión de **ESLint** en tu editor de código (VS Code).
2.  **Revisión:** ESLint leerá el archivo `.eslintrc.js` del repositorio y marcará automáticamente cualquier incumplimiento de las convenciones como errores o advertencias, obligándote a corregirlos antes de hacer el _commit_.

**¡Recomendación!** Siempre ejecuta un **`git pull`** antes de empezar a trabajar para asegurarte de tener la última versión de estos archivos de configuración. Si tu código tiene errores de _linting_, no hagas el _commit_ hasta corregirlos.
