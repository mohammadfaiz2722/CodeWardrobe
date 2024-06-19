import Link from 'next/link';
import Image from 'next/image';

const Custom404 = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-pink-500 to-pink-800 text-white">
      <div className="text-center space-y-8">
        <div>

        <Image
          src="/latest.png"
          alt="CodeWardrobe Logo"
          width={200}
          height={60}
          className="mb-4 m-auto"
          
          />
          </div>
        <h1 className="text-6xl font-bold text-pink-100">Lost in Cyberspace?</h1>
        <p className="text-lg text-gray-300">
          We can't seem to find the page you're looking for. Don't worry, we'll help you get back on track.
        </p>
        <Link href="/" className="inline-flex items-center px-4 py-2 bg-pink-700 hover:bg-pink-800 text-white rounded-md font-semibold">
          Go Back to Homepage
          <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </Link>
      </div>
    </div>
  );
};

export default Custom404;
