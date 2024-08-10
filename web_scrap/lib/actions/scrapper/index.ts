import axios from "axios";
import * as cheerio from 'cheerio';

export const scrapURL = async (url:string) =>{
    if(!url) return;

    const username = String(process.env.BRIGHT_DATA_USERNAME)
    const password = String(process.env.BRIGHT_DATA_PASSWORD)
    const port = 22225;
    const sessionId = (1000000 * Math.random()) | 0;

    const options = {
        auth: {
            username: `${username}-session-${sessionId}`,
            password,
        },
        host: 'brd.superproxy.io',
        port,
        rejectUnauthorized: false
    }

    try {
        const response = await axios.get(url, options);
        const $ = cheerio.load(response.data);

        const title = $('#productTitle').text().trim();
    } catch (error:any) {
        throw new Error(error.message);
    }
}


