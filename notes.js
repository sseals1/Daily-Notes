const notesArray = [
    {   id: 1,
        Objects: "data types should be the same",
        date: "10-05-2021",
        feeling: "feeling great!",
        timeSpent: 30
    },

    {
        id: 2,
        Objects: "Objects must have a key valur pair",
        date: "10-05-2021",
        feeling: "feeling great!",
        timeSpent: 45
    }



]

const newNote = {
    id: 3,
    Objects: "learned to create array's and use .push and string interpolation",
    date: "10-06-2021",
    feeling: "Confident",
    timeSpent: 35
    }

    notesArray.push(newNote)

//     const searchTerm = "Confident"
// for (const noteObj of notesArray) {
//     if (noteObj.feeling === searchTerm) {
//         console.log(`Note ${noteObj.id} 
//     ${noteObj.date} 
//     What I learned: ${noteObj.Objects} 
//     I spent ${noteObj.timeSpent} minutes working on it
//     I felt ${noteObj.feeling}
//     ----------------
//     `)
//     }
    
// }

const createNote = (note) => {
    // Find las thing in array
    const lastThingInArray = notesArray.length - 1
    const currentLastNote = notesArray[lastThingInArray]
    // find ID
    const lastId = currentLastNote.id
    // create new ID with ID found and add 1
    const newId = lastId + 1
    // create a property name dateCreated
    
    note.dateCreated = new Date()

    notesArray.push(note)
}


createNote(note = {
       
    Objects: "Logic operations",
    date: "10-07-2021",
    feeling: "Uneasy!",
    timeSpent: 30
},)

console.log(notesArray)


  
