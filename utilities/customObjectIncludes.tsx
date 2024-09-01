import { ProductProps } from "@/types";


const customObjectIncludes = (list:ProductProps[] , itemId:string):boolean => {

  if (!list||!list.length || !itemId) {
    return false
  }  

  const checkout = list?.some((product:ProductProps) => product.id === itemId ? true : false)
    
  return checkout;
}

export default customObjectIncludes