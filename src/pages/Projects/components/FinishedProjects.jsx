export const FinishedProjects = () => {
    return (
        <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold">Finished Projects</h2>
        <p className="text-gray-600">
            Here are some of the projects I have completed.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Add your finished projects here */}
            <div className="bg-white shadow-md rounded-lg p-4">
            <h3 className="text-xl font-semibold">Project Title</h3>
            <p className="text-gray-600">Project description goes here.</p>
            </div>
        </div>
        </div>
    );
};