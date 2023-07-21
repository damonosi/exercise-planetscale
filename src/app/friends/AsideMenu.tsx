import { GetFriendsData } from "@/lib/getData";

const AsideMenu = async () => {
  const friends = await GetFriendsData();
  console.log(friends);
  if (!friends) {
    return "you have no friends";
  }
  return (
    <aside className="w-64 fixed left-0 bottom-0 top-0 mt-14 shadow-2xl shadow-red-700/20 py-6 px-6 flex flex-col  ">
      <h1>Friends </h1>
      <div className="flex flex-col">
        {friends.map((friend, index) => (
          <div
            className="flex justify-between items-center"
            key={index}
          >
            <span> {index + 1}</span>
            <span> name : </span>
            <span> {friend.username}</span>
            <button></button>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default AsideMenu;
