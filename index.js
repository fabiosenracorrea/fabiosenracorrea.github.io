function tool_tip() {
    let tool_tip = document.getElementsByClassName("tool-tip")[0];
    let instructions_text = document.getElementsByClassName("click-instruction")[0]
    tool_tip.classList.toggle("hide")
    instructions_text.classList.toggle("hide")
}

let tool_tip_img = document.getElementsByClassName("tool-tip-img")[0]
tool_tip_img.setAttribute("onmouseover", "tool_tip()")
tool_tip_img.setAttribute("onmouseout", "tool_tip()")
tool_tip_img.setAttribute("onclick", "tool_tip()")