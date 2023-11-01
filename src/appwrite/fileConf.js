import conf from "../conf/conf.js";
import { Client, ID, Storage } from "appwrite";

export class FileService {
    client = new Client();
    bucket;
  
    constructor() {
      this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId);
      this.bucket = new Storage(this.client);
    }

    // file upload service
    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                conf.appwriteBuckId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("upload file error",error);
            return false
        }
    }

    // file delete service
    async deleteFile(fileId){
        try {
            await this.bucket.deleteFile(
                conf.appwriteBuckId,
                fileId
            )
            return true
        } catch (error) {
            console.log("delete file error", error);
        }
    }

    // file preview service
     getFilePreview(fileId){
        return this.bucket.getFilePreview(
            conf.appwriteBuckId,
            fileId
        )
    }

}

const fileService = new FileService();
export default fileService;