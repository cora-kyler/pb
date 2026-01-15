# Companies Data Guide

Location: `src/lib/data/companies.ts`

## Structure

### Company Interface

| Field | Required | Description |
|-------|----------|-------------|
| `slug` | Yes | URL-friendly identifier (e.g., `select-star`) |
| `name` | Yes | Display name (e.g., `Select Star`) |
| `tagline` | Yes | Short tagline for the portfolio grid |
| `logo` | Yes | Path to logo or empty string `''` if none |
| `description` | Yes | Full description text |
| `website` | Yes | Company website URL |
| `founders` | Yes | Array of founder objects |
| `news` | No | Array of news/press items (optional) |

### Founder Interface

| Field | Required | Description |
|-------|----------|-------------|
| `name` | Yes | Founder's full name |
| `link` | No | LinkedIn URL (optional) |

### NewsItem Interface

| Field | Required | Description |
|-------|----------|-------------|
| `title` | Yes | Article headline |
| `source` | Yes | Publication name (e.g., "TechCrunch") |
| `date` | Yes | Publication date (e.g., "April 7, 2025") |
| `url` | Yes | Link to the article |

## Adding a New Company

### 1. Add to the companies object

```typescript
'company-slug': {
    slug: 'company-slug',
    name: 'Company Name',
    tagline: 'Short tagline here',
    logo: '',  // or '/portfolioimages/company.svg' if you have one
    description: 'Full description of the company.',
    website: 'https://company.com',
    founders: [
        { name: 'Founder Name', link: 'https://www.linkedin.com/in/handle/' },
        { name: 'Another Founder' }  // link is optional
    ]
}
```

### 2. Add to the companyOrder array

The `companyOrder` array controls display order on the portfolio page AND on the homepage (first 7 companies are displayed). Add the slug where you want it to appear:

```typescript
const companyOrder = [
    'augment',
    'company-slug',  // Add new company here
    'orchid',
    // ...
];
```

## Adding News Links (Optional)

News items are optional. Only add them when there's notable press coverage worth highlighting. See examples for Orchid and Krea.

```typescript
'company-slug': {
    slug: 'company-slug',
    name: 'Company Name',
    // ... other fields ...
    news: [
        {
            title: 'Article Headline Goes Here',
            source: 'Publication Name',
            date: 'Month Day, Year',
            url: 'https://publication.com/article-url'
        },
        {
            title: 'Another Article',
            source: 'Another Publication',
            date: 'Month Day, Year',
            url: 'https://example.com/article'
        }
    ]
}
```

### News Guidelines

- Only include significant press (major publications, funding announcements, etc.)
- Keep date format consistent: `"April 7, 2025"`
- News array is completely optional - most companies won't have it

## Editing a Company

Find the company by its slug key and update relevant fields:
- Description updates: update `description`
- New funding: append to `description`
- Founder changes: update the `founders` array
- Add press: add `news` array or append to existing

## Removing a Company

1. Delete the company entry from the `companies` object
2. Remove the slug from `companyOrder` array
3. Optionally remove logo from `static/portfolioimages/`

## Reordering Companies

Edit the `companyOrder` array to change display order. Companies are shown in the order they appear in this array.

## Tips

- Slugs should be lowercase with hyphens (e.g., `select-star`, not `SelectStar`)
- Keep taglines short (3-6 words)
- Founder LinkedIn links should use full URLs including `https://`
- Logo path should be empty string `''` if no logo exists (not `null`)
- For stealth companies, use `'In stealth mode.'` as the description and as the tagline.
