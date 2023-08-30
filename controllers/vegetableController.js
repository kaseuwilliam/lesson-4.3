let vegs = [

    {
        id:1,
        name: 'carrot',
        calories: 25
    },
    {
        id:2,
        name: 'squash',
        calories: 31
    },
    {
        id:3,
        name: 'lettuce',
        calories: 8
    },

]

exports.addVegetable = (req,res) =>{

    console.log(req.body)

    vegs.push(req.body) 
    res.json(vegs)
}

exports.greetVegetableLovers = (req,res) =>{
    res.json({message:"You are awesome for loving vegetables, they have low calories"})
}

exports.getAllVegetables = (req,res) =>{
    res.json(vegs)
}

exports.getVegetablesWithLeastCalories = (req, res) =>{

    let leastCalories = vegs[0].calories
    let leastCaloriesName =  vegs[0].name

    for(let i=0; i<vegs.length; i++ ){

        let potential = vegs[i];

        if(potential.calories < leastCalories){

            leastCalories = potential.calories
            leastCaloriesName = potential.name
        }

    }

    res.json(leastCaloriesName)

}

exports.getVegetablesWithMostCalories = (req, res) =>{

    let mostCalories = vegs[0].calories
    let mostCaloriesName =  vegs[0].name

    for(let i=0; i<vegs.length; i++ ){

        let potential = vegs[i];

        if(potential.calories > mostCalories){

            mostCalories = potential.calories
            mostCaloriesName = potential.name
        }

    }

    res.json(mostCaloriesName)

}