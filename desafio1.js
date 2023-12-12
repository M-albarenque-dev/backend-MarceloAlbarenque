class ProductManager {
    constructor() {
      this.products = [];
      // Contador para el id autoincrementable
      this.productIdCounter = 1;
    }
  
    addProduct(title, description, price, thumbnail, code, stock) {
      // Valido que todos los campos sean obligatorios
      if (!title || !description || !price || !thumbnail || !code || !stock) {
        console.error("Todos los campos son obligatorios");
        return;
      }
  
      // Valido que no se repita el campo "code"
      const codeExists = this.products.some(product => product.code === code);
      if (codeExists) {
        console.error("Ya existe un producto con el mismo código");
        return;
      }
  
      // Creo un nuevo producto con id autoincrementable
      const newProduct = {
        id: this.productIdCounter++,
        title,
        description,
        price,
        thumbnail,
        code,
        stock
      };
  
      this.products.push(newProduct);
      console.log("Producto agregado correctamente:", newProduct);
    }
  
    //Método para obtener todos los productos.
    getProducts() {
      return this.products;
    }
  
    //Método para obtener un producto por su id.
    getProductById(id) {
      const product = this.products.find(product => product.id === id);
  
      if (!product) {
        console.error("Producto no encontrado. Id:", id);
      }
  
      return product;
    }
  }
  
  // Agrego productos
  const manager = new ProductManager();
  manager.addProduct("Remera", "Manga corta", 5500, "thumbnail1.jpg", "R01", 10);
  manager.addProduct("Pantalon", "Jean", 12000, "thumbnail2.jpg", "P01", 5);
  manager.addProduct("Remera", "Manga larga", 7000, "thumbnail3.jpg", "R01", 12);
  manager.addProduct("Campera", "Deportiva", 18000, "thumbnail4.jpg", "C02", 16);
  
  //Visualizo todos los productos
  const todosLosProductos = manager.getProducts();
  console.log(`Todos los productos`, todosLosProductos);

  // Visualizo un producto por su id
    const idProductoBuscado = 2;
    const productoBuscado = manager.getProductById(idProductoBuscado);
    console.log(productoBuscado);