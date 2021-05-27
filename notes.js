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

console.log(notes);