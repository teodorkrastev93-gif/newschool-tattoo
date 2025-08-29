# NewSchool Tattoo — Next.js + Tailwind (Final)

- **No Info page.** Nav: Home, Gallery, Contact.
- **Home:** hero + right glass card + Messenger + Contact buttons, and **gallery preview** below.
- **Gallery:** loads Instagram via `/api/ig`, **square tiles**.
- **Contact:** address, phone, email, Messenger, and Google Map.
- EN/BG toggle in nav.

## Run
```bash
npm install
npm run dev
# http://localhost:3000
```

## Env (.env.local included)
```
IG_USER_ID=17841470275964177
IG_TOKEN=EAAUxumWYF1ABPCa7M6sSn7BvhOv1LA7F1zd4JwWafyM38ggN4CfSseIKVqd9APPXyC2fnuNZAqpIHD3ZAqcoHTG5ZCXsZBtqKAxqQlrV9yqE7iR7JaSAgiqYqBtE76QpAZCb9PuddNWn7UR6O4cJ3Fx9kw4QZAL2zE4MFDKHNcDnRhBy34AP2mdBl30NM8rvx5WYyeUWvkMQZDZD
IG_FIELDS=id,caption,media_url,permalink,thumbnail_url,media_type,timestamp
```
