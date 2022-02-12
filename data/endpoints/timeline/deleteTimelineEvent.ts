const deleteTimelineEvent = async (id: string, password: string) =>
  await fetch(`/api/timelineEvents/${id}`, {
    method: "DELETE",
    headers: {
      password: password ?? "",
      "Content-Type": "application/json",
    },
  });

export default deleteTimelineEvent;
