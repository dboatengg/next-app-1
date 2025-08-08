import Link from "next/link";

export default async function ArticleNews({ params, searchParams }: { params: Promise<{ articleId: string }>, searchParams: Promise<{ color?: string }> }) {

    const { articleId } = await params;
    const { color } = await searchParams;

    const bgColor = color || 'white';

    return (
        <main style={{ backgroundColor: bgColor }}>
            <h1>Article News Page</h1>
            <p>Article ID: {articleId}</p>
            <p>Background Color: {bgColor}</p>

            <h2>Try changing colors</h2>
            <Link href={`/article/${articleId}?color=red`}>Red</Link>
            <Link href={`/article/${articleId}?color=blue`}>Blue</Link>
            <Link href={`/article/${articleId}?color=green`}>Green</Link>
        </main>
    )
}