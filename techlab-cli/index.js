import fetch from "node-fetch";

const[ , , method, path, ...params] = process.argv;

const API_URL = "https://fakestoreapi.com/products";

if (method === "GET" && path === "products") {
    console.log('Realizando peticion para obtener productos...');

    fetch(API_URL)
        .then(res => {
            if (!res.ok) {
                throw new Error(`HTTP error! Status: ${res.status}`);
            }
            return res.json();
        })
        .then(products => {
            console.log('Productos obtenidos:');
            console.log(products);
        })
        .catch(error => {
            console.error('Error al obtener productos:', error);
        });
} else if (method === "GET" && path.startsWith('products/')) {
 
    const [ , id] = path.split('/');
    console.log(`Realizando petición para obtener el producto con ID: ${id}...`);

    fetch(`${API_URL}/${id}`)
        .then(res => {
            if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
            return res.json()
        })
        .then(product => {
            console.log('--- Producto Encontrado ---');
            console.log(product);
        })
        .catch(error => console.error('Error al realizar la petición:', error));
} // Lógica para crear un nuevo producto 

else if (method === 'POST' && path === 'products') {

    const [title, price, category] = params;
    
    if (!title || !price || !category) {
        console.error('Error: Faltan Datos!. Debes incluir título, precio y categoría.');
    } else {
        console.log('Creando nuevo producto...');
        const newProduct = {
            title: title,
            price: parseFloat(price),
            category: category
        };

        fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newProduct) 
        })
        .then(res => res.json())
        .then(product => {
            console.log('--- Producto Creado Exitosamente ---');
            console.log('El nuevo producto tiene el ID:', product.id);
            console.log(product); 
        })
        .catch(error => console.error('Error al crear el producto:', error));
    }
} // Lógica para eliminar un producto

else if (method === 'DELETE' && path.startsWith('products/')) {
    const [ , id] = path.split('/');
    console.log(`Eliminando producto con ID: ${id}...`);

    fetch(`${API_URL}/${id}`, {
        method: 'DELETE'
    })
    .then(res => {
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        return res.json();
    })
    .then(deletedProduct => {
        console.log('--- Producto Eliminado Exitosamente ---');
        console.log(deletedProduct); 
    })
    .catch(error => console.error('Error al eliminar el producto:', error));
}

