[![ahmedzakariaghanm](https://circleci.com/gh/ahmedzakariaghanm/travolic-nodejs.svg?style=svg)](https://bitbucket.org/ahmedzakariaghanm/travolic-nodejs/src/master/)
## What is this ?

This is solution for travolic backEnd [Task](https://github.com/travolic/Back-End-Task)

## How to use this solution ?

1. Clone this project into your local machine
2. Open your cmd and navigate to project directory
3. Run **npm install**
4. Run **nodemon server**
5. Now you can use the API , open your browser and enter http://localhost:5000/

## How to use the API ?

1. The first one is for sort by **Name** , enter http://localhost:5000/sortByName
2. If you want to sort in Descending order add order=Des after the route , enter http://localhost:5000/sortByName/?order=Des
3. The second is for sort by **Price** , enter http://localhost:5000/sortByPrice
4. If you want to sort in Descending order add order=Des after the route , enter http://localhost:5000/sortByPrice/?order=Des
5. The last one is for **Search** , enter ( http://localhost:5000/search/ ) :
6. For search by **Name** : add name=yourDesiredName ,ex. http://localhost:5000/search/?name=deserunt
7. For search by **City** : add city=yourDesiredCity ,ex. http://localhost:5000/search/?city=Christophertown
8. For search by **Price** : add minPrice=yourDesiredMinPrice and maxPrice=yourDesiredMaxPrice ,ex. http://localhost:5000/search/?minPrice=500&maxPrice=750
9. If you entered minPrice only it will return all elements that have that minimum price or greater 
10. If you entered maxPrice only it will return all elements that have that maximum price or smaller
11. For search by **Date** : add minDate=yourDesiredMinDate and maxDate=yourDesiredMaxDate ,ex. http://localhost:5000/search/?minDate=10-10-2020&maxDate=15-10-2020
12. **Note :** this will return all elements that start in that range , If you want to get the elements that start and end within the range add dateSearch=end ,ex. http://localhost:5000/search/?minDate=10-10-2020&maxDate=15-10-2020&dateSearch=end
13. If you entered minDate only it will return all elements that have that start after that date .
14. If you entered maxDate only it will return all elements that have that start before that date .
15. If you entered maxDate and dateSearch=end it will return all elements that have that end before that date.