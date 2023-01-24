function myFunct(c, a, b) { // no need "let function"
    return a + b + c;
};
function myFunct2() {
    return 'Hello world';
};
function myFunct3(a) {
    return a;
};
myFunct(1, 2, 3);
myFunct2();
myFunct3(1);

const myFunct4 = () => { 
    return 'Hello world';
};

const myFunct5 = a => { //If ARROW FUNCTION use only 1 parametr - no brackets
    return a;
};
const myFunct6 = (c, b, a) => {
    return a+b+c;
};

const coolFunct = (a, b) => a + b; // a + b - without brackets if in one line (not so much parametrs)

myFunct4();
myFunct5('Hello world');
myFunct6(10, 11, 12);