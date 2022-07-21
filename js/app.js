doc.querySelectorAll('.item_add_btn').forEach(el => {
  const itemList = el.parentElement.querySelector('.card_item_list');
  el.addEventListener('click', () => {
    addListItem(itemList)
  })
})

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
          event.preventDefault();
          text.contentEditable = false
          Element.innerText = "edit"
        }
      });

      text.addEventListener('blur', () => {
        text.contentEditable = false
        Element.innerText = "edit"
      })
    })
  })
}

const revomeItemLister = ()=>{
  doc.querySelectorAll('.item_cancel_btn').forEach(e=>{
    const listItem = getListItem(e)
    const list = listItem.parentElement
    e.addEventListener('click',()=>{
      list.removeChild(listItem)
    })
  })
}

const setListener = () => {
  editableItemListner()
  revomeItemLister()
}

window.addEventListener('DOMContentLoaded', () => {
  setListener()
});