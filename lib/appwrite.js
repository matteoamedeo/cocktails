import {
    Account,
    Avatars,
    Client,
    Databases, 
    ID,
    Query,
    Storage,
} from "react-native-appwrite";

export const config = {
    endpoint: 'https://cloud.appwrite.io/v1',
    platform: 'com.mamedeo.cocktails',
    projectId: '66ba35c0001219f495ec',
    databaseId: '66ba36f60010ee31f3e1',
    userCollections: '66ba370e003d53368815',
    cocktailsCollections: '66ba3738000072d06f46',
    storageId: '66ba3a6d003e04176aa6'
}

const client = new Client();

client
  .setEndpoint(config.endpoint)
  .setProject(config.projectId)
  .setPlatform(config.platform);

const account = new Account(client);
const storage = new Storage(client);
const avatars = new Avatars(client);
const databases = new Databases(client);

  // Get all cocktails
export async function getAllPosts() {
    try {
      const posts = await databases.listDocuments(
        appwriteConfig.databaseId,
        appwriteConfig.videoCollectionId
      );
  
      return posts.documents;
    } catch (error) {
      throw new Error(error);
    }
  }