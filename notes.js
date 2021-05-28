const notes = [
    {
        id: 1,
        subject: "Git Commands and Version Control with Github",
        date: "05/21/21",
        feeling: "Initially, learning the git commands and version control with fixing merge conflicts were overwhelming, but after iterating some more, it felt more manageable.",
        timeSpent: 180
    },
    {
        id: 2,
        subject: "CSS Flex-box",
        date: "05/20/21",
        feeling: "Learning how to manipulate the CSS Flex-box layout was challenging at first, but practicing with the group projects helped make it more understandable.",
        timeSpent: 60
    }
];

// console.log(notes);

// Adding A New Note Exercise:

const noteAboutToday = {
    id: 3,
    subject: "Data Types (strings, numbers/integers/booleans), Data Structures(Arrays/Objects), and push() method",
    date: "05/27/21",
    feeling: "I feel that doing the exercises solidified my basic knowledge of data types, data structures, and push method.",
    timeSpent: 30
};

notes.push(noteAboutToday);

// console.log(notes);

//Displaying Your Note Journal Exercise and using string interpolation to display list of learning notes

// for (let note of notes) {
//     console.log(`Note ${note.id}
//     ${note.date}
//     I learned ${note.subject}.
//     I spent ${note.timeSpent} working on it.
//     ${note.feeling}`);
// };

//Finding a Note Exercise: Using if statement inside for of loop to output the object the has the value for the corresponding property

// const searchTerm = "05/27/21";

// for (const note of notes) {
//     if (note.date === searchTerm) {
//         console.log(note);
//     };
// };

//Adding a note function that automates adding an id for each new note that gets added as a parameter to the function

const createNote = (newNote) => {
    const lastIndex = notes.length - 1;
    const currentLastNote = notes[lastIndex];
    const maxId = currentLastNote.id;
    const idOfNewNote = maxId + 1;
    newNote.id = idOfNewNote;
    notes.push(newNote);
    newNote.dateCreated = new Date().toLocaleString();  //Date is a class (you use dot and use new keyword, you also use a parenthesis to invoke a class like a function?) that has many functions that includes the toLocalString() function/method to get current date and time
};

const newestNote = {
    subject: "Constructing Functions to Automate IDs when adding new objects to an existing array",
    date: "05/28/21",
    feeling: "I was fascinated by how you can use dynamic functions to automate adding id's to new objects",
    timeSpent: 60
};

createNote(newestNote);

for (const note of notes) {
    console.log(`Note ${note.id}
        ${note.date}
        I learned ${note.subject}.
        I spent ${note.timeSpent} working on it.
        ${note.feeling}.`);
};

console.log(notes);