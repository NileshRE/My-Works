"use server"

import { scrapURL} from "./scrapper";



export const scrapeWebsite = async(website:string)=>{
    if(!website) return;

    try {
        const scrapper = await scrapURL(website)
    } catch (error) {
        console.error(error)
    }
}