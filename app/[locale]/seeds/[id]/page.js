import {Single} from '../../../../comps/Single/Single'
//~ import { revalidateTag } from 'next/cache

export const dynamicParams = true

// Seed IDs are not available when CI builds without the live API.
// With dynamicParams=true, unlisted IDs still render on demand.
export async function generateStaticParams() {
  return []
}

async function getSeed(source) {
   const seed = await fetch(
    `https://seed-shop-back-78049b8c30bb.herokuapp.com/seeds/${source}`, 
                            { next: { tags: ['seed'] }})
                                            .then((res) => res.json())
      //~ revalidateTag('seed')
   return seed

       }
 
export default async function Seed({params}){

	const seed = await getSeed(params.id)
	
	return <Single unit={seed}/>
	}
