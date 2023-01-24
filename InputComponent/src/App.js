import Component from "./components/Component.js";
import ContentInput from "./components/ContentInput.js"
import List from "./components/List.js"
import ViewBtn from "./components/ViewBtn.js"

export default class App extends Component {
    setup() {
        this.state = {
            students: [
                {
                    no:1,
                    contents: "stu1",
                    active: true
                },
                {
                    no:2,
                    contents: "stu2",
                    active: false
                },
                {
                    no:3,
                    contents: "stu3",
                    active: false
                },
            ]
        }
    }
    template() {
        return `
        <div id="contentApp"></div>
        <div id="studetnLists"></div>
        <div id="viewBtn"></div>
        `
    }
    mounted() {
        const { students } = this.state;
        const { addstudents, deletestudent, change } = this;
        console.log(this);
        const contentapp = document.querySelector("#contentApp");
        const studetnlists = document.querySelector("#studetnLists");
        const viewbtn = document.querySelector("#viewBtn");
        new ContentInput(contentapp, {addstudents: addstudents.bind(this)});
        new List(studetnlists, {lists: students, deletestudent: deletestudent.bind(this), actStudent: change.bind(this)});
        new ViewBtn(viewbtn);
    }
    addstudents(contents) {
        const {students} = this.state;
        const no = Math.max(0, ...students.map(s => s.no)) + 1;
        //Math.max(0,1,2,3) 펼쳐짐
        //no 중 가장 큰 숫자를 찾아서 1을 더한값을 할당
        console.log(students);
        this.setState({students: [...students, {no:no, contents: contents, active: false}]})
    }
    deletestudent(no) {
        const {students} = this.state; // 여기 this는 앱이다
        const newStudents = students.filter( stu => stu.no !== no);
        //filter 기능으로 같은거 빼고 다른것만 출력
        console.log(newStudents);
        this.setState({students: newStudents})
    }
    change(active) {
        const {students} = this.state;
        const activeStudents = students.map(stu => stu.active);
        console.log(students);
        this.setState({students : activeStudents});
    }
}