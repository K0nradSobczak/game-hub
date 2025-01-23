import usePlatforms, { findPlatform } from "@/hooks/platforms";
import storeGames from "@/store/game-query";
import {
  Button,
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
  Text,
  VStack,
} from "@chakra-ui/react";

function PlatformSelector() {
  const { data } = usePlatforms();
  const platformId = storeGames(s => s.gameQuery.platformId);
  const setPlatform = storeGames(s => s.setPlatform);
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
                onClick={() => setPlatform(p.id)}
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
