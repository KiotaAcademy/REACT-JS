# JSON

JavaScript Object Notation - this is a standardized method for structuring data.

it is based heavily on Javascript Syntax for js objects.

You will often encounter JSON formatted data when working with external servers or APIs - it is essentially the universal format for transmitting data on the web.

many programming environments feature the ability to read (parse) and generate JSON.

JSON exists as a string — useful when you want to transmit data across a network. It needs to be converted to a native JavaScript object when you want to access the data

lets say you have the below json file:

```json
{
  "squadName": "Super hero squad",
  "homeTown": "Metro City",
  "formed": 2016,
  "secretBase": "Super tower",
  "active": true,
  "members": [
    {
      "name": "Molecule Man",
      "age": 29,
      "secretIdentity": "Dan Jukes",
      "powers": ["Radiation resistance", "Turning tiny", "Radiation blast"]
    },
    {
      "name": "Madame Uppercut",
      "age": 39,
      "secretIdentity": "Jane Wilson",
      "powers": [
        "Million tonne punch",
        "Damage resistance",
        "Superhuman reflexes"
      ]
    },
    {
      "name": "Eternal Flame",
      "age": 1000000,
      "secretIdentity": "Unknown",
      "powers": [
        "Immortality",
        "Heat Immunity",
        "Inferno",
        "Teleportation",
        "Interdimensional travel"
      ]
    }
  ]
}

```

to access elements you: `json.homeTown` or `json["active"]`

## json.parse()

when receiving data from the internet, it is normally in string form and we need to convert it to  become a js object

you do so using json.parse()

this is how it is received *'{"name":"John", "age":30, "city":"New York"}'*, and this is how it is to be formatted: *`const obj = JSON.parse('{"name":"John", "age":30, "city":"New York"}');`*

## json.stringfy()

when sending data in the internet, it has to be a string

here is an object: *`const obj = {name: "John", age: 30, city: "New York"};`*

here is how to stringfy it: *`const myJSON = JSON.stringify(obj);`*

