const https = require('https');

const urls = [
  "https://play.google.com/store/apps/details?id=com.M.R.Studio.com.unity.SatisFix.mobile2D&hl=en_US",
  "https://play.google.com/store/apps/details?id=com.M.R.Studio.com.unity.ShadowBladeDarkQuest.mobile2D&hl=en_US",
  "https://play.google.com/store/apps/details?id=com.M.R.Studio.FindTheCat&hl=en_US",
  "https://play.google.com/store/apps/details?id=com.M.R.Studio.com.unity.MyCozyRoom.mobile2D&hl=en_US",
  "https://play.google.com/store/apps/details?id=com.M.R.studio.com.unity.HiddenObjectFindTinyClues.mobile2D&hl=en_US",
  "https://play.google.com/store/apps/details?id=com.M.R.Studio.com.unity.template.mobile2D&hl=en_US"
];

async function fetchPlayStoreData(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          // Extract title
          const titleMatch = data.match(/<h1 itemprop="name"><span>(.*?)<\/span><\/h1>/) ||
                              data.match(/<h1\s+class="[^"]*"\s+itemprop="name">\s*<span>(.*?)<\/span>\s*<\/h1>/);
          const title = titleMatch ? titleMatch[1] : "Unknown Title";

          // Extract screenshots (usually in img tags with specific classes or srcset)
          // Play store uses a lot of dynamic classes, let's try to grab the first few images that look like screenshots
          // often they have ds:4 or similar data attributes, or we can look for "BHiQyd" or just large images.
          const imgMatches = [...data.matchAll(/<img[^>]+src="([^">]+)"[^>]*>/g)];
          const images = imgMatches.map(m => m[1]).filter(src => src.startsWith('https://play-lh.googleusercontent.com/'));
          
          // heuristic: icons usually have =w240-h480 or similar, screenshots have =w..., let's just grab Unique
          const uniqueImages = [...new Set(images)];
          
          resolve({
            url,
            title,
            images: uniqueImages.slice(0, 5) // first 5 images are likely icon + screenshots
          });
        } catch (e) {
          resolve({ url, error: e.message });
        }
      });
    }).on('error', reject);
  });
}

(async () => {
  const results = [];
  for (const u of urls) {
    const data = await fetchPlayStoreData(u);
    results.push(data);
  }
  console.log(JSON.stringify(results, null, 2));
})();
