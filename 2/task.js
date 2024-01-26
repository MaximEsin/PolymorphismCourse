function getLinks(tags) {
  const linkTags = ['a', 'link', 'img'];

  const links = tags.reduce((acc, tag) => {
    if (linkTags.includes(tag.name)) {
      const linkAttribute = tag.href || tag.src;
      if (linkAttribute) {
        acc.push(linkAttribute);
      }
    }
    return acc;
  }, []);

  return links;
}
