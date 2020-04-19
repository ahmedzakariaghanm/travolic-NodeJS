var hotels = require('./hotels');

exports.sortByName = (req, res) => {
    const order = req.query.order;
     hotels.getAllHotels().then((hotelList)=>{
        if(hotelList == undefined || -1 == hotelList || hotelList == 'Something failed!')return res.status(400).send(JSON.stringify({'msg':"Something failed !"}, null, 4));

        hotelList.sort((a,b) => (a.name.toLowerCase() > b.name.toLowerCase()) ? 1 : ((b.name.toLowerCase() > a.name.toLowerCase()) ? -1 : 0));//from A:Z
        if('Des'==order)hotelList.reverse(); //reverse it in case of descending order 
        res.header("Content-Type",'application/json');
        return res.status(201).send(JSON.stringify(hotelList, null, 4));
    })
}

exports.sortByPrice = (req, res) => {
    const order = req.query.order;
    hotels.getAllHotels().then((hotelList)=>{
        if(hotelList == undefined || -1 == hotelList || hotelList == 'Something failed!')return res.status(400).send(JSON.stringify({'msg':"Something failed !"}, null, 4));

        hotelList.sort((a,b) => a.price - b.price);// from low to high
        if('Des'==order)hotelList.reverse(); //reverse it in case of descending order
        res.header("Content-Type",'application/json');
        return res.status(201).send(JSON.stringify(hotelList, null, 4));
    })
}