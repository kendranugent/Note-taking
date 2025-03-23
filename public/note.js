export class Note {
    constructor(title, content) {
        this.title = title;
        this.content = content;
    }
    displayNote() {
        var _a;
        const noteElement = document.createElement('div');
        noteElement.classList.add('note-item');
        const noteTitle = document.createElement('h3');
        noteTitle.textContent = this.title; // Set the title of the note
        noteElement.appendChild(noteTitle);
        const noteContent = document.createElement('p');
        noteContent.textContent = this.content; // Set the content of the note
        noteElement.appendChild(noteContent);
        (_a = document.getElementById('notes-list')) === null || _a === void 0 ? void 0 : _a.appendChild(noteElement); // Append the note to the list
    }
}
