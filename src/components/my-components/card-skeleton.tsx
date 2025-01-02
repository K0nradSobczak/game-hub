import { Card} from '@chakra-ui/react';
import {
  Skeleton,
  SkeletonText,
} from "@/components/ui/skeleton";

function CardSkeleton() {
  return (
    <Card.Root>
      <Skeleton height={"200px"}/>
      <Card.Body>
        <SkeletonText/>
      </Card.Body>
    </Card.Root>
  )
}

export default CardSkeleton