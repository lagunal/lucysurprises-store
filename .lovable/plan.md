
# Clon UI: Balloons in Motion + branding Lucy Surprises

Se replica la estructura y look de balloonsinmotion.com, pero usando el logo, colores, imágenes y textos de lucysurprises.com. Solo frontend (sin backend real todavía).

## Estructura de páginas (rutas TanStack)

- `/` — Home
- `/bouquets` — Ramos de globos
- `/decorations` — Decoraciones
- `/themes` — Temáticas
- `/occasions` — Ocasiones
- `/gallery` — Galería de fotos
- `/cart` — Carrito de compras (UI only)
- `/request-quote` — Formulario de cotización (UI only)

Cada ruta con su propio `head()` (title/description/og).

## Layout global (`__root.tsx`)

- **Header sticky**:
  - Logo de Lucy Surprises + tagline "We Make Ordering Balloons Easy!".
  - Nav horizontal: Home, Bouquets, Decorations, Themes, Occasions, Gallery.
  - Lado derecho: teléfono, botón "Request Quote" y **ícono de carrito** con badge de contador (visual, hardcoded a 0).
  - Menú móvil (hamburguesa con Sheet de shadcn), el ícono del carrito permanece visible en móvil.
- **Footer**: About, Services, Contact, Social + copyright.

## Carrito de compras (UI, sin lógica)

- **Ícono del carrito en el header** (Lucide `ShoppingBag`) con badge redondo mostrando cantidad (placeholder `0` / `2` visual).
- Al hacer clic:
  - En **desktop**: abre un `Sheet` lateral derecho (shadcn) tipo mini-cart con:
    - 2–3 items de ejemplo (imagen, nombre, precio, cantidad, botón eliminar) — puramente decorativos.
    - Subtotal y botón "Checkout" deshabilitado con tooltip "Próximamente".
    - Link "Ver carrito completo" que navega a `/cart`.
  - En **móvil**: mismo `Sheet` desde la derecha, adaptado a ancho completo.
- **Página `/cart`**:
  - Tabla/lista de items de ejemplo con imagen, nombre, precio unitario, selector de cantidad (visual), subtotal por línea, botón eliminar.
  - Resumen a la derecha: subtotal, envío estimado ("Se calcula al finalizar"), total, botón "Proceed to Checkout" deshabilitado.
  - Estado vacío alternativo (comentado / accesible con toggle interno) con ilustración y CTA "Explorar decoraciones".
- Los botones "Add to cart" en tarjetas de producto se incluyen visualmente (sin acción) junto a "Request quote".
- Sin estado global todavía: los datos son mocks locales en el componente. En próximas iteraciones se conectará a store real + backend.

## Home (`/`)

Réplica de la composición de Balloons in Motion:

1. **Hero**: título "Designing lasting balloon creations." + subtítulo + CTA "Request quote" + CTA secundario "Shop bouquets".
2. **Grid de servicios (6 tarjetas tipo mosaico)** con fotos de Lucy Surprises: Balloon Decorations, Arches, Arrangements, Garlands, Centerpieces, Themed Setups.
3. **Sección "Amazing Balloons & Delivery"**.
4. **Sección "The Story Behind the Art"** con foto de Lucy.
5. **Testimonios** (3 cards).
6. **CTA final**: "Request a quote".

## Páginas internas

- **Bouquets / Decorations / Themes / Occasions**: grid de tarjetas con imagen, nombre, precio (mock), botones "Add to cart" y "Request quote".
- **Gallery**: grid masonry con lightbox básico (imágenes de lucysurprises.com).
- **Request Quote**: formulario UI (nombre, email, teléfono, fecha, tipo, mensaje) sin submit real.

## Sistema de diseño (`src/styles.css`)

Alejado del look genérico. Inspirado en Lucy Surprises (pastel, femenino, festivo) con energía colorida:

- **Paleta**:
  - Background: crema cálido (`oklch(0.98 0.01 80)`)
  - Primary: rosa vibrante (`oklch(0.65 0.22 5)`)
  - Accent: durazno / coral (`oklch(0.78 0.14 40)`)
  - Secondary: menta suave (`oklch(0.85 0.08 170)`)
  - Foreground: gris muy oscuro.
- **Tipografía** (vía `<link>` en `__root.tsx`):
  - Display: **Fraunces** (serif con carácter).
  - Body: **Nunito** (redondeada, cálida).
- **Radios generosos** (`--radius: 1.25rem`).
- **Sombras suaves rosadas** para cards.

Todos los colores vía tokens semánticos (`bg-primary`, `text-accent`, etc.), sin hex hardcoded en componentes.

## Imágenes

Se referencian directamente por URL de `lucysurprises.com/wp-content/uploads/...` (`decor-blue-tree.jpeg`, `IMG_7359.jpg`, `grad1.jpeg`, `Lucy-with-flowers.jpg`, etc.). El logo también se referencia desde su URL pública. No se descargan assets en esta iteración.

## Componentes reutilizables (`src/components/`)

- `SiteHeader.tsx`, `SiteFooter.tsx`, `MobileNav.tsx`
- `CartButton.tsx` (ícono + badge)
- `CartSheet.tsx` (mini-cart lateral con items mock)
- `Hero.tsx`, `ServiceCard.tsx`, `ProductCard.tsx` (con botones Add to cart / Request quote)
- `SectionHeading.tsx`, `TestimonialCard.tsx`, `QuoteCTA.tsx`, `GalleryGrid.tsx`

## Fuera de alcance (siguientes iteraciones)

- Backend / Lovable Cloud
- Estado global del carrito y persistencia
- Checkout / pagos
- Autenticación
- Envío real del formulario de cotización
- CMS para galería/productos

## Detalles técnicos

- Rutas planas en `src/routes/` (`bouquets.tsx`, `gallery.tsx`, `cart.tsx`, etc.). Se reemplaza el placeholder actual de `index.tsx`.
- Header/Footer dentro de `RootComponent` envolviendo `<Outlet />`.
- Fuentes cargadas con `<link>` en `head().links` del root (nunca `@import` remoto en CSS).
- `head()` del root con title/description propios ("Lucy Surprises — Balloon Decorations & Delivery"); cada ruta define su propio head.
- Favicon actual se mantiene en esta iteración.
