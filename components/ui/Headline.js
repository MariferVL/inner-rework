export default function Headline({ text, className = "", ...props }) {
  return (
    <h2
      className={`text-4xl md:text-5xl font-bold text-center mb-12 font-orbitron glitch ${className}`}
      data-text={text}
      {...props}
    >
      {text}
    </h2>
  );
}
