const products = [
{
  id:"pl001",
  name: "Playera Calle R",
  description: "Playera roja",
  image: ["/imgproducts/playera-roja.png", "/imgproducts/playera-roja1.png", "/imgproducts/playera-roja2.png",],
  price: 250,
  stock: 5,
  category: "vestuariocalle"
},
{
  id:"pl002",
  name: "Playera Calle N",
  description: "Playera negra",
  image: ["/imgproducts/playera-negra.png", "/imgproducts/playera-negra1.png", "/imgproducts/playera-negra2.png",],
  price: 250,
  stock: 5,
  category: "vestuariocalle"
},
{
  id:"pl003",
  name: "Playera Calle B",
  description: "Playera blanca",
  image: ["/imgproducts/playera-blanca.png", "/imgproducts/playera-blanca1.png", "/imgproducts/playera-blanca2.png",],
  price: 250,
  stock: 5,
  category: "vestuariocalle"
},
{
  id:"Co001",
  name: "Rash combat",
  description: "rash combate/entrenamiento",
  image: ["/imgproducts/rash-combate.png", "/imgproducts/rash-combate1.png", "/imgproducts/rash-combate2.png",],
  price: 500,
  stock: 10,
  category: "vestuarioentrenamiento",
},
{
  id:"Co002",
  name: "Combat set",
  description: "Conjunto de entrenamiento y competencia",
  image: ["/imgproducts/conjunto-entrenamiento.png", "/imgproducts/conjunto-entrenamiento1.png", "/imgproducts/conjunto-entrenamiento2.png",],
  price: 950,
  stock: 10,
  category: "vestuarioentrenamiento",
},
{
  id:"Co003",
  name: "full body",
  description: "Butarga entrenamiento y competencia",
  image: ["/imgproducts/butarga-entrenamiento.png", "/imgproducts/butarga-entrenamiento1.png", "/imgproducts/butarga-entrenamiento2.png",],
  price: 950,
  stock: 10,
  category: "vestuarioentrenamiento",
},
{
  id:"Eq001",
name: "Espinilleras",
description: "Espinillera de Entrenamiento",
image: ["/imgproducts/espinillera.png", "/imgproducts/espinillera1.png", "/imgproducts/espinillera2.png",],
price: 650,
stock: 25,
category: "equipoproteccion",
},
{
  id:"Eq002",
name: "Guantes MMA",
description: "Guantes MMA Entrenamiento/competencia",
image: ["/imgproducts/guante.png", "/imgproducts/guante1.png", "/imgproducts/guante2.png",],
price: 1200,
stock: 25,
category: "equipoproteccion",
},
{
  id:"Eq003",
name: "Bucal",
description: "Bucal protector Gel",
image: ["/imgproducts/bucalgel.png", "/imgproducts/bucal1.png", "/imgproducts/bucal2.png",],
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