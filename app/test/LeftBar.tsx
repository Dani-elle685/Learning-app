import { link } from 'fs'
import Link from 'next/link'

const  sidebar = [
    {
        id: 1,
        title: "Installation",
        link: "/test/installation"
    },
    {
        id: 2,
        title: "Project Structure",
        link: "/test/project-structure",
    },
    {
        id: 3,
        title: "Layouts and Pages",
        link: "/test/layouts-and-pages"
    },
    {
        id: 4,
        title: "Linking and Navigating",
        link: "/test/linking-and-navigating"
    },
    {
        id: 5,
        title: "Server and Client Components",
        link: "/test/server-and-client-components"
    },
    {
        id: 6,
        title: "Cache Components",
        link: "/test/cache-components"
    },
    {
        id: 7,
        title: "Fetching Data",
        link: "/test/fetching-data"
    },
    {
        id: 8,
        title: "Updating Data",
        link: "/test/updating-data"
    },
    {
        id: 9,
        title: "Caching and Revalidating",
        link: "/test/caching-and-revalidating"
    },
    {
        id: 10,
        title: "Error Handling",
        link: "/test/error-handling"
    },
    {
        id: 11,
        title: "CSS",
        link: "/test/css"
    },
    {
        id: 12,
        title: "Image Optimization",
        link: "/test/image-optimization"
    },
    {
        id: 13,
        title: "Internationalization",
        link: "/test/internationalization"
    }
]

export const LeftBar = () => {
  return (
    
        <div className="w-64 border-r p-4 text-sm">
          {/* Section title */}
          <Link href={"/test"}>
          <h2 className="font-semibold mb-2">Getting Started</h2>
          </Link>

          {/* Sidebar links */}
          <ul className="space-y-2 text-gray-600">
            {sidebar.map((item) => (
              <li key={item.id}>
                <Link href={item.link}> {item.title}</Link>
              </li>
            ))}
          </ul>
        </div>
  )
}
