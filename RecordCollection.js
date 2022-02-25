/**
 * This is a code challenge that we gonna update your Collection music using id, props and value
 */

var Collection =
{

    "2548":
    {

        "album": "Slippery When Wet",
        "artist": "Bon Jovi",
        "tracks": ["Let it Rock", "You Give Love A Bad Name"]

    },

    "2468": 
    {

        "album": "1999",
        "artist": "Prince",
        "tracks": ["1999", "Little Red Corvette"]


    },

    "1245":
    {

        "artist": "Robert Palmer",
        "tracks": [ ]

    },

    "5439":
    {

        "album": "ABBA Gold"

    }

};

/**
 * This function is responsible for updating new tracks or properties from an id
 * @param {int} id it's the id value of Collection 
 * @param {string} props this variable correspond to the property of an id 
 * @param {string} value this value correspond to the value that will be insert 
 * @param {object} Collection it's a object that represents the collection
 * @returns {object} is a object that contains the collection with the new element
 */
function updateRecordsTracks(id, props, value, Collection)
{

    if (value === "")
    {

        delete Collection[id][props]; // this function delete if an props of a id is empty

    }

    else if (props.length === "tracks")
    {

        Collection[id][props] = Collection[id][props] || []; // we gonna create an empty array in this case that this prop does not exist
        Collection[id][props].push(value);

    }

    // This case we create a new property for the object
    else
    {

        Collection[id][props] = value;

    }

    return Collection;

}

var collectionCopy = JSON.parse(JSON.stringify(Collection)); // This make a copy of a object 
//console.log(collectionCopy);
var collectionMod = updateRecordsTracks(5439, "artist", "ABBA", Collection)
console.log("Updating Collection : ", collectionMod);
console.log("\n\n");
collectionMod = updateRecordsTracks(2468, "tracks", "this is a test !!!", Collection);
console.log("Updating Collection : ", collectionMod);
