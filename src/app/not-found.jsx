
import Link from 'next/link';

const NotFound = () => {
    return (
        <div className="min-h-screen bg-[#0F1115] text-white flex flex-col items-center justify-center">
            <h1 className="text-8xl font-bold text-[#C2F800]">
                404
            </h1>

            <h2 className="text-3xl font-bold mt-4">
                Workout Not Found
            </h2>

            <p className="text-[#9CA3AF] mt-3">
                Sorry, the page you are looking for does not exist.
            </p>

            <Link
                href="/"
                className="mt-6 bg-[#C2F800] text-black px-6 py-3 rounded-lg font-bold hover:bg-[#a8d900]"
            >
                Back to Workouts
            </Link>
        </div>
    );
};

export default NotFound;
