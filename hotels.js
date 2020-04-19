const http = require('http');
var hotels; 
exports.getAllHotels = function (){
  return new Promise(resolve => {
      if(hotels != undefined && hotels != 'Something failed!'){
        resolve(hotels)
      }
      else{
          http.get('http://fake-hotel-api.herokuapp.com/api/hotels', (resp) => {
            let data = '';
            resp.on('data', (chunk) => {
                    data += chunk;
            });
            resp.on('end', () => {
                    hotels=toArray(JSON.parse(data));
                    resolve(hotels);
            });
          }).on("error", (err) => {
                    resolve(-1);
          });
      }
  });
}
toArray = function (obj){
  let ret  = Object.keys(obj).map(function(key) {
      return obj[key];
    });
  return ret;
}