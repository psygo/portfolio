export default function Navbar() {
  return (
    <nav className="items-center flex justify-between py-8 mb-12">
      <h1 className="text-3xl">Philippe Fanaro</h1>
      <ul>
        <li>
          <a
            className="bg-gradient-to-r from-blue-700 to-blue-800 text-white px-4 py-2 rounded-md"
            href="/cv_en.pdf"
            target="_blank"
            rel="noreferrer noopener"
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}
