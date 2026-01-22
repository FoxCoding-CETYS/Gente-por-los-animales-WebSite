import { SuccessStoryCard } from "@/components/ui/success-story-card";
import { CustomButton } from "@/components/ui/custom-button";
import { SectionHeader } from "@/components/ui/section-header";
import { colorClasses } from "@/lib/colors";
import { type SanityDocument } from "next-sanity";
import Link from "next/link";
import { client } from "@/sanity/client";

const POSTS_QUERY = `*[
  _type == "historiasdeexito"
  && defined(slug.current)
]|order(publishedAt desc)[0...12]{_id, title, slug, publishedAt, body, image}`;

const options = { next: { revalidate: 30 } };

export async function SuccessStoriesSection() {
  const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options);

  return (
    <section
      className={`px-4 sm:px-6 py-12 sm:py-16 ${colorClasses.background.secondary}`}
    >
      <div className="max-w-4xl mx-auto">
        <SectionHeader title="HISTORIAS DE EXITO" className="mb-8 sm:mb-12" />

        <div className="grid md:grid-cols-1 gap-8 mb-8">
          {posts.map((post) => (
            <SuccessStoryCard
              key={post._id}
              image={post.image}
              title={post.title}
              story={post.body}
            />
          ))}
        </div>
        <div className="text-center">
          <CustomButton variant="outline" size="lg">
            <a href="https://www.facebook.com/hashtag/casosde%C3%A9xito">
              Leer más historias
            </a>
          </CustomButton>
        </div>
      </div>
    </section>
  );
}
