console.log("Binary Search con función recursiva");

const myList =[];
function constructArray (number){
    for (let i = 1; i <=number; i++) {
        //console.log(i);
        myList.push(i);
    }
}

constructArray(100);
//console.log(myList);


//A partir de aquí esta función se ejecutará cuando el documento esté completamente cargado y listo para manipularse. 

document.addEventListener("DOMContentLoaded",()=>{
    const startButton = document.getElementById("start-button");// Variable para poder seleccionar el botón de inicio.
    const guessElement = document.getElementById("guess");//Aqui se va a mostrar el resultado de la adivinanza.

    let low = myList[0];
    let high = myList[myList.length-1];

    //Con esta función selecciono el boton de inicio y se reinician los valores originales. Después se llama a la función binarySearch para poder hacer la primera adivinanza.
    startButton.addEventListener("click",()=>{

        guessElement.textContent = "";
        let low = 0;
        let high = myList.length-1;
        binarySearch (myList,low,high,guessElement);

    });
    
});



function binarySearch (array,low,high,guessElement){

    let mid = Math.floor((low+high)/2);
    const confirmed = confirm(`¿Es este el número que estás pensando?: ${array[mid]}`);
   

    if (confirmed){

        guessElement.textContent = `¡Adiviné!: El ${array[mid]} es una excelente elección.`
    } else {

        const higher = confirm(`¿El número es mayor a: ${array[mid]} ?`);
        if (higher) {
        low = mid+1;
    } else {
        high = mid-1;
    }

    binarySearch(array,low,high,guessElement); //Se llama a la función otra vez para hacer la adivinanza con los nuevos parámetros.
}
};