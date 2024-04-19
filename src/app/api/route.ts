
import Parser from 'rss-parser';


export async function GET() {
    const parser = new Parser();
    const feedUrl = 'https://feeds.bbci.co.uk/news/rss.xml';
    // const feedUrl = 'https://www.dailytri.com/rss';
    const feed = await parser.parseURL(feedUrl);

	return Response.json({ feed });
}
