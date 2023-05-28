let outputscreen = document.getElementById("outputscreen") 

function display(num){
    outputscreen.value += num
}

function Calculate(){
    try{
        outputscreen.value = eval
        (outputscreen.value);
    }

    catch(err){
       outputscreen.value = "Error";
    }
}

function clean(){
    outputscreen.value = ""
}

function del(){
    outputscreen.value = outputscreen.value.slice(0, -1)
}