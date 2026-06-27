import styles from './Badge.module.css';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'default' | 'secondary';
  className?: string;
  style?: React.CSSProperties;
}

export default function Badge({ children, variant = 'default', className = '', style }: BadgeProps) {
  return (
    <span className={`${styles.badge} ${styles[variant] || styles.default} ${className}`} style={style}>
      {children}
    </span>
  );
}

