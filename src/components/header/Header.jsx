import profile from '../../assets/images/profile.png'
const Header = () => {
    return (
        <div className='flex justify-between max-w-7xl mx-auto m-3'>
            <h2 className="font-bold text-3xl">Knowledge Cafe</h2>
            <img src={profile} alt="" />
        </div>
    );
};

export default Header;