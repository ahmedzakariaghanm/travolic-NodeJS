var hotels = require('./hotels');

createDate = function(d,m,y){
    return new Date(Date.UTC(y,m-1,d))
}

exports.search= (req, res) => {
        hotels.getAllHotels().then((hotelList)=>{
            if(hotelList == undefined || -1 == hotelList || hotelList == 'Something failed!')return res.status(400).send(JSON.stringify({'msg':"Something failed !"}, null, 4));
            let resultHotels=hotelList;
            if(req.query.name != undefined && req.query.name != "") resultHotels = resultHotels.filter(o => o.name.toLowerCase().includes(req.query.name.toLowerCase()));
            if(req.query.city != undefined && req.query.city != "") resultHotels = resultHotels.filter(o => o.city.toLowerCase().includes(req.query.city.toLowerCase()));
            if(req.query.minPrice != undefined && req.query.minPrice != "") resultHotels = resultHotels.filter(o => (req.query.minPrice <= o.price));
            if(req.query.maxPrice != undefined && req.query.maxPrice != "") resultHotels = resultHotels.filter(o => (req.query.maxPrice >= o.price));
            // Applay Date seach here
            if(req.query.minDate != undefined && req.query.minDate != ""){
                const min = req.query.minDate;
                const minDate = createDate(min.substring(0,2),min.substring(3,5),min.substring(6,10))
                resultHotels = resultHotels.filter(o => (new Date(o.date_start) >= minDate));
            }
            if(req.query.maxDate != undefined && req.query.maxDate != ""){
                const max = req.query.maxDate;
                const maxDate = createDate(max.substring(0,2),max.substring(3,5),max.substring(6,10))
                if(req.query.dateSearch!= undefined &&req.query.dateSearch == "end")resultHotels = resultHotels.filter(o => (new Date(o.date_end) <= maxDate)); // if start and end between range
                else  resultHotels = resultHotels.filter(o => (new Date(o.date_start) <= maxDate)); // if start between range
            }
            
            res.header("Content-Type",'application/json');
            if(resultHotels==0)return res.status(400).send(JSON.stringify({'msg':"Sorry we can't find what you search for !"}, null, 4));
            else return res.status(201).send(JSON.stringify(resultHotels, null, 4));
        })
}
