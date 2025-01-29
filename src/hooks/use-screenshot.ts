import { ScreenShots } from "@/request/ScreenShots";
import { HttpClient } from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";
import ms from "ms";

const useScreenshot = (id: string | number) => {
  const client = new HttpClient<ScreenShots>(`/games/${id}/screenshots`);
  return useQuery({
    queryKey: ["screenshot", id],
    queryFn: client.getAll,
    staleTime: ms('1d')
  });
};

export default useScreenshot;