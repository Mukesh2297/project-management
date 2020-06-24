const dragCard = (event) => {
  event.dataTransfer.setData("text/plain", event.target.id);
};

const dropCard = (event) => {
  event.preventDefault();
  let sourceId = event.dataTransfer.getData("text/plain");
  let sourceIdEl = document.getElementById(sourceId);
  let sourceIdParentEl = sourceIdEl.parentElement;

  let targetEl = document.getElementById(event.target.id);
  let targetParentEl = targetEl.parentElement;

  if (targetParentEl.id !== sourceIdParentEl.id) {
    if (targetEl.className === sourceIdEl.className) {
      targetParentEl.appendChild(sourceIdEl);
    } else {
      // Append to the list
      targetEl.appendChild(sourceIdEl);
    }
  } else {
    let holder = targetEl;

    let holderText = holder.textContent;
    targetEl.textContent = sourceIdEl.textContent;

    sourceIdEl.textContent = holderText;
    holderText = "";
  }
};

const placeDraggedCard = (event) => {
  event.preventDefault();
};
