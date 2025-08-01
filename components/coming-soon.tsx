import Image from "next/image";

function ComingSoon() {
    return(
        <>
            <div className="min-h-screen bg-inherit flex flex-col p-8"> 
                <main className="flex-1 container mx-auto px-4 py-12 flex flex-col items-center justify-center text-center">
                <div className="max-w-3xl mx-auto">

                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4">Coming Soon</h2>
                    <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                    We&#39;re building a revolutionary learning platform for data professionals. Get ready to enhance your skills
                    with DataTechHub.
                    </p>

                    <div className="flex flex-col items-center">
                    <div className="mb-12 relative w-full max-w-md">
                        <Image
                        src="/no-courses.png"
                        alt="Person with learning materials"
                        width={400}
                        height={300}
                        className="mx-auto"
                        />

                        <div className="absolute -top-6 -right-6 md:right-0 bg-[#F8E16C] h-16 w-16 rounded-full flex items-center justify-center transform rotate-12">
                        <div className="h-8 w-8 bg-[#F8E16C] rounded-md transform rotate-45"></div>
                        </div>

                        <div className="absolute -bottom-4 -left-6 md:left-0 bg-[#4B7BF5] h-12 w-12 rounded-full"></div>
                        <div className="absolute bottom-12 right-0 md:right-12 bg-[#4CAF50] h-8 w-8 rounded-md transform rotate-12"></div>
                    </div>
                    </div>
                </div>
                </main>
            </div>
        </>
    )
}

export default ComingSoon