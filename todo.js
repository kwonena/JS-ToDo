function pressEnter() {
    if(window.event.keyCode == 13) {
        const text = document.getElementById("list-title").value;
        let div = document.createElement('div');
        div.innerHTML = 
        `<label for="listCheck">
            <input type="checkbox" name="check" class="listCheck"/>
            <span class="listText">${text}</span>
        </label>`;
        document.getElementById('todo-list').appendChild(div);
        
        alert("Okay!");

    }
}

// 체크박스 전체 선택, 전체 해제
function selectAll(selectAll)  {
    const checkboxes 
       = document.querySelectorAll('input[type="checkbox"]');
    
    checkboxes.forEach((checkbox) => {
      checkbox.checked = selectAll.checked
    })
}

// checkbox 클릭시 listText에 줄긋기 이벤트
document.getElementsByClassName('listCheck')[0].onclick = function() {
    const listText = document.getElementsByClassName('listText')[0];
    for(let i = 0; i < listText.length; i++) {
        listText[i].style.textDecoration = 'line-through';
    }
}