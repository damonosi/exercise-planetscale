import AddFriendForm from "./AddFriendForm";

const FriendsPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center py-12 gap-16">
      <h1 className="text-2xl">Friends Page</h1>
      <div className="flex">
        <AddFriendForm />
        <div> </div>
      </div>
    </div>
  );
};

export default FriendsPage;
