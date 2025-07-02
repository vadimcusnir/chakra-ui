import { allFiles } from 'contentlayer/generated'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Librăria Nota Doi',
  description: 'Arsenalul de prompturi, frameworkuri şi sisteme pentru trecerea de la 0€ la 10k€/lună.',
}

export default function Home() {
  return (
    <div className="p-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {allFiles.map((file) => (
        <Link
          key={file._id}
          href={`/${file.slug}`}
          className="border rounded-lg p-4 shadow-sm hover:shadow-md hover:bg-gray-50 dark:hover:bg-gray-800 transition"
        >
          <article>
            <h2 className="text-lg font-semibold mb-2 leading-tight line-clamp-2">
              {file.title}
            </h2>
            {file.descriere && (
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3 line-clamp-3">
                {file.descriere}
              </p>
            )}
            <span className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
              {file.etapa} • {file.componenta}
            </span>
          </article>
        </Link>
      ))}
    </div>
  )
}
