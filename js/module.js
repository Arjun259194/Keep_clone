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

  const checkInput = li.querySelector('.item_text .item_check')
  checkItem(checkInput)
  return li
}

const createCard = ({ title, subTitle }) => {
  const card = doc.createElement('article')
  card.classList.add('card')
  card.innerHTML =
    `<h2 class="card_heading">${title}</h2>
    <h3 class="card_sub_heading">${subTitle}</h3>
    <ul class="card_item_list">

    <!-- <li class="list_item">
        <span class="item_text">
          <input type="checkbox" class="item_check" />
          <span contenteditable="false">list text</span>
        </span>
        <div class="item_btns">
          <button class="item_edit_btn material-symbols-outlined">edit</button>
          <button class="item_cancel_btn material-symbols-outlined">close</button>
        </div>
      </li> -->

    </ul>
    <button class="item_add_btn material-symbols-outlined">add</button>
    <button class="card_delete_btn material-symbols-outlined">close</button>
    `

  const cardAddBtn = card.querySelector('.item_add_btn')
  const cardDelBtn = card.querySelector('.card_delete_btn')

  addEvent(cardAddBtn)
  deleteCardListner(cardDelBtn)

  return card
}

const addEvent = element => {
  element.addEventListener('click', () => {
    const itemList = element.parentElement.querySelector('.card_item_list')
    addListItem(itemList)
  })
}

const deleteCardListner = deleteBtn => {
  deleteBtn.addEventListener('click', () => {
    const card = deleteBtn.parentElement
    card.parentElement.removeChild(card)
  })
}

const checkItem = el => {
  const listItem = el.parentElement.parentElement
  el.addEventListener('change', () => {
    if (el.checked) {
      listItem.classList.add('checked')
    } else {
      listItem.classList.remove('checked')
    }
  })
}

const addListItem = el => {
  el.appendChild(listItem())
  setListener()
}

const getListItem = el => {
  return el.parentElement.parentElement
}

const selectText = el => {
  const range = document.createRange()
  range.selectNodeContents(el)
  const sel = window.getSelection()
  sel.removeAllRanges()
  sel.addRange(range)
}

const cardInBoxDisplay = state => {
  doc.querySelector('.card_input_box').style.display = (state == true) ? 'flex' : 'none'
}

const clearInputBox = () => {
  doc.querySelector('#title').value = ""
  doc.querySelector('#sub_title').value = ""
}