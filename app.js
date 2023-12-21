// alert("It is working");
const titleInput = document.getElementById("title");
const descriptionInput = document.getElementById("description");
const addbtn = document.querySelector(".add");
console.log(addbtn);
const notes = [
  // {
  //   title: "",
  //   description: "",
  // },
  // {
  //   title: "Note 2",
  //   description: "Note Description 2",
  // },
];

addbtn.addEventListener("click", function () {
  console.log("Btn click");
  const titleValue = titleInput.value;
  const descriptionValue = descriptionInput.value;
  console.log(notes);
  if (!titleValue || !descriptionValue) {
    alert("Enter all fields");
    return;
  }
  const newNote = {
    title: titleValue,
    description: descriptionValue,
  };
  //Empty the form
  titleInput.value = "";
  descriptionInput.value = "";
  //add the note in the arr
  notes.push(newNote);
  //render notes
  renderNotes();
});
console.log(titleInput);
const notesContainer = document.querySelector(".notes");
notesContainer.innerHTML = "";

function renderNotes() {
  notesContainer.innerHTML = "";
  const notesTemplates = notes.map(function (note) {
    const notesTag = document.createElement("div");
    notesTag.className = "notes-container";
    notesTag.innerHTML = `
        <h2>${note.title}</h2>
          <p class="description">
          ${note.description}
          </p>
        `;
    notesContainer.appendChild(notesTag);
  });
}

renderNotes();
