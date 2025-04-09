export default function Waves({ flip = false }: { flip?: boolean }) {
  // 'flip' can invert the wave if needed for a top-to-bottom transition
  return !flip ? (
    <svg
      viewBox="0 0 1440 320"
      className="fill-white dark:fill-[#1e293b]"
      // The color changes if you want the wave to match the next section's BG
    >
      <path d="M0,64L60,74.7C120,85,240,107,360,144C480,181,600,235,720,256C840,277,960,267,1080,240C1200,213,1320,171,1380,149.3L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z" />
    </svg>
  ) : (
    <svg
      viewBox="0 0 1440 320"
      className="fill-white dark:fill-[#1e293b] rotate-180"
    >
      <path d="M0,64L60,74.7C120,85,240,107,360,144C480,181,600,235,720,256C840,277,960,267,1080,240C1200,213,1320,171,1380,149.3L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z" />
    </svg>
  );
}
