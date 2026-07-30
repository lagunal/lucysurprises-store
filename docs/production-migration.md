# Guía de producción y migración de WooCommerce

Esta guía describe cómo publicar la nueva aplicación de Lucy Surprises sin perder WooCommerce como sistema de productos, pedidos y pagos.

> **Objetivo:** la aplicación TanStack Start será la web pública principal; WordPress + WooCommerce seguirá siendo el backend de comercio electrónico.

## Arquitectura recomendada

| Dirección | Servicio | Responsabilidad |
| --- | --- | --- |
| `https://lucysurprises.com` | Nueva aplicación React/TanStack Start | Página pública, catálogo, experiencia de marca y solicitud de cotización. |
| `https://shop.lucysurprises.com` | WordPress + WooCommerce | Administración, productos, inventario, pedidos, pagos y checkout. |

La aplicación principal consultará la API de WooCommerce en:

```text
https://shop.lucysurprises.com/wp-json/wc/v3/
```

No se deben alojar las dos aplicaciones en la raíz (`lucysurprises.com`) a la vez: la nueva app sustituirá a WordPress en ese dominio. Por eso WooCommerce debe vivir en un subdominio independiente.

## Estrategia inicial de checkout

Para la primera publicación, conservar el checkout nativo de WooCommerce:

1. La nueva app muestra los productos desde la API de WooCommerce.
2. El cliente navega el catálogo desde `lucysurprises.com`.
3. Al comprar, se le dirige a `https://shop.lucysurprises.com/checkout/`.
4. WooCommerce procesa el pago, pedido, inventario, correos e impuestos.

Esto evita implementar inicialmente sesiones, cookies entre dominios, CORS y pasarelas de pago en el frontend nuevo. Un checkout completamente integrado puede evaluarse después mediante la Store API de WooCommerce.

## Configuración de variables de entorno

En el hosting de la nueva aplicación, crear estas variables **solo del lado servidor**:

```env
WC_STORE_URL=https://shop.lucysurprises.com
WC_CONSUMER_KEY=ck_reemplazar_por_clave_de_produccion
WC_CONSUMER_SECRET=cs_reemplazar_por_secreto_de_produccion
```

Notas importantes:

- Nunca guardar las claves en el repositorio ni en código cliente.
- No usar el prefijo `VITE_` para claves secretas. Las variables con ese prefijo pueden quedar disponibles para el navegador.
- Crear claves de WooCommerce específicas para esta app, con permisos mínimos necesarios; para catálogo, usar **Read**.
- Actualizar `WC_STORE_URL` en el entorno de producción para que apunte a `shop.lucysurprises.com`.

## Proceso de migración

### 1. Preparar el subdominio de WooCommerce

- Crear el DNS de `shop.lucysurprises.com` hacia el hosting actual o nuevo de WordPress.
- Instalar un certificado SSL válido.
- Mover o clonar la instalación actual de WordPress/WooCommerce a ese subdominio.
- Cambiar las URL de WordPress y del sitio a `https://shop.lucysurprises.com`.
- Revisar enlaces, imágenes, webhooks, pasarelas de pago, correos transaccionales y URLs de retorno.

### 2. Validar WooCommerce antes del cambio público

- Confirmar que `https://shop.lucysurprises.com/wp-json/wc/v3/` responde de forma autenticada.
- Comprobar catálogo, categorías, precios, imágenes e inventario.
- Realizar un pedido de prueba con cada método de pago.
- Comprobar correos de confirmación, impuestos y costos de envío.
- Crear y probar una clave API nueva con permisos de lectura.

### 3. Preparar la nueva aplicación

- Configurar las variables `WC_*` en el proveedor donde se alojará la app.
- Verificar que las páginas de catálogo usan `shop.lucysurprises.com` como origen de WooCommerce.
- Implementar un estado de carga, error y catálogo vacío para fallos de la API.
- Implementar el carrito real o, como mínimo, enviar correctamente al checkout de WooCommerce.
- Confirmar que el formulario de cotización envía datos a un destino real antes de anunciarlo.
- Ejecutar `npm run lint` y `npm run build` sin errores.

### 4. Publicar la aplicación principal

- Desplegar y probar la app en una URL temporal o de staging.
- Configurar `lucysurprises.com` y `www.lucysurprises.com` para el nuevo hosting.
- Configurar redirección canónica entre `www` y el dominio principal.
- Mantener `shop.lucysurprises.com` dirigido a WordPress/WooCommerce.
- Verificar en producción las páginas principales, API, enlaces al checkout, formulario y metadatos SEO.

### 5. SEO y redirecciones

- Inventariar las URLs actuales de WordPress que tengan tráfico o posicionamiento.
- Crear redirecciones permanentes (`301`) desde las URLs antiguas hacia sus equivalentes nuevos.
- Actualizar Google Search Console, sitemap y Analytics.
- Revisar títulos, descripciones, imagen Open Graph y favicon en el nuevo dominio.

## Checklist de salida

- [ ] Backups completos de archivos y base de datos de WordPress/WooCommerce.
- [ ] DNS y SSL activos para `shop.lucysurprises.com`.
- [ ] Productos, categorías, imágenes y precios correctos en WooCommerce.
- [ ] Pago de prueba completado y correos recibidos.
- [ ] Variables `WC_*` configuradas únicamente en el servidor de la app.
- [ ] Catálogo nuevo consulta el subdominio `shop.`.
- [ ] Carrito y enlace de checkout probados.
- [ ] Formulario de cotización conectado a un servicio real.
- [ ] Lint y build sin errores.
- [ ] Redirecciones 301 configuradas.
- [ ] Monitorización de errores y analítica verificadas.

## Plan de reversión

Si aparecen problemas críticos después de cambiar el dominio principal:

1. Volver el DNS de `lucysurprises.com` al hosting anterior de WordPress.
2. Mantener `shop.lucysurprises.com` sin cambios para no afectar pedidos ni pagos.
3. Investigar el fallo en el entorno de staging de la nueva app.
4. Reintentar el cambio solo tras validar catálogo, checkout y formularios.

## Decisiones pendientes antes de producción

- Hosting definitivo de la nueva aplicación y compatibilidad con Node/Nitro.
- Método para sincronizar el carrito con WooCommerce.
- Destino de las solicitudes de cotización (correo, CRM, base de datos o automatización).
- Teléfono, correo y datos de ubicación oficiales a publicar.
- Lista de URLs actuales que necesitan redirección.

