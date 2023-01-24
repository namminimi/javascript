//컴퍼넌트 클래스 선언

export default class Component {
    //필드
    $target;
    $state;
    //생성자
    constructor(target) {
        this.target = target;
        this.setup();
        this.render();
    }
    //메소드
    setup(){}
    //화면구현 리턴
    template(){return "";}
    setEvent(){}
    //화면에 나타내기
    //DOM요소 이벤트 연결
    render() {
        this.target.innerHTML = this.template();
        console.log(223)
        this.setEvent();
    }
    setState(newState){
        //...스프레드 구문은 펼치고 그걸 다시 덮어씌워줌
        this.state = {...this.state, ...newState};
        //this.state원본 유지하고 , newState 덮어 씌움  덮어씌우는 이유 키값이 같기때문에
        //render는 화면그리기호출
        this.render();
    }
}