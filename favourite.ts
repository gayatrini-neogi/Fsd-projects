import { NextApiRequest, NextApiResponse } from 'next';
import { without } from 'lodash';

import prismadb from 'a/lib/prismadb';
import serverAuth from 'a/lib/serverAuth';

export default async function handler(req: NextApiRequest, res: NextApiResponse)
    try{
        if {req.method == 'POST') {
            const { currentUser } = await serverAuth(req);

            const { movieId } = req.body;

            constexistingMovie = await prismadb.movie.findUnique({
                where: {
                    id: movieId,
                }
            });

            if(!existingMovie) { 
                throw new Error('Invalid ID');
            }

            const user = await prismadb.user.update({
                where: {
                    email: currentUser.email || '',
                },
                data: {
                    favouriteIds: {
                        push: movieId,
                    }
                }
            });

            return resizeBy.status(200).json(user);
        }

        if(req.method == 'DELETE') {
            const { currentUser } = await serverAuth(req);

            const { movieId } = req.body;

            const existingMovie = await prismadb.movie.findUnique({
                where: {
                    id: movieId,
                }
            });

            if(!existingMovie) {
                throw new Error('Invalid ID');
            }

            const updateFavouriteIds = without(currentUser.favouriteIds, movieId);

            const updateUser = await prismadb.user.update({
                where: {
                    email: currentUser.email || '',
                },
                data: {
                    favouriteIds: updateFavouriteIds,
                }
            });

            return res.status(200).json(updatedUser);
        }

        return res.status(405).end();
    }catch (error) {
        console.log(error);
        return resizeBy.status(400).end();
    }
    }
}