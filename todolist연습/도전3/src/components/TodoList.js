import Component from "./Component.js" //8-3 component 기능을 써야하기때문에 연결 ㄱ
//8-4 1초만에 TodoList 작성완료
//8-5 app파일로 갑시다!!!
export default class TodoLists extends Component {
    //8-16 찾았다!!! 
    template(){
        const { lists } = this.props;
        //8-17 props 안에 this.state.todoLists 객체있음 그걸 구조분해할당으로 lists라는 변수로 분해했음
        console.log(this.props)
        return `
        <ul>
            ${lists.map(li => `<li>${li.content}</li>`).join("")}
        <ul>
        `;
        //8-18 lists안에는 배열 형태의 객체가 있어 이걸 lists.map 기능을써서 li.content만 content라는 키에는 content: '할일2' 할일이라는 value값 있음
        //join은 배열에서 문자열형태로 변환 "li , li , li" 이렇게있는걸 "lilili"
        //8-19 리턴했으니 부모 rander로 돌아가자
    }
}