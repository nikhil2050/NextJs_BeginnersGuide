# Welcome to the Coding 👋

## Components:
Earlier 2 types of components - Functional, Class-based

Now components are also categorized by where they run - Client/Server [Introduced in React19]
By default they are ServerComponent.

## About NextJS
Server-side rendering helps in good SEO. \
No React-router package required. Now, React uses 'File-based routing'. \
'Automatic CodeSplitting' \
Image Optimizations - Compresses images, applies lazing loading, CDN support, etc. \
Script Optimization



## Files:

| File               | Use                                                                                                               |
|--------------------|-------------------------------------------------------------------------------------------------------------------|
| tsconfig.json      | Config file for TS. It defined what should be type-checked, type-ignored and other rules                          |
| tailwind.config.ts | Add Tailwind setup                                                                                                |
| postcss.config.mjs | Config file for PostCSS(a tool to process CSS with different plugins like Tailwind)                               |
| package-lock.json  | Locks version of dependencies for everyone to use same dependencies                                               |
| package.json       | Contain all current dependencies and scripts                                                                      |                                            |
| next-env.d.ts      | It is TS declaration file for NextJS. It should not be deleted                                                    |
| next.config.js     | Configure NextJs features. Like experimental options, image setting, build settings, etc                          |
| eslint.config.mjs  | Configuare linting options                                                                                        |
| public/            | Contains static assets like images                                                                                |
| node_modules       | Contains all dependencies/packages needed to run the appl                                                         |
| app/               | Has primary homepage (page.tsx)                                                                                   |
| app/font           | (Not included) Contains all fonts (like *.woff)                                                                   |
| app/favicon.ico    | File that appears on browser's tab                                                                                |
| app/globals.css    | Has custom CSS or Tailwind CSS                                                                                    |
| app/layout.tsx     | Main entry point for the appln. Anything done here will apply to across all pages & routes. Fonts/Styles/Metadata |

### package.json
Scripts in package.json:

| Script                        | Use                                                                       |
|-------------------------------|---------------------------------------------------------------------------|
| "dev": "next dev --turbopack" | Start NextJs in Dev mode with Hot-module reloading, error-reporting, etc. |
| "build": "next build"         | Create optimized prod build of the app |
| "start": "next start"         | Starts NextJs in Prod mode |
| "lint": "next lint"           | Runs ESLint for all files in the Source dir. |

## Routing
| URL Path: |            |            |
|-----------|------------|------------|
| acme.com  | /dashboard | /settings  | 
| app       | /dashboard | /settings  |

### 1. Route Groups
- Route Groups make code look organized, without affecting the URL.
- Route group is created with a directory enclosed in braces. eg. (root), (dashboard).
- Each Route-group has its own layout.tsx

NOTE: There CANNOT be multiple entrypoints (page.tsx files). Like both in (root) and (dashboard). \
In that case, following error will be shown on browser:
```
    Runtime Error
    Error: ./app/(root)
    You cannot have two parallel pages that resolve to the same path.
```

## Error Handling
- Only the closest error file  to the route takes priority
- Refer: https://nextjs.org/docs/app/building-your-application/routing/error-handling

Boiler plate code for error.tsx:

```javascript
'use client' // Error boundaries must be Client Components
 
import { useEffect } from 'react'
 
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])
 
  return (
    <div>
      <h2>Something went wrong!</h2>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  )
}
```

Boiler plate code for global-error.tsx:
```js
'use client' // Error boundaries must be Client Components

import { useEffect } from 'react'

export default function GlobalError({error,}: { error: Error & { digest?: string } }) {

    return (
        <html>
            <body>
                <h2>Global Error</h2>
            </body>
        </html>
    )
}

```

## Loading UI's
- Displaying loading progress until data is fetched from DB
- Works similarly to error-handling
- Just add a file with name 'loading.tsx' in the app/ folder

## Static Site Generation (SSG)
- Its a technique where HTML pages are built at build time. 
- ie. Content is created when site is deployed, not when user requests it.
- Uses: Blogs, Documentation sites, marketing pages.
- You may have to go for 'Incremental Static Regeneration' (ISR). It is an extension of SSG that allows to update static content after site is built.
- ie. It will create static pages at build time behaving like SSG and then after some time, it will create/update those static pages once again you deploy your site.
- 2 strategies for SSG
  1. Time-based revalidation (Revalidate page after some time using "export const revalidate = 3600")
  2. Revalidate request after some time
  3. On-demand revalidation with revalidatePath
  4. On-demand revalidation with revalidateTag
- Read documentation

## Server Side Rendering (SSR)
- Content is created dynamically for each user request
- \- Slower than SSG
- \- Puts load on server
- \+ Up to date content
- Strategies for SSr:
- 1. Time-based revalidation (Revalidate page after some time using "export const revalidate = 3600")
  2. On-demand revalidation with revalidatePath 
  3. On-demand revalidation with revalidateTag
- Read documentation

## Partial Pre-Rendering (PPR)
- *NEW rendering model
- Combines Static and Dynamic rendering
- Allows to render a static shell of a page while Streaming dynamic content


## APIRoutes (Backend)
| Path:            |   |             |
|------------------|---|-------------|
| app/page.js      | : | /           |
| app/api/route.js | : | /api [POST] | 
