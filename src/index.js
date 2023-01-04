//index.js
import "./styles.css";
 
const onClickAdd = () => {
  //テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
  createIncompleteList(inputText);
};
 
//未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

// 未完了リストに追加する関数
const createIncompleteList = (text) => {
   //li生成
  const li = document.createElement("li");
  li.className = "list-row";
 
  //p生成
  const p = document.createElement("p");
  p.innerText = text;
 
  //button（完了）タグ生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "Done";
  completeButton.addEventListener("click", () => {
    //押された完了ボタンの親タグ（li）を未完了リストから削除
    deleteFromIncompleteList(completeButton.parentNode);
 
    //完了リストに追加する要素
    const addTarget = completeButton.parentNode;
 
    // TODO内容テキストを取得
    const text = addTarget.firstElementChild.innerText;
 
    //li以下を初期化
    addTarget.textContent = null;
 
    //p生成
    const p = document.createElement("p");
    p.innerText = text;
 
    //button(戻す)タグ生成
    const backButton = document.createElement("button");
    backButton.innerText = "Bring Back";
    backButton.addEventListener("click", () => {
       //押された削除ボタンの親タグ（li）を完了リストから消去
       const deleteTarget = backButton.parentNode;
       document.getElementById("complete-list").removeChild(deleteTarget);

      // TODOテキストを取得
      const text = backButton.parentNode.firstElementChild.innerText;
      createIncompleteList(text);
    });
 
    //liの子要素に各要素を設定
    addTarget.appendChild(p);
    addTarget.appendChild(backButton);
    console.log(addTarget);
 
    //完了リストに追加
    document.getElementById("complete-list").appendChild(addTarget);//ここでエラー
  });
 
  //button（削除）タグ生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "Delete";
  deleteButton.addEventListener("click", () => {
    //押された削除ボタンの親タグ（li）を未完了リストから削除
    deleteFromIncompleteList(deleteButton.parentNode);
  });
 
  //liタグの子要素に各要素を設定
  li.appendChild(p);
  li.appendChild(completeButton);
  li.appendChild(deleteButton);
 
    //未完了のリストに追加
    document.getElementById("incomplete-list").appendChild(li);
}
 
document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
