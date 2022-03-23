import React, { useEffect, useState } from 'react'

import Post from '../Post/Post'
import Body from '../Body/Body'

import NewsService from '../../API/NewsService'

import { useFetching } from '../../hooks/useFetching'

import axios from 'axios'

const PostsGrid = ({ width }) => {

    // const [posts, setPosts] = useState([
    //     { id: Date.now() - 500, tags: ['tag1'], title: 'Wow', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non felis sed metus volutpat feugiat accumsan at tortor. Nunc sed magna id sapien ultrices imperdiet eget sit amet urna. Donec et feugiat metus. Aliquam ac ex id nibh fermentum imperdiet vel in lacus. Integer vitae odio pharetra, suscipit eros at, venenatis leo. Donec laoreet diam vel tincidunt dapibus. Aenean vel cursus est. Pellentesque ac consequat sapien. Nulla facilisi. Vestibulum sit amet quam ut ex sollicitudin vestibulum. Nulla imperdiet odio posuere nulla tincidunt, accumsan scelerisque magna congue. Etiam molestie tincidunt orci, at feugiat odio elementum vel. Integer cursus urna in orci rhoncus efficitur quis id metus. Fusce aliquam magna sed nunc posuere pretium. Nulla pellentesque ut tellus eu ullamcorper. Nullam nec leo a dui imperdiet tincidunt' },
    //     { id: Date.now() - 300, tags: ['tag2'], title: 'Title', body: 'Proin et vehicula urna. Sed tellus lectus, eleifend sit amet purus in, pellentesque tempus eros. Phasellus odio augue, ultricies et hendrerit a, auctor et ligula. Nullam dui est, tincidunt ut nibh id, finibus hendrerit turpis. Ut ut magna ligula. Phasellus eros justo, rutrum ac viverra vel, lacinia et quam. Nulla facilisi. Aenean a libero sed nulla sollicitudin semper placerat et elit. Nunc quis felis mattis, rutrum mi nec, faucibus felis. Maecenas porttitor ultrices lacus, quis euismod lacus ullamcorper at. Maecenas euismod leo orci, sed vestibulum metus porta vitae.' },
    //     { id: Date.now() - 100, tags: ['tag1', 'tag2'], title: '1234', body: 'Etiam eget metus dui. In ultrices et eros eget ornare. Vivamus elit urna, fermentum nec aliquet ac, mollis id urna. Nullam tempor maximus orci in rhoncus. Cras non risus vitae orci pretium vestibulum eu eu turpis. Morbi blandit aliquet dolor, sit amet commodo augue. Aliquam iaculis tellus id tellus fringilla pulvinar. Phasellus vestibulum lorem vel lacus malesuada luctus. Etiam dui risus, euismod fringilla justo ut, imperdiet varius diam. Etiam leo elit, pulvinar non tellus ac, bibendum vulputate sem. Aliquam bibendum elementum tortor in lacinia. Cras erat nisl, lacinia et ultrices eget, tempus vitae eros. Proin sodales euismod finibus.' },
    //     { id: Date.now() + 0, tags: ['tag1'], title: 'fsad', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non felis sed metus volutpat feugiat accumsan at tortor. Nunc sed magna id sapien ultrices imperdiet eget sit amet urna. Donec et feugiat metus. Aliquam ac ex id nibh fermentum imperdiet vel in lacus. Integer vitae odio pharetra, suscipit eros at, venenatis leo. Donec laoreet diam vel tincidunt dapibus. Aenean vel cursus est. Pellentesque ac consequat sapien. Nulla facilisi. Vestibulum sit amet quam ut ex sollicitudin vestibulum. Nulla imperdiet odio posuere nulla tincidunt, accumsan scelerisque magna congue. Etiam molestie tincidunt orci, at feugiat odio elementum vel. Integer cursus urna in orci rhoncus efficitur quis id metus. Fusce aliquam magna sed nunc posuere pretium. Nulla pellentesque ut tellus eu ullamcorper. Nullam nec leo a dui imperdiet tincidunt' },
    //     { id: Date.now() + 100, tags: ['tag3'], title: 'hrthy', body: 'Proin et vehicula urna. Sed tellus lectus, eleifend sit amet purus in, pellentesque tempus eros. Phasellus odio augue, ultricies et hendrerit a, auctor et ligula. Nullam dui est, tincidunt ut nibh id, finibus hendrerit turpis. Ut ut magna ligula. Phasellus eros justo, rutrum ac viverra vel, lacinia et quam. Nulla facilisi. Aenean a libero sed nulla sollicitudin semper placerat et elit. Nunc quis felis mattis, rutrum mi nec, faucibus felis. Maecenas porttitor ultrices lacus, quis euismod lacus ullamcorper at. Maecenas euismod leo orci, sed vestibulum metus porta vitae.' },
    //     { id: Date.now() + 200, tags: ['tag1', 'tag2', 'tag3'], title: '24f', body: 'Etiam eget metus dui. In ultrices et eros eget ornare. Vivamus elit urna, fermentum nec aliquet ac, mollis id urna. Nullam tempor maximus orci in rhoncus. Cras non risus vitae orci pretium vestibulum eu eu turpis. Morbi blandit aliquet dolor, sit amet commodo augue. Aliquam iaculis tellus id tellus fringilla pulvinar. Phasellus vestibulum lorem vel lacus malesuada luctus. Etiam dui risus, euismod fringilla justo ut, imperdiet varius diam. Etiam leo elit, pulvinar non tellus ac, bibendum vulputate sem. Aliquam bibendum elementum tortor in lacinia. Cras erat nisl, lacinia et ultrices eget, tempus vitae eros. Proin sodales euismod finibus.' },
    //     { id: Date.now() + 300, tags: ['tag1'], title: 'fweyu', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non felis sed metus volutpat feugiat accumsan at tortor. Nunc sed magna id sapien ultrices imperdiet eget sit amet urna. Donec et feugiat metus. Aliquam ac ex id nibh fermentum imperdiet vel in lacus. Integer vitae odio pharetra, suscipit eros at, venenatis leo. Donec laoreet diam vel tincidunt dapibus. Aenean vel cursus est. Pellentesque ac consequat sapien. Nulla facilisi. Vestibulum sit amet quam ut ex sollicitudin vestibulum. Nulla imperdiet odio posuere nulla tincidunt, accumsan scelerisque magna congue. Etiam molestie tincidunt orci, at feugiat odio elementum vel. Integer cursus urna in orci rhoncus efficitur quis id metus. Fusce aliquam magna sed nunc posuere pretium. Nulla pellentesque ut tellus eu ullamcorper. Nullam nec leo a dui imperdiet tincidunt' },
    //     { id: Date.now() + 400, tags: ['tag1'], title: '246542563y', body: 'Proin et vehicula urna. Sed tellus lectus, eleifend sit amet purus in, pellentesque tempus eros. Phasellus odio augue, ultricies et hendrerit a, auctor et ligula. Nullam dui est, tincidunt ut nibh id, finibus hendrerit turpis. Ut ut magna ligula. Phasellus eros justo, rutrum ac viverra vel, lacinia et quam. Nulla facilisi. Aenean a libero sed nulla sollicitudin semper placerat et elit. Nunc quis felis mattis, rutrum mi nec, faucibus felis. Maecenas porttitor ultrices lacus, quis euismod lacus ullamcorper at. Maecenas euismod leo orci, sed vestibulum metus porta vitae.' },
    //     { id: Date.now() + 500, tags: ['tag1'], title: 'werg546uuweryer6uetu', body: 'Etiam eget metus dui. In ultrices et eros eget ornare. Vivamus elit urna, fermentum nec aliquet ac, mollis id urna. Nullam tempor maximus orci in rhoncus. Cras non risus vitae orci pretium vestibulum eu eu turpis. Morbi blandit aliquet dolor, sit amet commodo augue. Aliquam iaculis tellus id tellus fringilla pulvinar. Phasellus vestibulum lorem vel lacus malesuada luctus. Etiam dui risus, euismod fringilla justo ut, imperdiet varius diam. Etiam leo elit, pulvinar non tellus ac, bibendum vulputate sem. Aliquam bibendum elementum tortor in lacinia. Cras erat nisl, lacinia et ultrices eget, tempus vitae eros. Proin sodales euismod finibus.' }
    // ])

    const [posts, setPosts] = useState([])
    const [fetchNews, isNewsLoading, newsError] = useFetching(async () => {
        const news = await NewsService.getAllNews()
        setPosts(news)
    })

    useEffect(() => {
        fetchNews();
    }, [])

    return (
        <Body width={width}>
            {newsError && 
                <h1>АААА ${newsError} АААА</h1>
            }
            {isNewsLoading
                ? <h1>АААА ИДЕТ ЗАГРУЗКА НОВОСТЕЙ АААА</h1>
                : posts.map(post =>
                    <Post postData={post} key={post.id} />
                )
            }
        </Body>
    )
}

export default PostsGrid