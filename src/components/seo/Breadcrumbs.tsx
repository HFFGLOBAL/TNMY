import Link from 'next/link';
import { JsonLd } from './JsonLd';
import { createBreadcrumbSchema } from '@/lib/constants/schema-templates';
import { BUSINESS_INFO } from '@/lib/constants/business-info';

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: 'Home', url: BUSINESS_INFO.url },
    ...items.map((item) => ({
      name: item.label,
      url: new URL(item.href, BUSINESS_INFO.url).toString(),
    })),
  ]);

  return (
    <nav aria-label="Breadcrumb" className="py-4">
      <JsonLd data={breadcrumbSchema} />
      <ol
        itemScope
        itemType="https://schema.org/BreadcrumbList"
        className="flex items-center flex-wrap space-x-2 text-sm text-gray-600"
      >
        {/* Home */}
        <li
          itemProp="itemListElement"
          itemScope
          itemType="https://schema.org/ListItem"
        >
          <Link
            href="/"
            itemProp="item"
            className="hover:text-[#e85c2d] transition-colors"
          >
            <span itemProp="name">Home</span>
          </Link>
          <meta itemProp="position" content="1" />
        </li>
        
        {items.map((item, index) => (
          <li
            key={item.href}
            itemProp="itemListElement"
            itemScope
            itemType="https://schema.org/ListItem"
            className="flex items-center"
          >
            <span className="mx-2 text-gray-400">/</span>
            {index === items.length - 1 ? (
              <span
                itemProp="name"
                className="text-gray-900 font-medium"
              >
                {item.label}
              </span>
            ) : (
              <Link
                href={item.href}
                itemProp="item"
                className="hover:text-[#e85c2d] transition-colors"
              >
                <span itemProp="name">{item.label}</span>
              </Link>
            )}
            <meta itemProp="position" content={String(index + 2)} />
          </li>
        ))}
      </ol>
    </nav>
  );
}
