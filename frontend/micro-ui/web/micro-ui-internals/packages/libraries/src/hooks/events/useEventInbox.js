import { useQuery } from "react-query"

const combineResponse = (data, users) => {
  data.events = data?.events?.map(event => {
    const user = users.find(user => user.uuid === event?.auditDetails?.lastModifiedBy)
    return { ...event, user }
  });
  return data;
}


const useInbox = (tenantId, data, filter = {}, config = {}) => {
  return useQuery(["EVENT_INBOX", tenantId, data, filter], async () => {
    const eventData = await Digit.EventsServices.Search({ tenantId, data, filter });
    const uuids = []
    eventData?.events?.forEach(event => uuids.push(event?.auditDetails?.lastModifiedBy));
    const usersResponse = await Digit.UserService.userSearch(pg, { uuid: "96a561e1-3155-4a5f-afc4-2c0a5b69e6b8" }, {});
    return combineResponse(eventData, usersResponse?.user);
  }, 
  config);
}

export default useInbox;