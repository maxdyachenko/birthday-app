import React from 'react';
import {Button} from 'reactstrap';
import AvatarEditor from 'react-avatar-editor';
import propTypes from 'prop-types';

const WIDTH_TO_RESIZE_AVATAR_EDITOR = 600;

class PopupContent extends React.Component {
  onClickSave = () => {
    const canvas = this.editor.getImage().toDataURL();
    let imageURL;
    fetch(canvas)
      .then(res => res.blob())
      .then(blob => (imageURL = window.URL.createObjectURL(blob)))
      .then(() => this.props.sendImgToParent(imageURL));
  };

  componentDidMount() {
    window.innerWidth <= WIDTH_TO_RESIZE_AVATAR_EDITOR
      ? (this.shouldResize = true)
      : (this.shouldResize = false);
  }

  setEditorRef = editor => (this.editor = editor);

  render() {
    return (
      <div>
        <h6>Select thumbnail</h6>
        <AvatarEditor
          image={this.props.image}
          ref={this.setEditorRef}
          width={this.shouldResize ? 150 : 250}
          height={this.shouldResize ? 150 : 250}
          border={this.shouldResize ? 40 : 100}
          borderRadius={200}
          color={[255, 255, 255, 0.6]} // RGBA
          scale={1.2}
          rotate={0}
        />
        <Button onClick={this.onClickSave} style={{display: 'block'}}>
          Submit
        </Button>
      </div>
    );
  }
}

PopupContent.propTypes = {
  sendImgToParent: propTypes.func.isRequired,
  image: propTypes.string.isRequired,
};

export default PopupContent;
