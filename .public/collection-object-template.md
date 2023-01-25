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
