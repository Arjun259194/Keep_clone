const editableItemListner = () => {
  document.querySelectorAll('.item_edit_btn').forEach(Element => {
    const parent = Element.parentElement
    const text = parent.querySelector('.item_text span')
    Element.addEventListener('click', (event) => {
      text.contentEditable = true
      text.click()
      selectText(text)

      text.addEventListener("keypress", (event) => {
        if (event.keyCode === 13) {
          event.preventDefault();
          text.contentEditable = false
        }
      });

      text.addEventListener('blur', () => {
        text.contentEditable = false
      })
    })
  })
}

const selectText = el => {
  const range = document.createRange();
  range.selectNodeContents(el)
  const sel = window.getSelection()
  sel.removeAllRanges()
  sel.addRange(range)
}

// const formateText = el => {
//   console.log("from formate text");
//   console.log(el);
//   let text = el.innerText;
//   console.log(text);
//   let formatedText = text.replace(, '')
//   console.log(formatedText);
//   el.innerText = formatedText
// }