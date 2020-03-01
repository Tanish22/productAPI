const person = {
    id : 123,
    name : "tanish",
    dob : new Date(22, 3, 1989),
    age : 30,
    salary : 400000,
    department : "Product Development",
    hometown : "Mumbai"
}

savePerson()

function savePerson(obj){
    let id = Date.now();
    if(obj.id){
        id = obj.id;
    }
    let name = obj.name;
    if(!name){
        name = "blank"
    }
    let dob = !obj.dob ? obj.dob : new Date(11, 01, 1962)

    // saving in local storage

    const KEY = "randomString";
    let jsonStr = JSON.stringify({id : id, name : name, dob : dob});
    localStorage.setItem(KEY, jsonStr)
}


