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

  const listСreation = atomization.map((elem) =>
    elements.list.insertAdjacentHTML("beforeend", `<li>${elem}</li>`)
  );
}
