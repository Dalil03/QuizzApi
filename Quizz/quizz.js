
const keyApi = "uOQRyA8CURBVNT7JsVTxR6DsRqjrQPRCLLlBS93P"
fetch(`https://countryapi.io/api/all?apikey=${keyApi}`)
.then(res => res.json())
.then(data =>console.log(data))
.then (array => {
  const random = Math.floor(Math.random() * array.length)
  console.log(array[random])
  })
.catch(e => console.error(e));

