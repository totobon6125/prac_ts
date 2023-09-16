// JS 문자열 선언
let str = 'hello';

// TS 문자열 선언
let str1: string = 'hello';

// TS 숫자 선언
let num: number = 10;

// TS 배열 선언
let arr: Array<number> = [1, 2, 3];
let items: number[] = [1, 2, 3];

let heroes: Array<string> = ['Capt', 'Thor', 'Hulk'];

// TS 튜플
let address: string[] = ['seoul', 'busan']
let address1: [string, number] = ['gangnam', 10]; // 배열의 특정 인덱스의 타입을 정함. => 튜플

// TS 객체
let obj: object = {};
let person: object = {
    name: 'cpat',
    age: 100
}

let person1: { name: string, age: number } = {
    name: 'thor',
    age: 1000
}

// TS 진위값
let show: boolean = true;