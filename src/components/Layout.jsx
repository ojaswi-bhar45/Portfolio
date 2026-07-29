export default function Layout({ sidebar, profileCard, children }) {
  return (
    <div className="layout">
      {sidebar}
      {profileCard}
      <main className="content-panel">
        {children}
      </main>
    </div>
  );
}
