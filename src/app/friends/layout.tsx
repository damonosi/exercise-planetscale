export default function FriendsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <aside className="w-64 fixed left-0 bottom-0 top-0 mt-14 bg-cyan-100 py-6 px-6 flex flex-col  ">
        <h1>Friends </h1>
        <div className="flex flex-col">
          <span> name:</span>
          <span> history:</span>
        </div>
      </aside>
      <main className="">{children}</main>
    </>
  );
}
