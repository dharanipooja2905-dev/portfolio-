# Dharani Pooja - Professional Portfolio Website

## 📱 Overview

A premium, modern, fully responsive portfolio website showcasing professional services in website development, digital marketing, graphic design, and AI content creation.

## ✨ Features

### Core Sections
- **Hero Section** - Eye-catching introduction with CTA buttons
- **About Me** - Professional background and expertise summary
- **Skills** - Animated progress bars for technical and creative skills
- **Services** - 10 comprehensive service offerings with icons
- **Portfolio** - Filterable project showcase with 5+ projects
- **Experience** - Professional timeline (2021-Present)
- **Testimonials** - Client feedback and ratings
- **Contact** - Multiple contact methods and contact form
- **Blog** - Ready for blog content integration

### Advanced Features
✅ Dark/Light Mode Toggle
✅ Scroll Progress Bar
✅ Back-to-Top Button
✅ Smooth Scrolling & Animations
✅ Mobile-First Responsive Design
✅ Portfolio Search & Filtering
✅ Glassmorphism Design Elements
✅ Loading Animation
✅ SEO Optimization
✅ Open Graph Meta Tags
✅ Lazy Loading Ready
✅ Accessibility Support
✅ Fast Loading Performance

## 🎨 Design System

### Color Palette
- **Primary Color**: #0F9D58 (Emerald Green)
- **Secondary Color**: #1a1a1a (Dark)
- **Accent Color**: #D4AF37 (Gold)
- **Light Background**: #f8f9fa
- **Dark Background**: #0a0a0a

### Typography
- Font Family: Segoe UI, Tahoma, Geneva, Verdana, sans-serif
- Multiple font sizes for hierarchy
- Premium, modern typography

## 📁 Folder Structure

```
portfolio-/
├── index.html
├── css/
│   └── styles.css
├── js/
│   ├── main.js
│   └── animations.js
├── README.md
├── LICENSE
└── .gitignore
```

## 🚀 Getting Started

### Prerequisites
- A code editor (VS Code recommended)
- Git
- GitHub account

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/dharanipooja2905-dev/portfolio-.git
   cd portfolio-
   ```

2. **Open the website**
   - Simply open `index.html` in your browser
   - Or use Live Server extension in VS Code

### Local Development

```bash
# Open with Live Server (VS Code)
Right-click on index.html → Open with Live Server

# Or start a local server
python -m http.server 8000
# Visit http://localhost:8000
```

## 📝 Customization Guide

### Update Personal Information

**In `index.html`:**

1. **Name & Title**
   ```html
   <span class="logo-text">Your Name</span>
   <h1 class="hero-title">Your Professional Title</h1>
   ```

2. **Contact Information**
   ```html
   <a href="mailto:your-email@example.com">Your Email</a>
   <a href="https://wa.me/your-number">WhatsApp</a>
   <a href="https://linkedin.com/in/yourprofile">LinkedIn</a>
   <a href="https://github.com/yourprofile">GitHub</a>
   ```

3. **Social Media Links**
   Update all `href` attributes in social links sections

### Add Your Projects

**Portfolio items** in `index.html` - Template:

```html
<div class="portfolio-item" data-category="websites" data-search="your keywords">
    <div class="portfolio-image">
        <div class="image-placeholder-large">
            <i class="fas fa-icon"></i>
        </div>
        <div class="portfolio-overlay">
            <div class="overlay-content">
                <a href="your-site-url" class="portfolio-btn" target="_blank">
                    <i class="fas fa-external-link-alt"></i> View Site
                </a>
                <a href="github-url" class="portfolio-btn" target="_blank">
                    <i class="fab fa-github"></i> GitHub
                </a>
            </div>
        </div>
    </div>
    <div class="portfolio-info">
        <h3>Project Title</h3>
        <p class="client-name">Client: Client Name</p>
        <p class="project-description">Project description here...</p>
        <div class="technologies">
            <span class="tech-tag">Technology 1</span>
            <span class="tech-tag">Technology 2</span>
        </div>
    </div>
</div>
```

### Update Skills

**In `index.html` - Modify the skill-item blocks:**

```html
<div class="skill-item">
    <div class="skill-header">
        <span>Skill Name</span>
        <span class="percentage">85%</span>
    </div>
    <div class="skill-bar">
        <div class="skill-progress" style="width: 85%"></div>
    </div>
</div>
```

### Update About Section

**Replace placeholder text in About section** with your professional summary

### Update Timeline

**Add your experience entries:**

```html
<div class="timeline-item">
    <div class="timeline-date">YYYY - Present</div>
    <div class="timeline-content">
        <h3>Your Job Title</h3>
        <p class="company">Company Name</p>
        <p>Your job description...</p>
        <div class="timeline-skills">
            <span>Skill 1</span>
            <span>Skill 2</span>
        </div>
    </div>
</div>
```

### Modify Color Scheme

**In `css/styles.css`** - Update the `:root` variables:

```css
:root {
    --primary-color: #0F9D58;      /* Change this */
    --secondary-color: #1a1a1a;    /* Change this */
    --accent-color: #D4AF37;       /* Change this */
    /* ... other colors ... */
}
```

## 🌐 Deployment to GitHub Pages

### Automatic Deployment (Recommended)

1. **Push your code to GitHub**
   ```bash
   git add .
   git commit -m "Deploy portfolio website"
   git push origin main
   ```

2. **Enable GitHub Pages**
   - Go to your repository
   - Click **Settings** → **Pages**
   - Under "Source", select **main** branch
   - Click **Save**
   - Your site will be live at: `https://dharanipooja2905-dev.github.io/portfolio-`

### Custom Domain (Optional)

1. Purchase a domain
2. In GitHub Settings → Pages → Custom domain
3. Add your domain and save
4. Update DNS records with your domain provider

## ⚙️ SEO Optimization

### Already Implemented
- ✅ Meta tags (description, keywords, author)
- ✅ Open Graph tags for social sharing
- ✅ Semantic HTML structure
- ✅ Mobile responsiveness
- ✅ Fast loading performance
- ✅ Schema markup ready

### Additional SEO Tips
1. Customize meta descriptions in `index.html`
2. Add your actual image URLs (replace placeholders)
3. Create a `sitemap.xml`
4. Add structured data (JSON-LD)
5. Submit to Google Search Console

## 📱 Responsive Breakpoints

- **Desktop**: 1200px+
- **Tablet**: 769px - 1199px
- **Mobile**: Below 768px
- **Small Mobile**: Below 480px

Fully tested and optimized for all devices.

## 🎯 Performance Tips

1. **Image Optimization**
   - Replace placeholder icons with actual images
   - Use optimized formats (WebP, JPEG, PNG)
   - Compress images (use TinyPNG or similar)

2. **Lazy Loading**
   - Add `loading="lazy"` to images
   - Implement intersection observer for images

3. **Caching**
   - Enable browser caching
   - Use CDN for static assets

4. **Minification**
   - Minify CSS and JavaScript
   - Remove console logs in production

## 🔧 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers

## 📄 License

This project is open source and available under the MIT License. See the LICENSE file for more details.

## 🤝 Support & Contributions

For issues or suggestions, please open an issue on GitHub.

## 📧 Contact

- **Email**: dharanipooja2905@gmail.com
- **LinkedIn**: [Your LinkedIn](https://linkedin.com)
- **GitHub**: [Your GitHub](https://github.com)
- **Instagram**: [Your Instagram](https://instagram.com)

---

**Designed & Developed by Dharani Pooja** ❤️

Made with passion using HTML, CSS, and JavaScript. Fully responsive and optimized for all devices.
