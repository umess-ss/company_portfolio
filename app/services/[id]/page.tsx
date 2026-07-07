import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { services } from "@/data/services";
import { site } from "@/data/site";
import { Cta } from "@/modules/cta";
import { Footer } from "@/modules/footer";
import { Navbar } from "@/modules/navbar";
import { ServiceDetail } from "@/modules/services";

// Next 16: `params` is a Promise and must be awaited.
interface ServicePageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { id } = await params;
  const service = services.find((s) => s.id === id);

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: service.name,
    description: service.description,
    openGraph: {
      title: service.name,
      description: service.description,
      url: `${site.url}/services/${service.id}`,
    },
  };
}

export function generateStaticParams() {
  return services.map((service) => ({
    id: service.id,
  }));
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { id } = await params;
  const service = services.find((s) => s.id === id);

  if (!service) {
    notFound();
  }

  const others = services.filter((s) => s.id !== service.id);

  return (
    <>
      <Navbar site={site} />
      <main className="pt-16">
        <ServiceDetail service={service} others={others} />
        <Cta />
      </main>
      <Footer site={site} />
    </>
  );
}
