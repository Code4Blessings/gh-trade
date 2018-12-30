// Watches active (in use) textarea element
let activeTextarea;

/**
 * DRAG & DROP FUNCTIONS
 */
function allowDrop(e) {
  e.preventDefault();
}

function drag(e) {
  e.dataTransfer.setData("text", e.target.id);
}

function drop(e) {
  e.preventDefault();
  const data = e.dataTransfer.getData("text");
  e.target.appendChild(document.getElementById(data));

  // Keep an eye on active textarea (one being used)
  __selectAll(".sections .dynamicTextarea").forEach(singleTextArea => {
    singleTextArea.addEventListener("blur", () => {
      activeTextarea = singleTextArea;
    });
  });
}

// page layout string  (keeps track with page layout after drag and drops)
(function create_layout_string() {
  const blogForm = document.getElementById("blogForm");
  const allCompletedFields = blogForm.getElementsByClassName("await");

  blogForm.addEventListener("submit", e => {
    e.preventDefault();
    const hiddenInputData = [];
    for (let i = 0; i < allCompletedFields.length; i++) {
      for (let j = 0; j < allCompletedFields[i].childNodes.length; j++) {
        if (
          allCompletedFields[i].childNodes[j].tagName === "INPUT" ||
          allCompletedFields[i].childNodes[j].tagName === "TEXTAREA"
        ) {
          hiddenInputData.push(
            allCompletedFields[i].childNodes[j].getAttribute("name")
          );
        }
      }
    }
    __select("#hidden_layout_input").value = hiddenInputData;
    blogForm.submit();
  });
})();

// Insert new rows to page builder
let rowQueue = 0;
function newRow() {
  const allRows = __selectAll(".rows");
  allRows[rowQueue].classList.remove("hidden");
  rowQueue++;
}

/**
 * HTML TAG GENERATORS
 * These functions wrap selected string into html element
 */
(function html_tag_generators() {
  // <strong>
  __selectClick("#bold", () => {
    __selectAll(".sections .dynamicTextarea").forEach(str => {
      if (str.selectionStart !== str.selectionEnd) {
        const selectedText = str.value.substring(
          str.selectionStart,
          str.selectionEnd
        );
        const textBefore = str.value.substring(0, str.selectionStart);
        const textAfter = str.value.substring(
          str.selectionEnd,
          str.value.length
        );
        str.value = `${textBefore}<strong>${selectedText}</strong>${textAfter}`;
      }
    });
  });

  // <em>
  __selectClick("#italic", () => {
    __selectAll(".sections .dynamicTextarea").forEach(str => {
      if (str.selectionStart !== str.selectionEnd) {
        const selectedText = str.value.substring(
          str.selectionStart,
          str.selectionEnd
        );
        const textBefore = str.value.substring(0, str.selectionStart);
        const textAfter = str.value.substring(
          str.selectionEnd,
          str.value.length
        );
        str.value = `${textBefore}<em>${selectedText}</em>${textAfter}`;
      }
    });
  });

  // <a> Creates pop up for getting the href value
  __selectClick("#link", () => {
    hiddenAnchor.style.display = "block";
  });

  // <a> When user give us the href link the text
  __selectClick("#linkGiven", () => {
    hiddenAnchor.style.display = "none";
    __selectAll(".sections .dynamicTextarea").forEach(str => {
      if (str.selectionStart !== str.selectionEnd) {
        const selectedText = str.value.substring(
          str.selectionStart,
          str.selectionEnd
        );
        const textBefore = str.value.substring(0, str.selectionStart);
        const textAfter = str.value.substring(
          str.selectionEnd,
          str.value.length
        );
        str.value = `${textBefore}<a href="${
          __select("#anchor").value
        }">${selectedText}</a>${textAfter}`;
      }
    });
  });

  // <ul>
  __selectClick("#list", () => {
    __selectAll(".sections .dynamicTextarea").forEach(str => {
      if (str.selectionStart !== str.selectionEnd) {
        const selectedText = str.value.substring(
          str.selectionStart,
          str.selectionEnd
        );
        const splitText = selectedText.split("\n");
        let listItems = "";
        splitText.forEach(text => {
          listItems += `<li>${text}</li>`;
        });
        const textBefore = str.value.substring(0, str.selectionStart);
        const textAfter = str.value.substring(
          str.selectionEnd,
          str.value.length
        );
        str.value = `${textBefore}${`<ul>${listItems}</ul>`}${textAfter}`;
      }
    });
  });
})();
