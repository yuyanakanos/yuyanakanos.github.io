type ChipKind = 'CW' | 'BS' | 'AI' | 'RO';

type FrontmatterValue = string | number | boolean;

type WorkFrontmatter = {
  title?: string;
  status?: string;
  visibility?: string;
  order?: number;
  category?: string;
  role?: string;
  summary?: string;
  public_link?: string;
  featured?: boolean;
};

export type WorkItem = {
  id: string;
  chips: ChipKind[];
  role: string;
  title: string;
  summary: string;
  href?: string;
};

type WorkEntry = Omit<WorkItem, 'id'> & {
  order: number;
  path: string;
};

const workFiles = import.meta.glob('../../../portfolio-cms/works/*.md', {
  eager: true,
  query: '?raw',
  import: 'default',
}) as Record<string, string>;

const categoryChip: Record<string, ChipKind> = {
  'client-work': 'CW',
  'brand-story': 'BS',
  'ai-implementation': 'AI',
  'research-output': 'RO',
};

const parseValue = (raw: string): FrontmatterValue => {
  const value = raw.trim();

  if (value === 'true') return true;
  if (value === 'false') return false;
  if (/^\d+$/.test(value)) return Number(value);

  return value.replace(/^["']|["']$/g, '');
};

const parseFrontmatter = (source: string): WorkFrontmatter => {
  const match = source.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return {};

  return match[1]
    .split('\n')
    .reduce<Record<string, FrontmatterValue>>((acc, line) => {
      const pair = line.match(/^([A-Za-z0-9_-]+):\s*(.*)$/);
      if (!pair) return acc;

      acc[pair[1]] = parseValue(pair[2]);
      return acc;
    }, {}) as WorkFrontmatter;
};

const toWorkEntry = ([path, source]: [string, string]): WorkEntry | null => {
  const data = parseFrontmatter(source);
  if (data.status !== 'published') return null;
  if (data.visibility !== 'public') return null;
  if (data.featured !== true) return null;
  if (!data.title || !data.summary) return null;

  const chip = data.category ? categoryChip[data.category] : undefined;

  return {
    order: Number(data.order ?? 999),
    path,
    chips: chip ? [chip] : ['CW'],
    role: data.role ?? '',
    title: data.title,
    summary: data.summary,
    href: data.public_link || undefined,
  };
};

export const works = Object.entries(workFiles)
  .map((entry) => toWorkEntry(entry))
  .filter((work): work is WorkEntry => work !== null)
  .sort((a, b) => a.order - b.order || a.path.localeCompare(b.path))
  .map(({ order, path, ...work }, index) => ({
    ...work,
    id: String(index + 1).padStart(3, '0'),
  }));
