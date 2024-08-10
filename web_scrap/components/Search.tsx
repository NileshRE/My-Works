"use client"

import { scrapeWebsite } from '@/lib/actions';
import React, { ChangeEvent, FormEvent, useState } from 'react'

const Search = () => {
    const [urlInput, setUrlInput] = useState<string>("");
    const handleSubmit = async(e:FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        try {
            const urlResult = await scrapeWebsite(urlInput);
            setUrlInput("");

        } catch (error) {
            
        }
    }
  return (
<div className="m-12">
    <form className="grid" onSubmit={handleSubmit}>
        <label htmlFor="website" className="my-1 text-sm">Enter Website for Scrapping</label>
        <input id="website" type="text" placeholder="Enter website..." value={urlInput} 
            onChange={(e:ChangeEvent<HTMLInputElement>)=>setUrlInput(e.target.value)}
            className="w-3/6 p-2 bg-transparent border rounded-md text-white" />
        <button type="submit" className="p-2 rounded-md border text-white bg-green-400 w-1/6 my-2">Submit</button>
      </form>
   </div>  )
}

export default Search