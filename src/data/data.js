const products = [
{
  id:"pl001",
  name: "Playera Calle R",
  description: "Playera roja",
  image: "/imgproducts/playera-roja.png",
  price: 250,
  stock: 5,
  category: "Vestuario Calle"
},
{
  id:"pl002",
  name: "Playera Calle N",
  description: "Playera negra",
  image: "/imgproducts/playera-negra.png",
  price: 250,
  stock: 5,
  category: "Vestuario Calle"
},
{
  id:"pl003",
  name: "Playera Calle B",
  description: "Playera blanca",
  image: "/imgproducts/playera-blanca.png",
  price: 250,
  stock: 5,
  category: "Vestuario Calle"
},
{
  id:"Co001",
  name: "Rash combat",
  description: "rash combate/entrenamiento",
  image: "/imgproducts/rash-combate.png",
  price: 500,
  stock: 10,
  category: "Vestuario Entrenamiento",
},
{
  id:"Co002",
  name: "Combat set",
  description: "Conjunto de entrenamiento y competencia",
  image: "/imgproducts/conjunto-entrenamiento.png",
  price: 950,
  stock: 10,
  category: "Vestuario Entrenamiento",
},
{
  id:"Co003",
  name: "full body",
  description: "Butarga entrenamiento y competencia",
  image: "/imgproducts/butarga-entrenamiento.png",
  price: 950,
  stock: 10,
  category: "Vestuario Entrenamiento",
},
{
  id:"Eq001",
name: "Espinilleras",
description: "Espinillera de Entrenamiento",
image: "/imgproducts/espinillera.png",
price: 650,
stock: 25,
category: "Equipo de Protección",
},
{
  id:"Eq002",
name: "Guantes MMA",
description: "Guantes MMA Entrenamiento/competencia",
image: "/imgproducts/guante.png",
price: 1200,
stock: 25,
category: "Equipo de Protección",
},
{
  id:"Eq003",
name: "Bucal",
description: "Bucal protector Gel",
image: "imgproducts/bucalgel.png",
price: 250,
stock: 20,
category: "Equipo de Protección",
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