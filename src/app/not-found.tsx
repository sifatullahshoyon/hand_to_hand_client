import Image from "next/image";
import Link from "next/link";
import notFoundImg from "./assets/img/404.png";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="mb-6">
        <Image
          src={notFoundImg}
          alt="Page Not Found"
          width={400}
          height={400}
          placeholder="blur"
          loading="lazy"
          blurDataURL="all"
        />
      </div>
      <div className="text-center">
        <h1 className="text-6xl font-bold text-rose-600 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          Oops! Page Not Found
        </h2>
        <p className="text-gray-600 mb-6">
          Sorry, the page you are looking for does not exist or has been moved.
        </p>
        <Link href="/">
          <button className="bg-rose-500 hover:bg-rose-600 text-white px-6 py-3 rounded-lg shadow-md transition duration-300 cursor-pointer">
            Return to Home
          </button>
        </Link>
      </div>
    </div>
  );
}
