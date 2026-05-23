# BankDeMark Blog System Notes

## Blog content location
src/content/blog

## Blog renderer
src/lib/blog.js

## Blog post route
src/app/blog/[slug]/page.js

## Current behavior
- Markdown files are parsed with gray-matter.
- Blog content is rendered through marked.
- AutoTOC pulls from article .post-prose h2.
- JSON-LD/schema blocks are currently stripped by cleanMarkdown().
- Suggested supporting article sections are stripped.
- Metadata currently uses post.title and post.excerpt only.

## Important future patch
When adding Claude-generated articles, patch:
- src/lib/blog.js to preserve/use frontmatter fields
- src/app/blog/[slug]/page.js to output better metadata/OpenGraph
- optional schema injection from frontmatter or separate schema files

## Useful content assets
- content/sources/
- content/frameworks/
- content/case-studies/
- src/content/blog/case-studies/

## Brand case study assets
- Blackwater Aquatics SEO growth
- Blackwater scuds ranking case study
- Blackwater betta content case study
- Lisa Travel Design should be used naturally as a local service/travel business SEO example where relevant.
