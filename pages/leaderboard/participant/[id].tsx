import type { NextPage } from "next";
import JubPage from "components/JubPage";
import useSWR from "swr";
import { Participant } from "models/leaderboardSchema";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const ParticipantPage: NextPage = () => {
  const { data: participants } = useSWR<Participant[], unknown>(
    "/api/leaderboardAPI/",
    fetcher,
    {
      refreshInterval: 5000,
    }
  );

  return <JubPage title="Participant page" />;
};

export default ParticipantPage;
