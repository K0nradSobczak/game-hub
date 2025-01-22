import usePlatforms, { findPlatform, Platforms } from "@/hooks/platforms";
import {
  Button,
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
  Text,
  VStack,
} from "@chakra-ui/react";

interface Props {
  onSelectPlatform: (platform: Platforms) => void;
  platformId: number | null;
}

function PlatformSelector({ onSelectPlatform, platformId }: Props) {
  const { data } = usePlatforms();
  const selectedPlatform = findPlatform(platformId);
  return (
    <>
      <VStack>
        <MenuRoot>
          <MenuTrigger asChild>
            <Button variant={"outline"} colorPalette={"grey"}>
              {selectedPlatform?.name || <Text>Platform</Text>}
            </Button>
          </MenuTrigger>
          <MenuContent width={"100%"}>
            {data?.results.map((p) => (
              <MenuItem
                onClick={() => onSelectPlatform(p)}
                key={p.slug}
                value={p.slug}
              >
                {p.name}
              </MenuItem>
            ))}
          </MenuContent>
        </MenuRoot>
      </VStack>
    </>
  );
}

export default PlatformSelector;
