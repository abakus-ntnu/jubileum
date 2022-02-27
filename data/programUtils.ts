/* TODO: fill in complete program */

const jubEvents = [
  3113, 3005, 3115, 3118, 3117, 3007, 3114, 3008, 3055, 3116, 3010,
];

export interface JubEventRegistration {
  capacity: number;
  registrations: number;
  waitingList: number;
}

export interface JubEvent {
  title: string;
  banner: string;
  information: string;
  startTime: string;
  endTime: string;
  url: string;
  registration?: JubEventRegistration;
  registrationType: string;
  defaultExpanded?: boolean;
}

interface ApiEvent {
  title: string;
  cover: string;
  text: string;
  startTime: string;
  endTime: string;
  id: number;
  activeCapacity: number;
  waitingRegistrationCount: number;
  registrationCount: number;
  eventStatusType: string;
}

export const loadEvents = async (): Promise<JubEvent[]> => {
  const apiEvents = (await Promise.all(
    jubEvents.map(async (id) =>
      (await fetch(`https://lego.abakus.no/api/v1/events/${id}`)).json()
    )
  )) as ApiEvent[];

  return apiEvents.map(convertApiEvent);
};

export const loadEvent = async (id: number): Promise<JubEvent> => {
  const apiEvent = (await (
    await fetch(`https://lego.abakus.no/api/v1/events/${id}`)
  ).json()) as ApiEvent;

  return convertApiEvent(apiEvent);
};

const convertApiEvent = (apiEvent: ApiEvent): JubEvent => {
  return {
    title: apiEvent.title,
    banner: apiEvent.cover,
    information: apiEvent.text,
    startTime: apiEvent.startTime,
    endTime: apiEvent.endTime,
    url: `https://abakus.no/events/${apiEvent.id}`,
    registration:
      apiEvent.eventStatusType === "NORMAL" ||
      apiEvent.eventStatusType === "INFINITE"
        ? {
            capacity: apiEvent.activeCapacity,
            registrations: apiEvent.registrationCount,
            waitingList: apiEvent.waitingRegistrationCount,
          }
        : undefined,
    registrationType: apiEvent.eventStatusType,
  };
};
