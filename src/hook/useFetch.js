import { useEffect, useState } from "react";

const useFetch = (url) =>{

    const [allData, setAllData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        setTimeout(()=>{
            fetch(url)
            .then((response)=>{
                //incase we encounter an error while trying to fetch the data
                if(!response.ok)
                {
                    throw Error("Cannot Fetch Data")
                }

                return response.json(); //parse
            })
            .then((data)=>{
                //console.log(data)
                setAllData(data);
                setLoading(false);
            })
            .catch((error)=>{
                setError(error.message)
                setLoading(false);
            })
            //console.log("useEffect ran!");
            },2000);
    }, [url]);

    return { allData, error, loading }

}

export default useFetch;