

function greetings(greetingsHandler, name){
    console.log(name);
    greetingsHandler(name);
    


}


function greetingsHandler(name){
    console.log('Good Morning ');

}

greetings(greetingsHandler, 'Tanvir Hasan');