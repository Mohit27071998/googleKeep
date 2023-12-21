1. Open the  deployed link .
2.click on note text arear will expand
3. write note then click on add for adding note.
4.for color click on color picker.
5.for delete click on delete icon.
6.for updating click on update icon 


Description :
1.The application is structured using React components for modularization and maintainability.
2.Separate components are created for creating and displaying notes.
3.Notes are stored in the browser's localStorage for persistent data across page reloads.
4.This ensures that the user's notes are saved locally and can be retrieved even if they close or refresh the page.
5.A color picker is integrated to allow users to choose a color for each note.
6.The color information is stored in the color property of each note in the local storage.
7.Users can add, edit, and delete notes through the intuitive user interface.
The "Add" button creates a new note, while the "Edit" button modifies an existing one.
A confirmation prompt is implemented for note deletion to prevent accidental data loss.
8.The application has a clean and simple design that is responsive to different screen sizes.
CSS styles are used to enhance the visual appeal and provide a consistent layout.
9.Notes can be sorted based on the title during display to enhance user organization.
A search functionality is implemented to filter notes based on user input.
10.Event listeners are employed to handle user interactions, such as clicking outside the form to close it.
11.The DisplayNote component dynamically renders notes based on the user's search and sort criteria.
Each note's background color is set based on the color picked using the color picker in the CreateNote component.
11.Users receive alerts for successful note additions, edits, and deletions to provide feedback on their actions.
12.The code is organized to improve readability and maintainability.
The useEffect hook is utilized for handling side effects, such as retrieving notes from local storage.