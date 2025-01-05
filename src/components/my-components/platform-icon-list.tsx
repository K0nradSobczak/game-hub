import { Platform } from "@/hooks/games";
import { HStack } from "@chakra-ui/react";
import { FaWindows, FaPlaystation, FaXbox, FaApple, FaLinux, FaAndroid } from "react-icons/fa";
import { SiNintendo } from "react-icons/si";

interface Props {
  platform: Platform[];
}

function PlatformIconList({ platform }: Props) {

  const platformIcons: Record<string, React.ElementType> = {
    Windows: FaWindows,
    PlayStation: FaPlaystation,
    Xbox: FaXbox,
    macOS: FaApple,
    Linux: FaLinux,
    Android: FaAndroid,
    Nintendo: SiNintendo,
  };

  const uniquePlatforms = Array.from(new Set(platform.map((p) => p.name.split(" ")[0])));

  return (
    <HStack gap={2}>
      {uniquePlatforms.map((platformName) => {
        const IconComponent = platformIcons[platformName];
        return IconComponent ? (
          <IconComponent key={platformName} size={24} color="gray" />
        ) : null;
      })}
    </HStack>
  );
}

export default PlatformIconList;
