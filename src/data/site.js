// Single source of truth for links and content.
// Header, footer and section components all read from here so they
// cannot drift apart the way the old hardcoded lists did.

export const PROFILE = {
  name: 'Matias Ahrensdorf',
  title: 'Data & Software Engineer',
  location: 'New York, NY',
  email: 'matiasahrensdorf@gmail.com',
  phone: '+17045752724',
};

// Socials.jsx still maps an 'x' id to an icon, so adding X back is a one-line
// entry here once there is a handle to point at.
export const SOCIALS = [
  { id: 'linkedin', label: 'LinkedIn', url: 'https://www.linkedin.com/in/matias-ahrensdorf-5353b4152' },
  { id: 'github',   label: 'GitHub',   url: 'https://github.com/Titoxox97' },
  { id: 'instagram',label: 'Instagram',url: 'https://www.instagram.com/mahrens3/' },
  { id: 'facebook', label: 'Facebook', url: 'https://m.facebook.com/matias.ahrensdorf.1' },
];

export const SECTIONS = [
  { id: 'home',       label: 'Home' },
  { id: 'about',      label: 'About' },
  { id: 'experience', label: 'Skills' },
  { id: 'work',       label: 'Work' },
  { id: 'resume',     label: 'Resume' },
  { id: 'contact',    label: 'Contact' },
];

export const ARTICLES = [
  {
    title: "Bolivia's Chance to Rejoin the World",
    outlet: 'The Wall Street Journal',
    beat: 'Latin America',
    featured: true,
    url: 'https://www.wsj.com/opinion/bolivias-chance-to-rejoin-the-world-73b95a03',
    date: '',
  },
  {
    title: 'Bolivia Is No Democracy',
    outlet: 'City Journal',
    beat: 'Latin America',
    url: 'https://www.city-journal.org/article/bolivia-is-no-democracy',
    date: '',
  },
  {
    title: 'Bolivia: Insurrection, Economic Grievances, and Ideology',
    outlet: 'Washington Examiner',
    beat: 'Latin America',
    url: 'https://www.washingtonexaminer.com/op-eds/4596930/bolivia-insurrection-economic-grievances-ideology/',
    date: '',
  },
  {
    title: 'Terror to the South: Hezbollah in Latin America',
    outlet: 'RealClearDefense',
    beat: 'Latin America',
    url: 'https://www.realcleardefense.com/articles/2024/11/22/terror_to_the_south_hezbollah_in_latin_america_1073998.html',
    date: 'November 2024',
  },
  {
    title: 'The Buy Now, Pay Later Time Bomb',
    outlet: 'Compact',
    beat: 'Finance',
    url: 'https://www.compactmag.com/article/the-buy-now-pay-later-time-bomb/',
    date: '',
  },
  {
    title: "A Case For and Against Nippon's U.S. Steel Acquisition",
    outlet: 'RealClearMarkets',
    beat: 'Finance',
    url: 'https://www.realclearmarkets.com/articles/2025/01/30/a_case_for_and_against_nippons_us_steel_acquisition_1087757.html',
    date: 'January 2025',
  },
  {
    title: 'Inherited Wealth, the Estate Tax, and the Economy',
    outlet: 'City Journal',
    beat: 'Finance',
    url: 'https://www.city-journal.org/article/inherit-wealth-estate-tax-economy',
    date: '',
  },
  {
    title: 'Eliminate the Hidden Inflation Tax',
    outlet: 'Manhattan Institute (report)',
    beat: 'Finance',
    url: 'https://manhattan.institute/article/eliminate-the-hidden-inflation-tax-why-new-york-state-should-index-taxes-to-inflation',
    date: '',
  },
  {
    title: "Tehran's Terror Threats",
    outlet: 'City Journal',
    beat: 'Policy',
    url: 'https://www.city-journal.org/article/tehran-iran-terror-threats-attacks-hit-teams-trump',
    date: '',
  },
  {
    title: 'A New Hope for K-12 Education',
    outlet: 'City Journal',
    beat: 'Policy',
    url: 'https://www.city-journal.org/article/a-new-hope-for-k-12-education',
    date: '',
  },
  {
    title: 'Game Over',
    outlet: 'RealClearBooks',
    beat: 'Policy',
    url: 'https://www.realclearbooks.com/articles/2025/03/25/game_over_1099345.html',
    date: 'March 2025',
  },
];

export const PROJECTS = [
  {
    title: 'Public Disorder Data Consolidation',
    org: 'Manhattan Institute',
    blurb:
      'Consolidated 311 service requests from fifteen of the twenty-five largest U.S. cities into a single schema, and wrote the classification logic defining which call types count as disorder. No two cities publish the same format, so most of the work was reconciliation.',
    figures: ['3,438,539 records', '15 cities'],
    tech: ['Python', 'pandas', 'Excel'],
  },
  {
    title: 'Judicial Leniency Model',
    org: 'Manhattan Institute',
    blurb:
      'Estimated judge-specific leniency across New York City arraignments using principal component analysis on outcomes, then residualized regression to separate a judge’s own behavior from the mix of cases they were assigned.',
    figures: ['454,355 records', '2019-2022'],
    tech: ['Python', 'scikit-learn', 'PCA'],
  },
  {
    title: 'Economics of Hip-Hop',
    org: 'Research support, TED talk',
    blurb:
      'Built the radio exposure measure and ran fixed-effects panel regressions for Roland Fryer’s TED talk. Re-specified the study’s key exposure variable so coefficients were comparable across cohorts, and rebuilt the estimation code into one parameterized function with built-in robustness checks.',
    figures: ['74,353 observations', '3,098 counties'],
    tech: ['linearmodels', 'pyfixest', 'scikit-learn'],
  },
  {
    title: 'LLM Data Integration Layer',
    org: 'Manhattan Institute',
    blurb:
      'Built MCP server integrations connecting large language models to Snowflake and Airtable, giving non-technical staff conversational access to organizational data instead of queuing manual pull requests.',
    figures: ['Production'],
    tech: ['MCP', 'Snowflake', 'Airtable API', 'Python'],
  },
  {
    title: 'Editorial Pipeline Automation',
    org: 'City Journal',
    blurb:
      'A draft’s status in a SharePoint folder now syncs itself into an Airtable base tracking author, subject, filing and schedule dates, edit stage and assigned editor. Designed under a hard limit of three workflow changes for editors, because adoption fails otherwise.',
    figures: ['Zero manual tracking'],
    tech: ['Airtable', 'Zapier', 'SharePoint'],
  },
  {
    title: 'SAMHSA Treatment Facility Database',
    org: 'Manhattan Institute',
    blurb:
      'Decoded and consolidated eight years of federal treatment facility survey data into one queryable master file, then mapped treatment coverage geospatially. Each annual release ships a different shape and a different coding scheme.',
    figures: ['~100,000 records', '16,000+ variables'],
    tech: ['Python', 'pandas', 'geopandas'],
  },
  {
    title: 'MTA Public Records Action',
    org: 'Manhattan Institute',
    blurb:
      'Filed and pursued a Freedom of Information Law request for transit data the agency would not release. The action ran nearly two years through denial and appeal, escalated to outside counsel, and ended in full production of the dataset.',
    figures: ['~2 years', 'Fully granted'],
    tech: ['FOIL', 'Public records'],
  },
];

export const SKILLS = [
  {
    title: 'Languages',
    items: ['Python', 'SQL', 'R', 'JavaScript'],
  },
  {
    title: 'Data & Modeling',
    items: ['pandas', 'NumPy', 'scikit-learn', 'statsmodels', 'pyfixest', 'geopandas'],
  },
  {
    title: 'Platform',
    items: ['Snowflake', 'Tableau', 'Reverse ETL', 'MCP / LLM integration', 'Airtable', 'AWS'],
  },
  {
    title: 'Web',
    items: ['React', 'Node.js', 'MongoDB', 'WordPress'],
  },
  {
    title: 'Methods',
    items: [
      'Panel regression',
      'Fixed effects',
      'Clustered standard errors',
      'PCA',
      'Random forests',
      'Geospatial analysis',
    ],
  },
  {
    title: 'Research & Domain',
    items: [
      'FOIA / FOIL research',
      'Financial reporting',
      'Forecasting',
      'Technical writing',
      'Spanish (bilingual)',
    ],
  },
];
