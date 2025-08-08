import Link from "next/link";

export default function Params() {
    return (
        <>
            <h1>Params Page</h1>;
            <div>
                <Link href="/blog">Blog</Link>
                <Link href="/products">Products</Link>
                <Link href="/articles/breaking-news-123?lang=en">Read in English</Link>
                <Link href="/articles/breaking-news-123?lang=fr">Read in French</Link>
            </div>
        </>
    )
}