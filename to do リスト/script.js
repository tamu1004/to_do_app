// 入力したテキストをリストに追加 

const add = document.getElementById('addButton');
const del = document.getElementById('deleteButton');

add.addEventListener('click', function(){
    const inputText = document.getElementById('txt').value;
    if (inputText !== ''){
        const newItem = document.createElement('li');
        const checkBox = document.createElement('input')
        checkBox.type = 'checkbox';
        textNode = document.createTextNode(inputText);
        newItem.appendChild(checkBox);
        newItem.appendChild(textNode);
        document.getElementById('textList').appendChild(newItem);
        document.getElementById('txt').value = '';
    }
    else{
        alert('追加したいやることを入力して下さい');
    }
});


// / チェックマークがついているものだけを削除
const checkBox = document.createElement('input')
checkBox.addEventListener('click', function(){
    if(checkBox.checked){
        li.classList.add('checked');
    }
    else{
        li.classList.remove('checked');
    }
});

del.addEventListener('click',function(){
    let todoList = document.getElementById('textList');
    let items = todoList.getElementsByTagName('li');
    
    for (let i = items.length - 1 ; i >= 0; i--){
        // li　一つにつきinputは一つしかないのでiが2なら三番目のliのinput取得
        let checkBox = items[i].getElementsByTagName("input")[0]
        if(checkBox.checked){
            todoList.removeChild(items[i]);
            // removeだけならliが全部きえる
        }
    }
});

// ＋ボタン押したらリストに追加したいリスト選択[
const minus = document.getElementById('hidden-content');
const plus = document.getElementById('addList');
plus.addEventListener('click',function(){
    minus.classList.remove('hidden');
})

// ×ボタン押したらリスト作成画面を非表示
function closecontents(){
    const closed = document.getElementById('remove-content');
    
    if(closed){
        closed.style.display = 'none';
    }
}
// ＋ボタンを押したらリスト作成画面を表示
function opencontents(){
    const closed = document.getElementById('remove-content');
    const newLi = document.getElementById('newlist');
    if(closed.style.display === 'none'){
        closed.style.display = 'block';
        newLi.value = '';
    }
}
// ×ボタン押したらリスト画面を非表示
function closewatch(){
    const diwatch = document.getElementById('viewlist');
    if(diwatch){
        diwatch.style.display = 'none';
    }
}
// ＋ボタンを押したらリスト画面を表示
function openedlist(){
    const diwatch = document.getElementById('viewlist');
    diwatch.classList.remove('hidden');
    if(diwatch.style.display === 'none'){
        diwatch.style.display = 'block';
    }
}

// 作成ボタンを押したらリストにリスト名追加
function createname(){
    const inputList = document.getElementById('newlist').value;
    if (inputList !== ''){
        const newItem = document.createElement('li');
        const checkBox = document.createElement('input')
        const end = document.getElementById('viewlist')
        const clear = document.getElementById('newlist').value = '';
        const closed = document.getElementById('remove-content');
        button = document.createTextNode(inputList);
        checkBox.type = 'checkbox';
        newItem.appendChild(button);
        end.appendChild(newItem);
        clear.value = '';
        closed.style.display = 'none'
        setTimeout(()=>{
            alert(inputList+'をリストに追加しました')
        },300)
        
       
    }
    else{
        alert('作成したいリスト名を入力してください')
    }
}
const ckbx = document.createElement('input')
ckbk.addEventListener('click',function(){
    const newview = document.getElementById('addcreate-content')
    newview.classList.remove('hidden');
    if(newview.style.display === 'none'){
        newview.style.display = 'block'
    }
});
