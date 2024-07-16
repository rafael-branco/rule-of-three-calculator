function calculate() {
    let box1ValueRaw = document.querySelector("#box-1").value;
    let box2ValueRaw = document.querySelector("#box-2").value;
    let box3ValueRaw = document.querySelector("#box-3").value;

    document.querySelector('#message').innerHTML = "";

    if (
        box1ValueRaw === "" ||
        box2ValueRaw === "" ||
        box3ValueRaw === "" ||
        box1ValueRaw == 0 ||
        box2ValueRaw == 0 ||
        box3ValueRaw == 0
    ) {
        document.querySelector("#result").value = "";
        document.querySelector('#message').innerHTML = "Fields cannot be zero or empty.";
    } else {
        let box1Value = parseFloat(box1ValueRaw);
        let box2Value = parseFloat(box2ValueRaw);
        let box3Value = parseFloat(box3ValueRaw);

        if (
            isNaN(box1Value) ||
            isNaN(box2Value) ||
            isNaN(box3Value)
        ) {
            document.querySelector("#result").value = "";
            document.querySelector('#message').innerHTML = "Fields must contain valid numbers.";
        } else {
            let result = calculateRuleOfThree(box1Value, box2Value, box3Value);

            if (result % 1 !== 0) {
                result = result.toFixed(2);
            }

            document.querySelector("#result").value = result;
        }
    }
}

function calculateRuleOfThree(a, b, c){
    return (b * c) / a;
}

function clearFields() {
    document.querySelector("#box-1").value = "";
    document.querySelector("#box-2").value = "";
    document.querySelector("#box-3").value = "";
    document.querySelector("#result").value = "";
    document.querySelector('#message').innerHTML = "";
}

module.exports = { calculate, calculateRuleOfThree, clearFields };