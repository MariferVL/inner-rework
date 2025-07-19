import Link from 'next/link';

/**
 * Componente de botón reutilizable basado en el diseño del Hero.
 * Este es el único estilo de botón para mantener un patrón consistente en el sitio.
 *
 * @param {object} props - Las propiedades del componente.
 * @param {string} [props.href] - Si se provee, se renderiza como un Link de Next.js.
 * @param {string} [props.color='#65e1ff'] - El color de neón para el botón.
 * @param {string} [props.className] - Clases adicionales para el botón.
 * @param {React.ReactNode} props.children - El contenido del botón.
 */
export default function Button({ 
  href, 
  color = '#65e1ff', 
  className = '', 
  children, 
  ...props 
}) {
  // Estilos exactos del botón del Hero, ahora reutilizables.
  const buttonClasses = `
    inline-block px-8 py-3 font-orbitron uppercase text-sm tracking-widest 
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

  // Combinamos las clases base con cualquier clase extra que se pase.
  const combinedClassName = `${buttonClasses} ${className}`;
  const style = { '--btn-color': color };

  // Renderiza como Link si tiene href, si no, como botón.
  if (href) {
    return (
      <Link href={href} className={combinedClassName} style={style} {...props}>
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