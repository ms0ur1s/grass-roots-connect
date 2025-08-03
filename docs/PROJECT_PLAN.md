# Grass Roots Connect — Project Plan (v0.1)

## 🔥 Purpose

_Grass Roots Connect_ is a web application designed to help users discover and connect with grassroots, community, and activist groups in their local area. It fosters collaboration, solidarity, and mutual aid across movements such as:

- Food sovereignty & local food networks
- Housing co-operatives & land justice
- Mutual aid, environmental and community groups

The app promotes **searchable discovery**, **collaborative nexuses**, and **optional accounts** for saving data.

---

## 🧑‍💻 Core User Stories

| User                | I want to...                           | So that I can...                  |
| ------------------- | -------------------------------------- | --------------------------------- |
| Visitor             | Search for community groups near me    | See who’s active locally          |
| Visitor             | Filter results by topic                | Find groups relevant to my goals  |
| Visitor             | View potential connections or clusters | Understand shared efforts         |
| Logged-in user      | Save groups and searches               | Build a "nexus" for future action |
| Logged-in user      | Create and share nexuses               | Collaborate and invite others     |
| Contributor (later) | Submit a new group                     | Help improve the directory        |

---

## 🚱️ Application Structure

### 🔗 Pages (Routes)

| Route        | Purpose                                |
| ------------ | -------------------------------------- |
| `/`          | Homepage with search bar / intro       |
| `/explore`   | Search & map interface                 |
| `/group/:id` | Group profile view                     |
| `/nexus/:id` | Saved nexus view                       |
| `/account`   | User dashboard (saved groups, nexuses) |
| `/login`     | Auth (Supabase)                        |

### 📁 Folder Structure

```
/app
  /explore
  /group/[id]
  /nexus/[id]
  /account
/components
  /map
  /group
  /nexus
  /ui
/hooks
  useGroups.ts
  useCategories.ts
/lib
  supabaseClient.ts
  fetchGroups.ts
/store
  index.ts
  filtersSlice.ts
  groupsSlice.ts
  authSlice.ts
```

---

## 🌟 UI Features

### 🟢 Anonymous Users Can:

- Search by keyword, tag, location
- View groups on a map or list
- Explore nexuses (e.g. “Food Sovereignty in Norwich”)

### 🔒 Logged-in Users Can:

- Save searches
- Bookmark or “star” groups
- Create named nexuses (e.g. “Our Local Food Web”)

---

## 🔎 Search & Nexus UI Ideas

| Feature              | Suggestion                                    |
| -------------------- | --------------------------------------------- |
| 🔍 Search Bar        | Auto-suggest from tags, locations, categories |
| 🗺 Map & List View    | Toggleable, location-aware                    |
| 🧭 Filter Panel      | Checkboxes/tags by category, area radius      |
| 🧩 Nexus Builder     | “Add to nexus” button on group cards          |
| 💾 Save Prompt       | On attempt to save → prompt to log in         |
| 🧠 AI-Driven (Later) | Suggest similar groups or nexuses             |

---

## 📂 Data Model Summary

| Table              | Notes                          |
| ------------------ | ------------------------------ |
| `groups`           | Main group directory           |
| `categories`       | Controlled vocabulary          |
| `group_categories` | Many-to-many link table        |
| `users`            | Supabase auth users            |
| `nexuses`          | Saved collections (user-owned) |
| `nexus_groups`     | Link table: nexus ↔ groups     |

---

## 🛺 Development Roadmap

### ✅ Phase 1: Set Up & Basic Data

- [x] Next.js + Supabase + Tailwind
- [x] Supabase schema: groups, categories, group_categories
- [x] Fetch categories & groups

### 🚧 Phase 2: Display & Search

- [ ] Build group list & map display
- [ ] Add filter sidebar
- [ ] Display category badges
- [ ] Add search input and basic logic

### 🔒 Phase 3: Auth & User Accounts

- [ ] Set up Supabase Auth (email / magic link)
- [ ] Create `/account` page
- [ ] Protect saving features

### 🧩 Phase 4: Save & Build Nexuses

- [ ] Create `nexuses` table + form
- [ ] Allow groups to be added to a nexus
- [ ] View saved nexuses on map/list

### 🚀 Phase 5: Share, Contribute, Enhance

- [ ] Public shareable nexus pages
- [ ] Submit new group form
- [ ] Optional AI/group discovery tooling

---

## ✨ Coding Principles

- **Keep components reusable** (e.g. `GroupCard`, `TagFilter`)
- **Avoid duplication** — abstract Supabase calls into `lib/` or `hooks/`
- **Use Redux only for cross-cutting state** (filters, auth, map state)
- **Use TypeScript types from Supabase schema**
- **Document as you go** for future contributors (README, comments)

---

## 🧠 Future Feature Consideration: AI/Internet Group Discovery

We may explore an AI-assisted discovery layer that:

- Uses web search APIs (e.g. DuckDuckGo, Google Programmable Search, etc.)
- Uses GPT to extract relevant group information (name, location, category, contact)
- Suggests groups based on user queries or saved nexuses

This will require a separate backend function or cron-based crawler with moderation for accuracy and safety.

---

End of Plan
