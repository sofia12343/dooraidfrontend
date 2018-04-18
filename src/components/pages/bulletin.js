import React, { Component } from 'react';
import Note from './Note'
import FaPlus from 'react-icons/lib/fa/plus'
//imported libraies for the icons to add, remove and update notes

// import './main.css';

//creates bulltein board  where notes can be added, removed, and updated by user
class Bulletin extends Component {
  constructor(props) {
    super(props)
    this.state = {
      notes: []
    }
    this.add = this.add.bind(this)
    this.eachNote = this.eachNote.bind(this)
    this.update = this.update.bind(this)
    this.remove = this.remove.bind(this)
    this.nextId = this.nextId.bind(this)
  }

//the notes will mount onto the board 
  componentWillMount() {
    var self = this
    if(this.props.count) {
      fetch(`https://baconipsum.com/api/?type=all-meat&sentences=${this.props.count}`)
          .then(response => response.json())
          .then(json => json[0]
                      .split('. ')
                      .forEach(sentence => self.add(sentence.substring(0,25))))
    }
  }

//allows text to be added to the notes and creation of notes
  add(text) {
      this.setState(prevState => ({
        notes: [
          ...prevState.notes,
          {
            id: this.nextId(),
            note: text
          }
        ]
      }))
  }

  nextId() {
    this.uniqueId = this.uniqueId || 0
    return this.uniqueId++
  }

//updates the notes when user writes on it
  update(newText, i) {
      console.log('updating item at index', i, newText)
      this.setState(prevState => ({
          notes: prevState.notes.map(
            note => (note.id !== i) ? note : {...note, note: newText}
            )

      }))
  }

//removes the notes when user deletes via icon
  remove(id) {
    console.log('removing item at', id)
    this.setState(prevState => ({
        notes: prevState.notes.filter(note => note.id !== id)
    }))

  }

//the note will update and remove when your chooses to add a note or remove one
    eachNote(note, i) {
    return (
      <Note key={note.id}
          index={note.id}
          onChange={this.update}
          onRemove={this.remove}>
          {note.note}
        </Note>
    )
  }


//creates the notes on front end on top of the board with the text in it called new note
  render() {
    return (
      <div className="board">
        {this.state.notes.map(this.eachNote)}
        <button onClick={this.add.bind(null, "New Note")} 
              id = "add">
            <FaPlus/>
        </button>
      </div>


    );
  }
}

export default Bulletin;