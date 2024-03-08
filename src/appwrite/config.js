import env from "../env/env";

import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service {
    client = new Client();
    databases;
    bucket;

    constructor() {
        this.client
            .setEndpoint(env.appwriteUrl)
            .setProject(env.projectId);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost({title, slug, content, featuredImage, status, userId}) {
        try {
            return await this.databases.createDocument(
                env.databaseId,
                env.collectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId
                }
            )
        } catch (error) {
            console.log("Appwrite config :: createPost :: error", error)
        }
    }

    async updatePost(slug, {title, content, featuredImage, status}) {
        try {
            this.databases.updateDocument(
                env.databaseId,
                env.collectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status
                }
            )
        } catch (error) {
            console.log("Appwrite config :: updatePost :: error", error);
        }
    }

    async deletePost(slug) {
        try {
            this.databases.deleteDocument(
                env.databaseId,
                env.collectionId,
                slug
            )
        } catch (error) {
            console.log("Appwrite config :: deletePost :: error", error)
        }
    }

    async getPost(slug) {
        try {
            return await this.databases.getDocument(
                env.databaseId,
                env.collectionId,
                slug
            )
        } catch (error) {
            console.log("Appwrite config :: getPost :: error", error);
            return false
        }
    }

    async getPosts(queries = [Query.equal("status", "active")]) {
        try {
            return await this.databases.listDocuments(
                env.databaseId,
                env.collectionId,
                queries
            )
        } catch (error) {
            console.log("Appwrite config :: getPosts :: error", error);
            return false;
        }
    }

    // File upload
    async uploadFile(file) {
        try {
            return await this.bucket.createFile(
                env.bucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("Appwrite config :: uploadFile :: error", error)
            return false;
        }
    }

    async deleteFile(fileId) {
        try {
            return await this.bucket.deleteFile(
                env.bucketId,
                fileId
            )
        } catch (error) {
            console.log("Appwrite config :: deleteFile :: error", error);
            return false;
        }
    }

    // Not async bcz response is very fast and it return url of the image
    getFilePreview(fileId) {
        return this.bucket.getFilePreview(
            env.bucketId,
            fileId
        )
    }
};

const service = new Service();
export default service;