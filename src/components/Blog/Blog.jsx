import PropTypes from 'prop-types'; // ES6

const Blog = ({ blog }) => {
    const { title, cover, author, author_img, posted_date, reading_time, hashtags } = blog;
    console.log(blog);
    return (
        <div className='mb-10 space-y-4'>
            <img src={cover} alt="" />
            <div className='flex justify-between'>
                <div className='flex gap-6'>
                    <img className='rounded-full w-14 h-14' src={author_img} alt="" />
                    <div>
                        <h3 className='text-2xl'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div className='space-x-1'>
                    <span>{reading_time}</span> Min read
                    <button className='text-red-600'><i class="fa-regular fa-bookmark"></i></button>
                    
                </div>
            </div>
            <h2 className='text-4xl'>{title}</h2>
            <p>
                {
                    hashtags.map((hash, idx) => <span key={idx}><a href="">{hash}</a></span>)
                }
            </p>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired
}
export default Blog;