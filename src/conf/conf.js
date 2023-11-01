const conf = {
    appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
    appwriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appwriteDatabaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appwritePostCollectionId: String(import.meta.env.VITE_APPWRITE_POSTS_COLLECTION_ID),
    appwriteHomeCollectionId: String(import.meta.env.VITE_APPWRITE_HOMEPOSTS_COLLECTION_ID),
    appwriteBuckId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID)
}


export default conf