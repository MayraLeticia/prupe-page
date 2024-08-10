export default async function handler(req, res) {
    const accessToken = process.env.INSTAGRAM_ACCESS_TOKEN;
    const userId = process.env.INSTAGRAM_USER_ID;
  
    try {
      const response = await fetch(`https://graph.instagram.com/${userId}/media?fields=id,caption,media_type,media_url,permalink&limit=50&access_token=${accessToken}`, {
        method: 'GET',
      });
      const data = await response.json();
  
      if (response.ok) {
        const photos = data.data.filter(item => item.media_type === 'IMAGE').slice(0, 9);
        res.status(200).json(photos);
      } else {
        res.status(response.status).json({ error: data.error });
      }
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
  