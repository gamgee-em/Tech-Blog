const { Post } = require('../models');

const postData = [
    {
        post_title: 'My First Blog Post',
        post_content: "This is my very first blog post! The first of many you could say!"
    },
    {
        post_title: 'Conditions Update',
        post_content: 'Mt Haycock, Temp: 42deg, Humidity: 83%, Wind: 5mph NW'
    },
    {
        post_title: 'Bernadettes Birthday Hike',
        post_content: 'It\'s Bernadette\'s 4th birthday. In celebration we went for a hike in the Big Indian Wilderness. We reached Giants Ledge by sun up and had coffee overlooking the valley. With the whole day still ahead of us, we had a deep feeling of content and accomplishment.'
    },
];

const seedPosts = async () => {
    postData.forEach(post => {
        await Post.bulkCreate({
            ...post,
            user_id: users[Math.floor(math.random() * users.length)].id,
        });
    });
}

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;