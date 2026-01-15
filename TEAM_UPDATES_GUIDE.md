# Team Data Guide

Location: `src/lib/data/team.ts`

## Structure

Each team member is an object with these fields:

| Field | Required | Description |
|-------|----------|-------------|
| `name` | Yes | Full name |
| `role` | Yes | Job title (e.g., "Founding Partner", "Operations") |
| `description` | Yes | Short tagline shown on team card |
| `image` | Yes | Path to headshot (e.g., `/teamimages/name.png`) |
| `imageAlt` | Yes | Alt text for image (usually the person's name) |
| `bio` | No | Longer bio shown in modal popup |
| `email` | No | Email address if exists |
| `links` | No | Array of social/website links |

## Adding a New Team Member

1. Add the headshot image to `static/teamimages/` (use `.png` format, consistent sizing). Ask Alena for photoshop template file for editing.

2. Add a new entry to the `teamMembers` array:

```typescript
{
    name: "First Last",
    role: "Role Title",
    description: "One-line description for the card.",
    bio: "Longer bio paragraph for the modal.",
    image: "/teamimages/firstname.png",
    imageAlt: "First Last",
    links: [
        { label: "X", url: "https://x.com/handle" },
        { label: "LinkedIn", url: "https://www.linkedin.com/in/handle/" }
    ]
}
```

3. Order matters - team members display in array order

## Editing a Team Member

Find their entry in the array and update the relevant fields. Common updates:
- Role changes: update `role`
- Bio updates: update both `description` (short) and `bio` (long)
- New photo: replace file in `static/teamimages/` and update `image` path if filename changed

## Removing a Team Member

1. Delete their entry from the `teamMembers` array
2. Optionally remove their image from `static/teamimages/`

## Link Labels

Common link labels:
- `"X"` - Twitter/X profile
- `"LinkedIn"` - LinkedIn profile
- `"Website"` - Personal website
- `"GitHub"` - GitHub profile

## Tips

- Keep `description` concise (under ~80 characters)
- `bio` can be as long as you'd like, the modal will scroll as needed
- Image filenames should be lowercase (e.g., `jenny.png`, not `Jenny.png`)
