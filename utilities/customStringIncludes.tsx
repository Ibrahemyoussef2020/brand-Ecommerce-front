

const customStringIncludes = (list:string[] | [] , item:string):boolean => {

  if (!list||!list.length || !item) {
    return false
  }  

  const checkout = list?.some((e:string) => e === item ? true : false)
    
  return checkout;
}



export default customStringIncludes