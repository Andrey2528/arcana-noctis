import './Logo.scss';
export default function Logo({ size = "md" }) {
  return (
    <div className={`logo logo-${size}`}>
      
      <span className="logo-text">
        ARCANA <span className="logo-accent">NOCTIS</span>
      </span>
    </div>
  );
}
