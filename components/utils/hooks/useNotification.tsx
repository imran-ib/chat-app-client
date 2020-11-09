import { useConversationStore } from "components/ChatComponents/ChatState";
import { useUser } from "components/Auth/Auth";

const useNotification = () => {
  const CurrentUser = useUser();

  const NewMessageNotification = useConversationStore(
    (state) => state.NewMessageNotification
  );

  // const NoNotify = NewMessageNotification.
  let username;
  let SenderId;
  let content;
  let Notify;
  if (NewMessageNotification !== null) {
    //@ts-ignore
    username = NewMessageNotification?.from?.username;
    //@ts-ignore
    SenderId = NewMessageNotification?.SenderId;
    //@ts-ignore
    content = NewMessageNotification?.content;
    //@ts-ignore
    Notify = CurrentUser.id !== SenderId;
  }

  return { Notify, username, SenderId, content };
};
export default useNotification;
