# Next Top Loader

A lightweight, modern top loading bar for Next.js applications without NProgress dependencies.

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

## Installation

```bash
npm install next-top-loader
```

## Usage

```tsx
import { TopLoader } from 'next-top-loader';

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
  className?: string;         // Additional classes
  color?: string;            // Bar color (default: #22c55e)  
  height?: number;           // Bar height in px (default: 3)
  initialProgress?: number;  // Starting progress (default: 20)
  shadowColor?: string;      // Shadow color (default: rgba(34,197,94,0.4))
  zIndex?: number;          // Z-index (default: 50)
}
```

## License
MIT

## Contributing
Pull requests welcome!
