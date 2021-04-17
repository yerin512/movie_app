let sayHello = function(num1, num2){
    return num1 + num2
}


let sayHello = (num1, num2) => {
    return num1 + num2;
}

//코드가 한줄이고 리턴문이 있기 때문에 변경가능
//리턴문의 경우 {}를 ()로 바꿀 수 있다.

let sayHello = (num1, num2) => (
    num1 + num2
);

//리턴문이 한줄인 경우 괄호도 생략 가능하다

let sayHello = (num1, num2) => num1 + num2;

//인수가 하나면 괄호 생략이 가능하다.

let sayHello = num1 => console.log(`Hello ${num1}`);

//인수가 없는 경우는 괄호 생략이 불가하다

let sayHello = () => console.log('Hello!');


//리턴문이 있다해도 한줄이 아니면 일반괄호 ()를 사용할 수 없다.


let add = (num1) => {
    const result = num1 * 2;
    console.log(result);
}