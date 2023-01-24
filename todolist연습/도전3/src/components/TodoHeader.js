import Component from "./Component.js" //6-2 component 기능을 써야하기때문에 연결 ㄱ
//6-3 1초만에 TodoHeader 작성완료했다
//6-4app파일로 다시 ㄱㄱㄱ
export default class TodoHeader extends Component {
    template(){
        //7-8 여기있넹 el들 리턴해줬네 부모 render로 돌아가자
        return`
        <h1>TodoList</h1>
        <input type="text" class="appender"/>
        <button id="addBtn">+</button>
        `;
    }
    setEvent() {
        const { addTodoList } = this.props;
        document.querySelector("#addBtn").addEventListener("click", ()=>{
            addTodoList(document.querySelector(".appender").value);
        })
    }
}