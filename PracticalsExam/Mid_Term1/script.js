function oddEvenCheck() {
    let numberReceived = document.getElementById("numberInput")

    if (numberReceived.value % 2 === 0) {
        document.getElementById("resultBox").innerHTML = "The number is Even."
    } else {
        document.getElementById("resultBox").innerHTML = "The number is Odd."
    }
}

function printNumbers() {
    let numberReceived = document.getElementById("numberInput")
    let num = parseInt(numberReceived.value)

    if (isNaN(num) || num < 1) {
        document.getElementById("resultBox").innerHTML = "Please enter a valid positive number."
        return
    }

    let output = "| "
    for (let i = 1; i <= num; i++) {
        output += i + " | "
    }

    document.getElementById("resultBox").innerHTML = "Numbers from 1 to " + num + ":<br>" + output
}

