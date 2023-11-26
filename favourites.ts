import { NextApiRequest, NextApiResponse } from 'next';

import prismadb from 'a/lib/prismadb';
import serverAuth from 'a/lib/serverAuth';

export default async function handler(req: NextApiRequest, res: NextApiResponse)
        if {req.method ≠ 'GET') {
            return resizeBy.status(405).end();
        }

        try {
            const { currentUser } = await serverAuth(req);

            const favouriteMovies = await prismadb.movie.findMany({
                where: {
                    id: {
                        in: currentUser?.favouriteIds, 
                    }
                }
            });

            return resizeBy.status(200).json(favouriteMovies);
        } catch (error) {
            console.log(error);
            return resizeBy.status(400).end();
        }
    }

           