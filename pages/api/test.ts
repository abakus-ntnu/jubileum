// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

/*
This, and all other files in the api folder are treated as API routes instead of React pages.
This API route (pages/api/test.ts) can be accessed on http://localhost:3000/api/test.
The api folder is where you are to put all your endpoints
*/

import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  event: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ event: 'Abakus 45års jubileum' })
}
