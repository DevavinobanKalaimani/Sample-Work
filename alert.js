let result;

let operator=prompt('enter the operator');

const inp1=+prompt('enter 1st number');
const inp2=+prompt('enter the 2nd number');

switch(operator){
    case'+':
    result = inp1+inp2;
    alert(`${result}`);
    break;
    case'-':
    result = inp1-inp2;
    alert(`${result}`);
    break;
    case'*':
    result = inp1*inp2;
    alert(`${result}`);
    break;
    case'/':
    result = inp1/inp2;
    alert(`${result}`);
    break;
}