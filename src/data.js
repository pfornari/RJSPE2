export let products =
    [
        {
          id: 1,
          title: "Pantalón Chino Clásico",
          price: 8900,
          description: "Pantalón chino de corte recto y tejido resistente, ideal para un look casual o semiformal.",
          img: "https://res.cloudinary.com/demwjnzeq/image/upload/v1709170422/mpkjcxsaqrkjkn23ybf5.webp",
          stock: 20,
          category: "pantalones"
        },
        {
          id: 2,
          title: "Pantalón Deportivo Cómodo",
          price: 7500,
          description: "Perfectos para el ejercicio o para un día relajado, con tela transpirable y ajuste flexible.",
          img: "https://res.cloudinary.com/demwjnzeq/image/upload/v1709170422/mpkjcxsaqrkjkn23ybf5.webp",
          stock: 15,
          category: "pantalones"
        },
        {
          id: 3,
          title: "Camisa de Algodón Suave",
          price: 5600,
          description: "Camisa de algodón ligero, ideal para el día a día. Disponible en varios colores.",
          img: "https://res.cloudinary.com/dnqfh2chg/image/upload/v1686581567/camisa_algodon.jpg",
          stock: 25,
          category: "camisas"
        },
        {
          id: 4,
          title: "Camisa Formal Elegante",
          price: 9900,
          description: "Camisa con corte ajustado para situaciones formales o eventos especiales.",
          img: "https://res.cloudinary.com/dnqfh2chg/image/upload/v1686581567/camisa_formal.jpg",
          stock: 10,
          category: "camisas"
        },
        {
          id: 5,
          title: "Zapatillas Deportivas Ligeras",
          price: 12000,
          description: "Zapatillas diseñadas para ofrecer el máximo rendimiento y confort durante el ejercicio.",
          img: "https://res.cloudinary.com/dnqfh2chg/image/upload/v1686581567/zapatillas_deportivas.jpg",
          stock: 18,
          category: "zapatos"
        },
        {
          id: 6,
          title: "Zapatos de Vestir Clásicos",
          price: 15000,
          description: "Elegancia y confort se unen en estos zapatos de vestir, perfectos para cualquier evento formal.",
          img: "https://res.cloudinary.com/dnqfh2chg/image/upload/v1686581567/zapatos_vestir.jpg",
          stock: 12,
          category: "zapatos"
        },
        {
          id: 7,
          title: "Pantalón Vaquero Versátil",
          price: 8000,
          description: "Vaqueros duraderos y cómodos, un básico indispensable en tu armario.",
          img: "https://res.cloudinary.com/dnqfh2chg/image/upload/v1686581567/pantalon_vaquero.jpg",
          stock: 20,
          category: "pantalones"
        },
        {
          id: 8,
          title: "Camisa de Lino Transpirable",
          price: 6500,
          description: "Ideal para el calor, esta camisa de lino es ligera, fresca y elegante.",
          img: "https://res.cloudinary.com/dnqfh2chg/image/upload/v1686581567/camisa_lino.jpg",
          stock: 18,
          category: "camisas"
        },
        {
          id: 9,
          title: "Zapatillas Urbanas Trendy",
          price: 11000,
          description: "Combina estilo y comodidad con estas zapatillas urbanas, perfectas para el día a día.",
          img: "https://res.cloudinary.com/dnqfh2chg/image/upload/v1686581567/zapatillas_urbanas.jpg",
          stock: 16,
          category: "zapatos"
        },
        {
          id: 10,
          title: "Camisa Cuadros Casual",
          price: 5800,
          description: "Una camisa de cuadros siempre está de moda, versátil para cualquier ocasión casual.",
          img: "https://res.cloudinary.com/dnqfh2chg/image/upload/v1686581567/camisa_cuadros.jpg",
          stock: 22,
          category: "camisas"
        },
      ];
      
export const getProducts = () => {
    return new Promise((resolve, reject) => {
        if (products.length > 0) {
            setTimeout(() => {
                resolve(products);
            }, 500);
        } else {
            reject("No hay productos");
        }
    });
};


export const getProduct = (id) => {
    return new Promise((resolve, reject) => {
        if (products.length > 0) {
            const item = products.find((product) => product.id === id);

            setTimeout(() => {
                if (item) {
                    resolve(item);
                } else {
                    reject(`No se encuentra el producto con el id ${id}`);
                }
            }, 500);
        } else {
            reject("No hay productos");
        }
    });
};