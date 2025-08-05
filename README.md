# Fumadocs on Cloudflare Workers

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/taslabs-net/fumadocs-cfworker)

A modern, fast documentation site built with [Fumadocs](https://fumadocs.dev) and deployed on [Cloudflare Workers](https://workers.cloudflare.com). This template provides everything you need to create beautiful documentation that runs at the edge.

## ✨ Features

- 🚀 **Lightning Fast**: Deployed on Cloudflare's global edge network
- 📱 **Responsive Design**: Mobile-first, accessible documentation UI
- 🔍 **Built-in Search**: Powerful search functionality out of the box
- 📝 **MDX Support**: Write docs in Markdown with React components
- 🎨 **Customizable**: Easy to theme and customize
- 🔒 **Type Safe**: Built with TypeScript for better developer experience
- 📦 **R2 Caching**: Incremental Static Regeneration with Cloudflare R2
- ⚡ **Edge Rendering**: Server-side rendering at the edge

## 🚀 Quick Deploy

The fastest way to get started is with the Deploy to Cloudflare button:

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/taslabs-net/fumadocs-cfworker)

## 📋 Prerequisites

- Node.js 18+ and npm
- A [Cloudflare account](https://dash.cloudflare.com/sign-up)
- [Wrangler CLI](https://developers.cloudflare.com/workers/wrangler/install-and-update/) installed

## 🛠️ Manual Setup

1. **Clone this repository**
   ```bash
   git clone https://github.com/taslabs-net/fumadocs-cfworker.git
   cd fumadocs-cloudflare
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure Cloudflare**
   - Update `wrangler.toml` with your account ID
   - Create an R2 bucket for caching (optional but recommended)
   - Update the bucket name in `wrangler.toml`

4. **Development**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) to see your docs.

5. **Deploy to Cloudflare**
   ```bash
   npm run deploy
   ```

## 📁 Project Structure

```
├── src/
│   ├── app/
│   │   ├── (home)/          # Landing page
│   │   ├── docs/            # Documentation pages
│   │   ├── api/search/      # Search API endpoint
│   │   └── layout.config.tsx # Navigation & branding
│   └── lib/
├── content/docs/            # Your documentation content (MDX)
├── public/                  # Static assets
├── wrangler.toml           # Cloudflare Workers configuration
└── next.config.mjs         # Next.js configuration
```

## ✏️ Writing Documentation

1. **Add new pages** in `content/docs/`
2. **Use MDX format** for rich content:
   ```mdx
   ---
   title: My Page
   description: A great page
   ---
   
   # Hello World
   
   This is a documentation page with **markdown** and React components.
   ```

3. **Customize navigation** in `src/app/layout.config.tsx`

## ⚙️ Configuration

### Basic Deployment (Default)

This template is configured for **basic deployment** out of the box - no additional Cloudflare resources required! Just update your account ID in `wrangler.toml`:

```toml
name = "my-docs-site"
account_id = "your-account-id"
```

### Advanced Features (Optional)

To enable caching and additional storage, uncomment the relevant sections in `wrangler.toml`:

#### 🗄️ **KV Storage** (for custom data)
```toml
[[kv_namespaces]]
binding = "your-kv-namespace"
id = "your-kv-namespace-id"
```

#### 📦 **R2 Caching** (for ISR performance)
```toml
[[r2_buckets]]
binding = "NEXT_INC_CACHE_R2_BUCKET"
bucket_name = "your-cache-bucket"
```

Then enable R2 caching in `open-next.config.ts`:
```typescript
import { defineCloudflareConfig, r2IncrementalCache } from "@opennextjs/cloudflare";

export default defineCloudflareConfig({
  incrementalCache: r2IncrementalCache,
});
```

### Environment Variables

Create a `.dev.vars` file for local development:
```env
NEXTJS_ENV=development
```

## 🎨 Customization

### Branding
- Update the site title in `src/app/layout.config.tsx`
- Replace the logo/icon in the same file
- Customize colors and themes in your CSS

### Content
- Edit the homepage in `src/app/(home)/page.tsx`
- Add your documentation in `content/docs/`
- Customize the search in `src/app/api/search/route.ts`

## 🚀 Deployment Options

### Option 1: Deploy to Cloudflare Button (Recommended)
Click the deploy button at the top of this README for the easiest setup.

### Option 2: Manual Deployment
```bash
npm run deploy
```

### Option 3: CI/CD with GitHub Actions
Set up [Workers Builds](https://developers.cloudflare.com/workers/ci-cd/builds/) for automatic deployments.

## 📊 Performance

- **Global Edge Network**: Your docs load fast worldwide
- **R2 Caching**: ISR pages are cached globally
- **Optimized Assets**: Automatic compression and optimization
- **Zero Cold Starts**: Always ready to serve


## 📖 Learn More

- [Fumadocs Documentation](https://fumadocs.dev)
- [Cloudflare Workers Docs](https://developers.cloudflare.com/workers/)
- [Next.js Documentation](https://nextjs.org/docs)
- [OpenNext for Cloudflare](https://opennext.js.org/cloudflare)


---

**Built with 🧡 using Fumadocs and Cloudflare Workers**
