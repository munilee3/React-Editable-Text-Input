import {Component} from 'react'
import {
  EditableContainer,
  ResponsiveCont,
  Heading,
  Input,
  SaveBtn,
  SavedText,
  SavedTextContainer,
} from './styledComponents'

class EditableText extends Component {
  state = {savedText: '', isSaved: false}

  onSaveText = () => {
    this.setState({isSaved: true})
  }

  onEditableText = () => {
    this.setState({isSaved: false})
  }

  onSearchText = event => {
    this.setState({savedText: event.target.value})
  }

  render() {
    const {savedText, isSaved} = this.state
    return (
      <EditableContainer>
        <ResponsiveCont>
          <Heading>Editable Text Input</Heading>
          {isSaved ? (
            <SavedTextContainer>
              <SavedText>{savedText}</SavedText>
              <SaveBtn type="button" onClick={this.onEditableText}>
                Edit
              </SaveBtn>
            </SavedTextContainer>
          ) : (
            <SavedTextContainer>
              <Input
                type="text"
                value={savedText}
                onChange={this.onSearchText}
              />
              <SaveBtn type="button" onClick={this.onSaveText}>
                Save
              </SaveBtn>
            </SavedTextContainer>
          )}
        </ResponsiveCont>
      </EditableContainer>
    )
  }
}

export default EditableText
