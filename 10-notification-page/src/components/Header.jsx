function Header({ unread, markAsRead }) {
  return (
    <header className="mb-6 flex">
      <h1 className="mr-auto text-xl font-bold xl:text-2xl">
        Notifications{" "}
        <span className="inline-block translate-y-[-0.2em] rounded-md bg-blue px-2 pb-1 pt-[0.1rem] text-base/none text-grayishBlue-veryLight">
          {unread}
        </span>
      </h1>
      <button className="text-grayishBlue hover:text-blue" onClick={markAsRead}>
        Mark all as read
      </button>
    </header>
  );
}

export default Header;
