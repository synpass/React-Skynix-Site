import fetch from 'isomorphic-fetch';
import axios  from 'axios';
import {cmsHost} from '../../domain.config'

const API           =  `${cmsHost}/wp-json`;
const SLUG1         = '/wp/v2';
const SLUG2         = '/skynix/v1';
const API_POSTS     = API + SLUG1 +'/posts';
const API_USERS     = API + SLUG1 +'/users';
const API_MEDIA     = API + SLUG1 +'/media';
const API_IN_TOUCH  = API + SLUG2 +'/contact';
const postperpage = 9;

const Service = {

    get(api) {
        return fetch(api)
            .then(res => res.json())
            .then(
                (result) => {
                    return {
                        success: true,
                        data: result,
                    }
                },
                (error) => {
                    return {
                        success: false,
                        error
                    }
                }
            )
    },

    async postComment(postId, data) {
       try {
            const res = await axios.post(`${API}${SLUG1}/comments`, {
                author_email: data.email,
                author_name: data.name,
                content: data.content,
                date: new Date(),
                post: postId
            })

            return res;
        } catch (error) {
            return error
        }
    },

    async loadComments(postId) {
        const response = await axios.get(`${API}${SLUG1}/comments?post=${postId}`);
        return response;
    },

    getFilteredPosts(page, filters) {
        if (!filters || (!filters.tags && !filters.categories) ) {
            return Service.getCatalogByPage(page)
        }
        let totals;
        let url = `${API_POSTS}?per_page=${postperpage}&page=${page}`
        if (filters.tags) url += `&tags=${filters.tags}`
        if (filters.categories) url += `&categories=${filters.categories}`

        return axios(url)
            .then(res => {
                totals = res.headers['x-wp-totalpages'];
                return res
            }).then(
                (result) => {
                    if(result.message) {
                        return {
                            success: false,
                            error: result.message
                        }
                    } else {
                        return {
                            success: true,
                            data: result.data,
                            totals
                        }
                    }
                },
                (error) => {
                    return {
                        success: false,
                        error
                    }
                }
            );
    },

    getCatalogByPage(page) {
        let totals;

        return fetch(API_POSTS + '?per_page=' + postperpage + '&page=' + page)
            .then(res => {
                totals = res.headers.get('x-wp-totalpages');
                return res.json()
            }).then(
                (result) => {
                    if(result.message) {
                        return {
                            success: false,
                            error: result.message
                        }
                    } else {
                        return {
                            success: true,
                            data: result,
                            totals
                        }
                    }
                },
                (error) => {
                    return {
                        success: false,
                        error
                    }
                }
            );
    },
    getArticleBySlug(slug) {
        let totals;
        return fetch(API_POSTS + '?slug=' + slug)
        .then(res => {
            totals = res.headers.get('x-wp-totalpages');
            return res.json()
        }).then(
            (result) => {
                if(result.message) {
                    return {
                        success: false,
                        error: result.message
                    }
                } else {
                    return {
                        success: true,
                        data: result,
                        totals
                    }
                }
            },
            (error) => {
                return {
                    success: false,
                    error
                }
            }
        );
    },

    getAuthor(id) {
        return this.get(API_USERS + '/' + id).then(result => result);
    },

    getPostMedia(id) {
        return this.get(API_MEDIA + '/' + id).then(result => result);
    },
    getInTouch(data, f, callbackThis){
        axios.post(API_IN_TOUCH, data).then(response =>{
            f.call(callbackThis, response);
            return false;
        }).catch(err =>{
            f.call(callbackThis, err);
            return false;
        });
    },

    async getTags () {
        const tags = await axios.get(`${API}${SLUG1}/tags?per_page=100&hide_empty=true`)
        return tags.data

    },
    async getCategories () {
        const categories = await axios.get(`${API}${SLUG1}/categories?per_page=100&hide_empty=true`)
        return categories.data
    },

    getAllPortfolioProjects (page) {
        const perPage = 18;
        let totals;

        return fetch(`${API}${SLUG1}/portfolio?per_page=${perPage}&page=${page}`)
            .then(res => {
                 totals = res.headers.get('x-wp-totalpages');
                 return res.json();
                })
            .then(
                (result) => {
                    if(result.message) {
                        return {
                            success: false,
                            error: result.message
                        }
                    } else {
                        return {
                            success: true,
                            data: result,
                            totals
                        }
                    }
                },
                (error) => {
                    return {
                        success: false,
                        error
                    }
                }
            );
    },

    getPortfolioMeta (id) {
        return this.get(`${API}/acf/v3/portfolio/${id}`)
    },
 
    getPortfolioProject (project) {
        return this.get(`${API}${SLUG1}/portfolio?slug=${project}`).then(response=>response)
    },

    fetchProjectMedia (id) {
        return this.get(API_MEDIA + '?parent=' + id + '&per_page=100').then(result => result);
    }

};

export default Service