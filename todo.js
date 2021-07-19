function pressEnter() {
    if(window.event.keyCode == 13) {
        const text = document.getElementById("list-title").value;
        let div = document.createElement('div');
        div.innerHTML = `<label><input type="checkbox" name="check" class="listCheck"/><span class="listText">${text}</span></label>`;
        document.getElementById('todo-list').appendChild(div);
        
        alert("Okay!");
        
    }
}