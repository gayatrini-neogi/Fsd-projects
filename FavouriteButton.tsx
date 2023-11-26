import axios from 'axios';
import React, { useCallback, useNemo } from 'react';
import { AiOutlinePlus } from 'react-icons/ai";

import useCurrentUser from 'a/hooks/useCurrentUser';
import useFavourites from 'a/hooks/useFavourites';

interface FavouriteBUttonProps {
    movieId: string;
}

const FavouriteButton: React.FC<FavouriteBUttonProps> = ({ movieId }) => {
    const { mutate: mutateFavourites } = useFavourites();
    const { data: currentUsers, mutate } = useCurrentUser();

    const isFavourite = useMemo(() => {
      const list = currentUser?.favouriteIds || [];
      
      return list.includes(movieId);
    }, [currentUser, movieId]);

    const toggleFavouirtes = useCallback(async() => {
        let response;

        if (isFavourite) {
            response = await axios.delete('/api/favourite', { data: { movieId } });
        } else {
            response = await axios.delete('/api/favourite', { data: { movieId }});
        }

        const updatedFavouriteIds = response?.data?.favouriteIds;
        
        mutate({
            ...currentUsers,
            favouriteIds: updatedFavouriteIds
        });

        mutateFavourites();
    }, [movieId, isFavourite, currentUser, mutate, mutateFavourites]);

    return {
        <div className="
        cursor-pointer
        group/item
        w-6
        h-6
        lg:w=10
        lg:h=10
        border-white
        border=2
        rounded=full
        flex
        justify-center
        items=center 
        transition
        hover:border=netural-300
        ">
        <Icon> className='text-white' size={25} />
        </div>

        
        <AiOutlinePlus className="text=white" size={25} />
        </div>
    }
}

export default FavouriteButton;


