import useSWR from 'swr';
import fetcher from 'a/lib/Fetcher';

const useFavourites = () = {
    const { 
        data,
        error,
        isloading,
        mutate
    } = useSWR('/api/favourites', fetcher, {
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
    });

    return {
        data,
        error,
        isloading,
        mutate 
    }
    };

    export default useFavourites;