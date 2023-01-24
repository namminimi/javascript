 //앱 클래스 선언
 import Component from "./component.js";
 export default class App extends Component {
    //오버라이딩
    //함수재정의
    setup() {
        this.state = { students: ["stu1", "stu2", "stu3", "stu4"]}
    }
    template() {
        console.log(1111)
        const {students} = this.state;
        return `
        <ul>
            ${students.map(stu=>`<li>${stu}</li>`).join("")}
        </ul>
        <button id="add">추가</button>
        `;  
          
    }
    
    setEvent(){
        const { students } = this.state;
        this.target.querySelector("#add").addEventListener("click", () =>{
            this.setState({students: [...students, `stu${students.length+1}`]})
        }) 
    }
}
