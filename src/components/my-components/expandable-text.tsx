import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  children: string;
  limit: number;
}
function ExpandableText({ children, limit }: Props) {
  const [expended, setExpended] = useState(false);
  if (!children) return null;
  if (children.length <= limit) return <Text>{children}</Text>;

  let summary = expended ? children : children.substring(0, limit) + '...';
  const handleClick = () => {
    setExpended(!expended);
  }
  return (
    <>
      <Text>
        {summary}<Button variant={'outline'} fontWeight={'bold'} size={'xs'} onClick={handleClick}>Show {expended ? "Less" : "More"}</Button>
      </Text>
    </>
  );
}

export default ExpandableText;
