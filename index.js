document.body.insertAdjacentHTML(
  "afterbegin",
  `<input type="text"/>
  <button type="click">Submit</button>
    <ul></ul>`
);

const elements = {
  button: document.querySelector("button"),
  input: document.querySelector("input"),
  list: document.querySelector("ul"),
};

elements.button.addEventListener("click", onClickButton);

function onClickButton(evt) {
  elements.list.innerHTML = "";
  const value = elements.input.value;
  const atomization = value.split("");

  for (let i = 0; i < atomization.length; i++) {
    const element = atomization[i];

    elements.list.insertAdjacentHTML(
      "beforeend",
      `<li id=${i}>${element}</li>`
    );
  }

  elements.list.addEventListener("click", onClickItemList);
}

function onClickItemList(evtLi) {
  window.document.addEventListener("click", function (evtWindow) {
    console.log(evtLi);
    console.log(evtWindow);
    evtLi.target.style.position = "absolute";
    evtLi.target.style.top = `${evtWindow.pageY}px`;
    evtLi.target.style.left = `${evtWindow.pageX}px`;
  });
}
