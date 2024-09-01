import { ProductProps } from "@/types"


const doesObjectInclude = (array:ProductProps[] , value:string) => {
    if (!array|| !value) {
        return []
    }  
 return array.filter(object => object['title'].toLocaleLowerCase().includes(value.toLocaleLowerCase()) )
}

export default doesObjectInclude

