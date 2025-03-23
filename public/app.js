"use strict";
const notes = [];
const noteContainer = document.getElementById('notes-container');
const createNoteBtn = document.getElementById('create-note');
const editNoteBtn = document.getElementById('edit-note');
const organizeNotesBtn = document.getElementById('organize-notes');
// Get input elements for note title and content
const noteTitleInput = document.getElementById('note-title');
const noteContentInput = document.getElementById('note-content');
// Add event listener for "Create Note" button
createNoteBtn.addEventListener('click', () => {
    const title = noteTitleInput.value.trim();
    const content = noteContentInput.value.trim();
    if (title && content) {
        const newNote = { title, content };
        notes.push(newNote);
        renderNotes(); // Function to display notes
        // Clear input fields after adding the note
        noteTitleInput.value = '';
        noteContentInput.value = '';
    }
    else {
        alert("Please enter both a title and content for the note.");
    }
});
// Add event listener for "Edit Note" button
editNoteBtn.addEventListener('click', () => {
    const noteIndex = prompt("Enter the index of the note to edit:");
    const index = parseInt(noteIndex);
    if (index >= 0 && index < notes.length) {
        const updatedTitle = prompt("Enter the new title:", notes[index].title);
        const updatedContent = prompt("Enter the new content:", notes[index].content);
        if (updatedTitle && updatedContent) {
            notes[index].title = updatedTitle;
            notes[index].content = updatedContent;
            renderNotes(); // Re-render the notes after edit
        }
    }
    else {
        alert("Note not found!");
    }
});
// Add event listener for "Organize Notes" button
organizeNotesBtn.addEventListener('click', () => {
    // Sort notes alphabetically by title
    notes.sort((a, b) => a.title.localeCompare(b.title));
    renderNotes(); // Re-render the sorted notes
});
// Function to render all notes to the DOM
function renderNotes() {
    noteContainer.innerHTML = ''; // Clear the current displayed notes
    notes.forEach((note, index) => {
        const noteElement = document.createElement('div');
        noteElement.classList.add('note');
        noteElement.innerHTML = `
        <h3>${note.title}</h3>
        <p>${note.content}</p>
        <button class="delete-btn" data-index="${index}">Delete</button>
      `;
        noteContainer.appendChild(noteElement);
        // Add delete functionality
        const deleteBtn = noteElement.querySelector('.delete-btn');
        deleteBtn.addEventListener('click', () => {
            notes.splice(index, 1); // Remove the note from the array
            renderNotes(); // Re-render after deleting
        });
    });
}
