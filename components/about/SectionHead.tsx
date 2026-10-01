export default function SectionHead({ title, children }: { title: React.ReactNode; children?: React.ReactNode }) {
  return (
    <div className="ab-head">
      <div className="ab-redline" />
      <h2 className="ab-heading">{title}</h2>
      {children && <p>{children}</p>}
    </div>
  )
}
