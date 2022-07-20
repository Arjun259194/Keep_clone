const doc = document

const listItem = () => {
  let li = doc.createElement('li')
  li.classList.add('list_item')
  li.innerHTML =
    `<span class="item_text">
      <input type="checkbox" class="item_check" />
      <span contenteditable="false">list text</span>
    </span>
    <div class="item_btns">
      <button class="item_edit_btn material-symbols-outlined">edit</button>
      <button class="item_cancel_btn material-symbols-outlined">close</button>
    </div>`

  return li
}

const addListItem = el =>{
    el.appendChild(listItem())
    setListener()
}

const getListItem = el => {
  return el.parentElement.parentElement
}

const selectText = el => {
  const range = document.createRange();
  range.selectNodeContents(el)
  const sel = window.getSelection()
  sel.removeAllRanges()
  sel.addRange(range)
}