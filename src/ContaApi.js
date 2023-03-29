const { MongoClient } = require('mongodb');

// Pode ignorar isso aqui, só tava fazendo testes com o MongoDB

export async function main() {

    const uri = "mongodb+srv://tlscarvalhos:Selat%40105@cluster0.iobxrym.mongodb.net/?retryWrites=true&w=majority";
    const client = new MongoClient(uri);
 
    try {
        
        await client.connect();
 
        
        await createListing(client,
            {
                email:"",
                senha:"",

            }
        )
 
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

main().catch(console.error);

export async function createListing(client, newListing){
    const result = await client.db("hborc-max").collection("contas").insertOne(newListing);
    console.log(`New listing created with the following id: ${result.insertedId}`);
}

