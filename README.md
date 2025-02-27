# Next Top Loader

A lightweight, modern top loading bar for Next.js applications without NProgress dependencies.

[![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)](https://www.npmjs.com/package/next-top-loader)
[![NPM Downloads](https://img.shields.io/npm/dm/next-top-loader?&style=flat-square)](https://www.npmjs.com/package/next-top-loader)

## Why Not NProgress?

Most top loading bars use NProgress, which has several drawbacks:

- Injects inline styles into your HTML, impacting SEO and page structure
- Large bundle size with unnecessary features
- Outdated codebase with minimal maintenance
- Poor performance due to style injections
- Unnecessary global scope pollution

## Features

- Zero dependencies beyond Next.js and React
- Clean implementation using React hooks
- No inline style injection
- Fully customizable through props
- TypeScript support
- Tiny bundle size

## Prerequisites

- Next.js 13.0.0 or higher
- React 18.2.0 or higher
- Tailwind CSS 3.2.0 or higher

## Installation

```bash
npm install next-top-loader
```

## Usage

```tsx
import { TopLoader } from "next-top-loader";

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <TopLoader />
        {children}
      </body>
    </html>
  );
}
```

## Props

```ts
interface TopLoaderProps {
  className?: string; // Additional classes
  color?: string; // Bar color (default: #22c55e)
  height?: number; // Bar height in px (default: 3)
  initialProgress?: number; // Starting progress (default: 20)
  shadowColor?: string; // Shadow color (default: rgba(34,197,94,0.4))
  zIndex?: number; // Z-index (default: 50)
}
```

## License

MIT

## Contributing

Pull requests welcome!
