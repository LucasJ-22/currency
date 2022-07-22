
// Example POST method implementation:
async function getData(url = '') {
    // Default options are marked with *
    const response = await fetch(url, {
      method: 'GET', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
     
    });
  
  return response.json(); // parses JSON response into native JavaScript objects
}
  


getData('https://api.exchangerate.host/latest', { answer: 43 })
  .then(data => {
 
    trData(data.rates);
});




function trData(data) {
  var din = [];

  for (var x in data) {
    din.push(x);   
  }

  return din;  
}


