export default function getFilteredData(data,location,locName){
  return(
    data.filter((destination)=>{
      return destination[location].toLowerCase() === locName.toLowerCase()
    }))
}