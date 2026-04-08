export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>OptimaDigitalHub - AI-Powered Marketing for Local Businesses</title>
        <meta name="description" content="AI-powered marketing services for local businesses. Websites, content, social media, and automation that works while you run your business." />
      </head>
      <body style={{ margin: 0, fontFamily: 'system-ui, -apple-system, sans-serif' }}>
        {children}
      </body>
    </html>
  );
}
