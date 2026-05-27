export default function BrandText({ dotcom = false, className = "" }) {
  return (
    <span className={`brand-text ${className}`.trim()}>
      <span className="brand-text-bank">Bank</span>
      <span className="brand-text-demark">DeMark</span>
      {dotcom ? <span className="brand-text-dotcom">.com</span> : null}
    </span>
  );
}
