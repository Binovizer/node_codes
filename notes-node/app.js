const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

var titleOptions = {
    desc: "Title of the Note",
    demand : true,
    alias : 't'
};

var bodyOptions = {
    desc: "Body of the Note",
    demand : true,
    alias : 'b'
};

const argv = yargs
            .command('add', 'Adding the note', {
                title : titleOptions,
                body : bodyOptions
            })
            .command('list', 'List all the notes')
            .command('read','Read the note',{
                title : titleOptions
            })
            .command('remove', 'Remove the note',{
                title : titleOptions
            })
            .help()
            .argv;

//var command = process.argv[2];
var command = argv._[0];
// console.log('Command : ', command);
// console.log('Process ', process.argv);
// console.log('Yargs ', argv);

if(command === 'add'){
    var note = notes.addNote(argv.title, argv.body);
    if(note){
        console.log('Note created');
        notes.logNote(note);
    }else{
        console.log('Note title taken');
    }
}else if(command === 'list'){
    var allNotes = notes.getAll();
    console.log(`Printing ${allNotes.length} note(s).`);
    allNotes.forEach((note) => notes.logNote(note));
}else if(command === 'read'){
    var note = notes.getNote(argv.title);
    if(note){
        console.log('Note Read');
        notes.logNote(note);
    }else{
        console.log('Note not found');
    }
}else if(command === 'remove'){
    var noteRemoved = notes.removeNote(argv.title);
    var msg = noteRemoved ? 'Note was removed' : 'Note not found';
    console.log(msg);
}else{
    console.log('Command not found');
}