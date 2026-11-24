# [MRrMano] — portfolio

A minimal, static portfolio built on a neon-glow terminal theme for
Moamen Hamed ("MRrMano").

- Live: https://mrrmano.github.io
- Name: Moamen Hamed ("MRrMano")
- Tagline: Aspiring SOC Analyst | Python Instructor | CTF Player |
  I will be something great!
- Blog: https://medium.com/@Mrrmano

## Pages

- `index.html` — home and bio
- `projects.html` — projects (coming soon)
- `profiles.html` — social and security profiles
- `experience.html` — experience and dates
- `certifications.html` — certifications and verification links
- `writeups.html` — latest Medium posts, loaded automatically
- `resources.html` — redirect to `profiles.html`
- `blog.html` — redirect to Medium
- `404.html` — custom GitHub Pages not-found page

## Files

```
website/
├── index.html
├── projects.html
├── profiles.html
├── experience.html
├── certifications.html
├── writeups.html
├── resources.html
├── blog.html
├── 404.html
├── robots.txt
├── sitemap.xml
├── .nojekyll
├── css/
│   ├── bootstrap4-neon-glow.min.css
│   └── custom.css
├── js/
│   ├── headline.js       console-style typing animation for the name
│   └── writeups.js       loads Medium posts into the WriteUps list
├── files/
│   └── Moamen-Hamed-CV.pdf
└── images/
    ├── favicon.svg
    └── ng-background-dot.png
```

## Preview locally

```bash
cd website
python3 -m http.server 8000
```

Then open http://localhost:8000

## Deploy

The site is published with GitHub Pages from the `main` branch root of
`mrrmano/mrrmano.github.io`. Pushing to `main` redeploys it
automatically.

## Customize

- **Header:** most pages start with `[MRrMano]` and type back and forth
  to `[Moamen Hamed]` in a console-style animation driven by
  `js/headline.js`. The closing `]` stays in place and blinks with the
  theme's `vim-caret` class, exactly like darkstar7471.com. The Experience
  page is intentionally static `[MRrMano]`. Without JavaScript, or when
  reduced motion is enabled, the other pages also stay as `[MRrMano]`.
  Animated `<h1>` elements keep a stable accessible label.
- **Headline sizing:** `css/custom.css` keeps the name at the theme's
  original 3.5rem size on desktop, on a single line, and scales it down
  on narrow screens.
- **Experience:** ordered Course Instructor, Student, then Help Desk
  Technician.
- **Tagline:** replace `Aspiring SOC Analyst | Python Instructor |
CTF Player | I will be something great!` under the heading.
- **Navigation:** Home, Projects, Profiles, Experience,
  Certifications, and WriteUps are in the left nav group; CV and Blog
  are in a second group pushed to the right with `mr-auto`. Blog opens
  the Medium profile.
- **CV:** the navbar links to `files/Moamen-Hamed-CV.pdf` with the
  `download` attribute.
- **WriteUps:** `writeups.html` lists posts from `js/writeups.js`,
  which fetches Medium's RSS feed through RSS2JSON (Medium's feed does
  not allow direct browser requests). New Medium posts appear
  automatically; an empty or error message is shown if none can be
  loaded.
- **Colors:** `css/custom.css` defines the palette sampled from
  darkstar7471.com as `--ds-*` variables: background `#0c0d16`, text
  `#e4e2ff`, muted `#a0a0a0`, dark grey `#6f6974`, accent `#714cdf`,
  and border `#28293e`.
- **Base theme/fonts:** the theme is in
  `css/bootstrap4-neon-glow.min.css`. Roboto and Hack are loaded from
  public CDNs.

There is intentionally no footer, no Contact page, and no separate About
page.
