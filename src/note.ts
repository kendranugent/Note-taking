export class Note {
    constructor(private title: string, private content: string) {}

    displayNote(): void {
        const noteElement = document.createElement('div');
        noteElement.classList.add('note-item');

        const noteTitle = document.createElement('h3');
        noteTitle.textContent = this.title;  // Set the title of the note
        noteElement.appendChild(noteTitle);

        const noteContent = document.createElement('p');
        noteContent.textContent = this.content;  // Set the content of the note
        noteElement.appendChild(noteContent);

        document.getElementById('notes-list')?.appendChild(noteElement);  // Append the note to the list
    }
}
