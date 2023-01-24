//두수 사이에 랜덤 실수를 반환해 주는 함수
function randomFloat(min, max){
    return Math.random() * (max-min + 1) + min;

}
//참고
/* Math.random() //0.0 <= num < 1
Math.random() * 3 + 3 // 3.0 <= num < 6
randomFloat(3,5) */

//두 점(x1, y1), (x2, y2) 사이의 거리를 반환해 주는 함수
function distance(x1, y1, x2, y2){
    let distX = x2 - x1;
    let distY = y2 - y1;
    //두점의 거리 공식
    return Math.sqrt(distX * distX + distY * distY);
}

//모듈 내보내기
export default {
    randomFloat, distance
}
