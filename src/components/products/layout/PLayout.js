export default function PLayout({ children, myRef }) {
  return (
    <section className="py-8 lg:py-16" ref={myRef}>
      <div className="max-w-7xl mx-auto">{children}</div>
    </section>
  );
}
