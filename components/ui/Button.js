import Link from 'next/link';

export default function Button({ 
  href, 
  color = '#65e1ff', 
  className = '', 
  children, 
  ...props 
}) {
  const buttonClasses = `
    inline-flex items-center justify-center gap-2 whitespace-nowrap
    px-8 py-3 font-orbitron uppercase text-sm tracking-widest 
    bg-transparent border-2 rounded-full 
    transition-all duration-300 transform 
    hover:text-black hover:scale-105 
    focus:outline-none focus:ring-4 
    border-[var(--btn-color)] 
    text-[var(--btn-color)] 
    hover:bg-[var(--btn-color)] 
    hover:shadow-[0_0_25px_var(--btn-color)] 
    focus:ring-[color:var(--btn-color)/50]
  `;
  
  const combinedClassName = `${buttonClasses} ${className}`;
  const style = { '--btn-color': color };

  if (href) {
    return (
      <Link href={href} className={combinedClassName} style={style} target='_blank' {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClassName} style={style} {...props}>
      {children}
    </button>
  );
}