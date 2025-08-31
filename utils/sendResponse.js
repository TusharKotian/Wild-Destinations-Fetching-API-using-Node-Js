export default function SendResponse(res,statusCode,destinations){
   res.setHeader('Content-Type', 'application/json')
    res.statusCode=statusCode;
    res.end(JSON.stringify(destinations))
}