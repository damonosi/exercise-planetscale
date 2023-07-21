import AsideMenu from "./AsideMenu";

export default function FriendsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <AsideMenu />
      <main className="">{children}</main>
    </>
  );
}
