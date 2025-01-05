import noImage from '../assets/GameHub Resources/Image Placeholder/no-image-placeholder-6f3882e0.webp';

const getCroppedImage = (URL: string) => {
  if(!URL) return noImage;
  const target = 'media/';
  const index = URL.indexOf('media/') + target.length;
  return URL.slice(0, index) + 'crop/600/400/' + URL.slice(index);
}

export default getCroppedImage;