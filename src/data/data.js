const products = [
  {
    id:"pl001",
    name: "Playera Calle R",
    description: "Playera roja",
    image: "/img/playera-roja.png",
    price: 250,
    stock: 5,
    category: "vestuariocalle"
  },
  {
    id:"pl002",
    name: "Playera Calle N",
    description: "Playera negra",
    image: "/img/playera-negra.png",
    price: 250,
    stock: 5,
    category: "vestuariocalle"
  },
  {
    id:"pl003",
    name: "Playera Calle B",
    description: "Playera blanca",
    image: "/img/playera-blanca.png",
    price: 250,
    stock: 5,
    category: "vestuariocalle"
  },
  {
    id:"Co001",
    name: "Rash combat",
    description: "rash combate/entrenamiento",
    image: "/img/rash-combate.png",
    price: 500,
    stock: 10,
    category: "vestuarioentrenamiento",
  },
  {
    id:"Co002",
    name: "Combat set",
    description: "Conjunto de entrenamiento y competencia",
    image: "/img/conjunto-entrenamiento.png",
    price: 950,
    stock: 10,
    category: "vestuarioentrenamiento",
  },
  {
    id:"Co003",
    name: "full body",
    description: "Butarga entrenamiento y competencia",
    image: "/img/butarga-entrenamiento.png",
    price: 950,
    stock: 10,
    category: "vestuarioentrenamiento",
  },
  {
    id:"Eq001",
  name: "Espinilleras",
  description: "Espinillera de Entrenamiento",
  image: "/img/espinillera.png",
  price: 650,
  stock: 25,
  category: "equipoproteccion",
  },
  {
    id:"Eq002",
  name: "Guantes MMA",
  description: "Guantes MMA Entrenamiento/competencia",
  image: "/img/guante.png",
  price: 1200,
  stock: 25,
  category: "equipoproteccion",
  },
  {
    id:"Eq003",
  name: "Bucal",
  description: "Bucal protector Gel",
  image: "/img/bucal1.png",
  price: 250,
  stock: 20,
  category: "equipoproteccion",
  }
  ] 
  
  const getProducts = () => {
      return new Promise( (resolve, reject) => {
        //simulamos retraso de red de 2 segundos
        setTimeout(()=>{
          resolve(products)
        }, 2000)
        
    })
    }
  
    export { getProducts }