function agregarAlCarrito() {
  // Obtenemos referencia a los elementos que necesitamos utilizar
  var producto = event.target.parentNode;
  var nombre = producto.querySelector('h3').innerText;
  var precio = parseFloat(producto.querySelector('.precio').innerText.replace('$', ''));

  // Creamos un nuevo elemento de lista para agregar al carrito
  var nuevoProducto = document.createElement("li");
  nuevoProducto.innerText = nombre + " - $" + precio.toFixed(2);

  // Agregamos el producto al carrito
  var listaCarrito = document.getElementById("lista-carrito");
  listaCarrito.appendChild(nuevoProducto);

  // Calculamos el total del carrito
  var totalCarrito = document.getElementById("total-carrito");
  var total = parseFloat(totalCarrito.innerText.replace('Total: $', ''));
  total += precio;
  totalCarrito.innerText = "Total: $" + total.toFixed(2);
}