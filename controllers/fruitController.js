let fruits = [

    {
        id:1,
        name: 'apple',
        calories: 95
    },
    {
        id:2,
        name: 'orange',
        calories: 45
    },
    {
        id:3,
        name: 'banana',
        calories: 105
    },

]


exports.getAllFruits = (req, res)=>{
   
    res.json(fruits)
}


exports.getAllFruitNames =(req, res) =>{

    let getNames = fruits.map(fruit => fruit.name)
    res.json(getNames)

}

exports.getFruitNameFromID = (req, res)=>{

    let getName = fruits.filter(fruit => fruit.id == req.params.id)
    res.json(getName[0].name)

}

exports.getAllFruitCalories = (req, res)=>{

    let getCalories = fruits.map(fruit => fruit.calories)
    res.json(getCalories)

}

exports.getFruitCaloriesFromID = (req, res)=>{

    let getCalories = fruits.filter(fruit => fruit.id == req.params.id)
    res.json(getCalories[0].calories)

}


exports.getFruitByID = (req, res)=>{

    let findFruit = fruits.filter(fruit => fruit.id == req.params.id)

    res.json(findFruit)

}