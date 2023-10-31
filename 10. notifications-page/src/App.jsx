import Header from "./components/Header";
import notifications from "./noti.js";
import Notifications from "./components/Notifications";
import { useState } from "react";

function App() {
  const [notiList, setNotiList] = useState(notifications);

  const unreadNoti = notiList.filter((noti) => !noti.isRead).length;

  const markAsRead = () => {
    if (unreadNoti === 0) {
      return;
    }
    setNotiList(
      notifications.map((noti) => {
        if (!noti.isRead) {
          noti.isRead = true;
        }
        return noti;
      }),
    );
  };

  return (
    <div className="w-full rounded-xl bg-white px-6 py-4 text-sm xl:w-1/2 xl:text-base">
      <Header unread={unreadNoti} markAsRead={markAsRead} />
      <main>
        <Notifications notiList={notiList} />
      </main>
    </div>
  );
}

export default App;
