# 🚀 Modern Portfolio Website

A beautiful, responsive portfolio website built with Next.js, featuring dark/light mode, smooth animations, and SEO optimization.

## ✨ Features

- 🎨 **Modern Design** - Clean, minimal interface with beautiful typography
- 🌙 **Dark/Light Mode** - Seamless theme switching with system preference detection
- 📱 **Fully Responsive** - Optimized for mobile, tablet, and desktop
- ⚡ **Performance Optimized** - Built with Next.js 15 and App Router
- 🎯 **SEO Ready** - Complete metadata, sitemap, and structured data
- 🚀 **Smooth Animations** - Subtle hover effects and transitions
- 📧 **Contact Form** - Interactive contact section
- 🔗 **Social Integration** - GitHub, LinkedIn, and email links

## 🛠️ Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS
- **UI Components:** Shadcn/UI
- **Icons:** Lucide React
- **Theme:** Next-themes
- **Language:** TypeScript
- **Deployment:** Ready for Vercel/Netlify

## 🚀 Quick Start

1. **Clone and install dependencies:**
   ```bash
   git clone <your-repo-url>
   cd portfolio-website
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
portfolio-website/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with metadata
│   │   ├── page.tsx            # Main portfolio page
│   │   ├── globals.css         # Global styles
│   │   ├── sitemap.ts          # SEO sitemap
│   │   └── robots.ts           # SEO robots.txt
│   ├── components/
│   │   ├── ui/                 # Shadcn UI components
│   │   ├── sections/           # Portfolio sections
│   │   │   ├── hero.tsx        # Hero/landing section
│   │   │   ├── about.tsx       # About me section
│   │   │   ├── experience.tsx  # Work experience
│   │   │   ├── projects.tsx    # Featured projects
│   │   │   ├── education.tsx   # Education & certifications
│   │   │   └── contact.tsx     # Contact form
│   │   ├── navigation.tsx      # Main navigation
│   │   ├── theme-provider.tsx  # Theme context
│   │   ├── theme-toggle.tsx    # Dark/light mode toggle
│   │   ├── structured-data.tsx # SEO structured data
│   │   └── footer.tsx          # Site footer
│   └── lib/
│       └── utils.ts            # Utility functions
├── public/                     # Static assets
└── package.json
```

## 🎨 Customization

### 1. Personal Information
Update your details in these files:
- `src/components/sections/hero.tsx` - Name, title, bio
- `src/components/sections/about.tsx` - Skills and story
- `src/components/sections/experience.tsx` - Work history
- `src/components/sections/projects.tsx` - Portfolio projects
- `src/components/sections/education.tsx` - Education & certifications
- `src/components/sections/contact.tsx` - Contact information

### 2. Metadata & SEO
Update SEO information in:
- `src/app/layout.tsx` - Page metadata
- `src/components/structured-data.tsx` - JSON-LD data
- `src/app/sitemap.ts` - Site URLs

### 3. Styling
- Modify `src/app/globals.css` for custom styles
- Update Tailwind config for theme changes
- Customize Shadcn components in `src/components/ui/`

### 4. Assets
Add your images to the `public/` folder:
- `profile.jpg` - Your profile photo
- `og-image.jpg` - Open Graph image for social sharing
- `resume.pdf` - Your resume file

## 📦 Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy with one click

### Netlify
1. Build the project: `npm run build`
2. Deploy the `out` folder to [Netlify](https://netlify.com)

### Other Platforms
The project works with any static hosting service that supports Next.js.

## 🎯 SEO Features

- ✅ Semantic HTML structure
- ✅ Meta tags and Open Graph
- ✅ Twitter Card support
- ✅ JSON-LD structured data
- ✅ Sitemap generation
- ✅ Robots.txt
- ✅ Responsive images
- ✅ Fast loading times

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- [Shadcn/UI](https://ui.shadcn.com/) - Beautiful components
- [Lucide](https://lucide.dev/) - Icon library

---

**Made with ❤️ and modern web technologies**

For questions or support, feel free to reach out!