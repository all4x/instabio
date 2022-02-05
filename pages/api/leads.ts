import { NextApiRequest , NextApiResponse  } from "next";
import connect from '../../src/components/mongodb_connect'





export default  async (req: NextApiRequest , res: NextApiResponse ) => {
    
    if (req.method === "POST") {
    const {db} = await connect()
    const response = await db.collection('lead_whatsapp').insertOne({
        name: 'Alex',
        age: 19
    })
    res.status(200).json({message : "Nothing Error"})
    }   else {
            return res.status(400).json({message : "your request dont work"})
    }
}
