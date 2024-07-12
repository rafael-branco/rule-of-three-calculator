function calculate(){
    let box1Value = parseInt(document.querySelector('#box-1').value);
    let box2Value = parseInt(document.querySelector('#box-2').value);
    let box3Value = parseInt(document.querySelector('#box-3').value);

    let result = (box2Value*box3Value)/box1Value

    document.querySelector('#result').value = result;

}

function clearFields(){
    document.querySelector('#box-1').value = '';
    document.querySelector('#box-2').value = '';
    document.querySelector('#box-3').value = '';
    document.querySelector('#result').value = '';
}