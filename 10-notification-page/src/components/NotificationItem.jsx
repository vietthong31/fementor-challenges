function NotificationItem({ noti }) {
  return (
    <li
      className={`flex gap-x-4 rounded-xl p-3 ${
        !noti.isRead && "bg-grayishBlue-veryLight"
      }`}
    >
      <img
        src={`/images/${noti.avatar}`}
        alt={noti.name}
        width={50}
        height={50}
        className="self-start"
      />
      <div className="mr-auto">
        <p>
          <a href="" className="link text-black">
            {noti.name}
          </a>
          <span
            className={`px-2 text-grayishBlue-dark ${!noti.isRead && "dot"}`}
          >
            {noti.content}{" "}
            {noti.link !== undefined && (
              <a href="" className="link">
                {noti.link}
              </a>
            )}
          </span>
        </p>
        <p className="text-grayishBlue">{noti.since} ago</p>
        {noti.message !== undefined && (
          <p className="mt-2 rounded-md border p-4 text-grayishBlue-dark hover:cursor-pointer hover:bg-grayishBlue-1">
            {noti.message}
          </p>
        )}
      </div>
      {noti.picture !== undefined && (
        <a href="">
          <img src={`/images/${noti.picture}`} width={50} height={50} />
        </a>
      )}
    </li>
  );
}

export default NotificationItem;
