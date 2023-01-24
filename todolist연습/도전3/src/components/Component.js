export default class Component {
    target; //화면을 나타주기위해 el 선택해주는 역할
    props;  // state에 적용된 객체들을 담아서 TodoLists로 투척하는 역할 
    state;  // state는 객체들을 담아주는 역할
    constructor(target, props) { //(main파일먼저 봐라) 여기서부터 시작이다 1번(메인에서 매개변수 받음)
        //생성 및 초기화(new라는 키워드가 발동되면 자식명이 적혀있어도 constructor함수를 찾아 옴)
        //6-7 TodoHeader 담아서 왔다!!!!!
        //8-8 이번엔 Todolist 담아서 왔당!!!
        this.target = target; //여기 this들은 클래스 내부를 바라봄
        //2-1번 메인에서 받아온 매개변수 target에 할당
        //7-1 TOdoHeader 에서 받아온 매개변수 target에 할당
        //8-9 Todolist에서 받아온 매개변수1 target에 할당
        this.props = props;
        //2-2번 메인에서 받은거 없음
        //7-2 TOdoHeader 에서 받아온거 없음
        //8-10 Todolist에서 받아온 매개변수2 props에 할당
        this.setup();
        //3-1번 셋업 돌린다~ (자식쪽부터 뒤져라 setup을 찾아서)
        //7-3 셋업 돌린다~ (자식쪽부터 뒤져라 setup을 찾아서)
        //8-11 셋업 돌린다~ (자식쪽부터 뒤져라 setup을 찾아서)
        this.render();
        //4-1번 렌더 돌린다 (일단 자식부터 찾아 자식한테 없으면 부모)
        //7-5 랜더 돌린다~~~ (일단 자식부터 찾아 자식한테 없으면 부모)
        //8-13 랜더 돌린다~~~ (일단 자식부터 찾아 자식한테 없으면 부모)
        this.setEvent();
    }
    render() {
        //4-2 찾았다 요놈
        //7-6 찾았당~
        //8-14 찾았당~~
        this.target.innerHTML = this.template();
        //4-3 힝 이번엔 template찾아야해 자식부터 근데 일단 지금은 app하고만 연결했다고 생각해 다른거 신경 ㄴㄴ
        //4-6 app쪽에서 리턴해준 div2개 golive 켜서 있는지 확인해봐라 있으면 다음으로간다
        //7-7 우리아까 타겟 div #insertTodo 이걸로 잡았다 template 찾으러가자
        //7-8 리턴해준거 일로와서 div안에 잘 들어갔는지 확인 
        //8-15우리아까 타겟 div #listTodos 이걸로 잡았다 template 찾으러가자
        //8-20 후.. li 잘찍히는지 봐봐....
        this.mounted()
        //5-1 mounted 호출 일단 무조건 자식부터 뒤져!!!!!(이때도 app만 연결상태라 생각)
        //8-1 mounted 다시 호출 자식부터~~~
        //9-1 mounted 다시 호출 자식부터~~~
    }
    template() {
        return "";
    }
    setState(newState) {
        console.log(newState)
        this.state = {...this.state, ...newState};
        console.log(this.state);
        this.render();
        console.log("setState쪽")
    }
    mounted(){}
    setup(){}
    setEvent(){}
}