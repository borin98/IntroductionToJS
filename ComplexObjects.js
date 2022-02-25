/**
 * This script is an example of how you can manipulate complex objects in js
 */

var MyMusicList = 
[

    {

        "artist": "Billy Joel",
        "title": "Piano Man",
        "releaseYear": 1973,
        "formats": ["CD", "8T", "LP"]

    },

    {
    
        "artist": "Beau Carnes",
        "title": "Cereal Man",
        "releaseYear": 2003,
        "formats": ["Youtube Music"]

    }

];

var MyStorage =
{

    "car":
    {

        "inside":
        {

            "glove box": "maps",
            "passager seat": "crumbs"

        },

        "outside":
        {

            "trunk": "jack"

        }

    }

};

console.log(MyMusicList[0]);
console.log(MyMusicList[1]);

var gloveBoxContents = MyStorage.car.inside["glove box"];
console.log('\nValue of myStorage.car.inside["glove box"]', gloveBoxContents);

var listDistro = MyMusicList[0].formats;
console.log(listDistro);
console.log(listDistro[0]);