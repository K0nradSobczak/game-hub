import { ImageProps, Image } from "@chakra-ui/react";
import bullEye from "../../assets/GameHub Resources/Emojis/bulls-eye.webp"
import meh from "../../assets/GameHub Resources/Emojis/meh.webp"
import tumbsUp from "../../assets/GameHub Resources/Emojis/thumbs-up.webp"

interface Props {
  rating: number;
}
function Emoji({rating}: Props) {
  if (rating < 3) return null;

  const emojis: {[key: number]: ImageProps} = {
    3: { src: meh, alt:"meh", boxSize: "25px"},
    4: { src: tumbsUp, alt:"recommended", boxSize: "25px"},
    5: { src: bullEye, alt:"exceptional", boxSize: "35px"}
  }

  return (
  <Image {...emojis[rating]} marginTop={1}/>
  )
}

export default Emoji