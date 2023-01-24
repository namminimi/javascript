export default class Component {  //외부파일에서 component 사용할수있게 내보내줌
    target;   //변수 선언
    props;    //변수 선언
    state;    //변수 선언
    constructor(target, props) {   //생성및 초기화
        this.target = target;  //위에 변수에 매개변수 할당
        this.props = props;    //위에 변수에 매개변수 할당
    }
    //해야될거 div 앱안에 div2개 생성
    //첫번째 div안에는 타이틀과 input 버튼 있어야함
    //두번쨰 div안에는 input에 입력된 값들을 li형태로 출력해야하고 
    //기존껀 삭제되지않고 기존꺼에서 li가 추가됨

    render() { //render 메서드(함수) 생성
        //render메서드는 화면에 나타내주는 기능을 줘야함
        this.target.innerHTML = this.template();
        
    }
    setState() { //setState 메서드(함수) 생성, 이 함수는 다른 외부파일에서 사용

    }
    setup(){ //setup 메서드(함수) 생성, 이 함수는 다른 외부파일에서 사용
        
    }
    template() { //template 메서드(함수) 생성
        //template() 기능은 어떤씩으로 화면을 꾸며줄지 html을 설계함
        //<div>타이틀 input 버튼 들어가야함<div>
        //<div>input에 입력된 값 출력해야함
        this.state = {...this.state}

    }
    mounted() { //mounted 메서드(함수) 생성, 이 함수는 다른 외부파일에서 사용

    }
    setEvent() { //setEvent 메서드(함수) 생성, 이 함수는 다른 외부파일에서 사용

    }
    
}