# B.E.S.T. Pest Control Services website (bestpestkillerservice.com)

Static Astro site built from Jeremy's website starter (github.com/jashick/website-starter). Replaces the old
Weebly site at bestpestkillerservice.com. GitHub repo jashick/best-pest-control-services-website is the source
of truth (repo root = this project folder: site/ + _incoming/).
Black + B.E.S.T. yellow (#ffcc00, from the logo), Barlow / Barlow Condensed. Use the `local-seo-website` skill.

## NAP (from GBP, copied 2026-11-25) — lives only in src/data/site.ts
- B.E.S.T. Pest Control Services · 904A Monroe St, Sheboygan Falls, WI 53085 · (920) 698-9933
- Jeremy wrote "Monroe Street"; the GBP says "Monroe St", so the site uses "St".
- GBP place_id ChIJHcwR6tydBIgRK4BSeqpw-0U, cid 5042748085270380587. 5.0 stars, 185 reviews (Nov 25 2026).
- GBP hours Mon–Fri 8–5, Sat–Sun 10–3. GBP says "Identifies as women-owned".
- Mailing address (old site privacy page): PO Box 304, Plymouth, WI 53073 — not used as NAP.

## Business facts
- B.E.S.T. = Bug Extermination Services by Trish. Founded 2018 by Trish Yost; co-owner husband Jason (journeyman
  millwright background, WI Certified Contractor, certified Ridge-Guard installer = roof ridge-vent guard).
- Team (old About page): Trish (owner, bug expert), Jason (owner, rodent/wildlife expert), Collin (tech, journeyman
  carpenter), Tamara (tech), Jake (tech), Hailey (office manager). All listed with structural pesticide applicator
  license & certification.
- "More than 27 years in maintenance, construction and facilities management" (old homepage, exclusion section).
- Awards: Best Pest Company, 2024 Community's Choice Awards, Best of Fond du Lac County (GBP "1st place" graphic);
  2025 Community's Choice badge on old site (placement unknown); Runner-up Best of Sheboygan County (year unknown).
- Rodent and wildlife: "An inspection fee applies; we'll go over the cost when you call." (old site)
- Email support@akillerservice.com (Jeremy). Customer portal portal.gorilladesk.com/bestpestkillerservice.
- Quote form = their existing JotForm (241428861171052) until a GHL form exists.
- Testimonial on homepage ("Marissa, local homeowner") is from the client's own old site.

## Category research (2026-11-25)
- B.E.S.T. GBP: primary Pest control service; secondary Animal control service.
- Map pack competitors (Sheboygan): Even's Pest Control = Pest control service only; Ewert Pest and Wildlife = Pest
  control + Gutter cleaning + Insulation contractor + Wildlife rescue service; Smithereen = Pest control + Animal
  control + Bird control. Other nearby: Triumph (Plymouth), Advanced Wildlife (Slinger), Midwest Bug Busters (FdL).
- Maps tests were not decisive (small market, same few companies show for every query). Pages follow Jeremy's
  service list.

## Structure map
Primary category: Pest control service → Home (/), "Pest Control in Sheboygan Falls, WI" (GBP city only; Jeremy 2026-11-25: one target, don't split)
  Service pages also target Sheboygan Falls in title + H1; other towns only on their area pages
  Service: /general-pest-control/ (hub)
    → /ant-control/ /cockroach-control/ /bed-bug-treatment/ /flea-control/ /stinging-insect-removal/
  Service: /rodent-control/
    → /rodent-exclusion/
Secondary: Animal control service → /wildlife-removal/
Areas (Jeremy's list) → /service-areas/<slug>/: sheboygan, plymouth, kohler, kiel, fond-du-lac, manitowoc, chilton,
  port-washington, saukville (9 service sections each). Full county/town list on /service-areas/.
Other: /about/ /services/ /service-areas/ /faq/ /get-a-quote/ /privacy/ /thank-you/

## Redirects (public/.htaccess): every URL in the old Weebly sitemap
Mosquito, springtail, pantry pest, beetle and small fly pages → /general-pest-control/ (no own pages; Jeremy's list
didn't include mosquito — ask if they still sell mosquito service). Blog → /general-pest-control/ (rodent post →
/rodent-exclusion/). NOTE: .htaccess only works once hosting moves from Weebly to SiteGround.

## Photos (public/images/photos, mapping in _incoming/photos.csv)
- REAL, used: team/truck/owner photos and job photos from the old site (_incoming/old-site/, sources.csv) and the
  owner's GBP uploads (_incoming/gbp/: hornet nests, crawlspace, foundation sealing, truck, Trish & Jason).
- Not used, likely stock: every insect/rodent tile and banner on the old site, attic, family room, restaurant,
  kitchen, warehouse, family-in-yard images, mosquito banners.
- Logo: Jeremy sent the JPG (_incoming/logo.jpg). Made transparent black logo.png and yellow logo-white.png (footer);
  favicon = hornet "B" on yellow. Ask for the original vector.
- Wanted: real photos of a tech at work inside a home, a bed bug job, a wildlife exclusion (ridge vent, one-way door),
  ant/roach treatment. Several service pages use team photos as their lead image for now.

## Unconfirmed claims (confirm with Trish before launch)
- Weekend hours: GBP Sat–Sun 10–3; old site said weekends are for urgent calls only.
- Flea control: no old-site page; methods described generally (treat home, prep, work with vet).
- Bed bug treatment method (not stated); "follow-up to confirm" wording.
- Honey bees: copy says "call and we'll talk options" (no promise of removal/relocation). GBP photo shows bee suit + hive.
- "Woman-owned" chip (from GBP attribute). "Free quote" CTA vs inspection fee for rodents/wildlife.
- "Wisconsin" structural pesticide applicator certification (old site didn't say which state, assumed WI DATCP).
- Area copy: drive times approximate; neighborhoods named are general (North Side, Woodlake, Lakeside Park, etc.).
- Bat copy cites WI DNR no-exclusion window June 1–July 31 (DNR bat FAQ; older releases said Aug 15).
- Commercial: apartments, restaurants, bars, industrial (old site) — no dedicated commercial page yet.

## Commands (run from this folder)
- ./build.sh --preview   build + refresh ../preview/ (needs rsync; in the cloud just run `npx astro build`)
- python3 scripts/check.py <dist path> [--screens]
- ./publish.sh (staging) / ./publish.sh --live (only when approved)

## Log
- 2026-11-25: Homepage + service page titles/H1s now target Sheboygan Falls only (was Sheboygan Falls & Sheboygan County).
- 2026-11-25: Built in a cloud session from the starter (Mac ~/Projects access was declined, so the starter came
  from GitHub). 27 pages. check.py 0 errors / 0 warnings. Screenshots 1280/390 reviewed. Pushed to GitHub.

## Open items
- Hosting: move off Weebly to SiteGround (or preview.catapultlocal.com first); deploy.config.json + FTP creds
- GHL form → site.ts ghl.quoteForm (redirect to /thank-you/); GA4 ID
- WI DATCP business license number for footer/schema (site.license)
- GBP alignment (skill section 12): primary Pest control service (already), secondary Animal control service
  (already); add services matching page names; consider Bird control? only if they do it.
