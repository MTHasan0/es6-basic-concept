

function greetings(greetingsHandler, name){
    console.log(name);
    greetingsHandler(name);
    


}


function greetingsHandler(name){
    console.log('Good Morning ' + name);

}

greetings(greetingsHandler, 'Tanvir Hasan');