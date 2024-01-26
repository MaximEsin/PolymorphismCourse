class LabelTag {
  constructor(labelText, innerTag) {
    this.labelText = labelText;
    this.innerTag = innerTag;
  }

  render() {
    return `<label>${this.labelText}${this.innerTag.render()}</label>`;
  }
}

export default LabelTag;
