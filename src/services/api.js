import { createClient } from "@supabase/supabase-js";

const API_KEY = import.meta.env.VITE_KEY;
const URL = "https://abmwsybezudmxgnxcfgj.supabase.co";
const api = createClient(URL, API_KEY)


async function getApi(category) {
    let { data, error } = await api
        .from(category)
        .select('*');  
    return {data, error}
};


export {getApi}







