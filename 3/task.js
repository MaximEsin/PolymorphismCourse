function stringify(tag) {
  let htmlString = `<${tag.name}`;

  for (const key in tag) {
    if (key !== 'name' && key !== 'tagType' && key !== 'body') {
      htmlString += ` ${key}="${tag[key]}"`;
    }
  }

  if (tag.tagType === 'single') {
    htmlString += '>';
  } else if (tag.tagType === 'pair') {
    htmlString += `>${tag.body}</${tag.name}>`;
  }

  return htmlString;
}

export default stringify;
