import React, { Component } from 'react'
import Service from '../resources/service';
import Select from 'react-select';
import {array, string, oneOfType} from 'prop-types';

export default class PostFilters extends Component {

    state = {
        tags: [],
        categories: [],
        selectedTags: [],
        selectedCategories: [],
        totalPages: null
    }

    componentDidMount () {
        Service.getTags().then(tags => {
            this.setState({tags})
        })

        Service.getCategories().then(categories => {
            this.setState({categories})
        })
    }

    componentDidUpdate (prevProps, prevState) {
        if (this.state.tags && !prevState.tags.length && this.props.tags) {
            const tagOptions = this.state.tags.map(tag => ({
                value: tag.name,
                label: tag.name,
                id: tag.id
            }))
            const tagIds = this.props.tags.split(',')
            const defaultTags = tagIds.map(tag => {
                const option = tagOptions.find(item => item.id === +tag)
                if (option) return option
            }).filter(tag => !!tag)

            if (defaultTags.length) {
                this.setState({selectedTags: defaultTags})
            }
        }

        if (this.state.categories && !prevState.categories.length && this.props.categories) {
            const categoriesOptions = this.state.categories.map(category => ({
                value: category.name,
                label: category.name,
                id: category.id
            }))
            const categoriesIds = this.props.categories.split(',')
            const defaultCategories = categoriesIds.map(category => {
                const option = categoriesOptions.find(item => item.id === +category)
                if (option) return option
            }).filter(category => !!category)

            if (defaultCategories.length) {
                this.setState({selectedCategories: defaultCategories})
            }
        }        
    }

    handleChange = (selectedOptions, field) => {
        if (selectedOptions && selectedOptions.length) {
            this.setState({ [field]: selectedOptions })
        } else {
            this.setState({[field]: []})
        }

    }

    apply = async () => {
        const tags = this.state.selectedTags.map(tag => tag.id).join(',')
        const categories = this.state.selectedCategories.map(category => category.id).join(',')

        if (tags.length || categories.length) {
            const query = {}
            if (tags.length) query.tags = tags
            if (categories.length) query.categories = categories
        
            this.props.router.push({ pathname: "/resources", query })
            return
        }
        this.props.router.push('/resources')
    
    }

    render() {
        const {tags, categories, selectedTags, selectedCategories} = this.state

        const tagOptions = tags.map(tag => ({
            value: tag.name,
            label: tag.name,
            id: tag.id
        }))

        const categoriesOptions = categories.map(category => ({
            value: category.name,
            label: category.name,
            id: category.id
        }))

        return (
            <div className="post-filters">
                <div className="post-filters__select post-filters__select--top">
                    <Select 
                        className="postFilterSelect"
                        value={selectedTags}
                        onChange={ selected => this.handleChange(selected, 'selectedTags')}
                        options={tagOptions}
                        isMulti
                        placeholder="filter by tags"
                    />
                </div>
                <div className="post-filters__select">
                    <Select 
                        className="postFilterSelect"
                        value={selectedCategories}
                        onChange={ selected => this.handleChange(selected, 'selectedCategories')}
                        options={categoriesOptions}
                        isMulti
                        placeholder="filter by categories"
                    />
                </div>
                <button className="post-filters__apply" onClick={this.apply}>
                    apply filters
                </button>
            </div>
        )
    }
}

PostFilters.propTypes = {
    tags: oneOfType([array, string]),
    categories: oneOfType([array, string])
}
