function pressEnter() {
    if(window.event.keyCode == 13) {
        //const listText = document.getElementsByClassName("list-text")[0];
        const text = document.getElementById("list-title").value;
        let div = document.createElement('div');
        div.innerHTML = `<label><input type="checkbox" name="check" class="listText"/>${text}</label>`;
        document.getElementById('todo-list').appendChild(div);
        
        alert("Okay!");
        
    }
}