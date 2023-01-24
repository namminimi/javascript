
import Component from "./Component.js";

export default class List extends Component {
    template(){
        const { lists } = this.props;
        return`
        <ul>
            ${lists.map(li => `<li data-no="${li.no}">${li.contents}
            <button class="activeBtn">${li.active ? "비활성" : "활성"}</button>
            <button class="deleteBtn" data-no="${li.no}">삭제</button>
            </li>`).join("")}
        </ul>`
    }
    setEvent() {
        const { deletestudent, actStudent } = this.props;
        this.target.addEventListener("click", (x)=> {
            if(x.target.classList.contains("activeBtn")) {
                console.log("active버튼입니다.")
            }
        })
        this.target.addEventListener("click", (e)=> {
            if(e.target.classList.contains("deleteBtn")) {
                console.log("delete 버튼입니다")
                //배열에서 삭제
                console.dir(e.target) //좀더 속성값 자세히 보고싶을때 사용
                deletestudent(Number(e.target.dataset.no));
            }
        })
    }
    
}