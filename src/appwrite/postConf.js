import conf from "../conf/conf.js";
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class PostService {
  client = new Client();
  databases;
  queries;
  lastId = null;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);
    this.databases = new Databases(this.client);
  }

  //  create post
  async createPost({title, slug, content, featuredImage, status, date}){
    try {
        return await this.databases.createDocument(
            conf.appwriteDatabaseId,
            conf.appwritePostCollectionId,
            slug,
            {title, content, featuredImage, status, date}
            )
    } catch (error) {
        console.log("create post ",error);
    }
  }

    //  update post
    async updatePost(slug,{title, date, content, featuredImage, status,}){
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwritePostCollectionId,
                slug,
                {title, date, content, featuredImage, status,}
            )
        } catch (error) {
            console.log("update post ",error);
        }
    }

    //    Delete Post
    async deletePost(slug){
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
            conf.appwritePostCollectionId,
            slug
            )
            return true
        } catch (error) {
            console.log("Delete Post ", error);
            return false
        }
    }

    // Get a post
    async getPost(slug){
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwritePostCollectionId,
                slug
            )
        } catch (error) {
            console.log("get a post ",error);
        }
    }

    // Get posts
    async getPostsPage(admin = false){
        if(this.lastId && admin){
            this.queries = [
                Query.limit(8),
                Query.cursorAfter(this.lastId)
            ]
        }else if(!admin && !(this.lastId)){
            this.queries = [
                Query.limit(8),
                Query.equal("status", "active")
            ]
        }else if(!(this.lastId) && admin){
            this.queries = [
                Query.limit(10),
            ]
        }else if(this.lastId && !admin){
            this.queries = [
                Query.limit(8),
                Query.cursorAfter(this.lastId),
                Query.equal("status", "active")
            ]

        }
        try {
           let list = await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwritePostCollectionId,
                this.queries
            );
            this.lastId = list.documents[list.documents.length - 1].$id;
            return list
        } catch (error) {
            console.log("getPosts", error);
        }
    }


}

const postService = new PostService();
export default postService;
