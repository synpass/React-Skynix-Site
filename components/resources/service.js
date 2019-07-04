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
const postperpage = 6;

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

    postComment(data) {
        // create unique numer for id
        let integer = Date.now() + ( (Math.random()*100000).toFixed())
        
        axios.post(`${API}${SLUG1}/comments`, {
            id: integer,
            author_email: data.email,
            author_name: data.name,
            content: data.content,
            date: new Date(),
            post: 1397
        }).then(res => console.log(res))

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
    }
};

export default Service