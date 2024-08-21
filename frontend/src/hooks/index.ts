import axios from 'axios';
import { useEffect, useState } from "react";
import { BACKEND_URL } from '../config';

export interface Blog {
    "content": string,
    "title": string,
    "id": number,
    "author": {
        "name": string
    }
}

export const useBlog = ({ id }: { id: string }) => {

    const [loading, setLoading] = useState(true);
    const [blog, setBlog] = useState<Blog>();
    const [error, setError] = useState<string | null>(null); // Add error state

    useEffect(() => {
        axios.get(`${BACKEND_URL}/api/v1/blog/${id}`, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        })
        .then(response => {
            setBlog(response.data.blog);
            setLoading(false);
        })
        .catch(err => {
            console.error(err);
            setError("Failed to fetch blogs."); // Set error message
            setLoading(false);
        });
    }, [id]);

    return {
        loading,
        blog,
        error  // Return error state
    };
}

export const useBlogs = () => {
    const [loading, setLoading] = useState(true);
    const [blogs, setBlogs] = useState<Blog[]>([]);
    const [error, setError] = useState<string | null>(null); // Add error state

    useEffect(() => {
        axios.get(`${BACKEND_URL}/api/v1/blog/bulk`, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        })
        .then(response => {
            setBlogs(response.data.blogs);
            setLoading(false);
        })
        .catch(err => {
            console.error(err);
            setError("Failed to fetch blogs."); // Set error message
            setLoading(false);
        });
    }, []);

    return {
        loading,
        blogs,
        error  // Return error state
    };
};


