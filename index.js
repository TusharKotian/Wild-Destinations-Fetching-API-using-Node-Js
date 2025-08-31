import http from 'node:http'
import {getDatafromDB} from './database/db.js'
import sendResponse from './utils/sendResponse.js'
import getFilteredData from './utils/getFilteredData.js'
import getDataByQuery from './utils/getDatabByQuery.js'

const PORT=8000

const server=http.createServer(async (req,res)=>{

  const destinations = await getDatafromDB()

  const urlObj=new URL(req.url,`http://${req.headers.host}`);
  const queryObj=Object.fromEntries(urlObj.searchParams)

  if(urlObj.pathname ==='/api' && req.method==='GET'){
    let filteredData=getDataByQuery(destinations,queryObj);
    sendResponse(res,200,filteredData)

  }else if(req.url.startsWith('/api/country') && req.method ==="GET"){
    const country=(req.url.split('/')).pop()
    const filterData = getFilteredData(destinations,'country',country)

    sendResponse(res,200,filterData)

  }
  else if(req.url.startsWith('/api/continent') && req.method ==="GET"){
    const continent=(req.url.split('/')).pop()
    const filterData = getFilteredData(destinations,'continent',continent)
    sendResponse(res,200,filterData)

  }else{
    sendResponse(res,404,{error: "not found",
      message: "The requested route does not exist"})
  }
})

server.listen(PORT,()=>
  console.log(`Connected to port ${8000}`)
)