let answer = document.getElementById("answer")
    let number1, hasOp = false,
        op;

    function clickNum(num) {
        if (hasOp == true) {
            answer.innerHTML = num;
            hasOp = false;
        } else {
            answer.innerHTML = answer.innerHTML + num
        }
    }
    

    function showAnswer() {
        if (op == "+") {
            let a = Number(number1) + Number(answer.innerHTML);
            console.log(a)
            answer.innerHTML = a
        } else if (op == "-") {
            let a = Number(number1) - Number(answer.innerHTML);
            answer.innerHTML = a
        } else if (op == "*") {
            let a = Number(number1) * Number(answer.innerHTML);
            answer.innerHTML = a
        }
        else if (op == "/") {
            let a = Number(number1) / Number(answer.innerHTML);
            answer.innerHTML = a
        }
    }

    function clearAnswer() {
        answer.innerHTML = ""
    }

    function plusNumbers() {
        number1 = answer.innerHTML;
        hasOp = true;
        op = "+"
    }
    function minusNumbers() {
        number1 = answer.innerHTML;
        hasOp = true;
        op = "-" }
    function productNumbers() {
        number1 = answer.innerHTML;
        hasOp = true;
        op = "*" }   
    function divideNumbers() {
        number1 = answer.innerHTML;
        hasOp = true;
        op = "/" }      
