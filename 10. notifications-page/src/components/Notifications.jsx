import NotificationItem from "./NotificationItem";

function Notifications({ notiList }) {
  return (
    <ul className="space-y-4">
      {notiList.map((noti) => (
        <NotificationItem key={noti.name} noti={noti} />
      ))}
    </ul>
  );
}

export default Notifications;
