import fetch from 'isomorphic-fetch';

const API = 'https://staging.cms.skynix.co/wp-json/wp/v2';
const API_POSTS = API + '/posts';
const API_USERS = API + '/users';
const API_MEDIA = API + '/media';

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

        return fetch(API_POSTS + '?page=' + page)
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
    }
};

export default Service