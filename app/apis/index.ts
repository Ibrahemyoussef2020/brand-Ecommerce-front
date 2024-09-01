import { ProductProps } from "@/types";


export const fetchProduct = async (
  products:string  = 'recomended-items' ,
  setProduct:(product:{}|ProductProps)=>void,
  productId:string = '1' )=>{

    const res = await fetch(`https://brand-ecommerce-data.onrender.com/${products}`, {
        cache: "no-cache",
      })
      .then(res => {
        if (!res.ok) {
          throw new Error("Failed to fetch products");
        }

        return res.json();
      })
      .then(data => setProduct(data));
}


export const showProducts = async (products:string = 'recomended-items',setProducts:(product:[]|ProductProps[])=>void)=>{
  const res = await fetch(`https://brand-ecommerce-data.onrender.com/${products}`, {
      cache: "no-cache",
    })
    .then(res =>{
      if (!res.ok) {
        throw new Error("Failed to fetch products");
      }

      return res.json();

    })
    .then(data => setProducts(data));
  
}

export const fetchProductsToServer = async (products:string  = 'recomended-items')=>{
  const res = await fetch(`https://brand-ecommerce-data.onrender.com/${products}`, {
       cache:'no-cache',
  });
  
    if (!res.ok) {
      throw new Error("Failed to fetch products");
    }

      return res.json()
}

export const fetchProductToServer = async (category:string ='recomended-items' , item :string ='1')=>{

  const res = await fetch(`https://brand-ecommerce-data.onrender.com/${category}/${item}`, {
    cache:'no-cache'
  });
  
  if (!res.ok) {
    
    throw new Error(res.url);
  }
  
    return res.json()
}


