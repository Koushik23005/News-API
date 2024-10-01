
document.addEventListener('DOMContentLoaded', () => {
    const data = {
        status: "ok",
        totalResults: 4030,
        articles: [
            {
                source: { id: null, name: "Yahoo Entertainment" },
                author: "Josh Schafer",
                title: "A critical labor report meets a stock market at record highs: What to know this week",
                description: "The September jobs report highlights the coming trading week as investors search for clues on how rapidly the labor market is cooling.",
                url: "https://finance.yahoo.com/news/a-critical-labor-report-meets-a-stock-market-at-record-highs-what-to-know-this-week-113035514.html/",
                urlToImage: "https://s.yimg.com/cv/apiv2/social/images/yahoo_default_logo.png",
                publishedAt: "2024-09-29T11:30:35Z",
                content: "For the week, the S&amp;P 500 and Dow Jones Industrial Average (^DJI) were up about 0.7%..."
            },
            {
                source: { id: null, name: "Biztoc.com" },
                author: "marketbeat.com",
                title: "Silver Lake Advisory LLC Acquires New Position in Tesla, Inc. (NASDAQ:TSLA)",
                description: "Silver Lake Advisory LLC bought a new position in Tesla, Inc. in the 2nd quarter, according to the company in its most recent disclosure...",
                url: "https://biztoc.com/x/5f2638e60c125b7d",
                urlToImage: "https://biztoc.com/cdn/5f2638e60c125b7d_s.webp",
                publishedAt: "2024-09-29T11:28:47Z",
                content: "Silver Lake Advisory LLC bought a new position in Tesla, Inc..."
            },
            {
                source: { id: null, name: "NDTV News" },
                author: "Agence France-Presse",
                title: "Google Unveils $1 Billion Investment In Thailand's Digital Infrastructure",
                description: "Google plans to invest $1 billion to build digital infrastructure in Thailand, including a new data centre, the US tech giant has announced, saying the move would support 14,000 jobs in the kingdom.",
                url: "https://www.ndtv.com/world-news/google-unveils-1-billion-investment-in-thailands-digital-infrastructure-6689700",
                urlToImage: "https://c.ndtvimg.com/2024-08/sfbav33o_google-_625x300_29_August_24.jpg?im=FeatureCrop,algorithm=dnn,width=1200,height=738",
                publishedAt: "2024-10-01T05:18:16Z",
                content: "Bangkok, Thailand: Google plans to invest $1 billion to build digital infrastructure in Thailand, including a new data centre, the US tech giant has announced, saying the move would support 14,000 jobs..."
            },
            {
                source: { id: null, name: "Pilatesanytime.com" },
                author: null,
                title: "Dane Sorensen - Creating Magic Reformer (40 mins) - Level 2",
                description: "Get ready to create magic in this full-body Reformer workout with Dane Sorensen. This class features a spicy sequence of a variety of dynamic lunges, focusing on your abs, glutes, and triceps. Dane's cueing is clear, fun, and supportive, cheering you on every step of the way.",
                url: "https://www.pilatesanytime.com/class-view/5682/video/Pilates-Creating-Magic-Reformer-by-Dane-Sorensen",
                urlToImage: "https://images.pilatesanytime.com/2024/07/10/large_danesorenson8427TIMG31861-49283.jpg",
                publishedAt: "2024-10-01T05:00:00Z",
                content: "Read Full Transcript: Hey. What's up Pilates anytime? My name is Dane. And for today's extra special workout, we are going to create some magic..."
            },
            {
                source: { id: "business-insider", name: "Business Insider" },
                author: "Shubhangi Goel",
                title: "Amazon just won a partial victory against the FTC",
                description: "In a sealed order, a federal judge ruled the FTC can pursue some claims against the e-commerce giant.",
                url: "https://www.businessinsider.com/amazon-ftc-lawsuit-partially-dismissed-antitrust-competition-vendor-fulfillment-2024-10",
                urlToImage: "https://i.insider.com/66fb76ebf44bdb4cfa3865fa?width=1200&format=jpeg",
                publishedAt: "2024-10-01T04:51:35Z",
                content: "Amazon won a partial dismissal of a Federal Trade Commission antitrust lawsuit. The FTC alleges Amazon violated antitrust laws by illegally suppressing competition..."
            }
        ]
    };

    const fetchNewsBtn = document.getElementById('fetchBtn');
    const newsContainer = document.getElementById('newsContainer');
    let articles = data.articles;  // Use the articles directly from the data variable

    function renderRandomArticle() {
        newsContainer.innerHTML = ''; 
        if (articles.length > 0) {
            const randomIndex = Math.floor(Math.random() * articles.length);
            const article = articles[randomIndex];
            const articleElement = document.createElement('div');
            articleElement.className = 'news-item';
            articleElement.innerHTML = `
                <h2>${article.title}</h2>
                <p>${article.description}</p>
                <img src="${article.urlToImage}" alt="${article.title}">
                <p><a href="${article.url}" target="_blank">Read more</a></p>
            `;
            newsContainer.appendChild(articleElement);
        } else {
            newsContainer.innerHTML = '<p>No articles available.</p>';
        }
    }

    fetchNewsBtn.addEventListener('click', renderRandomArticle);  // Trigger renderRandomArticle on button click
});