export default function Navbar() {
  return (
    <nav className="items-center w-screen flex justify-between px-10 py-8 mb-12">
      <h1 className="text-4xl text-gray-100">Philippe Fanaro</h1>
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
