import Component from "./Component.js";

export default class ViewBtn extends Component {
    template(){
        return`
        <button>전체보기</button>
        <button>활성보기</button>
        <button>비활성보기</button>`
    }
}