import Link from "next/link";


export default function DocsClone(){
  return (
    // <div className="min-h-screen bg-white text-gray-900">
      // <div className="flex">
        <div className="flex-1 p-8">

          {/* Page title */}
          <h1 className="text-3xl font-bold mb-6">Next Steps</h1>

          {/* Grid of cards */}
          <div className="grid grid-cols-2 gap-6">

            {/* Array of card data */}
            {[
              {
                title: "Installation",
                desc: "Learn how to create a new Next.js application...",
              },
              {
                title: "Project Structure",
                desc: "Learn the folder and file conventions...",
              },
              {
                title: "Layouts and Pages",
                desc: "Learn how to create your first pages...",
              },
              {
                title: "Linking and Navigating",
                desc: "Learn how navigation works...",
              },
              {
                title: "Server and Client Components",
                desc: "Learn how components work on server/client...",
              },
              {
                title: "Cache Components",
                desc: "Learn how caching improves performance...",
              },
            ].map((item, i) => (

              // Each card
              <div
                key={i} // Unique key for React list rendering
                className="border rounded-lg p-5 hover:shadow-md cursor-pointer"
              >

                {/* Card title */}
                <h2 className="font-semibold mb-2">{item.title}</h2>

                {/* Card description */}
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        
      // </div>
    // </div>
  );
}