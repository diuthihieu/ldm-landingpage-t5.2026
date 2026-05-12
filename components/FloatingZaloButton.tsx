export default function FloatingZaloButton() {
  return (
    <a
      href="https://zalo.me/0123456789"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 w-14 h-14 bg-blue-400 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl hover:scale-110 transition-all z-40"
      aria-label="Chat on Zalo"
    >
      <svg
        className="w-8 h-8"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm.75 15h-1.5v1.5h1.5v-1.5zm0-3h-1.5v1.5h1.5v-1.5zm-4.5 3h-1.5v1.5h1.5v-1.5zm0-3h-1.5v1.5h1.5v-1.5zm9 3h-1.5v1.5h1.5v-1.5zm0-3h-1.5v1.5h1.5v-1.5z" />
      </svg>
    </a>
  );
}
