# File with heading

INTROUDCTION & DOCUMENT FILE

NPM Installed

Bootstrap
Hardhat

Todo List:

Write mapping for collection

const collection  = [{
    "collection" : "Attr.CollectionName",
    "artist" :     "Attr.artist",
    "mint" : {
        "limit":   4000,       // Limit number of NFTs minted
        "cost" :    250,       // Cost to mint from collection
        "tier" :      1,
        "count":    100,       // Current number of tokens (NFTs) minted from collection
        "account":   50,       // Total number of attr staked in the collection
        "vote":     100        // Amount of ATTR staked at proposal stage
    },
    "access" : {
        "write" : 1,      // What member tier has access to write
        "read" :  3       //
    },
    "attributes" : {
        "attribute1": {                      //
            "name": "Background",            // Attribute's Name
            "Weight":        100,            // Base weight of the layer
            "cost":           20,            // minimum ATTR spend per option in attribute
            "selected": "option1",
            "option1": {
                "name":                "Deep Red",      // Atrribute Option 1 Name
                "image":       "imgs/C01/1/1.png",      // Image source for option
                "Weight":                      60,      // Base weight of the option  
                "account": "Attr1.option1.staked",      // Total number of attr staked in the option
                "input":    "Attr1.option1.input"       // The amount the user staked on the option
            },
            "option2": {
                "name":                   "Cream",
                "image":       "imgs/C01/1/2.png",
                "Weight":                      30,
                "account": "Attr1.option2.staked",
                "input":    "Attr1.option2.input"
            },
            "option3": {
                "name":                  "Purple",
                "image":       "imgs/C01/1/3.png",
                "Weight":                      10,
                "account": "Attr1.option3.staked",
                "input":    "Attr1.option3.input"
            }
        }
    }
}]

Tokentier
attr coins
member number
attr burnt
collection signs
    nfts minted
    vote
status [investor,admin]
what nfts they hold
how many they brought
sold and how much for

Wanted functions:

Page is loaded via the collection object[returned from reading collection token]

- UI listens for selected front end changes and draws again return from selected

Draw Count  - live count of draw number & coins staked at each attribute and total of coins at the bottom before mint button

Prompt if user trys to mint with coins staked on the none draw option
move to selected or keep on option

add more console logs

Style Page

- Collection data to be passed on page init
- Remove selected class from previous options on generate art
- Apply selected option to front end
- Live changes when option selected
- Improve input elements
- Margin around canvas(more whitespace)

Add draw count
Add option count
style increment buttons


Add balance debiting
Add pop-up on button press
limit staking to only 1 option per attribute

set base mint cost
