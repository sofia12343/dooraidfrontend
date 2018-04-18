import React, { Component } from 'react'
import FaPencil from 'react-icons/lib/fa/pencil'
import FaTrash from 'react-icons/lib/fa/trash'
import FaFloppyO from 'react-icons/lib/fa/floppy-o'
//imported libraies for the icons to add, remove and update notes

//allows users to edit, remove, save and display notes, additionally the notes will be displayed in a random order
class Note extends Component {
  constructor(props) {
    super(props)
    this.state = {
      editing: false
    }
    this.edit = this.edit.bind(this)
    this.remove = this.remove.bind(this)
    this.save = this.save.bind(this)
    this.renderForm = this.renderForm.bind(this)
    this.renderDisplay = this.renderDisplay.bind(this)
    this.randomBetween = this.randomBetween.bind(this)
  }

//this tells the notes about the sizes of the notes and the rotation so they look more styled and more like a bulletin-board
  componentWillMount() {
    this.style = {
      right: this.randomBetween(0, window.innerWidth - 150, 'px'),
      top: this.randomBetween(0, window.innerHeight - 150, 'px'),
      transform: `rotate(${this.randomBetween(-25, 25, 'deg')})`

    }
  }

//places the notes in a random place on the board
  randomBetween(x, y, s) {
    return x + Math.ceil(Math.random() * (y-x)) + s
  }

//update the notes when user edits it buy allowing users to select the note and focus on the text input field
  componentDidUpdate() {
    var textArea
    if(this.state.editing) {
        textArea = this._newText
        textArea.focus()
        textArea.select()
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return(
        this.props.children !== nextProps.children || this.state !== nextState
      )
  }

//allows editing of the notes
  edit() {
    // alert('editing note')
    this.setState({
      editing: true
    })
  }

//allows removal of the notes
  remove() {
    // alert('removing note')
    this.props.onRemove(this.props.index)
  }

//saves the notes wriitten by user
    save(e) {
    // alert(this._newText.value)
    e.preventDefault()
    this.props.onChange(this._newText.value, this.props.index)
    this.setState({
      editing: false
    })
  }

//save the note inputted by user and make the text area display what they wrote after the note is saved
  renderForm() {
        return (
      <div className="note" style = {this.style}>
        <form onSubmit={this.save}>
          <textarea ref={input => this._newText = input}
                        defaultValue={this.props.children}/>
          <button id ="save"><FaFloppyO /></button>
        </form>
      </div>
    )
  }
//allow users to edit notes with the pencil icon and remove the notes with the trash icon
  renderDisplay() {
    return (
      <div className="note" style={this.style}>
        <p>{this.props.children}</p>
        <span>
          <button onClick = {this.edit} id ="edit"><FaPencil/></button>
          <button onClick = {this.remove} id ="remove"><FaTrash/></button>
        </span>
      </div>
    )
  }
  render() {
    return this.state.editing ? this.renderForm() : this.renderDisplay()


  }

}

export default Note