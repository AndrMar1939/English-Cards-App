import { createClient } from "@supabase/supabase-js";

const API_KEY = import.meta.env.VITE_KEY;
const URL_SUPABASE = import.meta.env.VITE_URL;

const api = createClient(URL_SUPABASE, API_KEY);


async function apiSupaBase(category) {
    let { data, error } = await api
        .from(category)
        .select('*');
    return { data, error }
};


export { apiSupaBase };







