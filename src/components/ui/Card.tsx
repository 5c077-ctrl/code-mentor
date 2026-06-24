import styles from './Card.module.css';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  glass?: boolean;
  hover?: boolean;
}

export default function Card({ 
  children, 
  glass = true, 
  hover = false, 
  className = '', 
  ...props 
}: CardProps) {
  const classes = [
    styles.card,
    glass ? 'glass-panel' : '',
    hover ? styles.hoverable : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
}
