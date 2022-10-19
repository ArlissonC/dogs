import Error from "components/Helper/Error";
import Head from "components/Helper/Head";
import Loading from "components/Helper/Loading";
import useFetch from "hooks/useFetch";
import React from "react";
import { lazy, useEffect } from "react";
import { STATS_PHOTO_GET } from "services/photo";
const StatsGraphs = lazy(() => import("components/StatsGraphs"));

const Stats = () => {
  const { data, error, loading, request } = useFetch();

  useEffect(() => {
    (async () => {
      await request(STATS_PHOTO_GET());
    })();
  }, [request]);

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;

  if (data)
    return (
      <React.Suspense fallback={<div></div>}>
        <Head title="Estatísticas" />
        <StatsGraphs data={data.data} />
      </React.Suspense>
    );
  else return null;
};

export default Stats;
