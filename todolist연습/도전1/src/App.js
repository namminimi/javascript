import Component from "./compinents/Component.js";
import TodoHeader from "./compinents/TodoHeader.js";
import TodoLists from "./compinents/TodoList.js";
//component.js 파일을 사용할 수 있게 가져옴
export default class App extends Component {
    //component의 기능을 App클래스가 상속받음 
    setup() {
        console.log("setup");
        this.state = {
            inputText: "", //key는 inputText : value는"",
            todoLists : [  //key는 todoLists : value는[배열.안에 객체] 
                {
                    no: 1,
                    content: '할일1',
                    isDone: false
                },
                {
                    no: 2,
                    content: '할일2',
                    isDone: false
                },
                {
                    no: 3,
                    content: '할일3',
                    isDone: false
                }
            ]
        }
        console.log(this.stste);
    }
    template() {
        return`
        <div id="insertTodo"></div>
        <div id="listTodos"></div>
        `;
    }
    mounted() {
        const { addTodoList } = this; //구조분해할당
        console.log(`${this}app mounted쪽`)
        const todoHeader = document.querySelector("#insertTodo");
        const todolist = document.querySelector("#listTodos");
        new todoHeader(todoHeader, {addTodoList: addTodoList.bind(this)})
        new TodoLists(todolist, {lists: this.state.todoLists});
    }
    addTodoList(content) {
        const {todoLists} = this.state;
        console.log(todoLists);
        console.log(this)
        this.setState({
            todoLists: [
                ...todoLists,
                {
                    no:4,
                    content: content,
                    isDone: false
                }
            ]
        })
    }
}
