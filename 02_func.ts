// 함수의 파라미터에 타입을 정의하는 방식
function sum(a: number, b: number) {
    return a + b
}

sum(10, 20)

// 함수의 반환값에 타입을 정의하는 방식
function add(): number {
    return 10
}

// 함수에 타입을 정의하는 방식 
function sum2(a: number, b: number): number {
    return a + b
}

// !sum2(10, 20, 30) >> 함수의 규칙을 ts 가 인식해서 오류를 잡아줌, js 는 몇 개를 넣든 2개만 인식함.

// 함수의 옵셔널 파라미터 >> ? 를 통해 2번째 매개변수는 없어도 되고 있어도 되는 상태를 만듬.
function log(a: string, b?: string) {
    return b || a
}

log('fight')
log('fight', 'hello')
log('fight', 'hello', 'error')
