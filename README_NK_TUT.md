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


