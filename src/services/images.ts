const getCroppedImage = (URL: string) => {
  const target = 'media/';
  const index = URL.indexOf('media/') + target.length;
  return URL.slice(0, index) + 'crop/600/400/' + URL.slice(index);
}

export default getCroppedImage;