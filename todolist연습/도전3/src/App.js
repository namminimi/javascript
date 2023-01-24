import Component from "./components/Component.js"; //3-2번 연결
import TodoHeader from "./components/TodoHeader.js";
import TodoLists from "./components/TodoList.js";

export default class App extends Component {
    setup() {
        //3-2번 부모에서 setup돌린거 찾앗다 그전에 component import 걸어줘야함 ㅇㅈ?
        //3-3번 쭉쭉 밑에 객체 인식함 그리고 끝
        //7-4 setup 앱에 있네~~ 객체 만들어졌고 다시 부모로 돌아와!!!
        //8-12 setup 앱에 있네~~ 객체 만들어졌고 다시 부모로 돌아와!!
        this.state = {
            //3-4번임마this는 부모쪽 state변수 선언한거 state에 객체 담는다
            inputText: "",
            todoLists : [
                //3-5 키 : 벨유  벨유는 배열안에 객체형태로 있다
                //3-6 일단 여기끝남 다음 다시 부모로 넘어와
                {
                    no:1,
                    content: '할일1',
                    isDone: false
                },
                {
                    no:2,
                    content: '할일2',
                    isDone: false
                },
                {
                    no:3,
                    content: '할일3',
                    isDone: false
                }
            ]
        }
        console.log(this) //이거는 this.state가 뭘 보고있는 확인하려고 심어놈
    }
    template() {
        //4-4 찾았다 app쪽 template
        return`
        <div id="insertTodo"></div>
        <div id="listTodos"></div>
        `;
        //4-5div 2개 리턴하네 부모로 돌아가자 render메서드 template에 들어감
    }
    mounted(){
        //5-2 찾았다 (app만 연결됬다 생각했을땐 현재 메서드에는 아무것도 없겠지 ㅎㅎ)
        //5-3 div 2개를 만들었으니 h1, input, 버튼 만들어보자
        //6-1 todoHeader 파일로 와
        //8-2 찾았다 자 다음은 ul과 li들을 만들어보자 (Todolist파일로!!!)
        //9-2 이번엔 click했을떄 li추가해주는 이벤트를 줘보자!!!!!@!@!@!@!@
        const { addTodoList } = this;
        console.log(this)
        console.log("addTodoList는 무엇일까")
        const todoHeader = document.querySelector("#insertTodo");
        //6-5 todoHeader 내용들을 넣어줄 div 선택하고 할당
        const todolist = document.querySelector("#listTodos");
        //8-6 이번엔 Todolist 내용들 넣어줄 밑에 div 선택 할당 
        new TodoHeader(todoHeader, {addTodoList: addTodoList.bind(this)});
        //6-6 TodoHeader에 6-5선택한거 담아서 발동!!!(constructor 함수 찾아!!! 거기서 시작된다!!!)
        console.log(addTodoList)
        new TodoLists(todolist,{lists: this.state.todoLists})
        //8-7 Todolists  매개변수1에 선택한 el 담고, 매개변수2에 {key명(이름은 바꿔도된다) : value값은 위에 객체만든거 있지? 그것이야}
        //8-7 발동!!!!!!!!!!! constructor 찾아라!!!!
    }
    addTodoList(content) {
        console.log(content)
        const { todoLists } = this.state;
        console.log(this.state);
        console.log(todoLists);
        console.log("addTodoList메서드가 보는건 뭐지;;")
        this.setState ({todoLists: [...todoLists, {no:4, content: content, isDone: false}]})
    }
    
}