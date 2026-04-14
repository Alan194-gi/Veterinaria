/**
 * Lógica de Negocio - Clínica Veterinaria Benji & Terry
 * Práctica Profesional: UPIICSA [cite: 4, 114]
 */

// 1. ESTÉTICA CANINA (Operación: SUMA y MULTIPLICACIÓN)
function calcularEstetica() {
    let subtotal = 0; // [cite: 117]
    
    // Suma de servicios seleccionados [cite: 31]
    if (document.getElementById('bano').checked) subtotal += 100; // [cite: 33, 118]
    if (document.getElementById('corte').checked) subtotal += 80; // [cite: 34, 119]
    if (document.getElementById('spa').checked) subtotal += 120; // [cite: 35, 120]

    // Multiplicación por factor de tamaño (Pequeño=1, Mediano=1.5, Grande=2)
    const factorTamano = parseFloat(document.getElementById('tamano').value) || 1; // 
    const totalFinal = subtotal * factorTamano;

    const contenedor = document.getElementById('resEstetica'); // [cite: 121]
    if (totalFinal > 0) {
        contenedor.style.display = 'block';
        contenedor.innerText = "Total de estética: $" + totalFinal.toFixed(2);
    } else {
        contenedor.style.display = 'none';
    }
}

// 2. PENSIÓN CANINA (Operación: MULTIPLICACIÓN)
function calcularPension() {
    // Uso de parseInt para días y costo [cite: 92, 124, 127]
    const dias = parseInt(document.getElementById('dias').value) || 0; 
    const costo = parseInt(document.getElementById('costoDia').value) || 0; 
    
    const total = dias * costo; // Operación de multiplicación [cite: 45, 128]

    const contenedor = document.getElementById('resPension');
    if (total > 0) {
        contenedor.style.display = 'block';
        contenedor.innerText = "Total de hospedaje: $" + total.toFixed(2); // [cite: 129]
    }
}

// 3. TIENDA DE MASCOTAS (Operación: SUMA ACUMULADA, MULTIPLICACIÓN Y RESTA)
function calcularCompra() {
    let subtotal = 0;
    // Seleccionamos todos los inputs de cantidad con la clase 'cant-prod'
    const productos = document.querySelectorAll('.cant-prod');

    // Ciclo para calcular la suma de todos los productos seleccionados [cite: 53, 54]
    productos.forEach(input => {
        const cantidad = parseInt(input.value) || 0; // [cite: 133]
        const precio = parseInt(input.getAttribute('data-precio')) || 0; // [cite: 132]
        subtotal += (precio * cantidad); // Multiplicación y Suma [cite: 137]
    });

    let totalFinal = subtotal;
    const contenedor = document.getElementById('resTienda');
    contenedor.style.display = 'block';

    // Aplicar descuento de $50 si la compra es mayor a $500 (Operación: RESTA) [cite: 55, 56, 138]
    if (totalFinal > 500) {
        totalFinal = totalFinal - 50; // [cite: 59, 140]
        contenedor.innerText = "¡Descuento aplicado! Total a pagar: $" + totalFinal.toFixed(2); // [cite: 141]
    } else {
        contenedor.innerText = "Total de compra: $" + totalFinal.toFixed(2);
    }
}

// 4. CITAS MÉDICAS (Operación: RESTA)
function calcularCambio() {
    // Captura de valores de consulta y pago [cite: 144, 145]
    const costo = parseInt(document.getElementById('consulta').value) || 0; // [cite: 146]
    const pago = parseInt(document.getElementById('pago').value) || 0; // [cite: 147]
    
    const cambio = pago - costo; // Operación de resta [cite: 80, 148]

    const contenedor = document.getElementById('resCita'); // [cite: 149]
    contenedor.style.display = 'block';

    if (cambio < 0) {
        contenedor.innerText = "Monto insuficiente. Faltan: $" + Math.abs(cambio).toFixed(2);
        contenedor.style.color = "#A93226"; 
    } else {
        contenedor.innerText = "Cambio a entregar: $" + cambio.toFixed(2);
        contenedor.style.color = "#2E7D32"; 
    }
}