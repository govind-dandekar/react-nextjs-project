import './globals.css'

export const metadata = {
  title: 'NextJS Course App',
  description: 'Your first NextJS app!',
};

// uses standard children prop to inject content
// layout uses html and body to set up html skeleton
// <head></head> not rendered here and can be populated
// by reserved metadata const; children = active page.js file
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
