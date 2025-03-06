const planents:string[] = [
    "mercury",
    "venus",
    "earth"
]

planents.push("jupiter")

// another syntax 

const galaxy:Array<string> = []

galaxy.push("milky way")
galaxy.push("Andromeda")
galaxy.push("Whirpool galaxy M51")

type user = {
    name : string;
    isActive : boolean
}

const allUser: user[] = []

// It is obvious that in the above array , you can only put 
// properties which follow the above user type 

allUser.push({
    name : "nikhil",
    isActive: true
})

// Array in a array

const MLModels: number[][] = [
    [22,33 , 44],
    [34,44,54]
]