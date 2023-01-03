import "./styles.css";

const onClickAdd = () => {
    const inputText = document.getElementById("add-text").value;
    // getting value from text box and reset after pushed add button
    document.getElementById("add-text").value = "";

    // div生成
    const div = document.createElement("div");
    div.className = "list-row";

    // li 生成
    const li = document.createElement("li");
    li.innerHTML = inputText;
    // divのchildに各要素設定
    div.appendChild(li);
    console.log(div);

    // add into incomplete list
    document.getElementById("incomplete-list").appendChild(div);

}

document.getElementById("add-button").addEventListener("click", () => onClickAdd());