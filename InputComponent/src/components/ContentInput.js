import Component from "./Component.js";

export default class ContentInput extends Component {
    template(){
        return `
        <input type="text" class="appender" placeholder="내용입력">
        `
    }
    /* setEvent(){
        window.addEventListener("keydown", function(e){
            const key = document.querySelector(`#${e.code}`)
            console.log(e)
            if(key == "Enter") {
                addstudents(document.querySelector(".appender").value);
                console.log(11111)
            }
        })

    } */
    setEvent(){
        const {addstudents} = this.props;
        this.target.addEventListener("keyup", (e)=>{
            if(e.key !=="Enter") return;
            addstudents(e.target.value)
        })
    }
}





/* window.addEventListener("keydown",function(e){
    const key = document.querySelector(`#${e.code}`);
    if(key){
        key.classList.add("on");
    }
}) */