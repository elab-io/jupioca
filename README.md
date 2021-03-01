## How to run

```sh
⟩ ./start.sh
Select the operation ************
  1) Starts Next.js in development mode
  2) Export Static HTML to {out} directory
  3) Rebuild docker image
  4) Ssh into the container
```

## Alternatively using Docker command

```sh
// Run local development
docker-composer up next

// rebuild docker image 
docker build --no-cache -t docker-nextjs .

// ssh into the container
docker run --rm -it docker-nextjs sh
```

## For front-end style

Spin up development container, 
then modify the src/app/public/scss/site.scss, then it will automatically compile.


## Sample store data 
```json
  {
    "id": "001",
    "meta":{
      "og:type":"business.business",
      "og:title":"Moge Tee - New York - W 9th St Online Ordering",
      "og:image":"https://abc.g.com/ccom/merchant-content-a-z/B/mogete/Logo-FullColor.png",
      "og:business:contact_data":"business.business",
      "business:contact_data:street_address":"200 W. 23rd St.",
      "business:contact_data:locality":"New York",
      "business:contact_data:region":"NY",
      "business:contact_data:postal_code":"10011",
      "business:contact_data:country_name":"United States",
      "place:location:latitude":"40.74516914",
      "place:location:longitude":"-73.999995",
      "og:description":"Order ahead, and skip the line. Online ordering has never been easier!"
    },
    "title": "Moge Tee Flushing",
    "store_url": "flushing-ny",
    "address": "38-03 Main St, Flushing, NY 11354",
    "hours": {
      "Mon-Sun": "10:300AM - 10:30PM"
    },
    "phone": "(718) 321-1188",
    "cs": false,
    "social": {
      "yelp": "https://www.yelp.com/biz/moge-tee-flushing",
      "facebook": "https://www.facebook.com/Mogeteeusa/",
      "instagram": "https://www.instagram.com/mogeteeusa/"
    },
    "order": {
      "uber": "https://www.ubereats.com/en-US/new-york/food-delivery/moge-tee-%E6%84%BF%E8%8C%B6-flushing/K81n8zJKScy7x4r84ajTJg/",
      "yelp": "https://www.yelp.com/biz/m%C3%B6ge-tee-falls-church-va-falls-church-2?osq=moge+tee"
    },
    "description":"<p>This is custom text for store description.</p><p>Second line description</p>",
    "store_pic": "/img/bg-masthead.jpg",
    "menu":[{
      "id": "C6",
      "group-name": "Fresh Fruit Yakult",
      "n2": "鲜果多多",
      "imgs": [
        {
          "img": "jpg"
        }
      ],
      "group-items": [
        {
          "title": "Dragon Fruit Yakult",
          "n2": "火龙果多多",
          "description": "With fresh dragon fruit and yakult. (Non Caffeine;  Non-Diary)",
          "calories": "105",
          "price": "$6.50",
          "image": "/img/menu/c61.jpg"
        },
        {
          "title": "Grapefruit Yakult",
          "n2": "西柚多多",
          "description": "With fresh grapefruit and yakult. (Non Caffeine;  Non-Diary)",
          "calories": "105",
          "price": "$6.00",
          "image": "/img/menu/c62.jpg"
        }
      ]}]
  }
```



## Reference:
* https://www.youtube.com/watch?v=IkOVe40Sy0U
* https://blog.logrocket.com/how-to-build-a-server-rendered-react-app-with-next-express-d5a389e7ab2f/
* https://gist.github.com/cobyism/4730490
* https://codeburst.io/next-js-on-cloud-functions-for-firebase-with-firebase-hosting-7911465298f2
* https://www.youtube.com/watch?v=c93iGKyvh3o
* https://github.com/firebase/functions-samples/tree/master/nextjs-with-firebase-hosting
