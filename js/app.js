const editableItemListner = () => {
  doc.querySelectorAll('.item_edit_btn').forEach(Element => {
    const text = getListItem(Element).querySelector('.item_text span')
    Element.addEventListener('click', () => {
      text.contentEditable = true
      text.click()
      selectText(text)
      Element.innerText = ""

      text.addEventListener("keypress", (event) => {
        if (event.keyCode === 13) {
          event.preventDefault()
          text.contentEditable = false
          Element.innerText = "edit"
          saveData();
        }
      })

      text.addEventListener('blur', () => {
        text.contentEditable = false
        Element.innerText = "edit"
        saveData();
      })
    })
  })
}

const revomeItemLister = () => {
  doc.querySelectorAll('.item_cancel_btn').forEach(e => {
    const listItem = getListItem(e)
    const list = listItem.parentElement
    e.addEventListener('click', () => {
      list.removeChild(listItem)
      saveData();
    })
  })
}

const setListener = () => {
  editableItemListner()
  revomeItemLister()
}

window.addEventListener('DOMContentLoaded', () => {
  loadData()
  setListener()

  doc.querySelectorAll('.item_add_btn').forEach(el => {
    addEvent(el)
  })

  doc.querySelector('.nav_add_btn').addEventListener('click', () => {
    if (screen.width < 700) closeMenu()
    cardInBoxDisplay(true)
  })

  doc.querySelectorAll('.card_delete_btn').forEach(el => {
    deleteCardListner(el)
  })

  doc.querySelector('#ok_btn').addEventListener('click', () => {
    const data = {
      title: doc.querySelector('#title').value,
      subTitle: doc.querySelector('#sub_title').value
    }
    clearInputBox()
    cardInBoxDisplay(false)
    const card = createCard(data)
    doc.querySelector('.container').appendChild(card)
    card.scrollIntoView()
    setListener()
    saveData();
  })

  doc.querySelector('#cancel_btn').addEventListener('click', () => {
    clearInputBox()
    cardInBoxDisplay(false)
  })

  doc.querySelectorAll('.list_item .item_text .item_check').forEach(el => {
    checkItem(el)
  })

  doc.querySelector('.nav_right .nav_theme_toggle').addEventListener('click', () => {
    doc.body.classList.toggle('dark_Theme');
    saveData()
  })

  doc.querySelector('.menu-btn').addEventListener('click', () => {
    openMenu()
  })

  doc.querySelector('.close-menu-btn').addEventListener('click', () => {
    closeMenu()
  })
})