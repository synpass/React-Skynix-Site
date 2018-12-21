import fetch from 'isomorphic-fetch';
import axios  from 'axios';

const API           = 'https://staging.cms.skynix.co/wp-json';
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